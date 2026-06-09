import type {
  PortfolioCategoryOption,
  PortfolioFilterCategory,
  PortfolioItem as PortfolioItemRecord,
  PortfolioItemKind,
  PortfolioMetric,
} from "@/types/portfolio";

/** @deprecated Use `PortfolioFilterCategory` from `@/types/portfolio`. */
export type PortfolioCategory = PortfolioFilterCategory;

export type PortfolioItem = PortfolioItemRecord;

export type { PortfolioItemKind, PortfolioMetric, PortfolioCategoryOption };

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  title: string;
  image: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  deliverables: string[];
  link: string;
  cta: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  duration: string;
};

export type TrustMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type ClientLogo = {
  name: string;
  tagline?: string;
};

export type ServiceComparisonFeature = {
  label: string;
  store: boolean | string;
  ads: boolean | string;
  brand: boolean | string;
};
