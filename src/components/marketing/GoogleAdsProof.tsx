"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { scrollReveal, scrollRevealScale } from "@/lib/motion";

const landingPageUrl = siteConfig.urls.casaHumidifierLanding;

export function GoogleAdsProof() {
  return (
    <section className="border-y border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_34%),linear-gradient(135deg,rgba(16,185,129,0.08),rgba(245,158,11,0.08))] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={scrollReveal.initial}
            whileInView={scrollReveal.whileInView}
            viewport={scrollReveal.viewport}
            transition={scrollReveal.transition}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              Google Ads Proof
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Real campaign proof for a product landing page.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              AJADEX ran Google Ads for the Casa of Bloom 3D simulation flame
              aroma diffuser product page, connecting paid search traffic to a
              live ecommerce landing page.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={landingPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center font-bold text-black transition hover:scale-[1.02]"
              >
                View Landing Page
              </a>
              <a
                href="/testimonials/google-ads-dashboard.png"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-black"
              >
                Open Proof Image
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={scrollRevealScale.initial}
            whileInView={scrollRevealScale.whileInView}
            viewport={scrollRevealScale.viewport}
            transition={scrollRevealScale.transition}
            className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]"
          >
            <article className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-black/30">
              <div className="relative h-[420px] bg-white">
                <Image
                  src="/testimonials/google-ads-dashboard.png"
                  alt="Google Ads dashboard proof for Casa of Bloom campaign"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="border-t border-white/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
                  Campaign dashboard
                </p>
                <p className="mt-2 text-zinc-400">
                  Proof image from the Google Ads campaign setup/performance.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-black/30">
              <div className="relative h-[420px] bg-white">
                <Image
                  src="/testimonials/humidifier-landing-page.png"
                  alt="Humidifier product landing page for Casa of Bloom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top"
                />
              </div>
              <div className="border-t border-white/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">
                  Product landing page
                </p>
                <p className="mt-2 text-zinc-400">
                  Paid traffic was sent to the 3D simulation flame aroma
                  diffuser product page.
                </p>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
