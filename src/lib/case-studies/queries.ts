import type { CaseStudy } from "@/types/marketing";

export type CaseStudyQueryOptions = {
  limit?: number;
  offset?: number;
  ids?: string[];
};

export function getCaseStudies(
  studies: readonly CaseStudy[],
  options: CaseStudyQueryOptions = {},
): CaseStudy[] {
  const { limit, offset = 0, ids } = options;

  let result = ids
    ? studies.filter((study) => ids.includes(study.id))
    : [...studies];

  if (offset > 0) {
    result = result.slice(offset);
  }

  if (typeof limit === "number" && limit >= 0) {
    result = result.slice(0, limit);
  }

  return result;
}

export function getCaseStudyById(
  studies: readonly CaseStudy[],
  id: string,
): CaseStudy | undefined {
  return studies.find((study) => study.id === id);
}
