import type { FAQItem, ServicePackage } from "@/types";

export const servicePackages: ServicePackage[] = [
  {
    title: "Premium Website Design & Development",
    summary:
      "For businesses that need a polished website, landing page, portfolio, booking page, ecommerce store, or custom online presence that feels credible from the first click.",
    includes: [
      "Website structure and page flow",
      "Homepage, service, product, booking, or landing page direction",
      "Conversion copy for key sections",
      "Mobile-first responsive layout",
      "Trust, proof, CTA, tracking, and lead capture sections",
    ],
  },
  {
    title: "Performance Marketing Campaigns",
    summary:
      "For brands that want marketing campaigns with tracking, creative direction, landing pages, and clear optimization priorities from day one.",
    includes: [
      "Google, Meta, TikTok, or multi-channel campaign planning",
      "Audience and offer strategy",
      "SEO and content direction when needed",
      "Landing page direction",
      "Retargeting flow recommendations",
      "Weekly performance review structure",
    ],
  },
  {
    title: "Brand Growth System",
    summary:
      "For businesses ready to look more credible, communicate better, and create repeatable content, launch, proof, and customer follow-up systems.",
    includes: [
      "Brand positioning and messaging",
      "Content pillars for social media",
      "Email and WhatsApp follow-up flows",
      "Launch calendar and campaign assets",
      "Growth roadmap for the next 90 days",
    ],
  },
];

export const serviceProcess = [
  "Audit the offer, audience, proof, current website, content, and online presence.",
  "Map the website, funnel, campaign, content, and follow-up system around one business goal.",
  "Build or refine the pages, assets, tracking, SEO basics, and launch path.",
  "Review performance signals and improve the highest-impact parts first.",
] as const;

export const serviceFaqs: FAQItem[] = [
  {
    question: "What types of websites can AJADEX build?",
    answer:
      "AJADEX can build business websites, ecommerce stores, landing pages, portfolios, booking websites, service pages, product pages, campaign pages, and custom website experiences based on the business goal.",
  },
  {
    question: "Do you only work with ecommerce businesses?",
    answer:
      "No. Ecommerce is one strong area of proof, but AJADEX also works with service businesses, personal brands, creators, agencies, local businesses, startups, and any brand that needs a stronger website or digital marketing system.",
  },
  {
    question: "What kinds of digital marketing can you handle?",
    answer:
      "AJADEX can help with Google Ads, Meta Ads, TikTok Ads, SEO direction, content strategy, landing pages, funnels, retargeting, email or WhatsApp follow-up, launch campaigns, and performance tracking.",
  },
  {
    question: "Can you work with an existing website?",
    answer:
      "Yes. AJADEX can audit an existing website, improve the page structure, redesign weak sections, add better CTAs, improve messaging, and connect it to stronger marketing campaigns.",
  },
  {
    question: "How do you decide what service a brand needs first?",
    answer:
      "The first step is an audit of the business goal, audience, offer, current website, content, traffic sources, and available proof. That decides whether website, ads, SEO, content, branding, or funnel work should come first.",
  },
  {
    question: "Can you build the website and also market it?",
    answer:
      "Yes. AJADEX can handle the website and the marketing path together so the design, offer, content, ads, tracking, and follow-up system support the same goal.",
  },
];
