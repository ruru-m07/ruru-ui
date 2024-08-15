import path from "path";
import fs from "fs-extra";
import { type PackageJson } from "type-fest";

export function getPackageInfo() {
  const packageJsonPath = path.join("../../package.json");

  return fs.readJSONSync(packageJsonPath) as PackageJson;
}

export function config() {
  // const baseUrl = "http://localhost:3000";

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ruru-ui.vercel.app";

  return { baseUrl };
}
