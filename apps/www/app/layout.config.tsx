import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/app/source";
import Image from "next/image";

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          className="size-8 [.uwu_&]:hidden [header_&]:size-5 dark:block hidden"
          src={"/logo-white.png"}
          alt="logo"
          height={100}
          width={100}
        />
        <Image
          className="size-8 [.uwu_&]:hidden [header_&]:size-5 dark:hidden block"
          src={"/logo-black.png"}
          alt="logo"
          height={100}
          width={100}
        />
        <span className="font-medium text-lg [.uwu_&]:hidden max-md:[header_&]:hidden">
          Ruru UI
        </span>
      </>
    ),
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  // @ts-expect-error
  tree: pageTree,
  nav: {
    ...baseOptions.nav,
    transparentMode: "none",
    children: undefined,
  },
};
