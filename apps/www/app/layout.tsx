import { baseUrl, createMetadata } from "@/utils/metadata";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { RuruProvider } from "ruru-ui";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = createMetadata({
  title: {
    template: "%s | Ruru UI",
    default: "Ruru UI",
  },
  description:
    "Ruru UI is a design system for building modern web applications.",
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
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RuruProvider>
          <RootProvider>{children}</RootProvider>
        </RuruProvider>
      </body>
    </html>
  );
}
