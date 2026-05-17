"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, motionEase, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

type PremiumCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
  variant?: "default" | "emerald" | "amber";
};

const variantClasses = {
  default:
    "border-t border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.16),transparent_35%),linear-gradient(135deg,rgba(16,185,129,0.08),rgba(245,158,11,0.08))]",
  emerald:
    "border-y border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(16,185,129,0.08))]",
  amber:
    "border-y border-white/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.1),rgba(255,255,255,0.02),rgba(16,185,129,0.08))]",
};

export function PremiumCTA({
  eyebrow,
  title,
  description,
  primaryLabel = "Book a Strategy Call",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
  variant = "default",
}: PremiumCTAProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer}
      className={cn("px-6 py-24", variantClasses[variant], className)}
    >
      <motion.div
        variants={fadeUp}
        className="mx-auto max-w-5xl text-center"
      >
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "text-4xl font-black tracking-tight md:text-6xl",
            eyebrow && "mt-4",
          )}
        >
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-[1.02]"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
