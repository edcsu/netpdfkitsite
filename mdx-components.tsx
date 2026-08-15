import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Styling for MDX guide content. Applied globally by @next/mdx, so it covers
 * every doc page without a wrapper component per route.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={cn(
          "mt-12 scroll-mt-20 font-heading text-2xl font-semibold tracking-tight first:mt-0",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className={cn("mt-8 scroll-mt-20 font-heading text-lg font-semibold tracking-tight", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p className={cn("mt-4 leading-7 text-muted-foreground", className)} {...props} />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul className={cn("mt-4 ml-6 list-disc space-y-2 text-muted-foreground", className)} {...props} />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className={cn("mt-4 ml-6 list-decimal space-y-2 text-muted-foreground", className)}
        {...props}
      />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className={cn("leading-7 [&>strong]:text-foreground", className)} {...props} />
    ),
    strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
      <strong className={cn("font-semibold text-foreground", className)} {...props} />
    ),
    a: ({ className, href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
      const classes = cn("font-medium text-primary underline underline-offset-4", className);
      return href.startsWith("/") ? (
        <Link href={href} className={classes} {...props} />
      ) : (
        <a href={href} className={classes} {...props} />
      );
    },
    blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={cn("mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground", className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
      <hr className={cn("my-10", className)} {...props} />
    ),
    table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
      // Wide tables scroll inside their own container rather than the page.
      <div className="mt-6 w-full overflow-x-auto rounded-lg border">
        <table className={cn("w-full text-sm", className)} {...props} />
      </div>
    ),
    th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
      <th
        className={cn("border-b bg-muted/50 px-4 py-2.5 text-left font-medium", className)}
        {...props}
      />
    ),
    td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
      <td className={cn("border-b px-4 py-2.5 align-top text-muted-foreground", className)} {...props} />
    ),
    // Inline code only — fenced blocks are wrapped in <figure> by rehype-pretty-code
    // and styled in globals.css.
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
      <code
        className={cn(
          "font-mono text-[0.875em] [:not(pre)>&]:rounded [:not(pre)>&]:bg-muted [:not(pre)>&]:px-1.5 [:not(pre)>&]:py-0.5 [:not(pre)>&]:text-foreground",
          className,
        )}
        {...props}
      />
    ),
    figure: ({ className, ...props }: ComponentPropsWithoutRef<"figure">) => (
      <figure className={cn("mt-6 overflow-hidden rounded-xl border bg-card", className)} {...props} />
    ),
    ...components,
  };
}
