// @sts-nocheck
import { existsSync, promises as fs, readFileSync } from "fs";
import path, { basename } from "path";
import { rimraf } from "rimraf";

import { registry } from "../registry/registry";
import { Registry, registrySchema } from "../registry/schema";

const REGISTRY_PATH = path.join(process.cwd(), "public/registry");

async function buildRegistry(registry: Registry) {
  console.log(" ⚒️ Building registry...");

  // ----------------------------------------------------------------------------
  // Build registry/index.json.
  // ----------------------------------------------------------------------------
  const names = registry.filter((item) => item.type === "components:ui");
  const registryJson = JSON.stringify(names, null, 2);
  rimraf.sync(path.join(REGISTRY_PATH, "index.json"));
  await fs.writeFile(
    path.join(REGISTRY_PATH, "index.json"),
    registryJson,
    "utf8",
  );

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

  console.log("✅ Registry built!");
}

// ----------------------------------------------------------------------------
// Build registry/styles/[style]/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  console.log(" ⚒️ Building styles...");

  const targetPath = path.join(REGISTRY_PATH);

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  // Create directory if it doesn't exist.
  for (const item of registry) {
    console.log(` |- ${item.name} `);

    if (item.type === "components:component") {
      const files = item.files?.map((file) => {
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

      continue;
    }

    const files = item.files?.map((file) => {
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
  }

  console.log("✅ Styles built!");
}

// ----------------------------------------------------------------------------
// Build registry/interface/[name].json.
// ----------------------------------------------------------------------------
async function buildinterfaceRegistry() {
  console.log(" ⚒️ Building interface registry...");

  const targetPath = path.join(REGISTRY_PATH, "interface");

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  const files = await fs.readdir("../../packages/ui/src/interfaces");

  // ---------------------------------------------------------------------
  // Build registry/interface/index.json.
  // ---------------------------------------------------------------------

  // storeing data like [ { name: interfacefilename } ]

  const names = files.map((file) => ({ name: file.replace(".ts", "") }));

  await fs.writeFile(
    path.join(REGISTRY_PATH, "interface", "index.json"),
    JSON.stringify(names, null, 2),
    "utf8",
  );

  // ---------------------------------------------------------------------
  // Build registry/interface/[name].json.
  // ---------------------------------------------------------------------

  for (const file of files) {
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
  }

  console.log("✅ Interface registry built!");
}

try {
  const result = registrySchema.safeParse(registry);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  await buildRegistry(result.data);
  await buildStyles(result.data);
  await buildinterfaceRegistry();

  console.log("✅ All done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
