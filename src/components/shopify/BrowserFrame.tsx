"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export type ViewportMode = "desktop" | "mobile";

type BrowserFrameProps = {
  url: string;
  title: string;
  faviconUrl: string;
  children: ReactNode;
  viewport?: ViewportMode;
  compact?: boolean;
  className?: string;
};

export function BrowserFrame({
  url,
  title,
  faviconUrl,
  children,
  viewport = "desktop",
  compact = false,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-token bg-[#0d0d0d] shadow-2xl shadow-black/40",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b border-border-token bg-[#141414] px-3",
          compact ? "py-2" : "py-3",
        )}
      >
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="mx-auto flex min-w-0 flex-1 items-center gap-2 rounded-md border border-border-token bg-black/50 px-3 py-1.5">
          <Image
            src={faviconUrl}
            alt=""
            width={14}
            height={14}
            unoptimized
            className="shrink-0 rounded-sm"
          />
          <span className="truncate text-xs text-zinc-400">{url}</span>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto w-full transition-[max-width] duration-300",
          viewport === "mobile" ? "max-w-[390px]" : "max-w-full",
        )}
      >
        <div
          className={cn(
            "overflow-hidden bg-[#111]",
            compact ? "h-44" : "min-h-[min(70vh,720px)]",
          )}
          aria-label={`Live preview of ${title}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
