/**
 * Slug for portfolio id, anchors, and routes.
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Normalizes user input to a full https URL.
 */
export function normalizeStoreUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) {
    return "https://";
  }
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

/**
 * Extracts a clean hostname (no www).
 */
export function getDomainName(url: string): string {
  try {
    const hostname = new URL(normalizeStoreUrl(url)).hostname;
    return hostname.replace(/^www\./i, "");
  } catch {
    return url.replace(/^https?:\/\//i, "").split("/")[0] ?? url;
  }
}

/**
 * Google favicon service — works for most live domains without hosting assets.
 */
export function getFaviconUrl(url: string, size = 128): string {
  const domain = getDomainName(url);
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`;
}
