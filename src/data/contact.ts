import type { FAQItem } from "@/types";

export const contactProjectTypes = [
  "New ecommerce website",
  "Store redesign",
  "Paid ads setup",
  "Brand growth strategy",
  "Launch campaign",
] as const;

export const contactFormProjectOptions = [
  "New ecommerce website",
  "Store redesign",
  "Paid ads setup",
  "Brand growth strategy",
  "Launch campaign",
] as const;

export const contactFaqs: FAQItem[] = [
  {
    question: "What should I include in my project inquiry?",
    answer:
      "Include what you sell, your current website or social page if you have one, the goal you want to reach, and whether you need a store, ads, branding, or a full growth system.",
  },
  {
    question: "Can I contact AJADEX directly on WhatsApp?",
    answer:
      "Yes. Use the WhatsApp button or the inquiry form's WhatsApp option. It opens a prefilled message so you can send the project details faster.",
  },
  {
    question: "Do I need a full brief before reaching out?",
    answer:
      "No. A short explanation is enough to start. The details can be clarified during the strategy conversation.",
  },
];

export const contactGuidanceCards = [
  [
    "Share the product",
    "What do you sell, who is it for, and what makes it worth buying?",
  ],
  [
    "Share the goal",
    "More sales, better design, launch support, ad setup, or a complete growth system.",
  ],
  [
    "Share the timeline",
    "When do you want to launch, test, or start improving performance?",
  ],
] as const;
