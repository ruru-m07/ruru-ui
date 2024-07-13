import fg from "fast-glob"

const PROJECT_SHARED_IGNORE = [
  "**/node_modules/**",
  ".next",
  "public",
  "dist",
  "build",
];

export async function preFlight(cwd: string) {
  // We need Tailwind CSS to be configured.
  const tailwindConfig = await fg.glob("tailwind.config.*", {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  if (!tailwindConfig.length) {
    throw new Error(
      "Tailwind CSS is not installed. Visit https://tailwindcss.com/docs/installation to get started."
    );
  }

  return true;
}
