import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "avatar",
    type: "components:ui",
    files: ["avatar.tsx"],
  },
  {
    name: "badge",
    type: "components:ui",
    files: ["badge.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    subcategory: ["spinner"],
    files: ["button.tsx"],
  },
  {
    name: "checkbox",
    type: "components:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: ["checkbox.tsx"],
  },
  {
    name: "input",
    type: "components:ui",
    files: ["input.tsx"],
  },
  {
    name: "select",
    type: "components:ui",
    dependencies: ["@radix-ui/react-select", "@radix-ui/react-icons"],
    files: ["select.tsx"],
  },
  {
    name: "spinner",
    type: "components:ui",
    files: ["spinner.tsx"],
  },
  {
    name: "switch",
    type: "components:ui",
    dependencies: ["@radix-ui/react-icons", "@radix-ui/react-select"],
    files: ["switch.tsx"],
  },
  {
    name: "tabs",
    type: "components:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: ["tabs.tsx"],
  },
  {
    name: "textarea",
    type: "components:ui",
    files: ["textarea.tsx"],
  },
  {
    name: "tooltip",
    type: "components:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: ["tooltip.tsx"],
  },
];
