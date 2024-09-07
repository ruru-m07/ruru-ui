"use client";

import { Block } from "@/registry/blocks";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import Modal, { ModalProvider } from "ruru-ui/components/modal";
import { Spinner } from "ruru-ui/components/spinner";

const CodeBlockServer = dynamic(() => import("./code-block-server"), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[70px] flex items-center justify-center">
      <Spinner className="mr-4" /> Loading...
    </div>
  ),
});

const BlockInfo = ({
  block,
}: {
  block: Block & { content: string };
}): React.ReactNode => {
  return (
    <div>
      <ModalProvider>
        <Modal.Trigger size={"small"} variant={"tertiary"}>
          <InfoCircledIcon className="mr-2" /> Info
        </Modal.Trigger>
        <Modal>
          <Modal.Body>
            <Modal.Header>
              <Modal.Title> {block.name} </Modal.Title>
              <Modal.Subtitle>
                Here is some information about the block.
              </Modal.Subtitle>
            </Modal.Header>
            <Modal.Content>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Install VIA CLI
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-3 text-sm text-muted-foreground">
                Install this block using the command below.
              </p>
              <CodeBlockServer
                lang="bash"
                code={[`npx ruru-ui-cli@latest block ${block.name}`]}
              />

              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                More Info
              </h4>

              {block.components?.length && block.components.length > 0 && (
                <p className="leading-7 [&:not(:first-child)]:mt-3 text-sm text-muted-foreground">
                  components:
                  {block.components?.map((component, index) => (
                    <Link
                      href={`/docs/components/${component}`}
                      key={index}
                      className="mx-1 text-primary hover:underline"
                    >
                      {component}
                    </Link>
                  ))}
                </p>
              )}

              {block.dependencies?.length && block.dependencies.length > 0 && (
                <p className="leading-7 [&:not(:first-child)]:mt-3 text-sm text-muted-foreground">
                  dependencies:
                  {block.dependencies?.map((dependency, index) => (
                    <span key={index} className="mx-1 text-primary">
                      {dependency}
                    </span>
                  ))}
                </p>
              )}

              {block.devDependencies?.length &&
                block.devDependencies.length > 0 && (
                  <p className="leading-7 [&:not(:first-child)]:mt-3 text-sm text-muted-foreground">
                    devDependencies:
                    {block.devDependencies?.map((dependency, index) => (
                      <span key={index} className="mx-1 text-primary">
                        {dependency}
                      </span>
                    ))}
                  </p>
                )}
            </Modal.Content>
          </Modal.Body>
          <Modal.Actions>
            <Modal.Close fullWidth variant="secondary">
              Cancel
            </Modal.Close>
          </Modal.Actions>
        </Modal>
      </ModalProvider>
    </div>
  );
};

export default BlockInfo;
