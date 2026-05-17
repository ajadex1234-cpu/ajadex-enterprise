import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { CaseStudyShowcase } from "@/components/marketing/CaseStudyShowcase";
import { GoogleAdsProof } from "@/components/marketing/GoogleAdsProof";
import { PortfolioFilter } from "@/components/marketing/PortfolioFilter";
import { PremiumCTA } from "@/components/marketing/PremiumCTA";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { workCapabilityCards } from "@/data/work";

export default function WorkPage() {
  return (
    <PageMain>
      <PageHero>
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Work
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Real ecommerce work first, concept explorations second.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300">
            This portfolio now leads with the work AJADEX has actually done:
            Shopify store building, Google Ads campaign proof, and product
            landing page execution.
          </p>
        </Container>
      </PageHero>

      <Section>
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Portfolio
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Filter work by growth discipline.
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Browse client builds, paid ads proof, and brand launch concepts in
              one place.
            </p>
          </div>
          <PortfolioFilter />
        </Container>
      </Section>

      <CaseStudyShowcase showHeader={false} />

      <GoogleAdsProof />

      <ProcessTimeline
        eyebrow="How we work"
        title="The delivery path behind every case study."
      />

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {workCapabilityCards.map(([title, body]) => (
            <div
              key={title}
              className="rounded-lg border border-white/10 bg-black p-7"
            >
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{body}</p>
            </div>
          ))}
        </Container>
      </section>

      <PremiumCTA
        variant="amber"
        eyebrow="Your turn"
        title="Your product can be the next real case study."
        description="AJADEX can help shape your store, campaign, and brand assets into a portfolio-worthy digital experience."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </PageMain>
  );
}
