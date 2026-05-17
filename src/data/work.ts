import type { ConceptProject, RealProject } from "@/types";

export const realProjects: RealProject[] = [
  {
    title: "Casa of Bloom Shopify Store",
    type: "Real client ecommerce build",
    image: "/testimonials/humidifier-landing-page.png",
    challenge:
      "Muhammad needed a live ecommerce presence for Casa of Bloom that could present products clearly and support online shopping.",
    solution:
      "AJADEX helped build the Shopify store and gave the brand a live storefront customers can visit, browse, and buy from.",
    deliverables: [
      "Shopify store build",
      "Product page setup",
      "Live ecommerce store",
    ],
    link: "https://casaofbloom.com",
    cta: "Open Store",
  },
  {
    title: "Humidifier Google Ads Campaign",
    type: "Real campaign proof",
    image: "/testimonials/google-ads-dashboard.png",
    challenge:
      "The product needed paid traffic from people actively searching for home fragrance, diffuser, and ambience-related products.",
    solution:
      "AJADEX ran Google Ads for the 3D simulation flame aroma diffuser and connected the campaign to the live Casa of Bloom product page.",
    deliverables: [
      "Google Ads campaign",
      "Product landing page traffic",
      "Campaign dashboard proof",
    ],
    link: "https://casaofbloom.com/products/3d-simulation-flame-aroma-diffuser-usb-home",
    cta: "View Landing Page",
  },
];

export const conceptProjects: ConceptProject[] = [
  {
    title: "Wearable Tech Store",
    type: "Ecommerce storefront concept",
    image: "/images/watch.jpeg",
    summary:
      "A product-led storefront concept showing how AJADEX structures benefit sections, trust, and buying flow for a premium gadget.",
  },
  {
    title: "Audio Accessory Campaign",
    type: "Paid social landing flow concept",
    image: "/images/headset.jpeg",
    summary:
      "A campaign-ready landing flow concept built around fast product clarity, offer framing, and retargeting angles.",
  },
  {
    title: "Gaming Gear Launch",
    type: "Launch and brand system concept",
    image: "/images/keyboard.jpeg",
    summary:
      "A launch structure concept with feature hierarchy, content pillars, and follow-up ideas for a competitive product.",
  },
];

export const workCapabilityCards = [
  [
    "Storefronts",
    "Product pages, homepages, category flows, and conversion sections.",
  ],
  [
    "Campaigns",
    "Landing pages, ad angles, retargeting plans, and offer testing.",
  ],
  [
    "Brand Systems",
    "Messaging, launch direction, content pillars, and follow-up flows.",
  ],
] as const;
