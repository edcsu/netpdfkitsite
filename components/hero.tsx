import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { InstallCommand } from "@/components/install-command";
import { Button } from "@/components/ui/button";
import { samples } from "@/content/samples";
import { GITHUB_URL, NUGET_URL, TARGET_FRAMEWORKS } from "@/lib/site";

export function Hero() {
  const featured = samples[0];

  return (
    <section className="relative overflow-hidden border-b">
      {/* Soft brand wash behind the hero; purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[28rem] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.12]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            {TARGET_FRAMEWORKS.join(" · ")} · Windows, macOS, Linux
          </p>

          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            PDFs in .NET, <span className="text-primary">without the plumbing</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Create, lay out, read, render, sign, and manage PDF files through one fluent API — with
            five proven libraries doing the heavy lifting underneath.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/docs/getting-started">
                Get started <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={GITHUB_URL}>Star on GitHub</a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <InstallCommand />
            <a href={NUGET_URL} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              View on NuGet
            </a>
          </div>
        </div>

        <CodeBlock code={featured.code} filename="Report.cs" className="shadow-xl" />
      </div>
    </section>
  );
}
