export type {
  PortfolioCategoryOption,
  PortfolioCategorySlug,
  PortfolioFilterCategory,
  PortfolioItem,
  PortfolioItemKind,
  PortfolioMetric,
  PortfolioQueryOptions,
} from "./portfolio";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceCard = {
  title: string;
  description: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type FeaturedWorkItem = {
  title: string;
  category: string;
  image: string;
  result: string;
};

export type ServicePackage = {
  title: string;
  summary: string;
  includes: string[];
};

export type RealProject = {
  title: string;
  type: string;
  image: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  link: string;
  cta: string;
};

export type ConceptProject = {
  title: string;
  type: string;
  image: string;
  summary: string;
};

export type AboutValue = {
  title: string;
  body: string;
};

export type QuickSearchItem = {
  title: string;
  href: string;
  description: string;
};
