import { defineConfig } from "tsup";

const exportedComponents = [
  "type-table",
  "roll-button",
  "image-zoom",
  "files",
  "tabs",
  "accordion",
  "steps",
  "inline-toc",
  "callout",
  "api",
  "card",
  "heading",
  "codeblock",
  "banner",
  "dialog/search",
  "dialog/search-default",
  "dialog/search-algolia",
  "layout/root-toggle",
  "layout/language-toggle",
  "button",
];

export default defineConfig([
  {
    entry: [
      // `./src/components/{${exportedComponents.join(",")}}.tsx`,
      `./src/components/**/*.tsx`,
      `./src/**/*.{ts,tsx}`,
      './src/tailwind-plugin.ts',
    ],
    // entry: ["./src"],
    external: ['server-only', '../../dist/image-zoom.css', 'tailwindcss'],
    format: "esm",
    dts: true,
    target: "esnext",
  },
  {
    // todo: Remove support for CommonJS in next major
    entry: ['./src/tailwind-plugin.ts'],
    format: 'cjs',
    external: ['tailwindcss'],
    dts: false,
    target: 'node18',
  },
]);
