import { map } from "@/.map";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { BuildPageTreeOptions, loader } from "fumadocs-core/source";
import { z } from "zod";

// @ts-ignore
export const {
  getPage,
  getPages,
  pageTree,
}: {
  getPage: (slugs: string[], language?: string) => any;
  getPages: (language?: string) => any[];
  pageTree: (
    slug?: string[] | undefined,
  ) => Partial<Omit<BuildPageTreeOptions, "storage" | "getUrl">>;
  // pageTree: PageTree.Root;
} = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        preview: z.string().optional(),
        index: z.boolean().default(false),
      }),
    },
  }),
});
