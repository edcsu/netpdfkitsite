import createMDX from "@next/mdx";
import type { NextConfig } from "next";

// Turbopack serializes loader options, so MDX plugins are referenced by package
// name rather than by imported function.
const prettyCodeOptions = {
  // Both themes render at once; CSS in globals.css picks one via the `.dark` class.
  theme: { light: "github-light", dark: "github-dark" },
  keepBackground: false,
  defaultLang: { block: "csharp", inline: "csharp" },
};

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  options: {
    // remark-frontmatter parses the YAML block so it is not rendered as content;
    // lib/docs.ts reads the same block with gray-matter for titles and descriptions.
    remarkPlugins: [["remark-frontmatter", ["yaml"]], ["remark-gfm", {}]],
    rehypePlugins: [["rehype-slug", {}], ["rehype-pretty-code", prettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
