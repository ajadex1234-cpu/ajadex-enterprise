import type {
  PortfolioFilterCategory,
  PortfolioItem,
  PortfolioQueryOptions,
} from "@/types/portfolio";
import { filterPortfolioByCategory, filterPortfolioByKind } from "./filter";

export function getPortfolioItems(
  items: readonly PortfolioItem[],
  options: PortfolioQueryOptions = {},
): PortfolioItem[] {
  const { category = "all", kind, limit, offset = 0 } = options;

  let result = filterPortfolioByCategory(items, category);

  if (kind) {
    result = filterPortfolioByKind(result, kind);
  }

  if (offset > 0) {
    result = result.slice(offset);
  }

  if (typeof limit === "number" && limit >= 0) {
    result = result.slice(0, limit);
  }

  return result;
}

export function getPortfolioItemById(
  items: readonly PortfolioItem[],
  id: string,
): PortfolioItem | undefined {
  return items.find((item) => item.id === id);
}

export function countPortfolioByCategory(
  items: readonly PortfolioItem[],
): Record<PortfolioFilterCategory, number> {
  const counts: Record<PortfolioFilterCategory, number> = {
    all: items.length,
    ecommerce: 0,
    "paid-ads": 0,
    brand: 0,
    "shopify-stores": 0,
  };

  for (const item of items) {
    counts[item.category] += 1;
  }

  return counts;
}

export function paginatePortfolioItems<T>(
  items: readonly T[],
  page: number,
  pageSize: number,
): { items: T[]; total: number; page: number; pageSize: number; totalPages: number } {
  const safePageSize = Math.max(1, pageSize);
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * safePageSize;

  return {
    items: items.slice(start, start + safePageSize),
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}
