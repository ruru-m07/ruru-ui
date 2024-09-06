"use client";

import Login1 from "@/components/blocks/login-1";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/ResizablePanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardIcon, DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "ruru-ui/components/button";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useRouter } from "next/navigation";
import { Spinner } from "ruru-ui/components/spinner";

const BlocksPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div>
      <div className="w-full my-4 py-4">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          The Blocks To Build Your App Faster
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground max-w-[70%]">
          Choose from a variety of pre-built components to build your app faster
          and easier. Customize the components to fit your brand and style.
        </p>

        <div className="flex items-center mt-3 gap-4">
          <Button onClick={() => router.push("/docs")}>Get Started</Button>
          <Button
            onClick={() =>
              window.open(
                "https://github.com/ruru-m07/ruru-ui/discussions/new",
                "_blank",
              )
            }
            variant={"secondary"}
          >
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
        </div>
      </div>

      <section className="mt-5">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <Tabs defaultValue="preview" className="w-fit">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="h-7 w-px bg-border mx-4" />
            <span className="text-sm text-muted-foreground">login-1</span>
          </div>
          <div className="flex items-center justify-center">
            <Tabs defaultValue="desktop" className="w-fit">
              <TabsList>
                <TabsTrigger value="desktop">
                  <Monitor size={16} />
                </TabsTrigger>
                <TabsTrigger value="mobile">
                  <Tablet size={16} />
                </TabsTrigger>
                <TabsTrigger value="phone">
                  <Smartphone size={16} />
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="h-7 w-px bg-border mx-4" />
            <Button size={"small"} variant={"secondary"}>
              <ClipboardIcon />
            </Button>
          </div>
        </div>
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full min-h-[600px] rounded-md border my-4"
        >
          <ResizablePanel
            defaultSize={100}
            className="flex items-center justify-center"
          >
            <Login1 />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={0}>
            <div />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  );
};

export default BlocksPage;
