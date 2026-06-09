import type { ConceptProject, RealProject } from "@/types";

export const realProjects: RealProject[] = [];

export const conceptProjects: ConceptProject[] = [
  {
    title: "Premium Website Showcase",
    type: "Full-page website preview system",
    image: "/images/watch.jpeg",
    summary:
      "A cinematic portfolio format for showing tall website screenshots inside browser-style modals.",
  },
  {
    title: "Campaign Landing Page Direction",
    type: "Marketing page concept",
    image: "/images/headset.jpeg",
    summary:
      "A landing page direction built around fast clarity, offer framing, and conversion-focused structure.",
  },
  {
    title: "Brand Growth System",
    type: "Website and marketing concept",
    image: "/images/keyboard.jpeg",
    summary:
      "A launch structure that connects website sections, content pillars, campaign angles, and follow-up.",
  },
];

export const workCapabilityCards = [
  [
    "Websites",
    "Business websites, ecommerce stores, landing pages, booking pages, and conversion sections.",
  ],
  [
    "Campaigns",
    "Google Ads, Meta/TikTok direction, landing pages, retargeting plans, and offer testing.",
  ],
  [
    "Brand Proof Systems",
    "Messaging, launch direction, content pillars, case-study assets, and follow-up flows.",
  ],
] as const;
