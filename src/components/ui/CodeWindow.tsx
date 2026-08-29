"use client";

interface CodeWindowProps {
  filename: string;
  children: React.ReactNode;
}

export function CodeWindow({ filename, children }: CodeWindowProps) {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-surface shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-secondary">{filename}</span>
      </div>
      <div className="overflow-hidden p-3 md:p-4 font-mono text-xs md:text-sm leading-snug md:leading-relaxed">
        <div className="whitespace-pre-wrap break-words">
          {children}
        </div>
      </div>
    </div>
  );
}