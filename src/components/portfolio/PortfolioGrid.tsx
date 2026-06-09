"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { StoreCard } from "@/components/shopify/StoreCard";
import { isShopifyStoreItem } from "@/lib/portfolio/is-shopify-store";
import type { PortfolioItem } from "@/types/portfolio";

type PortfolioGridProps = {
  items: readonly PortfolioItem[];
  onOpenItem?: (item: PortfolioItem) => void;
};

export function PortfolioGrid({ items, onOpenItem }: PortfolioGridProps) {
  return (
    <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {items.map((item) =>
          isShopifyStoreItem(item) && onOpenItem ? (
            <StoreCard key={item.id} item={item} onOpen={onOpenItem} />
          ) : (
            <PortfolioCard
              key={item.id}
              item={item}
              onOpen={onOpenItem}
            />
          ),
        )}
      </AnimatePresence>
    </motion.div>
  );
}
