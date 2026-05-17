"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/types/marketing";
import { agencyProcessSteps } from "@/data/process";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

type ProcessTimelineProps = {
  steps?: ProcessStep[];
  eyebrow?: string;
  title?: string;
  compact?: boolean;
};

export function ProcessTimeline({
  steps = agencyProcessSteps,
  eyebrow = "Process",
  title = "A clear path from audit to launch.",
  compact = false,
}: ProcessTimelineProps) {
  return (
    <section
      className={
        compact
          ? "border-b border-white/10 px-6 py-20"
          : "border-y border-white/10 bg-white/[0.02] px-6 py-24"
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            {title}
          </h2>
        </motion.div>

        <div className="relative mt-12">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/50 via-white/20 to-amber-400/50 md:left-8 md:block"
            aria-hidden
          />
          <div className="grid gap-6">
            {steps.map((step) => (
              <motion.article
                key={step.step}
                variants={scaleIn}
                className="relative grid gap-4 rounded-lg border border-white/10 bg-black/50 p-6 md:grid-cols-[5rem_1fr_auto] md:items-start md:pl-20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-lg font-black text-emerald-200 md:absolute md:left-0 md:top-6">
                  {String(step.step).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-500 md:text-right">
                  {step.duration}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
