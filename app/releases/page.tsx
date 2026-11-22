import type { Metadata } from "next";
import { ReleasesTimeline } from "@/components/releases-timeline";
import { RELEASES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Releases",
  description: "What's new in each NetPdfKit release: new features, updates, and fixes.",
  alternates: { canonical: "/releases" },
};

export default function ReleasesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-16">
      <div className="mb-8 space-y-4 text-center md:mb-10 lg:mb-18">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">Releases</h1>
        <p className="text-xl text-muted-foreground">
          See what we added, changed, and fixed in each NetPdfKit version.
        </p>
      </div>
      <ReleasesTimeline releases={RELEASES} />
    </div>
  );
}
