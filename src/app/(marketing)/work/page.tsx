import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PageMain } from "@/components/layout/PageMain";
import { SectionBlock } from "@/components/layout/SectionBlock";
import { PortfolioFilter } from "@/components/marketing/PortfolioFilter";
import { PremiumCTA } from "@/components/marketing/PremiumCTA";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { workCapabilityCards } from "@/data/work";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata("work");

export default function WorkPage() {
  return (
    <PageMain>
      <PageHero>
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Work
          </p>
          <h1 className="agency-display mt-5 max-w-4xl">
            Premium website showcases built to sell trust before the first click.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-fg">
            Add your live website links and tall screenshots here. Each project
            opens in a fullscreen browser-style modal with smooth vertical
            scrolling on hover, touch, or focus.
          </p>
        </Container>
      </PageHero>

      <SectionBlock
        eyebrow="Portfolio"
        eyebrowClassName="text-emerald-300"
        title="Hover or touch each website to preview the full page."
        description="The showcase is ready for 10+ real websites. Replace the current slots with your project names, live links, and tall screenshots."
        className="border-b-0"
      >
        <PortfolioFilter />
      </SectionBlock>

      <ProcessTimeline
        eyebrow="How we work"
        title="The delivery path behind every premium website."
      />

      <section className="border-y border-border-token bg-white/[0.02] px-6 py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {workCapabilityCards.map(([title, body]) => (
            <div
              key={title}
              className="rounded-lg border border-border-token bg-card p-7"
            >
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-soft-fg">{body}</p>
            </div>
          ))}
        </Container>
      </section>

      <PremiumCTA
        variant="amber"
        eyebrow="Your turn"
        title="Ready to add your next website to the showcase?"
        description="AJADEX can help shape your website, campaign, and brand assets into a polished digital experience that looks credible and performs clearly."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </PageMain>
  );
}
