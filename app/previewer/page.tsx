import { Columns2, RefreshCw, ShieldAlert, ZoomIn } from "lucide-react";
import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { previewerInstall, previewerSample } from "@/content/samples";
import { GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Live previewer",
  description:
    "Preview NetPdf documents in a desktop window that re-renders on every rebuild — ideal with dotnet watch.",
  alternates: { canonical: "/previewer" },
};

const capabilities = [
  {
    icon: RefreshCw,
    title: "Re-renders on rebuild",
    body: "Run under dotnet watch run. Each rebuild pushes the fresh PDF to the window, which launches itself on first use (default port 12500).",
  },
  {
    icon: ShieldAlert,
    title: "Errors stay contained",
    body: "Generation exceptions appear in the window's error panel instead of killing the watch loop, so you fix and keep going.",
  },
  {
    icon: Columns2,
    title: "Thumbnail sidebar",
    body: "Continuous-scroll pages with a thumbnail rail for jumping around long documents.",
  },
  {
    icon: ZoomIn,
    title: "Zoom, fit, and save",
    body: "Zoom controls, fit-to-width, and a Save PDF button for grabbing the document you are looking at.",
  },
];

export default function PreviewerPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Live previewer</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Design documents without the save-and-open loop
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          A desktop window that shows your document as you write the code that produces it. Swap{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">.Save()</code> for{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">.ShowInPreviewer()</code>{" "}
          and leave it running.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="mb-3 font-heading text-lg font-semibold">1. Install</h2>
            <CodeBlock code={previewerInstall} lang="bash" />
          </div>
          <div>
            <h2 className="mb-3 font-heading text-lg font-semibold">2. Point your document at it</h2>
            <CodeBlock code={previewerSample} filename="Program.cs" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 rounded-xl border bg-muted/30 p-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="flex gap-4">
              <capability.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="font-medium">{capability.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {capability.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        The previewer lives in the same repository as the library —{" "}
        <a
          href={`${GITHUB_URL}/tree/main/src/NetPdf.Previewer`}
          className="font-medium text-primary underline underline-offset-4"
        >
          browse the source
        </a>
        .
      </p>
    </div>
  );
}
