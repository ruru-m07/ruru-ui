#!/usr/bin/env node

import "dotenv/config";
import { Command } from "commander";
import { init } from "./commands/init";
import { add } from "./commands/add";
import { block } from "./commands/block";

async function main(): Promise<void> {
  const program = new Command();

  program
    .name("Ruru-UI")
    .description("CLI tool to initialize Ruru-UI")
    .version("0.0.7", "-v, --version", "display the version number");

  program.addCommand(init).addCommand(add).addCommand(block);

  program.parse();
}

main().catch((e: unknown) => {
  console.error(e);
  throw e;
});
