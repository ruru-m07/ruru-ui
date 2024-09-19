import { notFound } from "next/navigation";
import { blocks } from "@/registry/blocks";
import { blocks_registry } from "@/__registry__/blocks";
import { Metadata } from "next";

type Params = {
  name: string;
};

type Props = {
  params: Params;
};

export async function generateStaticParams(): Promise<Params[]> {
  return blocks.map((block) => ({
    name: block.name,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const block = blocks.find((block) => block.name === params.name);
  if (!block) return {};

  return {
    title: `${block.name} Block`,
    description: `View details for the ${block.name} block`,
  };
}

export default async function BlockPage({ params }: Props) {
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
