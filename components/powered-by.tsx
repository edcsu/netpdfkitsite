import { Badge } from "@/components/ui/badge";

const libraries = [
  {
    name: "PDFsharp",
    capability: "Create, merge, split, rotate, encrypt",
    license: "MIT",
    href: "https://github.com/empira/PDFsharp",
  },
  {
    name: "PdfPig",
    capability: "Text & image extraction",
    license: "Apache-2.0",
    href: "https://github.com/UglyToad/PdfPig",
  },
  {
    name: "PDFtoImage",
    capability: "Render pages to PNG via PDFium",
    license: "MIT",
    href: "https://github.com/sungaila/PDFtoImage",
  },
  {
    name: "ZXing.Net",
    capability: "Barcodes & QR codes",
    license: "Apache-2.0",
    href: "https://github.com/micjahn/ZXing.Net",
  },
  {
    name: "Svg.Skia",
    capability: "SVG rasterization via SkiaSharp",
    license: "MIT",
    href: "https://github.com/wieslawsoltes/Svg.Skia",
  },
];

export function PoweredBy() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Five proven libraries. One API.
          </h2>
          <p className="mt-4 text-muted-foreground">
            NetPdf doesn&apos;t reimplement PDF. It wraps battle-tested, permissively-licensed
            libraries behind a single coherent document model — so you learn one surface instead of
            five, and never wire them together yourself.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {libraries.map((library) => (
            <li key={library.name}>
              <a
                href={library.href}
                className="flex h-full flex-col gap-1 rounded-xl border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium">{library.name}</span>
                  <Badge variant="secondary" className="font-mono text-[11px]">
                    {library.license}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{library.capability}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
