"use client";

import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export type BrowserMockupProps = {
  url: string;
  title: string;
  children: ReactNode;
  compact?: boolean;
  className?: string;
  viewportClassName?: string;
};

export function BrowserMockup({
  url,
  title,
  children,
  compact = false,
  className,
  viewportClassName,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "group/browser overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/40 backdrop-blur-xl",
        "ring-1 ring-white/[0.03]",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b border-white/10 bg-black/55 px-3 backdrop-blur-xl",
          compact ? "py-2" : "py-3",
        )}
      >
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90 shadow-[0_0_16px_rgba(248,113,113,0.45)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90 shadow-[0_0_16px_rgba(252,211,77,0.35)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90 shadow-[0_0_16px_rgba(110,231,183,0.35)]" />
        </div>

        <div className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/45 px-3 py-1.5">
          <p className="truncate text-[11px] font-medium text-zinc-400">
            {url}
          </p>
        </div>
      </div>

      <div
        className={cn(
          "relative overflow-hidden bg-[#050505]",
          compact ? "h-56" : "h-[min(74vh,760px)]",
          viewportClassName,
        )}
        aria-label={`${title} website screenshot preview`}
      >
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_26%)]" />
        {children}
      </div>
    </div>
  );
}
