"use client";

import { ThemeContextProvider, useThemeContext } from "@/contexts/ThemeContext";
import React from "react";
import Color from "color";
import ThemeModifier from "@/theme/ThemeModifier";
import Header from "@/components/header";
import ThemeVariablesSettingSidebar from "@/components/ThemeVariablesSettingSidebar";
import Link from "next/link";
import { Button } from "ruru-ui/components/button";
import { PaintbrushVertical } from "lucide-react";

import "react-color-palette/css";
import Playground from "../playground/page";
import { Tab, Tabs } from "ruru-ui/components/tabs";
import Colors from "@/components/colors";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    cssVariables: {
      ruru: { light, dark },
    },
    mode,
  } = useThemeContext();

  const background =
    mode === "light" ? light.background.color : dark.background.color;
  const mixColor = mode === "light" ? "black" : "white";
  const backgroundVariant = Color(Color(background).hex())
    .mix(Color(mixColor), 0.05)
    .hex();

  return (
    <div
      style={{ background: backgroundVariant }}
      className="flex w-full relative border rounded ml-4"
    >
      {children}
    </div>
  );
};

const ThemePage = () => {
  return (
    <ThemeContextProvider>
      <div className="py-4">
        <div className="w-full mx-4 md:mx-24 lg:mx-36 mt-5">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            Create Your Theme
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground max-w-[70%]">
            Create your own theme with Ruru UI. Customize the colors,
            typography, and spacing to fit your brand and style.
          </p>

          <div className="flex items-center mt-3 gap-4">
            <Link href="/docs">
              <Button> Read Docs</Button>
            </Link>
            <Link
              href={"https://tailwindcss.com/docs/customizing-colors"}
              target="_blank"
            >
              <Button variant={"secondary"}>
                <PaintbrushVertical size={16} strokeWidth={1.5} />
                <span className="ml-1"> colors </span>
              </Button>
            </Link>
          </div>
        </div>
        <ThemeModifier />
        <div className="flex flex-col relative rounded-md p-4 my-8 mx-5">
          <Header />
          <div className="flex">
            <ThemeVariablesSettingSidebar />
            <Layout>
              <Tabs className="w-full" items={["playground", "colors"]}>
                <Tab value={"playground"}>
                  <div className="flex items-center overflow-auto justify-center rounded w-full relative">
                    <Playground />
                  </div>
                </Tab>
                <Tab value={"colors"}>
                  <div className="flex items-center overflow-auto justify-center rounded w-full relative">
                    <Colors />
                  </div>
                </Tab>
              </Tabs>
            </Layout>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default ThemePage;
