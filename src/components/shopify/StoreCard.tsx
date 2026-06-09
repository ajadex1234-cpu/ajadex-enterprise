"use client";

import { PortfolioWebsiteCard } from "@/components/portfolio/PortfolioWebsiteCard";
import type { PortfolioItem } from "@/types/portfolio";

type StoreCardProps = {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
};

export function StoreCard({ item, onOpen }: StoreCardProps) {
  return <PortfolioWebsiteCard item={item} onOpen={onOpen} />;
}
