import { cn } from "@/lib/utils";

/** Wordmark: a stylised page corner-fold beside the name. */
export function SiteLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 font-heading font-semibold", className)}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-5 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </svg>
      <span className="tracking-tight">
        Net<span className="text-primary">Pdf</span>
      </span>
    </span>
  );
}
