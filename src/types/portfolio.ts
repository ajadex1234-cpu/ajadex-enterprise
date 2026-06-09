import type { ShopifyStoreMeta } from "@/types/shopify-store";

export type PortfolioCategorySlug =
  | "ecommerce"
  | "paid-ads"
  | "brand"
  | "shopify-stores";

export type PortfolioModalContent = {
  /** Longer copy shown only inside the modal */
  description?: string;
  highlights?: string[];
  gallery?: string[];
};

export type WebsitePreview = {
  screenshot: string;
  mobileScreenshot?: string;
  screenshots?: string[];
  allowIframe?: boolean;
};

export type PortfolioFilterCategory = "all" | PortfolioCategorySlug;

export type PortfolioItemKind = "client" | "concept";

export type PortfolioMetric = {
  value: string;
  label: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategorySlug;
  kind: PortfolioItemKind;
  image: string;
  summary: string;
  link?: string;
  cta?: string;
  metrics?: PortfolioMetric[];
  /** Rich “page” content for the detail modal */
  modal?: PortfolioModalContent;
  websitePreview?: WebsitePreview;
  /** Auto-generated for minimal Shopify store entries */
  storeMeta?: ShopifyStoreMeta;
  featured?: boolean;
  tags?: string[];
};

export type PortfolioCategoryOption = {
  id: PortfolioFilterCategory;
  label: string;
};

export type PortfolioQueryOptions = {
  category?: PortfolioFilterCategory;
  kind?: PortfolioItemKind;
  limit?: number;
  offset?: number;
};
