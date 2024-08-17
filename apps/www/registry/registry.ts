import { Registry } from "@/registry/schema";
import { ui } from "@/registry/ui";
import { components } from "@/registry/components";

export const registry: Registry = [...ui, ...components];
