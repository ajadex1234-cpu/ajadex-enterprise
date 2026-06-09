import type { PortfolioItemKind, PortfolioMetric } from "@/types/portfolio";

/** Minimal input — only name + url are required. */
export type MinimalShopifyStore = {
  name: string;
  url: string;
  featured?: boolean;
  tags?: string[];
  metrics?: PortfolioMetric[];
  kind?: PortfolioItemKind;
  projectType?: string;
  screenshot?: string;
  mobileScreenshot?: string;
  screenshots?: string[];
  allowIframe?: boolean;
  notes?: string;
};

export type ShopifyStoreMeta = {
  slug: string;
  url: string;
  domain: string;
  faviconUrl: string;
};
