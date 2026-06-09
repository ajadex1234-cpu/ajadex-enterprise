"use client";

import { CategoryFilterBar } from "@/components/portfolio/CategoryFilterBar";
import type {
  PortfolioCategoryOption,
  PortfolioFilterCategory,
} from "@/types/portfolio";

type PortfolioSidebarProps = {
  categories: readonly PortfolioCategoryOption[];
  activeCategory: PortfolioFilterCategory;
  onSelect: (category: PortfolioFilterCategory) => void;
};

export function PortfolioSidebar({
  categories,
  activeCategory,
  onSelect,
}: PortfolioSidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <p className="agency-eyebrow mb-4 text-emerald-300">Categories</p>
        <CategoryFilterBar
          categories={categories}
          activeCategory={activeCategory}
          onSelect={onSelect}
          orientation="vertical"
        />
      </div>
    </aside>
  );
}
