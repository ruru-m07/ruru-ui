import {
  cancel,
  confirm,
  group,
  intro,
  note,
  outro,
  text,
} from "@clack/prompts";
import { existsSync, promises as fs } from "fs";
import * as templates from "../utils/templates";
import pc from "picocolors";
import {
  getProjectConfig,
  isTypeScriptProject,
  preFlight,
} from "@/utils/get-project-info";
import {
  Config,
  getConfig,
  rawConfigSchema,
  resolveConfigPaths,
} from "@/utils/get-config";
import { getPackageManager } from "@/utils/get-package-manager";
import path from "path";
import { execa } from "execa";
import template from "lodash.template";
import ora from "ora";
import { applyPrefixesCss } from "@/utils/transformers/transform-tw-prefix";
import * as z from "zod";
import { Command } from "commander";
import {
  fetchInterfaceTree,
  fetchTree,
  getInterfaceRegistryIndex,
  getItemTargetPath,
  getProviderRegistryIndex,
  getRegistryBaseColor,
  resolveInterfaceTree,
  resolveTree,
} from "@/utils/registry";
import { transform } from "@/utils/transformers";

const PROJECT_DEPENDENCIES = [
  "tailwindcss-animate",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
  "framer-motion",
  "next-themes",
];

const initOptionsSchema = z.object({
  defaults: z.boolean().default(false),
  autodetect: z.boolean().default(false),
  yes: z.boolean(),
  cwd: z.string(),
});

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-d, --defaults", "use default configuration.", false)
  .option("-a, --autodetect ", "autodetect  configuration by framework.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd(),
  )
  .action(async (opts) => {
    console.log("\n");
    intro(pc.white(pc.bold(" 🚀  Welcome to the installation wizard! ")));

    const options = initOptionsSchema.parse(opts);
    const cwd = options.cwd;

    preFlight(cwd);

    const projectConfig = await getProjectConfig(cwd);

    if (options.autodetect && projectConfig) {
      console.log(pc.green(pc.bold("\n config found! \n ")));

      const config = await promptForMinimalConfig(
        cwd,
        projectConfig,
        options.defaults,
      );
      await runInit(cwd, config);
    } else {
      // Read config.
      const existingConfig = await getConfig(cwd);

      const config = await promptForConfig(
        cwd,
        existingConfig,
        options.defaults,
      );
      await runInit(cwd, config);
    }

    const nextSteps = `npx ruru-ui-cli add button             `;

    note(nextSteps, "Next steps.");

    outro(
      `Problems? ${pc.underline(pc.cyan("https://github.com/ruru-m07/ruru-ui/issues"))}`,
    );

    process.exit(0);
  });

/**
 * ! Prompt for minimal configuration.
 */

export async function runInit(cwd: string, config: Config) {
  const spinner = ora(`Initializing project...`)?.start();

  const registryIndex = await getProviderRegistryIndex();

  const tree = await resolveTree(registryIndex, ["index", "theme"]);
  const payload = await fetchTree(tree);
  const baseColor = await getRegistryBaseColor();

  // Ensure all resolved paths directories exist.
  for (const [key, resolvedPath] of Object.entries(config.resolvedPaths)) {
    // Determine if the path is a file or directory.
    // TODO: is there a better way to do this?
    let dirname = path.extname(resolvedPath)
      ? path.dirname(resolvedPath)
      : resolvedPath;

    // If the utils alias is set to something like "@/lib/utils",
    // assume this is a file and remove the "utils" file name.
    // TODO: In future releases we should add support for individual utils.
    if (key === "utils" && resolvedPath.endsWith("/utils")) {
      // Remove /utils at the end.
      dirname = dirname.replace(/\/utils$/, "");
    }

    if (!existsSync(dirname)) {
      await fs.mkdir(dirname, { recursive: true });
    }
  }

  const extension = config.tsx ? "ts" : "js";

  const tailwindConfigExtension = path.extname(
    config.resolvedPaths.tailwindConfig,
  );

  let tailwindConfigTemplate: string;
  if (tailwindConfigExtension === ".ts") {
    tailwindConfigTemplate = config.tailwind.cssVariables
      ? templates.TAILWIND_CONFIG_TS_WITH_VARIABLES
      : templates.TAILWIND_CONFIG_TS;
  } else {
    tailwindConfigTemplate = config.tailwind.cssVariables
      ? templates.TAILWIND_CONFIG_WITH_VARIABLES
      : templates.TAILWIND_CONFIG;
  }

  // Write tailwind config.
  await fs.writeFile(
    config.resolvedPaths.tailwindConfig,
    template(tailwindConfigTemplate)({
      extension,
      prefix: config.tailwind.prefix,
    }),
    "utf8",
  );

  // Write css file.
  // const baseColor = await getRegistryBaseColor(config.tailwind.);
  // if (baseColor) {
  await fs.writeFile(
    config.resolvedPaths.tailwindCss,
    config.tailwind.cssVariables
      ? config.tailwind.prefix
        ? applyPrefixesCss(templates.GLOBLES_CSS_FILES, config.tailwind.prefix)
        : templates.GLOBLES_CSS_FILES
      : templates.GLOBLES_CSS_FILES,
    "utf8",
  );
  // }

  // Write cn file.
  await fs.writeFile(
    `${config.resolvedPaths.utils}.${extension}`,
    extension === "ts" ? templates.UTILS : templates.UTILS_JS,
    "utf8",
  );

  // write provider file. and theme file in  config.resolvedPaths.provider

  const providerSpinner = ora(`Writing provider file...`)?.start();

  for (const item of payload) {
    spinner.text = `Installing ${item.name}...`;
    const targetDir = await getItemTargetPath(
      config,
      item,
      cwd ? path.resolve(cwd, cwd) : undefined,
    );

    if (!targetDir) {
      continue;
    }

    if (!existsSync(targetDir)) {
      await fs.mkdir(targetDir, { recursive: true });
    }

    for (const file of item.files) {
      let filePath = path.resolve(
        targetDir,
        config.resolvedPaths.provider,
        file.name,
      );

      // Run transformers.
      const content = await transform({
        filename: file.name,
        raw: file.content,
        config,
        baseColor,
      });

      if (!config.tsx) {
        filePath = filePath.replace(/\.tsx$/, ".jsx");
        filePath = filePath.replace(/\.ts$/, ".js");
      }

      await fs.writeFile(filePath, content);
    }
  }

  providerSpinner?.succeed();

  // write interface files if user use TS
  // all TS files are on /registry/interface/index.json => [ "RuruContextType.ts", "RuruProviderProps.ts", "RuruThemeProviderProps.ts"]

  // TODO: write interface files

  if (config.tsx) {
    // first get all interface files name
    const interfaceRegistryIndex = await getInterfaceRegistryIndex();
    const interfaceTree = await resolveInterfaceTree(interfaceRegistryIndex);
    const interfacePayload = await fetchInterfaceTree(interfaceTree);

    const interfaceSpinner = ora(`Writing interface files...`)?.start();

    for (const item of interfacePayload) {
      spinner.text = `Installing ${item.name}...`;
      const targetDir = config.resolvedPaths.interfaces;

      if (!targetDir) {
        continue;
      }

      if (!existsSync(targetDir)) {
        await fs.mkdir(targetDir, { recursive: true });
      }

      // Determine the file path and force it to have a .ts extension
      let filePath = path.resolve(targetDir, item.name);
      filePath = `${filePath}.ts`; // Append .ts extension

      // Run transformers.
      const content = await transform({
        filename: item.name,
        raw: item.content,
        config,
        baseColor,
      });

      // Save the file with the .ts extension
      await fs.writeFile(filePath, content);
    }

    interfaceSpinner?.succeed();
  }

  spinner?.succeed();

  // Install dependencies.
  const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
  const packageManager = await getPackageManager(cwd);

  const deps = [...PROJECT_DEPENDENCIES, "@radix-ui/react-icons"];

  await execa(
    packageManager,
    [packageManager === "npm" ? "install" : "add", ...deps],
    {
      cwd,
    },
  );
  dependenciesSpinner?.succeed();
}

export async function promptForConfig(
  cwd: string,
  defaultConfig: Config | null = null,
  skip = false,
) {
  if (defaultConfig) {
    null;
  }

  const isTsx = await isTypeScriptProject(cwd);

  const options = await group(
    {
      typescript: () =>
        confirm({
          message: `Would you like to use ${pc.bold("TypeScript")} (recommended)?`,
          initialValue: true,
        }),
      tailwindCss: () =>
        text({
          message: `Where is your ${pc.bold("global CSS")} file?`,
          placeholder: "./app/globals.css",
          initialValue: "./app/globals.css",
          validate: (value) => {
            if (!value) return "Please enter a path.";
            if (value[0] !== ".") return "Please enter a relative path.";
          },
        }),
      tailwindConfig: () =>
        text({
          message: `Where is your ${pc.bold("tailwind.config.js")} located?`,
          initialValue: isTsx ? "./tailwind.config.ts" : "./tailwind.config.js",
          validate: (value) => {
            if (!value) return "Please enter a path.";
            if (value[0] !== ".") return "Please enter a relative path.";
          },
        }),
      tailwindCssVariables: () =>
        confirm({
          message: `Would you like to use ${pc.bold("CSS variables")} for colors?`,
          initialValue: true,
        }),
      tailwindPrefix: () =>
        text({
          message: `Are you using a custom ${pc.bold("tailwind prefix eg. tw-")}? (Leave blank if not)`,
          initialValue: "",
          defaultValue: "",
          placeholder: "(Leave blank if not)",
        }),
      components: () =>
        text({
          message: `Configure the import alias for ${pc.bold("components")}:`,
          placeholder: "@/components/ui",
          initialValue: "@/components/ui",
        }),
      utils: () =>
        text({
          message: `Configure the import alias for ${pc.bold("utils")}:`,
          placeholder: "@/lib/utils",
          initialValue: "@/lib/utils",
        }),
      provider: () =>
        text({
          message: `Configure the import alias for ${pc.bold("provider")}:`,
          placeholder: "@/provider",
          initialValue: "@/provider",
        }),
      interfaces: () =>
        text({
          message: `Configure the import alias for ${pc.bold("interfaces")}:`,
          placeholder: "@/interfaces",
          initialValue: "@/interfaces",
        }),
      rsc: () =>
        confirm({
          message: `Would you like to use ${pc.bold("RSC")} ?`,
          initialValue: true,
        }),
    },
    {
      onCancel: () => {
        cancel("Installation Stopped.");
        process.exit(0);
      },
    },
  );

  const config = rawConfigSchema.parse({
    $schema: "https://ruru-ui.vercel.app/schema.json",
    tailwind: {
      config: options.tailwindConfig,
      css: options.tailwindCss,
      cssVariables: options.tailwindCssVariables,
      prefix: options.tailwindPrefix,
    },
    rsc: options.rsc,
    tsx: options.typescript,
    aliases: {
      components: options.components,
      utils: options.utils,
      ui: options.components,
      provider: options.provider,
      interfaces: options.interfaces,
    },
  });

  if (!skip) {
    const proceed = confirm({
      message: `Write configuration to ${pc.bold("ruru.json")}. Proceed??`,
      initialValue: true,
    });

    if (!proceed) {
      process.exit(0);
    }
  }

  // Write to file.

  const spinner = ora(`Writing ruru.json...`)?.start();
  const targetPath = path.resolve(cwd, "ruru.json");
  await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  spinner.succeed();

  return await resolveConfigPaths(cwd, config);
}

export async function promptForMinimalConfig(
  cwd: string,
  defaultConfig: Config,
  defaults = false,
) {
  let cssVariables = defaultConfig.tailwind.cssVariables;

  if (!defaults) {
    const options = await group({
      tailwindCssVariables: () =>
        confirm({
          message: `Would you like to use ${pc.bold("CSS variables")} for colors?`,
          initialValue: true,
        }),
    });

    cssVariables = options.tailwindCssVariables;
  }

  const config = rawConfigSchema.parse({
    tailwind: {
      ...defaultConfig?.tailwind,
      cssVariables,
    },
    rsc: defaultConfig?.rsc,
    tsx: defaultConfig?.tsx,
    aliases: defaultConfig?.aliases,
  });

  // Write to file.
  const spinner = ora(`Writing ruru.json...`).start();
  const targetPath = path.resolve(cwd, "ruru.json");
  await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  spinner.succeed();

  return await resolveConfigPaths(cwd, config);
}
