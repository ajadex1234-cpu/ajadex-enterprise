"use client";

import { useCallback, useEffect, useState } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import type { PortfolioItem } from "@/types/portfolio";

export function usePortfolioModal() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const isOpen = selectedItem !== null;

  useBodyScrollLock(isOpen);

  const open = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
  }, []);

  const close = useCallback(() => {
    setSelectedItem(null);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, isOpen]);

  return {
    selectedItem,
    isOpen,
    open,
    close,
  };
}
