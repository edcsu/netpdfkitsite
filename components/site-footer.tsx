import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { docsNav } from "@/content/docs/nav";
import { API_REFERENCE_URL, GITHUB_URL, NUGET_URL, siteConfig } from "@/lib/site";

const resources = [
  { href: "/docs", label: "Documentation" },
  { href: API_REFERENCE_URL, label: "API reference" },
  { href: "/previewer", label: "Previewer" },
  { href: "/releases", label: "Releases" },
];

const project = [
  { href: GITHUB_URL, label: "GitHub" },
  { href: NUGET_URL, label: "NuGet" },
  { href: `${GITHUB_URL}/issues`, label: "Issues" },
  { href: `${GITHUB_URL}/blob/main/LICENSE`, label: "License" },
];

export function SiteFooter() {
  const guides = docsNav[0].items;

  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <SiteLogo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>

        <FooterColumn title="Guides" links={guides.map((g) => ({ href: `/docs/${g.slug}`, label: g.title }))} />
        <FooterColumn title="Resources" links={resources} />
        <FooterColumn title="Project" links={project} />
      </div>

      <div className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-sm text-muted-foreground sm:px-6">
          Built on PDFsharp, PdfPig, PDFtoImage, ZXing.Net, and Svg.Skia. Released under the MIT
          license.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold">{title}</p>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            {link.href.startsWith("/") ? (
              <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.label}
              </Link>
            ) : (
              <a href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
