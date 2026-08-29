import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}