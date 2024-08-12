import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./node_modules/ruru-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        spinner: {
          from: { opacity: "1" },
          to: { opacity: "0.15" },
        },
      },
      animation: {
        spinner: "spinner 1.2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  presets: [createPreset()],
};
