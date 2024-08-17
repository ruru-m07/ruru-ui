import { createPreset, presets } from "fumadocs-ui/tailwind-plugin";
import animate from "tailwindcss-animate";

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
  plugins: [animate],
  // presets: [createPreset()],
  presets: [
    createPreset({
      preset: {
        ...presets.default,
        dark: {
          ...presets.default.dark,
          background: "0 0% 2%",
          foreground: "0 0% 98%",
          popover: "0 0% 4%",
          card: "0 0% 4%",
          muted: "0 0% 8%",
          border: "0 0% 14%",
          accent: "0 0% 15%",
          "accent-foreground": "0 0% 100%",
          "muted-foreground": "0 0% 60%",
        },
      },
    }),
  ],
};
