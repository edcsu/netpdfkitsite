import "server-only";
import { createHighlighter, type Highlighter } from "shiki";

// One highlighter for the whole build; creating one per call loads the
// grammars and themes again each time.
let highlighterPromise: Promise<Highlighter> | undefined;

function getHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["csharp", "bash"],
  });
  return highlighterPromise;
}

/** Highlights to dual-theme HTML; globals.css picks light or dark at runtime. */
export async function highlight(code: string, lang: "csharp" | "bash" = "csharp"): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code.trim(), {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
}
