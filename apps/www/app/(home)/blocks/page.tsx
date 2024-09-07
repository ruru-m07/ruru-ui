import { blocks_registry } from "@/__registry__/blocks";
import React from "react";
import { Button } from "ruru-ui/components/button";
import { Block } from "@/registry/blocks";
import Link from "next/link";
import BlockWrapper from "@/components/ui/block-wrapper";

const BlocksPage = (): React.ReactNode => {
  return (
    <>
      <div>
        <div className="w-full my-4 py-4">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            The Blocks To Build Your App Faster
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground max-w-[70%]">
            Choose from a variety of pre-built components to build your app
            faster and easier. Customize the components to fit your brand and
            style.
          </p>

          <div className="flex items-center mt-3 gap-4">
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
            <Link
              href={"https://github.com/ruru-m07/ruru-ui/discussions/new"}
              target="_blank"
            >
              <Button variant={"secondary"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-template"
                >
                  <rect width="18" height="7" x="3" y="3" rx="1" />
                  <rect width="9" height="7" x="3" y="14" rx="1" />
                  <rect width="5" height="7" x="16" y="14" rx="1" />
                </svg>
                <span className="ml-2">Request a block</span>
              </Button>
            </Link>
          </div>
        </div>
        {blocks_registry.map((block, index) => {
          return (
            <BlockWrapper
              key={index}
              block={block as unknown as Block & { content: string }}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlocksPage;
