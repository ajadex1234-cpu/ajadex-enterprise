import type {
  FAQItem,
  FeaturedWorkItem,
  MetricItem,
  ServiceCard,
} from "@/types";

export const homeServices: ServiceCard[] = [
  {
    title: "Ecommerce Store Builds",
    description:
      "Conversion-focused storefronts, product pages, checkout flows, and merchandising systems for brands ready to sell with confidence.",
  },
  {
    title: "Paid Ads & Funnels",
    description:
      "Meta, TikTok, and Google campaign structures with landing pages, retargeting, tracking, and weekly optimization.",
  },
  {
    title: "Brand Growth Systems",
    description:
      "Positioning, content direction, product offer strategy, email flows, and launch plans that make the brand easier to trust.",
  },
];

export const homeMetrics: MetricItem[] = [
  { value: "3", label: "Core growth systems" },
  { value: "30+", label: "Launch assets planned per project" },
  { value: "24/7", label: "Storefront availability mindset" },
  { value: "1", label: "Clear brand growth partner" },
];

export const homeFeaturedWork: FeaturedWorkItem[] = [
  {
    title: "Wearable Tech Store",
    category: "Ecommerce build",
    image: "/images/watch.jpeg",
    result: "Premium product page system for faster buying decisions.",
  },
  {
    title: "Audio Accessory Campaign",
    category: "Paid social funnel",
    image: "/images/headset.jpeg",
    result: "Ad-ready landing flow for cold traffic and retargeting.",
  },
  {
    title: "Gaming Gear Launch",
    category: "Brand and offer setup",
    image: "/images/keyboard.jpeg",
    result: "Launch structure built around product demand and trust.",
  },
];

export const homeFaqs: FAQItem[] = [
  {
    question: "Can AJADEX help if I only have a product idea?",
    answer:
      "Yes. AJADEX can help shape the offer, page structure, store direction, and launch plan before the brand is fully built.",
  },
  {
    question: "Do you only build Shopify stores?",
    answer:
      "Shopify is a strong fit for ecommerce, but the strategy can also support landing pages, campaign pages, and brand growth systems.",
  },
  {
    question: "Can you help with both store design and ads?",
    answer:
      "Yes. The goal is to connect the store, landing page, offer, and campaign traffic so they work together instead of separately.",
  },
];

export const homeApproachItems = [
  "Clarify the offer and audience before building pages.",
  "Design product pages around trust, proof, and fast decisions.",
  "Connect ads, landing pages, analytics, and retargeting.",
  "Create content direction that keeps the brand visible.",
] as const;
