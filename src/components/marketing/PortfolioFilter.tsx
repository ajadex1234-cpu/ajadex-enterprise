"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";
import type { PortfolioCategory } from "@/types/marketing";
import { motionEase, scaleIn } from "@/lib/motion";

export function PortfolioFilter() {
  const [active, setActive] = useState<PortfolioCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {portfolioCategories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                isActive
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.35, ease: motionEase }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-black/30"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${
                    item.kind === "client" ? "object-top" : ""
                  }`}
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    item.kind === "client"
                      ? "bg-emerald-400/20 text-emerald-100"
                      : "bg-sky-400/20 text-sky-100"
                  }`}
                >
                  {item.kind === "client" ? "Client work" : "Concept"}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-amber-200 capitalize">
                  {item.category.replace("-", " ")}
                </p>
                <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.summary}
                </p>
                {item.metrics && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                      >
                        <span className="font-bold text-white">{m.value}</span>{" "}
                        {m.label}
                      </span>
                    ))}
                  </div>
                )}
                {item.link && item.cta && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-bold text-emerald-200 transition hover:text-white"
                  >
                    {item.cta} →
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
