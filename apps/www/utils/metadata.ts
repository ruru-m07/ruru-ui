import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://ruru-ui.vercel.app",
      images: [
        {
          url: "https://ruru-ui.vercel.app/assets/banner.png",
          width: 1200,
          height: 567,
          alt: "ruru-ui",
        },
      ],
      siteName: "Ruru UI",
      ...override.openGraph,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL!}`);
