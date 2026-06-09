"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserMockup } from "@/components/portfolio/BrowserMockup";
import { ScrollingWebsitePreview } from "@/components/portfolio/ScrollingWebsitePreview";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { appleModalBackdrop } from "@/lib/motion/presets";
import type { PortfolioItem } from "@/types/portfolio";
import { cn } from "@/utils/cn";

type StoreModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export function StoreModal({ item, onClose }: StoreModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  useBodyScrollLock(item !== null);

  const store = item?.storeMeta;
  const displayName =
    item?.title.replace(
      / — (Shopify Store|Client Website|Website Showcase|Reference Showcase)$/,
      "",
    ) ?? "";
  const screenshots = useMemo(() => {
    if (!item?.websitePreview) {
      return [];
    }

    const all = [
      item.websitePreview.screenshot,
      ...(item.websitePreview.mobileScreenshot
        ? [item.websitePreview.mobileScreenshot]
        : []),
      ...(item.websitePreview.screenshots ?? []),
    ];

    return Array.from(new Set(all.filter(Boolean)));
  }, [item]);
  const activeScreenshot = screenshots[activeIndex] ?? item?.image;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex(0);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [item?.id]);

  return (
    <AnimatePresence>
      {item && store && activeScreenshot && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="store-modal-title"
        >
          <motion.button
            type="button"
            aria-label="Close website showcase"
            className="absolute inset-0"
            initial={appleModalBackdrop.initial}
            animate={appleModalBackdrop.animate}
            exit={appleModalBackdrop.exit}
            transition={appleModalBackdrop.transition}
            onClick={onClose}
          />

          <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            <header className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-border-token px-4 py-4 md:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src={store.faviconUrl}
                  alt=""
                  width={36}
                  height={36}
                  unoptimized
                  className="rounded-lg border border-border-token"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    {item.kind === "client"
                      ? "Real client website showcase"
                      : "Reference website showcase"}
                  </p>
                  <h2
                    id="store-modal-title"
                    className="truncate text-xl font-black md:text-2xl"
                  >
                    {displayName}
                  </h2>
                  <p className="truncate text-sm text-soft-fg">{store.domain}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {screenshots.length > 1 && (
                  <div className="flex rounded-full border border-border-token p-1">
                    {screenshots.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "rounded-full px-3 py-1.5 text-xs font-bold transition",
                          activeIndex === index
                            ? "bg-page-fg text-page"
                            : "text-soft-fg hover:text-page-fg",
                        )}
                      >
                        {index === 0 ? "Desktop" : `Shot ${index + 1}`}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-border-token px-4 py-2 text-sm font-bold"
                >
                  Close
                </button>
                <Link
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-page-fg px-4 py-2 text-sm font-bold text-page transition hover:scale-[1.02]"
                >
                  Open site
                </Link>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 md:px-8">
              <BrowserMockup
                url={store.url}
                title={displayName}
                className="mx-auto max-w-6xl"
                viewportClassName="h-[min(74vh,760px)]"
              >
                <ScrollingWebsitePreview
                  key={activeScreenshot}
                  src={activeScreenshot}
                  alt={`${displayName} full-page website screenshot`}
                  active
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                  durationMultiplier={0.005}
                />
              </BrowserMockup>

              {item.modal?.description && (
                <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-soft-fg">
                  {item.modal.description}
                </p>
              )}

              {item.modal?.highlights && item.modal.highlights.length > 0 && (
                <ul className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
                  {item.modal.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border-token bg-white/[0.04] px-3 py-1 text-xs text-soft-fg"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
