import { Skeleton } from "@/components/ui/skeleton/Skeleton";

type PortfolioGridSkeletonProps = {
  count?: number;
};

export function PortfolioGridSkeleton({ count = 6 }: PortfolioGridSkeletonProps) {
  return (
    <div
      className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-busy
      aria-label="Loading portfolio"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-border-token bg-card"
        >
          <Skeleton className="h-56 w-full rounded-none" />
          <div className="space-y-3 p-6">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
}
