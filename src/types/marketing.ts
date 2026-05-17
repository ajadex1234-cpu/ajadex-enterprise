export type PortfolioCategory =
  | "all"
  | "ecommerce"
  | "paid-ads"
  | "brand";

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  kind: "client" | "concept";
  image: string;
  summary: string;
  link?: string;
  cta?: string;
  metrics?: { value: string; label: string }[];
};

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
