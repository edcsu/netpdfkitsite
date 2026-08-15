"use client";

import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type CodeTab = { id: string; label: string; blurb: string };

/**
 * Tab strip over pre-highlighted code panels. The panels are rendered on the
 * server and passed through as children, so no highlighting happens client-side.
 */
export function CodeTabs({ tabs, panels }: { tabs: CodeTab[]; panels: ReactNode[] }) {
  return (
    <Tabs defaultValue={tabs[0].id} className="w-full gap-4">
      <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="rounded-full border px-4 py-1.5 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab, index) => (
        <TabsContent key={tab.id} value={tab.id} className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">{tab.blurb}</p>
          {panels[index]}
        </TabsContent>
      ))}
    </Tabs>
  );
}
