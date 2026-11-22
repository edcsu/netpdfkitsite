"use client";

import { ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { GITHUB_URL, NUGET_URL, type Release } from "@/lib/site";

/**
 * Release timeline, based on shadcn studio "Changelog Page 01".
 * Version and date on the left, a dot on a line in the middle, the release on the right.
 */

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const tags = {
  new: {
    label: "New",
    className:
      "bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400",
  },
  updates: {
    label: "Updates",
    className: "bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
  },
  fixes: {
    label: "Bug Fixes",
    className:
      "bg-amber-600/10 text-amber-600 dark:bg-orange-400/10 dark:text-orange-400",
  },
} as const;

export function ReleasesTimeline({ releases }: { releases: Release[] }) {
  return (
    <>
      {releases.map((release, index) => (
        <div key={release.version} id={release.version} className="relative flex scroll-mt-18 justify-end gap-2">
          <div className="sticky top-24 flex w-36 flex-col items-end gap-2 self-start pb-4 max-md:hidden">
            <Badge className="flex size-6 w-auto justify-end rounded-sm bg-foreground text-sm font-medium text-background">
              v{release.version}
            </Badge>
            <div className="text-right text-sm font-medium text-muted-foreground">{formatDate(release.date)}</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="sticky top-24 mb-11 flex size-6 items-center justify-center max-sm:top-5">
              <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-foreground/20">
                <span className="size-3 rounded-full bg-foreground" />
              </span>
            </div>
            <span className="-mt-13.5 w-px flex-1 border" />
          </div>

          <div className="flex flex-1 flex-col gap-4 pb-11 pl-3 md:pl-6 lg:pl-9">
            <div className="flex flex-col gap-2 md:hidden">
              <Badge className="flex rounded-sm bg-foreground font-medium text-background">v{release.version}</Badge>
              <div className="font-medium">{formatDate(release.date)}</div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{release.title}</h3>
              <p className="text-sm text-muted-foreground">{release.summary}</p>
            </div>

            <Accordion type="multiple" className="-mt-2 w-full" defaultValue={index === 0 ? ["new"] : []}>
              {(Object.keys(tags) as (keyof typeof tags)[]).map((key) => {
                const items = release[key];
                if (!items?.length) return null;

                return (
                  <AccordionItem key={key} value={key} className="bg-transparent">
                    <AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
                      <Badge className={`h-6 rounded-sm border-none px-2 ${tags[key].className}`}>
                        {tags[key].label}
                      </Badge>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={`${NUGET_URL}/${release.version}`}
                className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                NuGet <ExternalLink className="size-3.5" />
              </a>
              <a
                href={`${GITHUB_URL}/releases/tag/v${release.version}`}
                className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                Release notes <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
