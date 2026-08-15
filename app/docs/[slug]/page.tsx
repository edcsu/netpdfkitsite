import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsPager } from "@/components/docs/pager";
import { Toc } from "@/components/docs/toc";
import { docsFlat, getDoc, getHeadings, getPager } from "@/lib/docs";
import { GITHUB_URL } from "@/lib/site";

export function generateStaticParams() {
  return docsFlat.map((doc) => ({ slug: doc.slug }));
}

// Only the nine known guides exist; anything else is a 404 rather than a build.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/docs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    openGraph: { title: doc.title, description: doc.description, url: `/docs/${doc.slug}` },
    alternates: { canonical: `/docs/${doc.slug}` },
  };
}

export default async function DocPage({ params }: PageProps<"/docs/[slug]">) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  const [headings, { default: Content }] = await Promise.all([
    getHeadings(doc.slug),
    import(`@/content/docs/${doc.slug}.mdx`),
  ]);
  const { previous, next } = getPager(doc.slug);

  return (
    <div className="gap-10 py-10 xl:grid xl:grid-cols-[minmax(0,1fr)_13rem]">
      <article className="min-w-0">
        <header className="mb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{doc.description}</p>
        </header>

        <Content />

        <DocsPager previous={previous} next={next} />
      </article>

      <div className="hidden xl:block">
        <div className="sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto py-1">
          <Toc headings={headings} />
          <a
            href={`${GITHUB_URL}/blob/main/docs/guides/${doc.slug}.md`}
            className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            Edit this page <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
