import type { PortfolioItem } from "@/types/portfolio";
import { buildShopifyPortfolioItems } from "@/lib/portfolio/buildPortfolio";
import { shopifyStoreEntries } from "@/data/portfolio/shopify-stores";

/** Auto-built from minimal website showcase entries. */
export const shopifyStores: PortfolioItem[] =
  buildShopifyPortfolioItems(shopifyStoreEntries);

export const portfolioItems: PortfolioItem[] = [...shopifyStores];
