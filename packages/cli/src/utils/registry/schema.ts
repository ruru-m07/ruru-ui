import { z } from "zod";

// TODO: Extract this to a shared package.
export const registryItemSchema = z.object({
  name: z.string(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(z.string()),
  subcategory: z.array(z.string()).optional(),
  type: z.enum(["components:ui", "components:component", "components:example"]),
});

export const registryIndexSchema = z.array(registryItemSchema);

export const registryItemSchemaForBlock = z.object({
  name: z.string(),
  files: z.array(z.string()),
  type: z.enum(["block:component"]),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  components: z.array(z.string()).optional(),
});

export const registryBlockIndexSchema = z.array(registryItemSchemaForBlock);

export const registryItemWithContentSchema = registryItemSchema.extend({
  files: z.array(
    z.object({
      name: z.string(),
      content: z.string(),
    }),
  ),
});

export const registryItemWithContentForBlockSchema =
  registryItemSchemaForBlock.extend({
    files: z.array(
      z.object({
        name: z.string(),
        content: z.string(),
      }),
    ),
  });

export const registryWithContentSchema = z.array(registryItemWithContentSchema);

export const registryWithContentSchemaForBlocks = z.array(
  registryItemWithContentForBlockSchema,
);

export const registryItemWithContentSchemaForInterfaces = z.object({
  name: z.string(),
  content: z.string(),
});

export const registryWithContentSchemaForInterfaces = z.array(
  registryItemWithContentSchemaForInterfaces,
);

export const stylesSchema = z.array(
  z.object({
    name: z.string(),
    label: z.string(),
  }),
);

export const registryBaseColorSchema = z.object({
  inlineColors: z.object({
    light: z.record(z.string(), z.string()),
    dark: z.record(z.string(), z.string()),
  }),
  cssVars: z.object({
    light: z.record(z.string(), z.string()),
    dark: z.record(z.string(), z.string()),
  }),
  inlineColorsTemplate: z.string(),
  cssVarsTemplate: z.string(),
});

export const interfaceRegistryIndexSchemaSchema = z.object({
  name: z.string(),
});

export const interfaceRegistryIndexsSchemaSchema = z.array(
  interfaceRegistryIndexSchemaSchema,
);
