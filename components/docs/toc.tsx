"use client";

import { useEffect, useState } from "react";
import type { TocHeading } from "@/lib/docs";
import { cn } from "@/lib/utils";

/** On-this-page navigation, with the heading nearest the top of the viewport marked active. */
export function Toc({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(headings[0]?.id);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Only count headings in the top quarter of the viewport, so the active
      // item tracks what the reader is actually looking at.
      { rootMargin: "-80px 0px -75% 0px" },
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 font-medium">On this page</p>
      <ul className="flex flex-col gap-2 border-l">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={activeId === heading.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l py-0.5 transition-colors",
                heading.level === 3 ? "pl-7" : "pl-4",
                activeId === heading.id
                  ? "border-primary font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
