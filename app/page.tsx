import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { CodeTabs } from "@/components/code-tabs";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { PoweredBy } from "@/components/powered-by";
import { Button } from "@/components/ui/button";
import { previewerSample, samples } from "@/content/samples";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            One package, the whole lifecycle
          </h2>
          <p className="mt-4 text-muted-foreground">
            The same document model carries a file from creation through to a verified signature.
          </p>
        </div>

        <div className="mt-8">
          <CodeTabs
            tabs={samples.map(({ id, label, blurb }) => ({ id, label, blurb }))}
            panels={samples.map((sample) => (
              <CodeBlock key={sample.id} code={sample.code} />
            ))}
          />
        </div>
      </section>

      <PoweredBy />
      <FeatureGrid />

      <section className="border-t bg-muted/30">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              See it as you build it
            </h2>
            <p className="mt-4 text-muted-foreground">
              Swap <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">.Save()</code>{" "}
              for <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">.ShowInPreviewer()</code>{" "}
              and run under <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">dotnet watch</code>.
              The previewer window re-renders on every rebuild, and generation errors land in an
              error panel instead of killing the loop.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/previewer">
                About the previewer <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <CodeBlock code={previewerSample} filename="Program.cs" />
        </div>
      </section>
    </>
  );
}
