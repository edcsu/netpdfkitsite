import { readFile } from "node:fs/promises";
import path from "node:path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import { type DocEntry, docsFlat, docsNav } from "@/content/docs/nav";

export { docsFlat, docsNav };
export type { DocEntry };

const CONTENT_DIR = path.join(process.cwd(), "content/docs");

export function getDoc(slug: string): DocEntry | undefined {
  return docsFlat.find((doc) => doc.slug === slug);
}

/** Previous and next guide in sidebar order. Ends do not wrap. */
export function getPager(slug: string): { previous?: DocEntry; next?: DocEntry } {
  const index = docsFlat.findIndex((doc) => doc.slug === slug);
  if (index === -1) return {};
  return { previous: docsFlat[index - 1], next: docsFlat[index + 1] };
}

export type TocHeading = { id: string; text: string; level: 2 | 3 };

/**
 * Headings for the on-this-page nav, read from the MDX source rather than the
 * rendered output. Ids match rehype-slug's, so the anchors line up.
 */
export async function getHeadings(slug: string): Promise<TocHeading[]> {
  const source = await readFile(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  const { content } = matter(source);

  // Ignore anything inside fenced code blocks — `# comment` lines are not headings.
  const withoutCode = content.replace(/^```[\s\S]*?^```/gm, "");

  // Same slugger rehype-slug uses, so duplicate headings get the same -1 suffixes.
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  for (const match of withoutCode.matchAll(/^(#{2,3})\s+(.+?)\s*$/gm)) {
    const text = match[2].replace(/`/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
    headings.push({ id: slugger.slug(text), text, level: match[1].length as 2 | 3 });
  }
  return headings;
}
