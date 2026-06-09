"use client";

import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { getCaseStudies } from "@/lib/case-studies";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/utils/cn";

type CaseStudyShowcaseProps = {
  limit?: number;
  showHeader?: boolean;
  className?: string;
};

export function CaseStudyShowcase({
  limit,
  showHeader = true,
  className,
}: CaseStudyShowcaseProps) {
  const items = getCaseStudies(caseStudies, { limit });

  return (
    <section
      className={cn(
        "border-y border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.1),transparent_30%)] px-6 py-24",
        className,
      )}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl"
      >
        {showHeader && (
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Case studies
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Real project proof with context, deliverables, and outcomes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Each case study documents the client challenge, the system AJADEX
              delivered, and the proof assets available today.
            </p>
          </motion.div>
        )}

        <motion.div className="grid gap-10">
          {items.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
