import {
  cancel,
  confirm,
  group,
  intro,
  note,
  outro,
  spinner,
  text,
} from "@clack/prompts";
import pc from "picocolors";

export async function init() {
  console.log("\n");
  intro(pc.white(pc.bold(" 🚀  Welcome to the installation wizard! ")));

  const options = await group(
    {
      typescript: () =>
        confirm({
          message: `Would you like to use ${pc.bold("TypeScript")} (recommended)?`,
          initialValue: true,
        }),
      tailwindCss: () =>
        text({
          message: `Where is your ${pc.bold("global CSS")} file?`,
          placeholder: "./app/global.css",
          initialValue: "./app/global.css",
          validate: (value) => {
            if (!value) return "Please enter a path.";
            if (value[0] !== ".") return "Please enter a relative path.";
          },
        }),
      tailwindConfig: () =>
        text({
          message: `Where is your ${pc.bold("tailwind.config.js")} located?`,
          initialValue: "./tailwind.config.js",
          validate: (value) => {
            if (!value) return "Please enter a path.";
            if (value[0] !== ".") return "Please enter a relative path.";
          },
        }),
      components: () =>
        text({
          message: `Configure the import alias for ${pc.bold("components")}:`,
          placeholder: "@/components/ui",
          initialValue: "@/components/ui",
        }),
      utils: () =>
        text({
          message: `Configure the import alias for ${pc.bold("utils")}:`,
          placeholder: "@/utils",
          initialValue: "@/utils",
        }),
    },
    {
      onCancel: () => {
        cancel("Installation Stopped.");
        process.exit(0);
      },
    },
  );

  if (true) {
    const s = spinner();
    s.start("Installing via pnpm");
    setTimeout(() => {}, 2500);
    s.stop("Installed via pnpm");
  }

  let nextSteps = `npx ruru-ui-cli add button             `;

  note(nextSteps, "Next steps.");

  outro(
    `Problems? ${pc.underline(pc.cyan("https://github.com/ruru-m07/ruru-ui/issues"))}`,
  );

  console.log("\n\n\n\n\n");

  console.log(options);

  process.exit(0);
}
