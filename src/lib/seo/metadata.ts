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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Website and digital marketing portfolio for brands that want to grow online.",
  },
  robots: { index: true, follow: true },
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
    alternates: { canonical: entry.path },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: entry.path,
    },
    twitter: {
      title: entry.title,
      description: entry.description,
    },
  };
}
