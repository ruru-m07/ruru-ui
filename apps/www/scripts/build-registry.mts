// @sts-nocheck
import { existsSync, promises as fs, readFileSync, statSync } from "fs";
import path, { basename } from "path";
import { rimraf } from "rimraf";

import { registry } from "../registry/registry";
import {
  Registry,
  registryEntrySchema,
  registrySchema,
} from "../registry/schema";
import { blocks } from "../registry/blocks";
import { z } from "zod";

const REGISTRY_PATH = path.join(process.cwd(), "public/registry");

async function buildRegistry(registry: Registry) {
  console.log("⚒️ Building registry...");

  // ----------------------------------------------------------------------------
  // Build registry/index.json.
  // ----------------------------------------------------------------------------
  console.log("Building registry/index.json...");

  const names = registry.filter((item) => item.type === "components:ui");
  const registryJson = JSON.stringify(names, null, 2);
  rimraf.sync(path.join(REGISTRY_PATH, "index.json"));
  await fs.writeFile(
    path.join(REGISTRY_PATH, "index.json"),
    registryJson,
    "utf8",
  );

  console.log("✅ registry/index.json built!");

  // ----------------------------------------------------------------------------
  // Build registry/providers/index.json.
  // ----------------------------------------------------------------------------
  console.log("Building registry/providers/index.json...");

  const providersNames = registry.filter(
    (item) => item.type === "components:component",
  );
  const providersRregistryJson = JSON.stringify(providersNames, null, 2);
  rimraf.sync(path.join(REGISTRY_PATH, "providers", "index.json"));
  await fs.writeFile(
    path.join(REGISTRY_PATH, "providers", "index.json"),
    providersRregistryJson,
    "utf8",
  );

  console.log("✅ registry/providers/index.json built!");

  console.log("✅ Registry built!");
}

// ----------------------------------------------------------------------------
// Build registry/styles/[style]/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  console.log("\n⚒️  Building styles...");

  const targetPath = path.join(REGISTRY_PATH);

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  // Create directory if it doesn't exist.
  for (const item of registry) {
    console.log(` |- Building style for ${item.name}`);

    if (item.type === "components:component") {
      const files = item.files?.map((file) => {
        console.log(`   |- Processing file ${file}`);

        let content = readFileSync(
          path.join("../../packages/ui/src/provider", file),
          "utf8",
        );

        // Remove single-line comments, excluding URLs
        content = content.replace(/(^|[^:])\/\/.*$/gm, "$1");

        // Remove multi-line comments
        content = content.replace(/\/\*[\s\S]*?\*\//gm, "");

        // Remove lines that are completely empty (after removing comments)
        // content = content.replace(/^\s*\n/gm, "");

        return {
          name: basename(file),
          content,
        };
      });

      const payload = {
        ...item,
        files,
      };

      await fs.writeFile(
        path.join(targetPath, "providers", "components", `${item.name}.json`),
        JSON.stringify(payload, null, 2),
        "utf8",
      );

      console.log(`   ✅ Style for ${item.name} built!`);
      continue;
    }

    const files = item.files?.map((file) => {
      console.log(`   |- Processing file ${file}`);

      let content = readFileSync(
        path.join("../../packages/ui/src/components", file),
        "utf8",
      );

      // Remove single-line comments, excluding URLs
      content = content.replace(/(^|[^:])\/\/.*$/gm, "$1");

      // Remove multi-line comments
      content = content.replace(/\/\*[\s\S]*?\*\//gm, "");

      // Remove lines that are completely empty (after removing comments)
      // content = content.replace(/^\s*\n/gm, "");

      return {
        name: basename(file),
        content,
      };
    });

    const payload = {
      ...item,
      files,
    };

    await fs.writeFile(
      path.join(targetPath, "components", `${item.name}.json`),
      JSON.stringify(payload, null, 2),
      "utf8",
    );

    console.log(`   ✅ Style for ${item.name} built!`);
  }

  console.log("✅ Styles built!");
}

// ----------------------------------------------------------------------------
// Build registry/interface/[name].json.
// ----------------------------------------------------------------------------
async function buildinterfaceRegistry() {
  console.log("\n⚒️  Building interface registry...");

  const targetPath = path.join(REGISTRY_PATH, "interface");

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  const files = await fs.readdir("../../packages/ui/src/interfaces");

  // ---------------------------------------------------------------------
  // Build registry/interface/index.json.
  // ---------------------------------------------------------------------

  // Store data like [{ name: interfacefilename }].
  const names = files.map((file) => ({ name: file.replace(".ts", "") }));

  await fs.writeFile(
    path.join(REGISTRY_PATH, "interface", "index.json"),
    JSON.stringify(names, null, 2),
    "utf8",
  );

  console.log("✅ registry/interface/index.json built!");

  // ---------------------------------------------------------------------
  // Build registry/interface/[name].json.
  // ---------------------------------------------------------------------

  for (const file of files) {
    console.log(` |- Building interface for ${file}`);

    let content = readFileSync(
      path.join("../../packages/ui/src/interfaces", file),
      "utf8",
    );

    // Remove single-line comments, excluding URLs
    content = content.replace(/(^|[^:])\/\/.*$/gm, "$1");

    // Remove multi-line comments
    content = content.replace(/\/\*[\s\S]*?\*\//gm, "");

    // Remove lines that are completely empty (after removing comments)
    // content = content.replace(/^\s*\n/gm, "");

    await fs.writeFile(
      path.join(targetPath, `${file.replace(".ts", "")}.json`),
      JSON.stringify({ name: file.replace(".ts", ""), content }, null, 2),
      "utf8",
    );

    console.log(`   ✅ Interface for ${file} built!`);
  }

  console.log("✅ Interface registry built!");
}

// ----------------------------------------------------------------------------
// Build registry/blocks/[name].json.
// ----------------------------------------------------------------------------
async function buildBlocksRegistry() {
  console.log("\n⚒️  Building blocks registry...");

  const targetPath = path.join(REGISTRY_PATH, "blocks");

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  // ----------------------------------------------------------------------------
  // Build registry/blocks/index.json.
  // ----------------------------------------------------------------------------

  // Store data like [{ name: blockfilename }]

  const names = blocks.filter((item) => item.type === "block:component");

  await fs.writeFile(
    path.join(REGISTRY_PATH, "blocks", "index.json"),
    JSON.stringify(names, null, 2),
    "utf8",
  );

  // ----------------------------------------------------------------------------
  // Build registry/blocks/[name].json.
  // ----------------------------------------------------------------------------

  for (const item of blocks) {
    const files = item.files?.map((file) => {
      console.log(`   |- Processing file ${file}`);

      let content = readFileSync(path.join("components/blocks", file), "utf8");

      // todo: will do something like ignore spasicl commnts.
      // Remove single-line comments, excluding URLs
      // content = content.replace(/(^|[^:])\/\/.*$/gm, "$1");

      // Remove multi-line comments
      // content = content.replace(/\/\*[\s\S]*?\*\//gm, "");

      // Remove lines that are completely empty (after removing comments)
      // content = content.replace(/^\s*\n/gm, "");

      return {
        name: basename(file),
        content,
      };
    });

    const payload = {
      ...item,
      files,
    };

    await fs.writeFile(
      path.join(targetPath, `${item.name}.json`),
      JSON.stringify(payload, null, 2),
      "utf8",
    );

    console.log(`   ✅ Block ${item.name} built!`);
  }

  console.log("✅ Blocks registry built!");
}

// ----------------------------------------------------------------------------
// Build: __registry__/index.ts.
// ----------------------------------------------------------------------------
// * THIS SHOUD BE A TS FILE AND EXPORTING A ARRAY OF OBJECTS.
async function buildRegistryIndex() {
  console.log("\n⚒️  Building index...");

  const BLOCK_REGISTRY_PATH = path.join(process.cwd(), "__registry__");
  // create a file in __registry__ folder on ../ path if not exist

  if (!existsSync(path.join(BLOCK_REGISTRY_PATH, "blocks/index.ts"))) {
    await fs.writeFile(
      path.join(BLOCK_REGISTRY_PATH, "blocks/index.ts"),
      "export const blocks_registry = []",
      "utf8",
    );
  }

  let index = `// ! THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY IT MANUALLY.\n
  import { Blocks_registry } from "@/registry/blocks";\n
  `;

  const files = blocks.filter((item) => item.type === "block:component");

  // importing file.default_export as jsx component

  let imports = "";

  for (const file of files) {
    if (file.name === "index.ts") {
      continue;
    }

    imports += `import ${file.default_export} from "@/components/blocks/${file.name}";
    `;
  }

  index += imports;

  index += `\nexport const blocks_registry: Blocks_registry[] = [`;

  // loop through all files and read the content of that file and add it to index file.
  for (const file of files) {
    if (file.name === "index.ts") {
      continue;
    }

    const files = file.files?.map((file) => {
      console.log(`   |- Processing file ${file}`);

      let content = readFileSync(path.join("components/blocks", file), "utf8");

      // todo: will do something like ignore spasicl commnts.
      // Remove single-line comments, excluding URLs
      // content = content.replace(/(^|[^:])\/\/.*$/gm, "$1");

      // Remove multi-line comments
      // content = content.replace(/\/\*[\s\S]*?\*\//gm, "");

      // Remove lines that are completely empty (after removing comments)
      // content = content.replace(/^\s*\n/gm, "");

      return content;
    });

    // todo: for the single file
    // const content = JSON.parse(
    //   readFileSync(path.join(BLOCK_REGISTRY_PATH, "blocks", file.files), "utf8")
    // );

    index += `{
      name: "${file.name}",
      files: ${JSON.stringify(file.files)},
      dependencies: ${JSON.stringify(file.dependencies)},
      components: ${JSON.stringify(file.components)},
      type: "${file.type}",
      content: ${JSON.stringify(files)},
      default_export: ${file.default_export},
    },`;
  }

  index += `]`;

  await fs.writeFile(
    path.join(BLOCK_REGISTRY_PATH, "blocks/index.ts"),
    index,
    "utf8",
  );

  console.log("\n✅ Index built!");
}

async function registryInfo() {
  //  here we will get the registry info.
  //  we show the registry info in table format.
  //  we show info of components, providers, interfaces, blocks.

  console.log("📊 Registry Info.\n");

  // fisrt display info of components. like name size of content, dependencies, components, type.
  const components: Registry = registry.filter(
    (item: z.infer<typeof registryEntrySchema>) =>
      item.type === "components:ui",
  );

  console.log("Components");
  console.table(
    components.map((component) => {
      const files = component.files?.map((file) => {
        const filePath = path.join(
          "../../packages/ui/src/components",
          `${component.name}.tsx`,
        );
        const fileSize = statSync(filePath).size;
        return {
          name: basename(file),
          size: fileSize,
        };
      });

      return {
        name: component.name,
        files: files
          ?.map((file) => `${file.name} (${file.size} bytes)`)
          .join(", "),
        dependencies: component.dependencies,
        devDependencies: component.devDependencies,
        subcategory: component.subcategory,
      };
    }),
    ["name", "files", "dependencies", "devDependencies", "subcategory"],
  );

  // second display info of providers. like name size of content, dependencies, components, type.
  console.log("Providers");

  const providers = registry.filter(
    (item: z.infer<typeof registryEntrySchema>) =>
      item.type === "components:component",
  );

  console.table(
    providers.map((provider) => {
      const files = provider.files?.map((file) => {
        const filePath = path.join(
          "../../packages/ui/src/provider",
          `${provider.name}.tsx`,
        );
        const fileSize = statSync(filePath).size;
        return {
          name: basename(file),
          size: fileSize,
        };
      });

      return {
        name: provider.name,
        files: files
          ?.map((file) => `${file.name} (${file.size} bytes)`)
          .join(", "),
      };
    }),
    ["name", "files"],
  );

  // third display info of interfaces. like name size of content.
  const interfaces = await fs.readdir("../../packages/ui/src/interfaces");

  console.log("Interfaces");
  console.table(
    interfaces.map((eachInterface) => {
      const filePath = path.join(
        "../../packages/ui/src/interfaces",
        eachInterface,
      );
      const fileSize = statSync(filePath).size;

      return {
        name: eachInterface.replace(".ts", ""),
        size: fileSize,
      };
    }),
    ["name", "size"],
  );

  // fourth display info of blocks. like name size of content, dependencies, components, type.
  const blocksInfo = blocks.filter((item) => item.type === "block:component");

  console.log("Blocks");
  console.table(
    blocksInfo.map((block) => {
      const files = block.files?.map((file) => {
        const filePath = path.join("components/blocks", file);
        const fileSize = statSync(filePath).size;
        return {
          name: basename(file),
          size: fileSize,
        };
      });

      return {
        name: block.name,
        files: files
          ?.map((file) => `${file.name} (${file.size} bytes)`)
          .join(", "),
        dependencies: block.dependencies,
        components: block.components,
      };
    }),
    ["name", "files", "dependencies", "components"],
  );
}

try {
  const startTime = Date.now();

  const result = registrySchema.safeParse(registry);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  // * run all the build functions parallelly.
  await Promise.all([
    buildRegistry(result.data),
    buildStyles(result.data),
    buildinterfaceRegistry(),
    buildBlocksRegistry(),
    buildRegistryIndex(),
  ]);

  const endTime = Date.now();
  const totalTime = endTime - startTime;
  console.log(`\n✅ All done! Build time: ${totalTime}ms\n`);

  await registryInfo();
} catch (error) {
  console.error(error);
  process.exit(1);
}
