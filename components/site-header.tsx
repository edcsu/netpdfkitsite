"use client";

import { ExternalLink, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DocsNavList } from "@/components/docs/nav-list";
import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { API_REFERENCE_URL, GITHUB_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/previewer", label: "Previewer" },
  { href: "/releases", label: "Releases" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">
                <SiteLogo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={API_REFERENCE_URL}
                className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent"
              >
                API reference <ExternalLink className="size-3.5" />
              </a>
              <div className="mt-4 border-t pt-4">
                <DocsNavList onNavigate={() => setOpen(false)} />
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" aria-label="NetPdf home">
          <SiteLogo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                pathname.startsWith(link.href) && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={API_REFERENCE_URL}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            API reference <ExternalLink className="size-3.5" />
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={GITHUB_URL}>GitHub</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
