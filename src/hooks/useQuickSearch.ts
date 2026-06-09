"use client";

import { useMemo, useState } from "react";
import type { QuickSearchItem } from "@/types";

type UseQuickSearchOptions = {
  items: readonly QuickSearchItem[];
  compact?: boolean;
  defaultLimit?: number;
};

export function useQuickSearch({
  items,
  compact = false,
  defaultLimit,
}: UseQuickSearchOptions) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const limit = defaultLimit ?? (compact ? 3 : 6);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items.slice(0, limit);
    }

    return items.filter((item) => {
      const searchable = `${item.title} ${item.description}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [items, limit, query]);

  return {
    query,
    setQuery,
    focused,
    setFocused,
    results,
    showResults: !compact || focused || query.length > 0,
  };
}
