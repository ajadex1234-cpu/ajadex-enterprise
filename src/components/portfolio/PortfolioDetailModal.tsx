"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { appleModalBackdrop, appleModalPanel } from "@/lib/motion/presets";
import type { PortfolioItem } from "@/types/portfolio";

type PortfolioDetailModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export function PortfolioDetailModal({
  item,
  onClose,
}: PortfolioDetailModalProps) {
  const isShopifyStore = item?.category === "shopify-stores";
  const modalBody = item?.modal?.description ?? item?.summary;

  return (
    <AnimatePresence>
      {item && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
        >
          <motion.button
            type="button"
            aria-label="Close portfolio detail"
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            initial={appleModalBackdrop.initial}
            animate={appleModalBackdrop.animate}
            exit={appleModalBackdrop.exit}
            transition={appleModalBackdrop.transition}
            onClick={onClose}
          />

          <motion.article
            variants={appleModalPanel}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border-token bg-card shadow-2xl"
          >
            <div className="relative h-64 md:h-80">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className={`object-cover ${
                  item.kind === "client" ? "object-top" : ""
                }`}
              />
              {isShopifyStore && (
                <span className="absolute left-4 top-4 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-100">
                  Shopify store
                </span>
              )}
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full border border-border-token bg-black/50 px-3 py-1 text-sm font-bold text-white backdrop-blur"
              >
                Close
              </button>
            </div>

            <div className="p-7 md:p-10">
              <p className="text-sm font-semibold text-amber-200 capitalize">
                {item.category.replace("-", " ")} ·{" "}
                {item.kind === "client" ? "Client work" : "Concept"}
              </p>
              <h2
                id="portfolio-modal-title"
                className="mt-3 text-3xl font-black tracking-tight md:text-4xl"
              >
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-soft-fg">{modalBody}</p>

              {item.modal?.highlights && item.modal.highlights.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {item.modal.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-fg"
                    >
                      <span className="mt-1 text-emerald-300">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {item.metrics && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric.label}
                      className="rounded-full border border-border-token bg-white/[0.04] px-3 py-1 text-xs text-soft-fg"
                    >
                      <span className="font-bold text-page-fg">
                        {metric.value}
                      </span>{" "}
                      {metric.label}
                    </span>
                  ))}
                </div>
              )}

              {item.modal?.gallery && item.modal.gallery.length > 0 && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {item.modal.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border-token"
                    >
                      <Image
                        src={src}
                        alt={`${item.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              )}

              {item.link && item.cta && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-page-fg px-6 py-3 font-bold text-page transition hover:scale-[1.02]"
                >
                  {item.cta}
                </Link>
              )}
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
