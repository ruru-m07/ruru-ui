import type { Metadata } from "next/types";

const TITLE = "Ruru UI - Customizable Interfaces for Web Applications";
const DESCRIPTION =
  "Ruru UI is the ultimate design system and UI library for creating seamless, beautiful, and highly customizable user interfaces for classic web applications.";
const BASE_URL = "https://ruru-ui.vercel.app";
const BANNER_IMAGE = {
  url: `${BASE_URL}/assets/banner.jpg`,
  width: 1200,
  height: 567,
  alt: "Ruru UI Banner",
};

export function createMetadata(override: Metadata): Metadata {
  return {
    title: {
      template: "%s | Ruru UI",
      default: TITLE,
    },
    description: DESCRIPTION,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: BASE_URL,
      images: [BANNER_IMAGE],
      siteName: "Ruru UI",
      type: "website",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: [BANNER_IMAGE.url],
    },
  };
}
