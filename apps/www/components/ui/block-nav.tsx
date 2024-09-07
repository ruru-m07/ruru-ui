"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Block } from "@/registry/blocks";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import CopyButton from "../copyButton";
import BlockInfo from "./block-info";

const BlockNav = ({
  block,
  mode,
  onModeChange,
  onResize,
}: {
  block: Block & { content: string };
  mode: "preview" | "code";
  onModeChange: (mode: "preview" | "code") => void;
  onResize: (value: string) => void;
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center">
        <Tabs
          onValueChange={(v) => onModeChange(v as "preview" | "code")}
          value={mode}
          className="w-fit"
        >
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="h-7 w-px bg-border mx-4" />
        <Link
          href={`/blocks/${block.name}`}
          className="text-sm text-muted-foreground hover:underline hover:text-primary"
        >
          {block.name}
        </Link>
        <div className="h-7 w-px bg-border mx-4" />
        <BlockInfo block={block} />
      </div>
      <div className="flex items-center justify-center">
        <ToggleGroup type="single" defaultValue="100" onValueChange={onResize}>
          <ToggleGroupItem
            value="100"
            className="h-[22px] w-[22px] rounded-sm p-0"
          >
            <Monitor className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="60"
            className="h-[22px] w-[22px] rounded-sm p-0"
          >
            <Tablet className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="30"
            className="h-[22px] w-[22px] rounded-sm p-0"
          >
            <Smartphone className="h-3.5 w-3.5" />
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="h-7 w-px bg-border mx-4" />
        <CopyButton content={block.content} />
      </div>
    </div>
  );
};

export default BlockNav;
