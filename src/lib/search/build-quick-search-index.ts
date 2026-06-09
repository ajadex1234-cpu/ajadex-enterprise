import { portfolioItems } from "@/data/portfolio";
import { quickSearchItems } from "@/data/quick-search";
import type { QuickSearchItem } from "@/types";

/** Merges static nav entries with portfolio titles for scalable site search. */
export function buildQuickSearchIndex(): QuickSearchItem[] {
  const portfolioEntries: QuickSearchItem[] = portfolioItems.map((item) => ({
    title: item.title,
    href: `/work#${item.id}`,
    description: item.summary,
  }));

  const seen = new Set<string>();

  return [...quickSearchItems, ...portfolioEntries].filter((entry) => {
    const key = `${entry.href}:${entry.title}`;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}
