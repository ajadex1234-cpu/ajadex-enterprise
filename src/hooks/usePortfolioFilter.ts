"use client";

import { useMemo, useState } from "react";
import { getPortfolioItems } from "@/lib/portfolio";
import type { PortfolioFilterCategory, PortfolioItem } from "@/types/portfolio";

type UsePortfolioFilterOptions = {
  initialCategory?: PortfolioFilterCategory;
};

export function usePortfolioFilter(
  items: readonly PortfolioItem[],
  options: UsePortfolioFilterOptions = {},
) {
  const [activeCategory, setActiveCategory] = useState<PortfolioFilterCategory>(
    options.initialCategory ?? "all",
  );

  const filteredItems = useMemo(
    () => getPortfolioItems(items, { category: activeCategory }),
    [activeCategory, items],
  );

  return {
    activeCategory,
    filteredItems,
    setActiveCategory,
  };
}
