import { CopyButton } from "@/components/copy-button";
import { INSTALL_COMMAND } from "@/lib/site";
import { cn } from "@/lib/utils";

export function InstallCommand({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border bg-card py-1 pl-4 pr-1 font-mono text-sm shadow-sm",
        className,
      )}
    >
      <span className="select-none text-muted-foreground">$</span>
      <code className="truncate">{INSTALL_COMMAND}</code>
      <CopyButton value={INSTALL_COMMAND} className="rounded-full" label="Copy install command" />
    </div>
  );
}
