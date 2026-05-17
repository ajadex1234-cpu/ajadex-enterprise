import type { FAQItem, ServicePackage } from "@/types";

export const servicePackages: ServicePackage[] = [
  {
    title: "Ecommerce Store Build",
    summary:
      "For product brands that need a polished storefront, product presentation, and a reliable path from visitor to checkout.",
    includes: [
      "Storefront structure and page flow",
      "Homepage, collection, product, and checkout direction",
      "Conversion copy for product sections",
      "Mobile-first responsive layout",
      "Trust, proof, and urgency sections",
    ],
  },
  {
    title: "Paid Ads Growth Setup",
    summary:
      "For brands that want campaigns set up with tracking, creative direction, landing pages, and clear optimization priorities.",
    includes: [
      "Meta, TikTok, or Google campaign planning",
      "Audience and offer strategy",
      "Landing page direction",
      "Retargeting flow recommendations",
      "Weekly performance review structure",
    ],
  },
  {
    title: "Brand Scaling System",
    summary:
      "For businesses ready to look more credible, communicate better, and create a repeatable content and launch engine.",
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
  "Audit the product, audience, offer, and current online presence.",
  "Map the store, funnel, campaign, and content system around the business goal.",
  "Build or refine the pages, assets, tracking, and launch flow.",
  "Review performance signals and improve the highest-impact parts first.",
] as const;

export const serviceFaqs: FAQItem[] = [
  {
    question: "What do I need before starting an ecommerce project?",
    answer:
      "You should have a product or product idea, brand name, basic pricing, product photos if available, and a clear goal for what you want the store or campaign to achieve.",
  },
  {
    question: "Can you work with an existing store?",
    answer:
      "Yes. AJADEX can audit the current store, improve the product pages, refine the customer journey, and connect the store to better campaign or content systems.",
  },
  {
    question: "Do you run ads after building the store?",
    answer:
      "Yes. Ads can be part of the growth setup, especially when the product page, offer, landing path, and tracking are ready for traffic.",
  },
  {
    question: "How do you decide what service a brand needs first?",
    answer:
      "The first step is usually an audit of the product, audience, offer, current online presence, and business goal. That decides whether store, ads, branding, or funnel work should come first.",
  },
];
