import { caseStudies } from "@/data/case-studies";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";

/** Single import point for portfolio-related content (scales to CMS later). */
export const portfolioContent = {
  categories: portfolioCategories,
  items: portfolioItems,
  caseStudies,
} as const;
