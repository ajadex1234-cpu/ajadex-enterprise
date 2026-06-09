"use client";

import { cn } from "@/utils/cn";
import type {
  PortfolioCategoryOption,
  PortfolioFilterCategory,
} from "@/types/portfolio";

type CategoryFilterBarProps = {
  categories: readonly PortfolioCategoryOption[];
  activeCategory: PortfolioFilterCategory;
  onSelect: (category: PortfolioFilterCategory) => void;
  orientation?: "horizontal" | "vertical";
};

export function CategoryFilterBar({
  categories,
  activeCategory,
  onSelect,
  orientation = "horizontal",
}: CategoryFilterBarProps) {
  const isVertical = orientation === "vertical";

  return (
    <nav
      aria-label="Portfolio categories"
      className={cn(
        isVertical ? "flex flex-col gap-2" : "flex flex-wrap gap-3",
      )}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={cn(
              "text-sm font-bold transition",
              isVertical
                ? "rounded-lg px-4 py-3 text-left"
                : "rounded-full px-5 py-3",
              isActive
                ? "bg-page-fg text-page"
                : "border border-border-token bg-card/40 text-muted-fg hover:border-border-token hover:text-page-fg",
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
