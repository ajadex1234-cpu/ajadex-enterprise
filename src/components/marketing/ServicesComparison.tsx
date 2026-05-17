"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  serviceComparisonFeatures,
  serviceTiers,
} from "@/data/service-comparison";
import { fadeUp, staggerContainer } from "@/lib/motion";

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span className="text-emerald-300">✓</span>;
  }
  if (value === false) {
    return <span className="text-zinc-600">—</span>;
  }
  return <span className="text-amber-200">{value}</span>;
}

export function ServicesComparison() {
  return (
    <section className="border-y border-white/10 px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl"
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
            Compare services
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Choose the system your brand needs first.
          </h2>
          <p className="mt-6 leading-8 text-zinc-400">
            Start with the discipline that unlocks revenue fastest — then layer
            the rest as the business scales.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 overflow-x-auto rounded-lg border border-white/10"
        >
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04]">
                <th className="p-4 font-bold text-zinc-400">Capability</th>
                {serviceTiers.map((tier) => (
                  <th key={tier.id} className="p-4">
                    <p className={`font-black ${tier.accent}`}>{tier.name}</p>
                    <p className="mt-1 text-xs text-zinc-500">{tier.priceLabel}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceComparisonFeatures.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className="p-4 text-zinc-300">{row.label}</td>
                  <td className="p-4 text-center">
                    <CellValue value={row.store} />
                  </td>
                  <td className="p-4 text-center">
                    <CellValue value={row.ads} />
                  </td>
                  <td className="p-4 text-center">
                    <CellValue value={row.brand} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-3"
        >
          {serviceTiers.map((tier) => (
            <Link
              key={tier.id}
              href={tier.href}
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-black"
            >
              Discuss {tier.name}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
