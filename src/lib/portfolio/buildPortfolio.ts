import {
  generateSlug,
  getDomainName,
  getFaviconUrl,
  normalizeStoreUrl,
} from "@/lib/portfolio/store-utils";
import type { PortfolioItem } from "@/types/portfolio";
import type { MinimalShopifyStore } from "@/types/shopify-store";

const DEFAULT_HIGHLIGHTS = [
  "Full-page website showcase",
  "Mobile-responsive experience",
  "Conversion-focused UX",
] as const;

/**
 * Transforms a minimal `{ name, url }` entry into a full portfolio item.
 */
export function buildPortfolioItem(entry: MinimalShopifyStore): PortfolioItem {
  const url = normalizeStoreUrl(entry.url);
  const domain = getDomainName(url);
  const slug = generateSlug(entry.name);
  const faviconUrl = getFaviconUrl(url);
  const title = `${entry.name} — ${entry.projectType ?? "Website Showcase"}`;
  const screenshot = entry.screenshot ?? entry.screenshots?.[0] ?? faviconUrl;
  const gallery = [
    screenshot,
    ...(entry.mobileScreenshot ? [entry.mobileScreenshot] : []),
    ...(entry.screenshots?.filter((src) => src !== screenshot) ?? []),
  ];
  const summary =
    entry.notes?.trim() ||
    `Live website at ${domain} — showcased with a premium full-page screenshot preview.`;

  return {
    id: slug,
    title,
    category: "shopify-stores",
    kind: entry.kind ?? "client",
    image: screenshot,
    summary,
    link: url,
    cta: "Open site",
    featured: entry.featured,
    tags: entry.tags,
    metrics:
      entry.metrics ??
      [
        { value: "Live", label: "Status" },
        { value: domain, label: "Domain" },
        { value: "Website", label: "Project" },
      ],
    storeMeta: {
      slug,
      url,
      domain,
      faviconUrl,
    },
    modal: {
      description: summary,
      highlights: entry.tags?.length ? [...entry.tags] : [...DEFAULT_HIGHLIGHTS],
      gallery,
    },
    websitePreview: {
      screenshot,
      mobileScreenshot: entry.mobileScreenshot,
      screenshots: gallery,
      allowIframe: entry.allowIframe,
    },
  };
}

/**
 * Builds all Shopify portfolio items; featured stores appear first.
 */
export function buildShopifyPortfolioItems(
  entries: readonly MinimalShopifyStore[],
): PortfolioItem[] {
  return [...entries]
    .map(buildPortfolioItem)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}
