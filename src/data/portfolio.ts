import type { PortfolioCategory, PortfolioItem } from "@/types/marketing";
import { siteConfig } from "@/config/site";

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "paid-ads", label: "Paid ads" },
  { id: "brand", label: "Brand & launch" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "casa-store",
    title: "Casa of Bloom Shopify Store",
    category: "ecommerce",
    kind: "client",
    image: "/testimonials/humidifier-landing-page.png",
    summary:
      "Live Shopify storefront built for Muhammad — product clarity, mobile shopping, and a credible brand home online.",
    link: siteConfig.urls.casaOfBloom,
    cta: "Open store",
    metrics: [
      { value: "Live", label: "Store status" },
      { value: "Shopify", label: "Platform" },
    ],
  },
  {
    id: "casa-ads",
    title: "Humidifier Google Ads Campaign",
    category: "paid-ads",
    kind: "client",
    image: "/testimonials/google-ads-dashboard.png",
    summary:
      "Google Ads campaign proof connected to the Casa of Bloom product landing page for search-intent buyers.",
    link: siteConfig.urls.casaHumidifierLanding,
    cta: "View landing page",
    metrics: [
      { value: "Active", label: "Campaign" },
      { value: "Google", label: "Channel" },
    ],
  },
  {
    id: "watch-concept",
    title: "Wearable Tech Store",
    category: "ecommerce",
    kind: "concept",
    image: "/images/watch.jpeg",
    summary:
      "Premium gadget storefront concept with benefit-led sections and conversion-focused product flow.",
  },
  {
    id: "headset-concept",
    title: "Audio Accessory Campaign",
    category: "paid-ads",
    kind: "concept",
    image: "/images/headset.jpeg",
    summary:
      "Paid social landing flow concept built for cold traffic, offer clarity, and retargeting readiness.",
  },
  {
    id: "keyboard-concept",
    title: "Gaming Gear Launch",
    category: "brand",
    kind: "concept",
    image: "/images/keyboard.jpeg",
    summary:
      "Launch and brand system concept with offer hierarchy, content pillars, and follow-up structure.",
  },
];
