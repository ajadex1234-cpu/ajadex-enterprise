"use client";

import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { useRotatingIndex } from "@/hooks/useRotatingIndex";
import { motionEase } from "@/lib/motion";

export function TestimonialSlider() {
  const { index, goNext, goPrevious, goTo, pause, resume } = useRotatingIndex(
    testimonials.length,
    { intervalMs: 5500, autoplay: true },
  );

  const active = testimonials[index];

  return (
    <section className="border-y border-white/10 bg-[radial-gradient(circle_at_15%_0%,rgba(16,185,129,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.025),rgba(14,165,233,0.08))] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
          Client voice
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          What founders say after working with AJADEX.
        </h2>

        <motion.div
          layout
          className="relative mt-12 overflow-hidden rounded-lg border border-border-token bg-card/60 p-8 md:p-12"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: motionEase }}
            >
              <p className="text-xl leading-9 text-zinc-200 md:text-2xl md:leading-10">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-white/10 pt-6">
                <p className="text-lg font-bold text-white">{active.name}</p>
                <p className="mt-1 text-sm text-emerald-200">
                  {active.role} · {active.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <motion.div
            className="mt-8 flex items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-emerald-300"
                      : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrevious}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-black"
                aria-label="Previous testimonial"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={goNext}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-black"
                aria-label="Next testimonial"
              >
                Next
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
