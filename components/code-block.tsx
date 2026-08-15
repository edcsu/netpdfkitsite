import { CopyButton } from "@/components/copy-button";
import { highlight } from "@/lib/highlight";
import { cn } from "@/lib/utils";

/**
 * Server-rendered syntax-highlighted code with a copy button. Highlighting
 * happens at build time, so no highlighter ships to the browser.
 *
 * The injected HTML is Shiki's own output over string literals committed in
 * this repo. There is no user input anywhere in this site — no forms, no
 * query-param rendering, no remote content — so the markup is trusted by
 * construction and needs no runtime sanitising.
 */
export async function CodeBlock({
  code,
  lang = "csharp",
  className,
  filename,
}: {
  code: string;
  lang?: "csharp" | "bash";
  className?: string;
  filename?: string;
}) {
  const html = await highlight(code, lang);

  return (
    <div className={cn("relative overflow-hidden rounded-xl border bg-card", className)}>
      <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
        <span className="font-mono text-xs text-muted-foreground">
          {filename ?? (lang === "bash" ? "terminal" : "C#")}
        </span>
        <CopyButton value={code.trim()} className="-mr-2" />
      </div>
      <div
        className="overflow-x-auto p-4 text-sm [&_pre]:bg-transparent! [&_pre]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
