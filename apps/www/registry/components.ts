import { Registry } from "@/registry/schema";

export const components: Registry = [
  {
    name: "index",
    type: "components:component",
    files: ["index.tsx"],
  },
  {
    name: "theme",
    type: "components:component",
    files: ["theme.tsx"],
  },
];
