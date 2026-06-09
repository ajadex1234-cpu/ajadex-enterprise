"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserMockup } from "@/components/portfolio/BrowserMockup";
import { ScrollingWebsitePreview } from "@/components/portfolio/ScrollingWebsitePreview";
import { motionEase } from "@/lib/motion";
import type { PortfolioItem } from "@/types/portfolio";

type PortfolioWebsiteCardProps = {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
};

export function PortfolioWebsiteCard({ item, onOpen }: PortfolioWebsiteCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const store = item.storeMeta;
  if (!store) {
    return null;
  }

  const displayName = item.title.replace(
    / — (Shopify Store|Client Website|Website Showcase|Reference Showcase)$/,
    "",
  );
  const screenshot = item.websitePreview?.screenshot ?? item.image;

  return (
    <motion.article
      layout
      id={item.id}
      role="button"
      tabIndex={0}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onTouchCancel={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      onClick={() => onOpen(item)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(item);
        }
      }}
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 18 }}
      transition={{ duration: 0.42, ease: motionEase }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30"
    >
      <BrowserMockup
        url={store.url}
        title={displayName}
        compact
        viewportClassName="h-72"
        className="bg-white/[0.045]"
      >
        <ScrollingWebsitePreview
          src={screenshot}
          alt={`${displayName} full-page website screenshot`}
          active={isHovering}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </BrowserMockup>

      <div className="flex items-start gap-3 p-4">
        <Image
          src={store.faviconUrl}
          alt=""
          width={38}
          height={38}
          unoptimized
          className="mt-0.5 rounded-lg border border-white/10 bg-black/40"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-emerald-200">
              {item.kind === "client" ? "Client website" : "Reference showcase"}
            </p>
            {item.featured && (
              <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-200">
                Featured
              </span>
            )}
          </div>
          <h3 className="mt-1 text-xl font-black">{displayName}</h3>
          <p className="mt-1 truncate text-sm text-soft-fg">{store.domain}</p>
          <p className="mt-3 text-sm leading-6 text-soft-fg line-clamp-2">
            {item.summary}
          </p>
          <p className="mt-4 text-sm font-bold text-emerald-200">
            Open fullscreen showcase →
          </p>
        </div>
      </div>
    </motion.article>
  );
}
