"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Block } from "@/registry/blocks";
import BlockNav from "./block-nav";
import BlockBox from "../blockBox";
import { Spinner } from "ruru-ui/components/spinner";
import { ImperativePanelHandle } from "react-resizable-panels";

const CodeBlockServer = dynamic(() => import("./code-block-server"), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[600px] flex items-center justify-center">
      <Spinner className="mr-4" /> Loading...
    </div>
  ),
});

export default function BlockWrapper({
  block,
}: {
  block: Block & { content: string };
}) {
  const [mode, setMode] = useState<"preview" | "code">("preview");
  const [codeContent, setCodeContent] = useState<string[]>([]);
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    if (block && block.content) {
      setCodeContent(block.content as unknown as string[]);
    }
  }, [block]);

  const handleResize = (value: string) => {
    if (resizablePanelRef.current) {
      resizablePanelRef.current.resize(parseInt(value));
    }
  };

  return (
    <section className="mt-5" id={block.name}>
      <BlockNav
        block={block}
        mode={mode}
        onModeChange={setMode}
        onResize={handleResize}
      />
      {mode === "preview" ? (
        <BlockBox ref={resizablePanelRef} block={block} />
      ) : (
        <div className="w-full min-h-[600px]">
          {codeContent ? (
            <CodeBlockServer code={codeContent} />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              No code content available
            </div>
          )}
        </div>
      )}
    </section>
  );
}
