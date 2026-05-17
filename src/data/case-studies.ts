import type { CaseStudy } from "@/types/marketing";
import { siteConfig } from "@/config/site";

export const caseStudies: CaseStudy[] = [
  {
    id: "casa-store",
    client: "Casa of Bloom",
    industry: "Home & lifestyle ecommerce",
    title: "From zero to a live Shopify storefront customers can trust.",
    image: "/testimonials/humidifier-landing-page.png",
    challenge:
      "The brand needed a credible ecommerce home — product clarity, mobile shopping flow, and a store that could support launches without rebuilding every time.",
    solution:
      "AJADEX structured the Shopify store, product presentation, and buying journey around one hero offer, then built pages that support both organic visits and paid traffic.",
    results: [
      { value: "Live", label: "Shopify store" },
      { value: "Multi-SKU", label: "Product page system" },
      { value: "Mobile-first", label: "Store experience" },
      { value: "Ready", label: "For paid traffic" },
    ],
    deliverables: [
      "Shopify store build",
      "Product page architecture",
      "Merchandising sections",
      "Launch-ready storefront",
    ],
    link: siteConfig.urls.casaOfBloom,
    cta: "View live store",
  },
  {
    id: "casa-ads",
    client: "Casa of Bloom",
    industry: "Paid search & product landing",
    title: "Google Ads connected to a product page built to convert search intent.",
    image: "/testimonials/google-ads-dashboard.png",
    challenge:
      "A strong product still fails without the right landing path. Casa of Bloom needed paid search traffic sent to a page that matched buyer intent.",
    solution:
      "AJADEX ran Google Ads for the aroma diffuser offer and connected campaign traffic to the live product page with clear product proof and purchase flow.",
    results: [
      { value: "Live", label: "Campaign proof" },
      { value: "Search", label: "Intent-based traffic" },
      { value: "1", label: "Primary landing page" },
      { value: "Tracked", label: "Campaign structure" },
    ],
    deliverables: [
      "Google Ads setup",
      "Product landing alignment",
      "Campaign dashboard proof",
      "Traffic-to-page connection",
    ],
    link: siteConfig.urls.casaHumidifierLanding,
    cta: "View landing page",
  },
];
