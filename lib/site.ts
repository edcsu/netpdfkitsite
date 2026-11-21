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
/** Latest stable NetPdfKit release on NuGet. Bump this when a new version ships. */
export const NETPDF_VERSION = "1.0.1";
export const TARGET_FRAMEWORKS = ["net8.0", "net9.0", "net10.0", "net11.0"] as const;
