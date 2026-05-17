"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { quickSearchItems } from "@/data/quick-search";

type QuickSearchProps = {
  compact?: boolean;
};

export function QuickSearch({ compact = false }: QuickSearchProps) {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return quickSearchItems.slice(0, compact ? 3 : 6);
    }

    return quickSearchItems.filter((item) => {
      const searchable = `${item.title} ${item.description}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [compact, query]);

  return (
    <div className={compact ? "relative w-52" : "relative w-full"}>
      <label className="sr-only" htmlFor={inputId}>
        Quick search
      </label>
      <div className="relative">
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            window.setTimeout(() => setFocused(false), 120);
          }}
          placeholder="Quick search"
          className="w-full rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300/60"
        />
      </div>

      {(!compact || focused || query) && (
        <div
          className={
            compact
              ? "absolute right-0 top-full z-50 mt-3 grid w-72 gap-2 rounded-lg border border-white/10 bg-black/95 p-3 shadow-2xl shadow-black/40"
              : "mt-3 grid gap-2"
          }
        >
          {results.map((item) => (
            <Link
              key={`${item.title}-${item.href}`}
              href={item.href}
              className="rounded-lg border border-white/10 bg-black/40 p-3 transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <p className="text-sm font-bold text-white">{item.title}</p>
              {!compact && (
                <p className="mt-1 text-xs leading-5 text-zinc-500">
                  {item.description}
                </p>
              )}
            </Link>
          ))}

          {results.length === 0 && (
            <p className="rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-zinc-500">
              No match found. Try “ads”, “store”, “services”, or “contact”.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
