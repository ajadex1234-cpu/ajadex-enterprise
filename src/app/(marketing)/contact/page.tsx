import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { createPageMetadata } from "@/lib/seo/metadata";
import { QuickSearch } from "@/components/ui/QuickSearch";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { FAQSection } from "@/components/marketing/FAQSection";
import { PremiumCTA } from "@/components/marketing/PremiumCTA";
import { StrategyCallBooking } from "@/components/marketing/StrategyCallBooking";
import { siteConfig } from "@/config/site";
import {
  contactFaqs,
  contactGuidanceCards,
  contactProjectTypes,
} from "@/data/contact";

export const metadata: Metadata = createPageMetadata("contact");

export default function ContactPage() {
  return (
    <PageMain>
      <PageHero>
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Contact
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Let&apos;s build a better website and online growth system.
            </h1>
            <p className="mt-7 text-lg leading-8 text-zinc-300">
              Tell AJADEX what you do, where your brand is now, and what you
              want to improve next. The best projects start with a clear goal.
            </p>

            <div className="mt-10 space-y-4 text-zinc-300">
              <p>
                <span className="font-bold text-white">Email:</span>{" "}
                {siteConfig.email}
              </p>
              <p>
                <span className="font-bold text-white">Phone:</span>{" "}
                {siteConfig.phone}
              </p>
              <p>
                <span className="font-bold text-white">Location:</span>{" "}
                {siteConfig.location}
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                Socials
              </p>
              <SocialLinks />
            </div>
          </div>

          <ContactForm />
        </Container>
      </PageHero>

      <StrategyCallBooking compact />

      <section className="border-b border-white/10 px-6 py-16">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              Quick Search
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Find the proof or service you need faster.
            </h2>
          </div>
          <QuickSearch />
        </Container>
      </section>

      <Section>
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Good fit projects
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactProjectTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-zinc-300"
              >
                {type}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <FAQSection
        eyebrow="Before You Send"
        title="A few answers before you reach out."
        items={contactFaqs}
      />

      <Section className="border-t border-white/10">
        <Container className="grid gap-6 md:grid-cols-3">
          {contactGuidanceCards.map(([title, body]) => (
            <div
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-7"
            >
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{body}</p>
            </div>
          ))}
        </Container>
      </Section>

      <PremiumCTA
        variant="default"
        eyebrow="Next step"
        title="Turn the conversation into a growth plan."
        description="Share your business, goal, and timeline. AJADEX will recommend whether to start with website, ads, SEO, content, or brand systems."
        primaryLabel="Send inquiry"
        primaryHref="#contact-form"
      />
    </PageMain>
  );
}
