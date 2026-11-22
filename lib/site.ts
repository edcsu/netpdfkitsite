/**
 * Shared site constants. Kept free of node: imports so client components can
 * use them — unlike lib/docs.ts, which reads the filesystem.
 */

export const siteConfig = {
  name: "NetPdf",
  package: "NetPdfKit",
  tagline: "Create, view, and manage PDF files in .NET with one fluent API.",
  description:
    "NetPdf puts one fluent .NET API over PDFsharp, PdfPig, PDFtoImage, ZXing.Net, and Svg.Skia — create, lay out, read, render, sign, and manage PDFs on Windows, macOS, and Linux.",
  url: "https://netpdf.dev",
} as const;

/** The DocFX-generated API reference, which this site links out to rather than rendering. */
export const API_REFERENCE_URL = "https://edcsu.github.io/netpdf/api/";
export const GITHUB_URL = "https://github.com/edcsu/netpdf";
export const NUGET_URL = "https://www.nuget.org/packages/NetPdfKit";
export const INSTALL_COMMAND = "dotnet add package NetPdfKit";
export type Release = {
  version: string;
  /** ISO date (UTC) the release was published on GitHub. */
  date: string;
  title: string;
  summary: string;
  new?: string[];
  updates?: string[];
  fixes?: string[];
};

/**
 * Release history, newest first. Add a new entry at the top when a version ships.
 * Source: https://github.com/edcsu/netpdf/releases
 */
export const RELEASES: Release[] = [
  {
    version: "1.1.0",
    date: "2026-11-21",
    title: "Lean install with add-on packages",
    summary:
      "NetPdfKit.Core is now much smaller. SVG, barcodes, and page rendering moved into their own packages.",
    new: [
      "NetPdfKit.Core: create, merge, split, encrypt, and extract text and images, with no SkiaSharp, SVG, barcode, or PDFium dependencies.",
      "NetPdfKit.Svg, NetPdfKit.Barcodes, and NetPdfKit.Rendering add-on packages.",
    ],
    updates: [
      "NetPdfKit is still the full install. It pulls in Core and every add-on.",
      "Add-ons extend the core in the same namespaces, so your code needs no extra using.",
    ],
  },
  {
    version: "1.0.1",
    date: "2026-11-21",
    title: "Previewer on NuGet",
    summary: "The release pipeline now publishes to NuGet, including the Previewer packages.",
    new: ["Previewer packages are published to NuGet."],
    updates: ["CI publishes to NuGet from a manual Release run."],
    fixes: ["Fixed the Previewer zip builds after a .NET 8 tool change."],
  },
  {
    version: "1.0.0",
    date: "2026-11-21",
    title: "First stable release",
    summary: "The live previewer, .NET 11 support, and a bundled fallback font.",
    new: [
      "Live previewer window that re-renders on every rebuild.",
      "Support for .NET 11.",
      "Bundled Liberation Sans as a fallback font, so minimal Linux containers just work.",
    ],
  },
  {
    version: "0.8.0",
    date: "2026-07-13",
    title: "Docs and publishing",
    summary: "Documentation and package publishing work.",
    updates: ["Docs and publishing improvements."],
  },
  {
    version: "0.7.1",
    date: "2026-07-12",
    title: "README badges",
    summary: "Small README update.",
    updates: ["Added GitHub stats badges to the README."],
  },
  {
    version: "0.7.0",
    date: "2026-07-12",
    title: "Compliance",
    summary: "Phase 5 of the roadmap: compliance features.",
    new: ["Compliance work from roadmap phase 5."],
  },
  {
    version: "0.6.0",
    date: "2026-07-12",
    title: "Table visuals",
    summary: "Phase 4 of the roadmap: better-looking tables.",
    new: ["Table visuals from roadmap phase 4."],
  },
  {
    version: "0.5.0",
    date: "2026-07-12",
    title: "Content flow",
    summary: "Phase 3 of the roadmap: how content flows across pages.",
    new: ["Content flow from roadmap phase 3."],
  },
  {
    version: "0.4.0",
    date: "2026-07-12",
    title: "Drawing primitives",
    summary: "The layout rendering backend can now draw.",
    new: ["Drawing primitives in the layout rendering backend."],
  },
  {
    version: "0.3.0",
    date: "2026-07-12",
    title: "Layout engine",
    summary: "The foundation of the fluent layout API.",
    new: [
      "Element tree core with two-pass layout.",
      "Auto-pagination.",
    ],
  },
  {
    version: "0.2.0",
    date: "2026-07-12",
    title: "Phase 1 features",
    summary: "The first batch of PDF features.",
    new: [
      "Encryption.",
      "Links and overlays.",
      "File attachments.",
      "Drawing shapes.",
      "XMP metadata.",
    ],
  },
];

/** Latest stable NetPdfKit release on NuGet. Comes from the newest entry in RELEASES. */
export const NETPDF_VERSION = RELEASES[0].version;
export const TARGET_FRAMEWORKS = ["net8.0", "net9.0", "net10.0", "net11.0"] as const;
