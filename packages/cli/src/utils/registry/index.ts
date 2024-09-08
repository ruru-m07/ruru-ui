import { config } from "@/utils";
import { Config } from "@/utils/get-config";
import {
  interfaceRegistryIndexsSchemaSchema,
  registryBaseColorSchema,
  registryIndexSchema,
  registryItemWithContentSchema,
  registryWithContentSchema,
  registryWithContentSchemaForInterfaces,
  registryBlockIndexSchema,
  stylesSchema,
  registryWithContentSchemaForBlocks,
} from "@/utils/registry/schema";
import { HttpsProxyAgent } from "https-proxy-agent";
import fetch from "node-fetch";
import path from "path";
import { z } from "zod";

const { baseUrl } = config();

const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined;

export async function getRegistryIndex() {
  try {
    const [result] = await fetchRegistry(["index.json"]);

    return registryIndexSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch components from registry.`);
  }
}

export async function getProviderRegistryIndex() {
  try {
    const [result] = await fetchRegistry(["providers/index.json"]);

    return registryIndexSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch components from registry.`);
  }
}

export async function getBlocksRegistryIndex() {
  try {
    const [result] = await fetchRegistry(["blocks/index.json"]);

    return registryBlockIndexSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch blocks from registry.`);
  }
}

export async function getInterfaceRegistryIndex() {
  try {
    const [result] = await fetchRegistry(["interface/index.json"]);

    return interfaceRegistryIndexsSchemaSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch components from registry.`);
  }
}

export async function getRegistryStyles() {
  try {
    const [result] = await fetchRegistry(["styles/index.json"]);

    return stylesSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch styles from registry.`);
  }
}

export async function getRegistryBaseColor() {
  try {
    const [result] = await fetchRegistry([`colors/basecolor.json`]);

    return registryBaseColorSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch base color from registry.`);
  }
}

export async function resolveTree(
  index: z.infer<typeof registryIndexSchema>,
  names: string[],
) {
  const tree: z.infer<typeof registryIndexSchema> = [];

  for (const name of names) {
    const entry = index.find((entry) => entry.name === name);

    if (!entry) {
      continue;
    }

    tree.push(entry);

    if (entry.registryDependencies) {
      const dependencies = await resolveTree(index, entry.registryDependencies);
      tree.push(...dependencies);
    }
  }

  return tree.filter(
    (component, index, self) =>
      self.findIndex((c) => c.name === component.name) === index,
  );
}

export async function resolveInterfaceTree(
  index: z.infer<typeof interfaceRegistryIndexsSchemaSchema>,
) {
  return index;
}

export async function resolveBlockTree(
  index: z.infer<typeof registryBlockIndexSchema>,
  names: string[],
) {
  const tree: z.infer<typeof registryBlockIndexSchema> = [];

  for (const name of names) {
    const entry = index.find((entry) => entry.name === name);

    if (!entry) {
      continue;
    }

    tree.push(entry);
  }

  return tree.filter(
    (component, index, self) =>
      self.findIndex((c) => c.name === component.name) === index,
  );
}

export async function fetchComponentsTree(
  tree: z.infer<typeof registryIndexSchema>,
) {
  try {
    const paths = tree.map((item) => `components/${item.name}.json`);
    const result = await fetchRegistry(paths);

    return registryWithContentSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch component tree from registry.`);
  }
}

export async function fetchBlockTree(
  tree: z.infer<typeof registryBlockIndexSchema>,
) {
  try {
    const paths = tree.map((item) => `blocks/${item.name}.json`);
    const result = await fetchRegistry(paths);

    return registryWithContentSchemaForBlocks.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch block tree from registry.`);
  }
}

export async function fetchTree(tree: z.infer<typeof registryIndexSchema>) {
  try {
    const paths = tree.map((item) => `providers/components/${item.name}.json`);
    const result = await fetchRegistry(paths);

    return registryWithContentSchema.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch tree from registry.`);
  }
}

export async function fetchInterfaceTree(
  tree: z.infer<typeof interfaceRegistryIndexsSchemaSchema>,
) {
  try {
    const paths = tree.map((item) => `interface/${item.name}.json`);
    const result = await fetchRegistry(paths);

    return registryWithContentSchemaForInterfaces.parse(result);
  } catch (error) {
    throw new Error(`Failed to fetch interface tree from registry.`);
  }
}

export async function getItemTargetPath(
  config: Config,
  item: Pick<z.infer<typeof registryItemWithContentSchema>, "type">,
  override?: string,
) {
  if (override) {
    return override;
  }

  if (item.type === "components:ui" && config.aliases.ui) {
    return config.resolvedPaths.ui;
  }

  if (item.type === "components:component" && config.aliases.provider) {
    return config.resolvedPaths.provider;
  }

  const [parent, type] = item.type.split(":");
  if (!(parent in config.resolvedPaths)) {
    return null;
  }

  return path.join(
    config.resolvedPaths[parent as keyof typeof config.resolvedPaths],
    type,
  );
}

// ! This function is not used in the codebase
// export async function getItemTargetPathForBlock(
//   blockPath: string,
//   config: Config,
//   item: Pick<z.infer<typeof registryItemWithContentForBlockSchema>, "type">,
//   override?: string
// ) {
//   if (override) {
//     return override;
//   }

//   if (item.type === "block:component" && config.aliases.ui) {
//     return config.resolvedPaths.ui;
//   }

//   return null;
// }

async function fetchRegistry(paths: string[]) {
  try {
    const results = await Promise.all(
      paths.map(async (path) => {
        const response = await fetch(`${baseUrl}/registry/${path}`, {
          agent,
        });
        return await response.json();
      }),
    );

    return results;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch registry from ${baseUrl}.`);
  }
}
