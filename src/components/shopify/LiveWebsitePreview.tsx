"use client";

import Image from "next/image";
import Link from "next/link";
import { useIframeEmbed } from "@/hooks/useIframeEmbed";
import { cn } from "@/utils/cn";

type LiveWebsitePreviewProps = {
  url: string;
  title: string;
  domain: string;
  faviconUrl: string;
  screenshot?: string;
  compact?: boolean;
  scrollable?: boolean;
  className?: string;
};

export function LiveWebsitePreview({
  url,
  title,
  domain,
  faviconUrl,
  screenshot,
  compact = false,
  scrollable = true,
  className,
}: LiveWebsitePreviewProps) {
  const { isBlocked, isLoading, onLoad, markBlocked } = useIframeEmbed(
    url,
    !screenshot,
  );

  const showIframe = !screenshot && !isBlocked;
  const showFallback = Boolean(screenshot) || isBlocked;

  return (
    <div className={cn("relative h-full w-full", className)}>
      {isLoading && showIframe && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0a0a0a]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-emerald-300" />
        </div>
      )}

      {showIframe && (
        <iframe
          src={url}
          title={`${title} live preview`}
          className={cn(
            "h-full w-full border-0 bg-white",
            scrollable ? "min-h-[120%]" : "min-h-full",
            compact && "pointer-events-none scale-[0.35] origin-top-left w-[285%] h-[285%]",
          )}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          onLoad={onLoad}
          onError={markBlocked}
        />
      )}

      {showFallback && (
        <div className="flex h-full min-h-[inherit] flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-emerald-950/20 p-6 text-center">
          {screenshot ? (
            <div className="relative aspect-[16/10] w-full max-w-lg overflow-hidden rounded-lg border border-border-token">
              <Image
                src={screenshot}
                alt={`${title} preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
          ) : (
            <Image
              src={faviconUrl}
              alt=""
              width={56}
              height={56}
              unoptimized
              className="rounded-xl"
            />
          )}
          <div>
            <p className="text-lg font-bold text-page-fg">{title}</p>
            <p className="mt-1 text-sm text-soft-fg">{domain}</p>
            {isBlocked && !screenshot && (
              <p className="mt-3 max-w-sm text-xs leading-6 text-zinc-500">
                This store blocks embedded previews. Open the live site to explore
                the full experience.
              </p>
            )}
          </div>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-page-fg px-5 py-2.5 text-sm font-bold text-page transition hover:scale-[1.02]"
          >
            Open site
          </Link>
        </div>
      )}
    </div>
  );
}
