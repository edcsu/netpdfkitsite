"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  className,
  label = "Copy to clipboard",
}: {
  value: string;
  className?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={copied ? "Copied" : label}
      className={cn("size-8 shrink-0", className)}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
        } catch {
          // Clipboard is unavailable (insecure context or denied permission);
          // leave the button in its idle state rather than lying about success.
        }
      }}
    >
      {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
    </Button>
  );
}
