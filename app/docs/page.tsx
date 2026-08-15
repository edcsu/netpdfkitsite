import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { InstallCommand } from "@/components/install-command";
import { docsNav } from "@/lib/docs";
import { API_REFERENCE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides for creating, laying out, reading, rendering, signing, and managing PDF files with NetPdf.",
  alternates: { canonical: "/docs" },
};

export default function DocsIndexPage() {
  return (
    <div className="py-10">
      <header>
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Documentation
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Everything from your first page to signed, PDF/A-conformant output. Start with the
          install, then follow whichever guide matches the job.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <InstallCommand />
          <a
            href={API_REFERENCE_URL}
            className="flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Full API reference <ExternalLink className="size-3.5" />
          </a>
        </div>
      </header>

      <div className="mt-12 flex flex-col gap-12">
        {docsNav.map((section) => (
          <section key={section.title}>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/docs/${item.slug}`}
                    className="group flex h-full flex-col rounded-xl border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    <span className="flex items-center gap-1.5 font-medium group-hover:text-primary">
                      {item.title}
                      <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
