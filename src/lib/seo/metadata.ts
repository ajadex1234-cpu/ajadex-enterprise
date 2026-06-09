import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajadex.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Websites & Digital Marketing`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfolio for AJADEX Expert Enterprise — websites, ecommerce stores, paid ads systems, SEO, social media marketing, and brand growth assets.",
  keywords: [
    "ecommerce",
    "website design",
    "website development",
    "digital marketing",
    "Shopify",
    "Google Ads",
    "Lagos",
    "AJADEX",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description:
      "Website and digital marketing portfolio — websites, stores, campaigns, and growth systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AJADEX Expert Enterprise - Premium Digital Marketing Agency",
        type: "image/png",
      },
    ],
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Website and digital marketing portfolio for brands that want to grow online.",
    creator: "@ajadex_ng",
    images: ["/twitter-card.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  authors: [{ name: "AJADEX Expert Enterprise", url: siteUrl }],
  creator: "AJADEX Expert Enterprise",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

type PageSeoKey = "home" | "services" | "about" | "work" | "contact";

const pageSeo: Record<
  PageSeoKey,
  { title: string; description: string; path: string }
> = {
  home: {
    title: "Websites & Digital Marketing Portfolio",
    description:
      "AJADEX builds websites, ecommerce storefronts, paid advertising systems, and brand assets for businesses ready to grow online.",
    path: "/",
  },
  services: {
    title: "Website & Digital Marketing Services",
    description:
      "Websites, ecommerce stores, paid ads, SEO, social media, funnels, and brand growth systems designed to support measurable outcomes.",
    path: "/services",
  },
  about: {
    title: "About AJADEX",
    description:
      "Learn how AJADEX Expert Enterprise helps businesses build credible websites, digital presence, and growth systems.",
    path: "/about",
  },
  work: {
    title: "Portfolio & Case Studies",
    description:
      "Explore website builds, client Shopify work, Google Ads proof, and digital marketing case studies from AJADEX Expert Enterprise.",
    path: "/work",
  },
  contact: {
    title: "Contact & Start a Project",
    description:
      "Start a website or digital marketing project with AJADEX — strategy calls, inquiries, and project kickoffs.",
    path: "/contact",
  },
};

export function createPageMetadata(page: PageSeoKey): Metadata {
  const entry = pageSeo[page];

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `${siteUrl}${entry.path}` },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: entry.path,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: entry.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      title: entry.title,
      description: entry.description,
      images: ["/twitter-card.png"],
    },
  };
}

/**
 * SEO JSON-LD Schema - Organization
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AJADEX Expert Enterprise",
    alternateName: "AJADEX",
    description:
      "Premium digital agency providing websites, ecommerce, digital marketing, and brand growth systems.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://twitter.com/ajadex_ng",
      "https://www.linkedin.com/company/ajadex",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lagos",
      addressCountry: "NG",
      addressLocality: "Lagos",
    },
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+2347014080845",
      email: siteConfig.email,
    },
  };
}

/**
 * SEO JSON-LD Schema - Local Business
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AJADEX Expert Enterprise",
    description: "Premium digital agency for websites and digital marketing",
    image: `${siteUrl}/og-image.png`,
    priceRange: "$$",
    telephone: "+2347014080845",
    email: siteConfig.email,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lagos",
      addressCountry: "NG",
    },
    areaServed: ["NG", "USA", "UK", "EU"],
    service: [
      {
        "@type": "Service",
        name: "Website Design & Development",
        description:
          "Custom websites, ecommerce stores, landing pages, and online presence solutions",
      },
      {
        "@type": "Service",
        name: "Digital Marketing",
        description: "Paid ads, SEO, content strategy, and marketing campaigns",
      },
      {
        "@type": "Service",
        name: "Brand Growth Systems",
        description:
          "Complete brand positioning, messaging, and customer journey optimization",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "2",
    },
  };
}
