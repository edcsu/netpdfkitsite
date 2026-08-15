import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { DocEntry } from "@/lib/docs";

/** Previous/next links across the guide sequence. Ends render a single link. */
export function DocsPager({ previous, next }: { previous?: DocEntry; next?: DocEntry }) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Guide navigation" className="mt-14 flex gap-4 border-t pt-6">
      {previous && (
        <Link
          href={`/docs/${previous.slug}`}
          className="group flex flex-1 flex-col gap-1 rounded-lg border p-4 transition-colors hover:border-primary/50"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="size-3.5" /> Previous
          </span>
          <span className="font-medium group-hover:text-primary">{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link
          href={`/docs/${next.slug}`}
          className="group ml-auto flex flex-1 flex-col items-end gap-1 rounded-lg border p-4 text-right transition-colors hover:border-primary/50"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Next <ArrowRight className="size-3.5" />
          </span>
          <span className="font-medium group-hover:text-primary">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
