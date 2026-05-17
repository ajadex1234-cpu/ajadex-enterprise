"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudyShowcase } from "@/components/marketing/CaseStudyShowcase";
import { ClientLogos } from "@/components/marketing/ClientLogos";
import { ClientResults } from "@/components/marketing/ClientResults";
import { FAQSection } from "@/components/marketing/FAQSection";
import { GoogleAdsProof } from "@/components/marketing/GoogleAdsProof";
import { PremiumCTA } from "@/components/marketing/PremiumCTA";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { TestimonialSlider } from "@/components/marketing/TestimonialSlider";
import { TrustMetrics } from "@/components/marketing/TrustMetrics";
import { clientResultMetrics } from "@/data/trust";
import { siteConfig } from "@/config/site";
import {
  homeApproachItems,
  homeFaqs,
  homeFeaturedWork,
  homeMetrics,
  homeServices,
} from "@/data/home";
import {
  fadeUp,
  motionEase,
  scaleIn,
  staggerContainer,
} from "@/lib/motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: motionEase }}
      className="min-h-screen bg-[#070707] text-white"
    >
        <section className="relative overflow-hidden border-b border-white/10 px-6 pt-36 pb-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteConfig.assets.heroPoster}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          >
            <source src={siteConfig.assets.heroVideo} type="video/mp4" />
            <source
              src={siteConfig.urls.heroVideoFallback}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.17),transparent_28%),linear-gradient(135deg,rgba(14,165,233,0.12),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:5rem_5rem]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 shadow-lg shadow-emerald-950/40"
              >
                Ecommerce websites, ads, and brand growth
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl"
              >
                Portfolio-built digital growth for brands that sell online.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
              >
                AJADEX Expert Enterprise builds ecommerce storefronts, paid
                advertising systems, and brand assets for businesses that want a
                stronger online presence and clearer path to revenue.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.div whileHover={{ y: -3, scale: 1.02 }}>
                  <Link
                    href="/work"
                    className="inline-flex justify-center rounded-full bg-white px-7 py-4 font-bold text-black transition"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.02 }}>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-black"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={scaleIn} className="relative">
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: motionEase }}
                className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.12] via-white/[0.04] to-emerald-400/[0.08] shadow-2xl shadow-black/50"
              >
                <Image
                  src="/images/watch.jpeg"
                  alt="Smart watch ecommerce product presentation"
                  width={900}
                  height={1100}
                  priority
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/75 p-6 backdrop-blur">
                  <p className="text-sm font-semibold text-emerald-200">
                    Featured ecommerce direction
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    Product-first pages built to convert attention into action.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="border-b border-white/10 bg-gradient-to-r from-emerald-950/20 via-black to-amber-950/20 px-6 py-10"
        >
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeMetrics.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20"
              >
                <p className="text-4xl font-black">{value}</p>
                <p className="mt-2 text-sm text-zinc-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ClientResults />

        <TrustMetrics
          eyebrow="Measurable results"
          title="What changed after the build."
          metrics={clientResultMetrics}
        />

        <GoogleAdsProof />

        <CaseStudyShowcase limit={2} />

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div variants={fadeUp} className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Services
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Built for the full ecommerce growth journey.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {homeServices.map((service) => (
                <motion.article
                  key={service.title}
                  variants={scaleIn}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.025] p-7 shadow-xl shadow-black/20"
                >
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div variants={fadeUp}>
              <Link
                href="/services"
                className="mt-10 inline-flex rounded-full border border-white/20 px-6 py-3 font-bold transition hover:bg-white hover:text-black"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <ClientLogos />

        <TestimonialSlider />

        <ProcessTimeline compact />

        <FAQSection
          eyebrow="Common Questions"
          title="Quick answers before you start a project."
          items={homeFaqs}
        />

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="border-y border-white/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.1),rgba(255,255,255,0.02),rgba(16,185,129,0.08))] px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
                  Selected Work
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                  Portfolio concepts for ecommerce brands.
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.02]"
              >
                See Work
              </Link>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {homeFeaturedWork.map((item) => (
                <motion.article
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl shadow-black/30"
                >
                  <div className="relative h-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-amber-200">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-zinc-400">
                      {item.result}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="px-6 py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Approach
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Strategy first. Design second. Growth always.
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {homeApproachItems.map((item) => (
                <motion.div
                  key={item}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 text-zinc-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <PremiumCTA
          eyebrow="Start your project"
          title="Ready to build a sharper ecommerce presence?"
          description="Bring your product, idea, or existing store. AJADEX will help shape the storefront, campaign path, and growth assets around it."
          primaryLabel="Book a Strategy Call"
          primaryHref="/contact"
          secondaryLabel="View case studies"
          secondaryHref="/work"
        />

      </motion.main>
  );
}
