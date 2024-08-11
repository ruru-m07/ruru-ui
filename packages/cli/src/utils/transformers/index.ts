import { Config } from "@/utils/get-config";
import { registryBaseColorSchema } from "@/utils/registry/schema";
import { SourceFile } from "ts-morph";
import { z } from "zod";

export type TransformOpts = {
  filename: string;
  raw: string;
  config: Config;
  baseColor?: z.infer<typeof registryBaseColorSchema>;
};

export type Transformer<Output = SourceFile> = (
  opts: TransformOpts & {
    sourceFile: SourceFile;
  },
) => Promise<Output>;
