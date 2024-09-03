import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/app/source";
import Image from "next/image";

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          className="size-8 [.uwu_&]:hidden [header_&]:size-6 dark:block hidden"
          src={"/logo-white.png"}
          alt="logo"
          height={100}
          width={100}
        />
        <Image
          className="size-8 [.uwu_&]:hidden [header_&]:size-6 dark:hidden block"
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
    transparentMode: "none",
  },
  links: [
    {
      icon: (
        <svg
          data-testid="geist-icon"
          height="16"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width="16"
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 0C2.50736 0 1.5 1.00736 1.5 2.25V13.744V13.75H1.50001C1.50323 14.9899 2.50935 15.994 3.75 15.994H13H14.5V14.494V13.7296V12.994V11.494V0.75V0H13.75H3.75ZM13 11.494V1.5H3.75C3.33579 1.5 3 1.83579 3 2.25V11.622C3.23458 11.5391 3.48702 11.494 3.75 11.494H13ZM3 13.744C3 14.1582 3.33579 14.494 3.75 14.494H13V13.7296V12.994H3.75C3.33579 12.994 3 13.3298 3 13.744Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      ),
      text: "Blocks",
      url: "/blocks",
      active: "nested-url",
    },
    {
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      text: "Sponsors",
      url: "/sponsors",
    },
  ],
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
