import type { PortfolioItem } from "@/types/portfolio";

export function isShopifyStoreItem(item: PortfolioItem): boolean {
  return item.category === "shopify-stores" && Boolean(item.storeMeta);
}
