"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/case-studies";
import { fadeUp, scaleIn, scrollReveal, staggerContainer } from "@/lib/motion";
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
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

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
              Premium storytelling with measurable outcomes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Each project is documented with the challenge, the system built,
              and the client results that prove the work.
            </p>
          </motion.div>
        )}

        <motion.div className="grid gap-10">
          {items.map((study) => (
            <motion.article
              key={study.id}
              variants={scaleIn}
              className="overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-2xl shadow-black/30"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[360px] bg-white lg:min-h-[480px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-top"
                  />
                </div>
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
                      {study.client} · {study.industry}
                    </p>
                    <h3 className="mt-4 text-3xl font-black md:text-4xl">
                      {study.title}
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-400">
                      {study.challenge}
                    </p>
                    <p className="mt-4 leading-7 text-zinc-300">
                      {study.solution}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-lg border border-white/10 bg-black/40 p-4"
                      >
                        <p className="text-2xl font-black text-emerald-200">
                          {result.value}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <motion.div
                    {...scrollReveal}
                    className="mt-8 flex flex-wrap gap-2"
                  >
                    {study.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </motion.div>

                  <Link
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.02]"
                  >
                    {study.cta}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
