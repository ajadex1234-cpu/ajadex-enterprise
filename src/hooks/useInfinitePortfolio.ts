"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PORTFOLIO_PAGE_SIZE } from "@/lib/portfolio/constants";
import type { PortfolioItem } from "@/types/portfolio";

type UseInfinitePortfolioOptions = {
  pageSize?: number;
  loadDelayMs?: number;
};

export function useInfinitePortfolio(
  items: readonly PortfolioItem[],
  options: UseInfinitePortfolioOptions = {},
) {
  const pageSize = options.pageSize ?? PORTFOLIO_PAGE_SIZE;
  const loadDelayMs = options.loadDelayMs ?? 350;
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsHydrated(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisibleCount(pageSize);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [items, pageSize]);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount],
  );

  const hasMore = visibleCount < items.length;

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);
    await new Promise((resolve) => window.setTimeout(resolve, loadDelayMs));
    setVisibleCount((current) => Math.min(current + pageSize, items.length));
    setIsLoadingMore(false);
  }, [hasMore, isLoadingMore, items.length, loadDelayMs, pageSize]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadMore();
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return {
    visibleItems,
    hasMore,
    loadMore,
    isLoadingMore,
    isHydrated,
    sentinelRef,
  };
}
