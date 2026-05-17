import type { ServiceComparisonFeature } from "@/types/marketing";

export const serviceComparisonFeatures: ServiceComparisonFeature[] = [
  { label: "Shopify / storefront build", store: true, ads: false, brand: false },
  { label: "Product page conversion structure", store: true, ads: true, brand: false },
  { label: "Google / Meta / TikTok ads setup", store: false, ads: true, brand: false },
  { label: "Landing page & funnel direction", store: true, ads: true, brand: true },
  { label: "Brand positioning & messaging", store: false, ads: false, brand: true },
  { label: "Content pillars & launch calendar", store: false, ads: false, brand: true },
  { label: "Retargeting flow recommendations", store: false, ads: true, brand: true },
  { label: "90-day growth roadmap", store: "Add-on", ads: "Add-on", brand: true },
];

export const serviceTiers = [
  {
    id: "store",
    name: "Store Build",
    priceLabel: "Project-based",
    accent: "text-emerald-300",
    href: "/contact",
  },
  {
    id: "ads",
    name: "Ads Growth",
    priceLabel: "Project-based",
    accent: "text-sky-300",
    href: "/contact",
  },
  {
    id: "brand",
    name: "Brand System",
    priceLabel: "Project-based",
    accent: "text-amber-300",
    href: "/contact",
  },
] as const;
