#!/usr/bin/env node

import "dotenv/config";
import { Command } from "commander";
import { getPackageInfo } from "./utils";
import { init } from "./commands/init";
import { add } from "./commands/add";

async function main(): Promise<void> {
  const program = new Command();

  program
    .name("Ruru-UI")
    .description("CLI tool to initialize Ruru-UI")
    .version(
      getPackageInfo().version || "1.0.0",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(init).addCommand(add);

  program.parse();
}

main().catch((e: unknown) => {
  console.error(e);
  throw e;
});
