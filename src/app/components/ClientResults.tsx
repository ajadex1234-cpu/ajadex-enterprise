"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const storeUrl = "https://casaofbloom.com";

export function ClientResults() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <section className="border-y border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(245,158,11,0.07))] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Client Result
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Real Shopify work, now part of the portfolio.
            </h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-white/10 bg-black/70 p-7 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                  Shopify Store Build
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Casa of Bloom for Muhammad
                </h3>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                Live store
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              AJADEX helped Muhammad build his Shopify store for Casa of Bloom,
              giving the brand a live ecommerce presence customers can visit
              and shop from.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.02]"
              >
                Preview Store
              </button>
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-black"
              >
                Open Live Site
              </a>
            </div>
          </motion.article>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/80 p-3 backdrop-blur-md md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Casa of Bloom store preview"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-lg border border-white/10 bg-[#080808] shadow-2xl shadow-black"
            >
              <div className="flex flex-col gap-3 border-b border-white/10 bg-black px-4 py-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Live Store Preview
                  </p>
                  <h2 className="mt-1 text-xl font-black">Casa of Bloom</h2>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-white hover:text-black"
                  >
                    Open live site
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-[1.02]"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="relative min-h-0 flex-1 bg-white">
                <iframe
                  src={storeUrl}
                  title="Casa of Bloom live Shopify store"
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
