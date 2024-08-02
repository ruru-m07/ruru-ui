import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import Preview from "@/components/preview";
import EditonGithub from "@/components/EditonGithub";

interface Param {
  slug: string[];
}

export default async function Page({ params }: { params: Param }) {
  const page = getPage(params.slug ?? []);

  const path = `apps/www/content/docs/${page.file.path}`;

  const footer = (
    <div className="w-full">
      <EditonGithub path={path} />
    </div>
  );

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  const preview = page.data.preview;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      full={page.data.full}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        {page.data.title}
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {page.data.description}
      </p>
      <DocsBody>
        {preview && preview in Preview ? Preview[preview] : null}
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug ?? []);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
