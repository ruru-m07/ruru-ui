import { baseUrl, createMetadata } from "@/utils/metadata";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";
import { RuruProvider } from "ruru-ui/provider";
import "fumadocs-ui/style.css";
import "fumadocs-ui/twoslash.css";
import { ScrollArea } from "@/components/scroll-area";
import { Analytics } from "@vercel/analytics/react";

export const metadata = createMetadata({
  title: {
    template: "%s | Ruru UI",
    default: "Ruru UI",
  },
  description:
    "Ruru UI is a design system for building classic web applications.",
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <Analytics />
        <RootProvider>
          <RuruProvider disableBaseColor>
            <ScrollArea className="h-screen">{children}</ScrollArea>
          </RuruProvider>
        </RootProvider>
      </body>
    </html>
  );
}
