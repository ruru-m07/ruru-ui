import React from "react";

export interface Block {
  name: string;
  files: string[];
  dependencies?: string[];
  devDependencies?: string[];
  components?: string[];
  type: "block:component" | "block:hooks";
  default_export: string | (() => React.ReactNode);
}

export interface Blocks_registry extends Block {
  content: string[];
}

export const blocks: Block[] = [
  {
    name: "login-1",
    files: ["login-1.tsx"],
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
    components: ["button", "input", "form"],
    type: "block:component",
    default_export: "Login1",
  },
];
