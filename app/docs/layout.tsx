import { ExternalLink } from "lucide-react";
import { DocsNavList } from "@/components/docs/nav-list";
import { API_REFERENCE_URL } from "@/lib/site";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="mx-auto w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid md:grid-cols-[15rem_minmax(0,1fr)]">
      {/* Sidebar is desktop-only; on mobile the same list lives in the header sheet. */}
      <aside className="hidden md:block">
        <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-10 pr-2">
          <DocsNavList />
          <a
            href={API_REFERENCE_URL}
            className="mt-6 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            API reference <ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>

      {children}
    </div>
  );
}
