import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Wrapper } from "@/components/preview/wrapper";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-ui/twoslash/popup";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Popup,
    PopupContent,
    PopupTrigger,
    Wrapper,
  };
}
