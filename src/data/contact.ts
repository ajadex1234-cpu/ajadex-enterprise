import type { FAQItem } from "@/types";

export const contactProjectTypes = [
  "New business website",
  "Ecommerce store",
  "Landing page",
  "Website redesign",
  "Google / Meta / TikTok ads",
  "SEO and content strategy",
  "Brand growth strategy",
  "Launch campaign",
] as const;

export const contactFormProjectOptions = [
  "New business website",
  "Ecommerce store",
  "Landing page",
  "Website redesign",
  "Google / Meta / TikTok ads",
  "SEO and content strategy",
  "Brand growth strategy",
  "Launch campaign",
] as const;

export const contactFaqs: FAQItem[] = [
  {
    question: "What should I include in my project inquiry?",
    answer:
      "Include what your business does, your current website or social page if you have one, the goal you want to reach, and whether you need a website, ecommerce store, ads, SEO, content, branding, or a full growth system.",
  },
  {
    question: "Can I contact AJADEX directly on WhatsApp?",
    answer:
      "Yes. Use the WhatsApp button or the inquiry form's WhatsApp option. It opens a prefilled message so you can send the project details faster.",
  },
  {
    question: "Can I reach out if I am not sure what I need yet?",
    answer:
      "Yes. A short explanation is enough to start. AJADEX can help you decide whether the best first step is a website, landing page, ads, SEO/content, branding, or a full digital growth plan.",
  },
  {
    question: "Can AJADEX handle both website and marketing?",
    answer:
      "Yes. The website, messaging, content, ads, tracking, and follow-up can be planned together so the project is not just a design task but a growth system.",
  },
];

export const contactGuidanceCards = [
  [
    "Share the business",
    "What do you offer, who is it for, and what makes it worth choosing?",
  ],
  [
    "Share the goal",
    "More leads, sales, bookings, traffic, better design, launch support, ad setup, SEO, or a complete growth system.",
  ],
  [
    "Share the timeline",
    "When do you want to launch, test, or start improving performance?",
  ],
] as const;
