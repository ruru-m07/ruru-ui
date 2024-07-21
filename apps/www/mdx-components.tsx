import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Wrapper } from "@/components/preview/wrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Wrapper,
  };
}
