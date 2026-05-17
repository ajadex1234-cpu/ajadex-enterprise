"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { FAQItem } from "@/types";

type FAQSectionProps = {
  eyebrow?: string;
  title?: string;
  items: FAQItem[];
};

export function FAQSection({
  eyebrow = "FAQ",
  title = "Questions clients usually ask before starting.",
  items,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-y border-white/10 bg-[radial-gradient(circle_at_15%_0%,rgba(16,185,129,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.025),rgba(14,165,233,0.08))] px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-lg border border-white/10 bg-black/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-emerald-300">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-white/10 px-5 py-5 text-zinc-400"
                  >
                    <p className="leading-7">{item.answer}</p>
                  </motion.div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
