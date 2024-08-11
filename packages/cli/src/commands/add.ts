import path from "path";
import * as z from "zod";
import pc from "picocolors";
import { getConfig } from "@/utils/get-config";
import {
  fetchTree,
  getItemTargetPath,
  getRegistryBaseColor,
  getRegistryIndex,
  resolveTree,
} from "@/utils/registry";
import { execa } from "execa";
import { getPackageManager } from "@/utils/get-package-manager";
import { existsSync, promises as fs } from "fs";
import { transform } from "@/utils/transformers";
import { confirm, group, multiselect } from "@clack/prompts";
import ora from "ora";

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean(),
  path: z.string().optional(),
});

export async function add() {
  const lenth = process.argv.length;

  const flags = process.argv
    .slice(3, lenth)
    .filter((arg) => arg.startsWith("-"));
  const components = process.argv
    .slice(3, lenth)
    .filter((arg) => !arg.startsWith("-"));

  if (flags.includes("-h")) {
    console.log("Help");
    return;
  }

  const opts = {
    yes: flags.includes("-y"),
    overwrite: flags.includes("-o"),
    all: flags.includes("-a"),
    cwd: process.cwd(),
  };

  try {
    const options = addOptionsSchema.parse({
      components,
      ...opts,
    });

    const cwd = path.resolve(options.cwd);

    if (!existsSync(cwd)) {
      pc.red(pc.bold(`The path ${cwd} does not exist. Please try again.`));
      process.exit(1);
    }

    const config = await getConfig(cwd);

    if (!config) {
      pc.white(
        `Configuration is missing. Please run ${pc.green(`init`)} to create a components.json file.`,
      );
      process.exit(1);
    }

    const registryIndex = await getRegistryIndex();

    let selectedComponents = options.all
      ? registryIndex.map((entry) => entry.name)
      : options.components;
    if (!options.components?.length && !options.all) {
      // const { components } = await prompts({
      //   type: "multiselect",
      //   name: "components",
      //   message: "Which components would you like to add?",
      //   hint: "Space to select. A to toggle all. Enter to submit.",
      //   instructions: false,
      //   choices: registryIndex.map((entry) => ({
      //     title: entry.name,
      //     value: entry.name,
      //     selected: options.all
      //       ? true
      //       : options.components?.includes(entry.name),
      //   })),
      // });

      const { components } = await group({
        components: () =>
          multiselect({
            message: "Which components would you like to add?",
            options: registryIndex.map((entry) => ({
              value: entry.name,
              label: entry.name,
              selected: options.all
                ? true
                : options.components?.includes(entry.name),
            })),
          }),
      });

      selectedComponents = components as string[];
    }

    if (!selectedComponents?.length) {
      pc.yellow(`No components selected. Exiting.`);
      process.exit(0);
    }

    const tree = await resolveTree(registryIndex, selectedComponents);
    const payload = await fetchTree(tree);
    const baseColor = await getRegistryBaseColor();

    if (!payload.length) {
      pc.yellow(`Selected components not found. Exiting.`);
      process.exit(0);
    }

    if (!options.yes) {
      // const { proceed } = await prompts({
      //   type: "confirm",
      //   name: "proceed",
      //   message: `Ready to install components and dependencies. Proceed?`,
      //   initial: true,
      // });

      const { proceed } = await group({
        proceed: () =>
          confirm({
            message: `Ready to install components and dependencies. Proceed?`,
            initialValue: true,
          }),
      });

      if (!proceed) {
        process.exit(0);
      }
    }

    const spinner = ora(`Installing components...`).start();
    for (const item of payload) {
      spinner.text = `Installing ${item.name}...`;
      const targetDir = await getItemTargetPath(
        config,
        item,
        options.path ? path.resolve(cwd, options.path) : undefined,
      );

      if (!targetDir) {
        continue;
      }

      if (!existsSync(targetDir)) {
        await fs.mkdir(targetDir, { recursive: true });
      }

      const existingComponent = item.files.filter((file) => {
        existsSync(path.resolve(targetDir, file.name));
      });

      if (existingComponent.length && !options.overwrite) {
        if (selectedComponents.includes(item.name)) {
          spinner.stop();

          const { overwrite } = await group({
            overwrite: () =>
              confirm({
                message: `Component ${item.name} already exists. Would you like to overwrite?`,
                initialValue: false,
              }),
          });

          if (!overwrite) {
            pc.blue(
              `Skipped ${item.name}. To overwrite, run with the -o flag.`,
            );
            continue;
          }

          spinner.start(`Installing ${item.name}...`);
        } else {
          continue;
        }
      }

      for (const file of item.files) {
        let filePath = path.resolve(targetDir, file.name);

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

      const packageManager = await getPackageManager(cwd);

      // Install dependencies.
      if (item.dependencies?.length) {
        await execa(
          packageManager,
          [packageManager === "npm" ? "install" : "add", ...item.dependencies],
          {
            cwd,
          },
        );
      }

      // Install devDependencies.
      if (item.devDependencies?.length) {
        await execa(
          packageManager,
          [
            packageManager === "npm" ? "install" : "add",
            "-D",
            ...item.devDependencies,
          ],
          {
            cwd,
          },
        );
      }

      // Handle subcategories (e.g., spinner)
      if (item.subcategory?.length) {
        const subcategoryComponents = item.subcategory;

        const subcategoryTree = await resolveTree(
          registryIndex,
          subcategoryComponents,
        );
        const subcategoryPayload = await fetchTree(subcategoryTree);

        for (const subitem of subcategoryPayload) {
          spinner.text = `Installing subcategory component ${subitem.name}...`;
          const subTargetDir = await getItemTargetPath(
            config,
            subitem,
            options.path ? path.resolve(cwd, options.path) : undefined,
          );

          if (!subTargetDir) {
            continue;
          }

          if (!existsSync(subTargetDir)) {
            await fs.mkdir(subTargetDir, { recursive: true });
          }

          for (const file of subitem.files) {
            let subFilePath = path.resolve(subTargetDir, file.name);

            // Run transformers.
            const subContent = await transform({
              filename: file.name,
              raw: file.content,
              config,
              baseColor,
            });

            if (!config.tsx) {
              subFilePath = subFilePath.replace(/\.tsx$/, ".jsx");
              subFilePath = subFilePath.replace(/\.ts$/, ".js");
            }

            await fs.writeFile(subFilePath, subContent);
          }

          // Install dependencies for subcategory.
          if (subitem.dependencies?.length) {
            await execa(
              packageManager,
              [
                packageManager === "npm" ? "install" : "add",
                ...subitem.dependencies,
              ],
              {
                cwd,
              },
            );
          }

          // Install devDependencies for subcategory.
          if (subitem.devDependencies?.length) {
            await execa(
              packageManager,
              [
                packageManager === "npm" ? "install" : "add",
                "-D",
                ...subitem.devDependencies,
              ],
              {
                cwd,
              },
            );
          }
        }
      }
    }

    spinner.succeed(`Done.`);
  } catch (error) {
    console.log(error);
  }
}
