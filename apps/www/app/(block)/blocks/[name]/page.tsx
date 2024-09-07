import { notFound } from "next/navigation";
import { blocks } from "@/registry/blocks";
import { blocks_registry } from "@/__registry__/blocks";

export default async function BlockPage({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const { name } = params;

  // Find the block by name in blocks
  const block = blocks.find((block) => block.name === name);
  if (!block) {
    return notFound();
  }

  // Load block from blocks_registry and render it
  const block_registry = blocks_registry.find((block) => block.name === name);
  if (!block_registry) {
    return notFound();
  }

  // Render the component as JSX
  const BlockComponent = block_registry.default_export;
  return <BlockComponent />;
}
