/** Landing-page code samples, taken from the NetPdf README so they stay honest. */

export type Sample = { id: string; label: string; blurb: string; code: string };

export const samples: Sample[] = [
  {
    id: "layout",
    label: "Lay out",
    blurb: "Content is measured and paginated automatically — headers and footers repeat, page numbers resolve.",
    code: `using NetPdf.Fluent;

Document.Create(doc => doc
    .Page(page => page
        .Size(PageSizes.A4)
        .Margin(50)
        .Header(h => h.Text("ACME Quarterly Report"))
        .Content(c => c
            .Padding(10)
            .Column(column =>
            {
                column.Spacing(8);
                column.Item().Text("Body text wraps and flows across pages automatically.");
                column.Item().Row(row =>
                {
                    row.ConstantItem(120).Text("Label");
                    row.RelativeItem().Text("Value that takes the remaining width");
                });
            }))
        .Footer(f => f.AlignCenter().PageNumber("Page {number} of {total}"))))
    .Save("report.pdf");`,
  },
  {
    id: "create",
    label: "Create",
    blurb: "Or place everything yourself, in PDF points from the top-left corner.",
    code: `using NetPdf;

PdfFile.Create()
    .WithMetadata(m => m.Title("Report").Author("Me"))
    .AddPage(page => page
        .AddText("Hello, world", x: 50, y: 50, o => o.FontSize(24).Bold())
        .AddText("Wrapped body text…", x: 50, y: 100, o => o.Wrap(400))
        .AddImage("logo.png", x: 50, y: 200, width: 150)
        .AddRectangle(50, 400, 200, 80, fill: System.Drawing.Color.LightGray)
        .AddWebLink(50, 50, 200, 24, "https://example.com/"))
    .WithOutline(o => o.AddBookmark("Introduction", 0))
    .Save("report.pdf");`,
  },
  {
    id: "read",
    label: "Read",
    blurb: "Open from a path, stream, or byte array, then pull out text, images, and metadata.",
    code: `using var doc = PdfFile.Open("report.pdf");

Console.WriteLine(doc.PageCount);
Console.WriteLine(doc.Metadata.Title);

string allText  = doc.ExtractText();
string pageText = doc.ExtractText(0);          // 0-based
var images      = doc.GetImages(0);            // PNG bytes`,
  },
  {
    id: "manage",
    label: "Manage",
    blurb: "Every manipulation returns a new document — the original is never mutated.",
    code: `PdfFile.Merge(["a.pdf", "b.pdf"], "merged.pdf");

using var doc = PdfFile.Open("merged.pdf");
doc.Split(pagesPerFile: 1, "out/");            // one file per page
using var subset  = doc.ExtractPages(0, 2, 4);
using var rotated = doc.RotatePage(0, Rotation.Clockwise90);
using var stamped = doc.Overlay(watermark);    // letterheads, watermarks
using var locked  = doc.Protect(userPassword: "secret");  // AES-256`,
  },
  {
    id: "sign",
    label: "Sign",
    blurb: "Tagged, PDF/A-conformant output and detached PKCS#7 signatures.",
    code: `var bytes = Document.Create(doc => doc
        .Page(page => page.Content(c => c.Column(col =>
        {
            col.Item().Heading(1).Text("Title");
            col.Item().Paragraph().Text("Body text");
            col.Item().Image(logoPng, altText: "Company logo");
        }))))
    .WithTagging()   // structure tree: headings, paragraphs, figures with alt text
    .AsPdfA()        // sRGB output intent + pdfaid identification XMP
    .ToBytes();

using var doc    = PdfFile.Open(bytes);
using var signed = doc.Sign(certificate, new SignatureOptions { Reason = "Approved" });
var sigs = signed.GetSignatures();   // SignerSubject, IsIntact, CoversWholeDocument`,
  },
  {
    id: "render",
    label: "Render",
    blurb: "Rasterize pages to PNG with PDFium for previews, thumbnails, and visual tests.",
    code: `using var doc = PdfFile.Open("report.pdf");

byte[] png = doc.RenderPage(0, dpi: 150);
File.WriteAllBytes("page1.png", png);

var allPages = doc.RenderAllPages(dpi: 96);`,
  },
];

export const previewerSample = `using NetPdf.Fluent;
using NetPdf.Previewer;

Document.Create(doc => doc
    .Page(page => page
        .Content(c => c.Text("Hello, previewer!"))))
    .ShowInPreviewer(); // instead of .Save()/.ToBytes() while designing`;

export const previewerInstall = `dotnet tool install -g NetPdfKit.Previewer.App   # the netpdf-previewer window
dotnet add package NetPdfKit.Previewer           # adds ShowInPreviewer() to your project`;
