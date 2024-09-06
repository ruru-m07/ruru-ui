import { getConfig } from "@/utils/get-config";
import { Command } from "commander";
import * as z from "zod";
import path from "path";
import {
  fetchBlockTree,
  getBlocksRegistryIndex,
  getRegistryBaseColor,
  resolveBlockTree,
} from "@/utils/registry";
import pc from "picocolors";
import { confirm, group, text } from "@clack/prompts";
import ora from "ora";
import { existsSync, promises as fs } from "fs";
import { transform } from "@/utils/transformers";
import { getPackageManager } from "@/utils/get-package-manager";
import { execa } from "execa";

const blockOptionsSchema = z.object({
  block: z.string(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  info: z.boolean(),
});

export const block = new Command()
  .name("block")
  .description("Add a new block")
  .arguments("<block>")
  .option("-y, --yes", "Skip confirmation prompt.", false)
  .option("-o, --overwrite", "Overwrite existing files.", false)
  .option(
    "-c, --cwd <cwd>",
    "The working directory. Defaults to the current directory.",
    process.cwd(),
  )
  .option("-i, --info", "Show block info", false)
  .action(async (block, opts) => {
    const options = blockOptionsSchema.parse({
      block,
      ...opts,
    });
    const cwd = path.resolve(options.cwd);
    // get ruru.json config file from cwd

    const config = await getConfig(cwd);

    if (!config) {
      console.log(
        "Configuration is missing. Please run init to create a ruru.json file.",
      );
      process.exit(1);
    }

    const registryIndex = await getBlocksRegistryIndex();
    const blockInfo = registryIndex.find((item) => item.name === block);

    if (options.info) {
      const formattedBlockInfo = `
Block Information:
------------------------------------------------------
Name:           ${blockInfo?.name}
Files:          ${blockInfo?.files.join(", ")}
Type:           ${blockInfo?.type}
Dependencies:   ${blockInfo?.dependencies?.join(", ")}
Components:     ${blockInfo?.components?.join(", ")}
`;

      console.log(formattedBlockInfo);

      return;
    }

    // get block info

    const tree = await resolveBlockTree(registryIndex, [options.block]);
    const payload = await fetchBlockTree(tree);
    const baseColor = await getRegistryBaseColor();

    if (!payload.length) {
      pc.yellow(`Selected components not found. Exiting.`);
      process.exit(0);
    }

    if (!options.yes) {
      const { proceed } = await group({
        proceed: () =>
          confirm({
            message: `Ready to install components and dependencies. Proceed?`,
            initialValue: true,
          }),
      });

      if (!proceed) {
        process.exit(0);
      }
    }

    // get block path from config

    const { blockPath } = await group({
      blockPath: () =>
        text({
          message: `Where would you like to install the block?`,
          placeholder: `@/components/block`,
          defaultValue: `components/block`,
        }),
    });

    // add block to project
    const spinner = ora(`Installing components...`).start();

    for (const item of payload) {
      spinner.text = `Installing ${item.name}...`;

      // TODO: need to implement getItemTargetPathForBlock
      // const targetDir = await getItemTargetPathForBlock(
      //   blockPath,
      //   config,
      //   item,
      //   options.cwd ? path.resolve(cwd, options.cwd) : undefined
      // );

      const targetDir = path.resolve(cwd, blockPath.replace("@/", ""));

      if (!targetDir) {
        continue;
      }

      if (!existsSync(targetDir)) {
        await fs.mkdir(targetDir, { recursive: true });
      }

      const existingComponent = item.files.filter((file) => {
        existsSync(path.resolve(targetDir, file.name));
      });

      if (existingComponent.length && !options.overwrite) {
        if ([options.block].includes(item.name)) {
          spinner.stop();

          const { overwrite } = await group({
            overwrite: () =>
              confirm({
                message: `Component ${item.name} already exists. Would you like to overwrite?`,
                initialValue: false,
              }),
          });

          if (!overwrite) {
            pc.blue(
              `Skipped ${item.name}. To overwrite, run with the -o flag.`,
            );
            continue;
          }

          spinner.start(`Installing ${item.name}...`);
        } else {
          continue;
        }
      }

      for (const file of item.files) {
        let filePath = path.resolve(targetDir, file.name);

        // Run transformers.
        const content = await transform({
          filename: file.name,
          raw: file.content,
          config,
          baseColor,
        });

        if (!config.tsx) {
          filePath = filePath.replace(/\.tsx$/, ".jsx");
          filePath = filePath.replace(/\.ts$/, ".js");
        }

        await fs.writeFile(filePath, content);
      }

      const packageManager = await getPackageManager(cwd);

      // Install dependencies.
      if (item.dependencies?.length) {
        spinner.text = `Installing ${item.name} dependencies...`;

        await execa(
          packageManager,
          [packageManager === "npm" ? "install" : "add", ...item.dependencies],
          {
            cwd,
          },
        );
      }

      // Install devDependencies.
      if (item.devDependencies?.length) {
        spinner.text = `Installing ${item.name} devDependencies...`;

        await execa(
          packageManager,
          [
            packageManager === "npm" ? "install" : "add",
            "-D",
            ...item.devDependencies,
          ],
          {
            cwd,
          },
        );
      }

      // Install dependencies.
      if (item.components?.length) {
        spinner.text = `Installing ${item.name} components...`;

        await execa("npx", ["ruru-ui-cli", "add", ...item.components], {
          cwd,
        });
      }

      spinner.succeed(`The block ${item.name} has been installed.`);
    }
  });
