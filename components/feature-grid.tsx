import {
  Accessibility,
  FileSignature,
  Images,
  LayoutTemplate,
  Lock,
  QrCode,
  Rows3,
  ScanText,
} from "lucide-react";

const features = [
  {
    icon: LayoutTemplate,
    title: "Automatic layout",
    body: "A measure/draw element tree paginates content for you. Headers and footers repeat; {number} and {total} resolve per page.",
  },
  {
    icon: Rows3,
    title: "Tables & rich text",
    body: "Fixed and relative columns, cell spans, repeating header rows, mixed inline styles, hyperlinks, and lists.",
  },
  {
    icon: ScanText,
    title: "Read anything",
    body: "Extract text per page or whole-document, pull embedded images as PNG bytes, and read or write metadata.",
  },
  {
    icon: Images,
    title: "Render to images",
    body: "Rasterize any page to PNG at a chosen DPI through PDFium — previews, thumbnails, and visual regression tests.",
  },
  {
    icon: Lock,
    title: "AES-256 encryption",
    body: "Password-protect documents, reopen protected files, and strip encryption again. RC4-128 stays available for legacy readers.",
  },
  {
    icon: FileSignature,
    title: "Digital signatures",
    body: "Detached PKCS#7 signatures from any X.509 certificate, written as an incremental update, with verification built in.",
  },
  {
    icon: Accessibility,
    title: "Tagged PDF & PDF/A",
    body: "A real structure tree with headings, paragraphs, and alt text, plus PDF/A output intent and identification XMP.",
  },
  {
    icon: QrCode,
    title: "Barcodes, SVG, canvas",
    body: "QR codes, Code128 and friends, SVG rasterization, and raw canvas drawing — all through the same image pipeline.",
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything a PDF has to do
        </h2>
        <p className="mt-4 text-muted-foreground">
          From a one-page receipt to a signed, accessible, PDF/A-conformant report.
        </p>
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <li key={feature.title}>
            <feature.icon className="size-5 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-medium">{feature.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
