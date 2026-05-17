"use client";

import { motion } from "framer-motion";
import type { TrustMetric } from "@/types/marketing";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

type TrustMetricsProps = {
  eyebrow?: string;
  title?: string;
  metrics: TrustMetric[];
  className?: string;
};

export function TrustMetrics({
  eyebrow,
  title,
  metrics,
  className,
}: TrustMetricsProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className={cn(
        "border-b border-white/10 bg-gradient-to-r from-emerald-950/20 via-black to-amber-950/20 px-6 py-16",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div variants={scaleIn} className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20"
            >
              <p className="text-4xl font-black">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold text-white">
                {metric.label}
              </p>
              {metric.detail && (
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  {metric.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
