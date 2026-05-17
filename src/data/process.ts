import type { ProcessStep } from "@/types/marketing";

export const agencyProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & audit",
    description:
      "Review the product, audience, offer, current pages, and revenue goal so the project starts with clarity.",
    duration: "Days 1–3",
  },
  {
    step: 2,
    title: "Strategy & funnel map",
    description:
      "Define the store structure, campaign path, messaging, and priority assets before production begins.",
    duration: "Days 4–7",
  },
  {
    step: 3,
    title: "Design & build",
    description:
      "Create storefronts, landing pages, ad-ready sections, and brand assets aligned to the growth plan.",
    duration: "Week 2–4",
  },
  {
    step: 4,
    title: "Launch & optimize",
    description:
      "Connect tracking, launch campaigns, review performance signals, and improve the highest-impact areas first.",
    duration: "Ongoing",
  },
];

export const strategyCallSteps = [
  "Share what you sell and who it is for",
  "Outline your current store, ads, or social presence",
  "Define the revenue goal for the next 90 days",
  "Get a recommended build or growth path from AJADEX",
] as const;
