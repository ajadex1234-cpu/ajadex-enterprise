import type {
  PortfolioFilterCategory,
  PortfolioItem,
  PortfolioItemKind,
} from "@/types/portfolio";

export function filterPortfolioByCategory(
  items: readonly PortfolioItem[],
  category: PortfolioFilterCategory,
): PortfolioItem[] {
  if (category === "all") {
    return [...items];
  }

  return items.filter((item) => item.category === category);
}

export function filterPortfolioByKind(
  items: readonly PortfolioItem[],
  kind: PortfolioItemKind,
): PortfolioItem[] {
  return items.filter((item) => item.kind === kind);
}

export function searchPortfolioItems(
  items: readonly PortfolioItem[],
  query: string,
): PortfolioItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [...items];
  }

  return items.filter((item) => {
    const haystack = [
      item.title,
      item.summary,
      item.category,
      item.kind,
      item.cta ?? "",
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}
