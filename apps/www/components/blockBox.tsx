"use client";

import React, { useState, useRef, forwardRef } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/ResizablePanel";
import { Block } from "@/registry/blocks";
import { Spinner } from "ruru-ui/components/spinner";
import { ImperativePanelHandle } from "react-resizable-panels";

const BlockBox = forwardRef<
  ImperativePanelHandle,
  { block: Block & { content: string } }
>(({ block }, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full min-h-[600px] rounded-md border my-4 bg-background"
    >
      <ResizablePanel ref={ref} minSize={30} defaultSize={100}>
        <div className="relative w-full h-full">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
              <Spinner />
              <span className="ml-2">Loading...</span>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={`/blocks/${block.name}`}
            className="w-full h-full"
            title={block.name}
            onLoad={handleIframeLoad}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={0}>
        <div />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
});

BlockBox.displayName = "BlockBox";

export default BlockBox;
