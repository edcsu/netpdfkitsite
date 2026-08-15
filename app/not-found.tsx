import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        This page isn&apos;t in the document
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The link may be out of date. The documentation index lists every guide.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/docs">Browse the docs</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}
