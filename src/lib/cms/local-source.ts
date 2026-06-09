import { caseStudies } from "@/data/case-studies";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";
import type { PortfolioContentSource } from "@/lib/cms/types";

/** Local TypeScript data — swap for Sanity/Contentful adapter later. */
export const localPortfolioSource: PortfolioContentSource = {
  id: "local",
  async getCategories() {
    return portfolioCategories;
  },
  async getPortfolioItems() {
    return portfolioItems;
  },
  async getCaseStudies() {
    return caseStudies;
  },
};
