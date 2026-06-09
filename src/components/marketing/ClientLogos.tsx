"use client";

import { motion } from "framer-motion";
import { clientLogos } from "@/data/trust";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ClientLogos() {
  return (
    <section className="border-y border-white/10 bg-black px-6 py-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-500"
        >
          Trusted by growing online brands
        </motion.p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-6 text-center"
            >
              <p className="text-sm font-black tracking-tight text-white">
                {logo.name}
              </p>
              {logo.tagline && (
                <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                  {logo.tagline}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
