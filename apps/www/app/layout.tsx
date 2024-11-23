import type { ReactNode } from "react";
import type { Viewport } from "next";
import { ScrollArea } from "@/components/scroll-area";
import { RootProvider } from "fumadocs-ui/provider";
import { RuruProvider } from "ruru-ui/provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { createMetadata } from "@/utils/metadata";
import "fumadocs-ui/style.css";
import "fumadocs-ui/twoslash.css";
import "./global.css";
import { CSPostHogProvider } from "./providers";

export const metadata = createMetadata({});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <CSPostHogProvider>
          <RootProvider theme={{ defaultTheme: "dark" }}>
            <RuruProvider>
              <ScrollArea className="h-screen">{children}</ScrollArea>
            </RuruProvider>
          </RootProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
