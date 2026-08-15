/**
 * Refreshes content/docs/*.mdx from the NetPdf repo's hand-written guides.
 *
 *   npm run sync-docs                 # reads ../netpdf/docs/guides
 *   NETPDF_REPO=/path/to/netpdf npm run sync-docs
 *
 * The generated files are committed, so the site builds without the netpdf
 * checkout present. Re-running against an unchanged checkout is a no-op.
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { docsFlat } from "../content/docs/nav.ts";

const REPO = process.env.NETPDF_REPO ?? path.resolve(import.meta.dirname, "../../netpdf");
const SOURCE_DIR = path.join(REPO, "docs/guides");
const OUT_DIR = path.resolve(import.meta.dirname, "../content/docs");
const API_BASE = "https://edcsu.github.io/netpdf/api/";

const slugs = new Set(docsFlat.map((d) => d.slug));

/** `[Rendering](rendering.md#anchor)` → `[Rendering](/docs/rendering#anchor)` */
function rewriteLinks(markdown: string): string {
  return markdown.replace(/\]\(([^)\s]+?)\.md(#[^)\s]*)?\)/g, (match, target: string, hash = "") => {
    if (/^https?:/.test(target)) return match;
    const stem = path.basename(target);
    if (!slugs.has(stem)) {
      console.warn(`  ! link to unknown guide "${target}.md" left as-is`);
      return match;
    }
    return `](/docs/${stem}${hash})`;
  }).replace(/\]\((?:\.\.\/)?api\/([^)\s]*)\)/g, `](${API_BASE}$1)`);
}

/** Drop the leading `# Title` — the page renders the title from frontmatter. */
function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^#\s+.*\r?\n+/, "");
}

function quote(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

let written = 0;

for (const [index, doc] of docsFlat.entries()) {
  const sourcePath = path.join(SOURCE_DIR, `${doc.slug}.md`);
  let source: string;
  try {
    source = await readFile(sourcePath, "utf8");
  } catch {
    console.error(`✗ missing source guide: ${sourcePath}`);
    process.exitCode = 1;
    continue;
  }

  const frontmatter = [
    "---",
    `title: ${quote(doc.title)}`,
    `description: ${quote(doc.description)}`,
    `order: ${index + 1}`,
    `source: ${quote(`docs/guides/${doc.slug}.md`)}`,
    "---",
    "",
  ].join("\n");

  const body = rewriteLinks(stripLeadingH1(source)).trimEnd();
  const next = `${frontmatter}${body}\n`;

  const outPath = path.join(OUT_DIR, `${doc.slug}.mdx`);
  const current = await readFile(outPath, "utf8").catch(() => null);
  if (current === next) {
    console.log(`= ${doc.slug}.mdx`);
    continue;
  }

  await writeFile(outPath, next, "utf8");
  written += 1;
  console.log(`${current === null ? "+" : "~"} ${doc.slug}.mdx`);
}

console.log(`\n${written} file(s) written, ${docsFlat.length - written} unchanged.`);
