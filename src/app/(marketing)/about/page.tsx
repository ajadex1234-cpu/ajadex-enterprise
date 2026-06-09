import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { aboutMissionCards, aboutValues } from "@/data/about";

export const metadata: Metadata = createPageMetadata("about");

export default function AboutPage() {
  return (
    <PageMain>
      <PageHero>
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            About
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            AJADEX is a website and digital marketing partner for growing brands.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300">
            AJADEX Expert Enterprise helps businesses build the digital
            foundation they need to look credible, launch better, generate
            attention, and market with more structure.
          </p>
        </Container>
      </PageHero>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              The work sits between design, marketing, and business strategy.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              Many businesses do not struggle because the offer is bad. They
              struggle because the online experience is unclear: the website
              does not explain the value, the marketing is disconnected from the
              landing page, and there is no follow-up system after attention is
              earned.
            </p>
            <p>
              AJADEX focuses on that entire journey. The goal is to help a
              brand present its offer clearly, create stronger campaigns, and
              build assets that can be improved over time.
            </p>
          </div>
        </Container>
      </Section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Principles
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutValues.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-white/10 bg-black p-7"
              >
                <h2 className="text-2xl font-black">{value.title}</h2>
                <p className="mt-4 leading-7 text-zinc-400">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-8 md:grid-cols-3">
          {aboutMissionCards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-7"
            >
              <p
                className={`text-sm font-bold uppercase tracking-[0.2em] ${card.accent}`}
              >
                {card.label}
              </p>
              <p className="mt-5 text-xl leading-8 text-zinc-300">{card.body}</p>
            </div>
          ))}
        </Container>
      </Section>

      <section className="border-t border-white/10 px-6 py-20">
        <Container narrow className="text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Let your portfolio prove what your brand can become.
          </h2>
          <Link
            href="/work"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-[1.02]"
          >
            View the Work
          </Link>
        </Container>
      </section>
    </PageMain>
  );
}
