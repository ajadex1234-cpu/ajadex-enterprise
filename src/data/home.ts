import type {
  FAQItem,
  FeaturedWorkItem,
  MetricItem,
  ServiceCard,
} from "@/types";

export const homeServices: ServiceCard[] = [
  {
    title: "Premium Website Builds",
    description:
      "Business websites, ecommerce stores, landing pages, booking systems, portfolios, and custom web experiences built around trust and conversion.",
  },
  {
    title: "Performance Marketing",
    description:
      "Google Ads, Meta, TikTok, SEO direction, landing pages, retargeting, and campaign systems built around measurable growth signals.",
  },
  {
    title: "Brand Growth Assets",
    description:
      "Positioning, content direction, launch plans, email or WhatsApp follow-up, and proof assets that make the brand easier to choose.",
  },
];

export const homeMetrics: MetricItem[] = [
  { value: "10", label: "Website slots ready" },
  { value: "Full-page", label: "Scrolling showcase system" },
  { value: "3", label: "Core growth disciplines" },
  { value: "90-day", label: "Growth roadmap thinking" },
];

export const homeFeaturedWork: FeaturedWorkItem[] = [
  {
    title: "Website Showcase System",
    category: "Full-page previews",
    image: "/images/watch.jpeg",
    result: "Tall website screenshots open in a premium modal and scroll smoothly on hover or touch.",
  },
  {
    title: "Conversion Landing Pages",
    category: "Campaign-ready pages",
    image: "/images/headset.jpeg",
    result: "Landing page layouts shaped around product clarity, trust, and action.",
  },
  {
    title: "Brand Growth Systems",
    category: "Digital marketing",
    image: "/images/keyboard.jpeg",
    result: "Website, content, ads, and follow-up direction planned around one growth goal.",
  },
];

export const homeWhyChooseItems = [
  {
    title: "Premium presentation",
    description:
      "Your work is shown through cinematic browser mockups, full-page previews, and focused project storytelling.",
  },
  {
    title: "Website plus marketing thinking",
    description:
      "AJADEX does not stop at pages. Each build can connect to offers, campaigns, SEO basics, content, and follow-up.",
  },
  {
    title: "Built for trust",
    description:
      "Every section is shaped around clarity, credibility, proof, and a simple next step for potential customers.",
  },
  {
    title: "Scalable portfolio system",
    description:
      "Add more website links and screenshots without rebuilding the design. The system is ready for 10+ projects.",
  },
] as const;

export const founderHighlights = [
  "Website design and development direction",
  "Ecommerce and landing page strategy",
  "Digital marketing systems across paid ads, SEO, and content",
  "Fast communication and launch-focused delivery",
] as const;

export const homeFaqs: FAQItem[] = [
  {
    question: "Can AJADEX help if I only have a product idea?",
    answer:
      "Yes. AJADEX can help shape the offer, website structure, page flow, marketing plan, and launch direction before the brand is fully built.",
  },
  {
    question: "Do you only build Shopify stores?",
    answer:
      "No. Shopify is only one option. AJADEX can build business websites, ecommerce stores, landing pages, portfolios, booking pages, campaign pages, and other website types depending on the goal.",
  },
  {
    question: "What kinds of digital marketing do you handle?",
    answer:
      "AJADEX can support Google Ads, Meta Ads, TikTok Ads, SEO direction, content strategy, landing pages, funnels, retargeting, email or WhatsApp follow-up, and launch campaigns.",
  },
  {
    question: "Can you help with both website design and marketing?",
    answer:
      "Yes. The strongest projects connect the website, offer, content, ads, tracking, and follow-up system so the brand has a complete online growth path.",
  },
];

export const homeApproachItems = [
  "Start with the offer, audience, and proof before designing the interface.",
  "Build pages around trust, speed, conversion, and clear next actions.",
  "Connect campaigns, landing pages, tracking, follow-up, and retargeting.",
  "Turn each completed project into portfolio proof the brand can reuse.",
] as const;
