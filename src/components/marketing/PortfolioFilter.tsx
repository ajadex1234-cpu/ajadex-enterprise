"use client";

import { CategoryFilterBar } from "@/components/portfolio/CategoryFilterBar";
import { PortfolioDetailModal } from "@/components/portfolio/PortfolioDetailModal";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PortfolioSidebar } from "@/components/portfolio/PortfolioSidebar";
import { StoreModal } from "@/components/shopify/StoreModal";
import { PortfolioGridSkeleton } from "@/components/ui/skeleton/PortfolioGridSkeleton";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";
import { useInfinitePortfolio } from "@/hooks/useInfinitePortfolio";
import { usePortfolioFilter } from "@/hooks/usePortfolioFilter";
import { usePortfolioModal } from "@/hooks/usePortfolioModal";
import { isShopifyStoreItem } from "@/lib/portfolio/is-shopify-store";

export function PortfolioFilter() {
  const { activeCategory, filteredItems, setActiveCategory } =
    usePortfolioFilter(portfolioItems);
  const {
    visibleItems,
    hasMore,
    loadMore,
    isLoadingMore,
    isHydrated,
    sentinelRef,
  } = useInfinitePortfolio(filteredItems);
  const { selectedItem, open, close } = usePortfolioModal();

  if (!isHydrated) {
    return <PortfolioGridSkeleton count={6} />;
  }

  const isStoreModal =
    selectedItem !== null && isShopifyStoreItem(selectedItem);

  return (
    <>
      <div className="lg:hidden">
        <CategoryFilterBar
          categories={portfolioCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <PortfolioSidebar
          categories={portfolioCategories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div>
          <PortfolioGrid items={visibleItems} onOpenItem={open} />

          {isLoadingMore && (
            <div className="mt-6">
              <PortfolioGridSkeleton count={3} />
            </div>
          )}

          {hasMore && (
            <div
              ref={sentinelRef}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <button
                type="button"
                onClick={() => void loadMore()}
                disabled={isLoadingMore}
                className="rounded-full border border-border-token px-6 py-3 text-sm font-bold text-page-fg transition hover:bg-page-fg hover:text-page disabled:opacity-50"
              >
                {isLoadingMore ? "Loading…" : "Load more work"}
              </button>
            </div>
          )}
        </div>
      </div>

      {isStoreModal ? (
        <StoreModal item={selectedItem} onClose={close} />
      ) : (
        <PortfolioDetailModal item={selectedItem} onClose={close} />
      )}
    </>
  );
}
