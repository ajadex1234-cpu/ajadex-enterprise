"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { strategyCallSteps } from "@/data/process";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type StrategyCallBookingProps = {
  compact?: boolean;
};

export function StrategyCallBooking({ compact = false }: StrategyCallBookingProps) {
  const whatsappHref = `https://wa.me/${siteConfig.phoneE164}?text=${encodeURIComponent(
    "Hi AJADEX, I would like to book a strategy call about my website or digital marketing project.",
  )}`;

  return (
    <section
      className={
        compact
          ? "px-6 py-16"
          : "border-y border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.14),transparent_34%)] px-6 py-24"
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Strategy call
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Book a focused growth conversation.
          </h2>
          <p className="mt-6 leading-8 text-zinc-400">
            A short call to clarify your business, current online setup, and
            the fastest path to a stronger website, campaign, or launch system.
          </p>
          <div className="mt-8 space-y-2 text-sm text-zinc-500">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
          </div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          className="rounded-lg border border-white/10 bg-white/[0.035] p-7 md:p-10"
        >
          <h3 className="text-xl font-black">What to prepare</h3>
          <ol className="mt-6 space-y-4">
            {strategyCallSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 border-t border-white/10 pt-4 first:border-0 first:pt-0"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-sm font-bold text-emerald-200">
                  {index + 1}
                </span>
                <span className="leading-7 text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
          <motion.div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-white px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
            >
              Send project inquiry
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 font-bold text-emerald-100 transition hover:bg-emerald-400 hover:text-black"
            >
              Book via WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
