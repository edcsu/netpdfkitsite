/**
 * The single source of truth for the docs corpus: order, titles, and descriptions.
 * Mirrors netpdf/docs/guides/toc.yml. `scripts/sync-docs.mts` reads this to stamp
 * frontmatter onto the generated MDX, and the sidebar, docs index, pager, and
 * generateStaticParams all read it too.
 */

export type DocEntry = {
  /** URL slug and source filename stem (`getting-started` → guides/getting-started.md) */
  slug: string;
  title: string;
  description: string;
};

export type DocSection = {
  title: string;
  items: DocEntry[];
};

export const docsNav: DocSection[] = [
  {
    title: "Getting started",
    items: [
      {
        slug: "getting-started",
        title: "Getting started",
        description:
          "Install NetPdfKit, create your first PDF, and choose between the absolute-coordinate and fluent layout APIs.",
      },
      {
        slug: "fluent-layout",
        title: "Fluent layout",
        description:
          "Auto-paginated documents with measured content, repeating headers and footers, tables, rich text, and lists.",
      },
    ],
  },
  {
    title: "Working with PDFs",
    items: [
      {
        slug: "reading",
        title: "Reading PDFs",
        description:
          "Open documents from a path, stream, or byte array and extract text, images, and metadata.",
      },
      {
        slug: "managing",
        title: "Managing PDFs",
        description:
          "Merge, split, reorder, overlay, attach files, and encrypt — all on an immutable document model.",
      },
      {
        slug: "barcodes-and-svg",
        title: "Barcodes & SVG",
        description:
          "QR codes, barcodes, SVG rasterization, and raw canvas drawing through the shared image pipeline.",
      },
      {
        slug: "rendering",
        title: "Rendering",
        description:
          "Render pages to PNG bytes with PDFium for previews, thumbnails, and visual testing.",
      },
    ],
  },
  {
    title: "Advanced",
    items: [
      {
        slug: "signing",
        title: "Digital signing",
        description:
          "Sign and verify documents with detached PKCS#7 signatures from any X.509 certificate.",
      },
      {
        slug: "compliance",
        title: "Compliance",
        description:
          "PDF/A conformance, tagged (accessible) PDF, XMP metadata, and right-to-left text.",
      },
      {
        slug: "architecture",
        title: "Architecture",
        description:
          "How PDFsharp, PdfPig, PDFtoImage, ZXing.Net, and Svg.Skia fit behind one document model.",
      },
    ],
  },
];

/** Flattened, in sidebar order — the canonical ordering for prev/next and static params. */
export const docsFlat: DocEntry[] = docsNav.flatMap((section) => section.items);
