import { existsSync, promises as fs } from "fs";
import path from "path";
import { handleError } from "@/src/utils/handle-error";
import { logger } from "@/src/utils/logger";

import chalk from "chalk";
import { Command } from "commander";
import { z } from "zod";

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean(),
  path: z.string().optional(),
});

export const add = new Command()
  .name("add")
  .description("add a component to your project")
  .argument("[components...]", "the components to add")
  .option("-y, --yes", "skip confirmation prompt.", true)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option("-a, --all", "add all available components", false)
  .option("-p, --path <path>", "the path to add the component to.")
  .action(async (components, opts) => {
    try {
      const options = addOptionsSchema.parse({
        components,
        ...opts,
      });

      const cwd = path.resolve(options.cwd);

      if (!existsSync(cwd)) {
        logger.error(`The path ${cwd} does not exist. Please try again.`);
        process.exit(1);
      }
    
        logger.info("");
        logger.info(
          `${chalk.green(
            "Success!"
          )} Component(s) added to your project.`
        );
        logger.info("");

    } catch (error) {
      handleError(error);
    }
  });
