import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { FAQSection } from "@/components/marketing/FAQSection";
import { PremiumCTA } from "@/components/marketing/PremiumCTA";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { ServicesComparison } from "@/components/marketing/ServicesComparison";
import { StrategyCallBooking } from "@/components/marketing/StrategyCallBooking";
import { serviceFaqs, servicePackages } from "@/data/services";

export default function ServicesPage() {
  return (
    <PageMain>
      <PageHero>
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Services
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Ecommerce and marketing systems built to support real sales.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300">
            AJADEX helps brands move from scattered online activity to a
            connected system: store, offer, ads, content, follow-up, and
            performance tracking.
          </p>
        </Container>
      </PageHero>

      <FAQSection
        eyebrow="Service FAQ"
        title="What to know before choosing a service."
        items={serviceFaqs}
      />

      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          {servicePackages.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-7"
            >
              <h2 className="text-3xl font-black">{service.title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{service.summary}</p>
              <div className="mt-8 space-y-3">
                {service.includes.map((item) => (
                  <p
                    key={item}
                    className="border-t border-white/10 pt-3 text-sm text-zinc-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </Section>

      <ServicesComparison />

      <ProcessTimeline title="A focused build process, not random marketing tasks." />

      <StrategyCallBooking />

      <PremiumCTA
        variant="emerald"
        title="Need a store, campaign, or full growth system?"
        description="Send your product details, current website if you have one, and the goal you want the brand to reach next."
        primaryLabel="Discuss a Project"
        primaryHref="/contact"
      />
    </PageMain>
  );
}
