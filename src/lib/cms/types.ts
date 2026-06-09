import type { CaseStudy } from "@/types/marketing";
import type {
  PortfolioCategoryOption,
  PortfolioItem,
} from "@/types/portfolio";

export type PortfolioContentSource = {
  id: string;
  getCategories(): Promise<readonly PortfolioCategoryOption[]>;
  getPortfolioItems(): Promise<readonly PortfolioItem[]>;
  getCaseStudies(): Promise<readonly CaseStudy[]>;
};
