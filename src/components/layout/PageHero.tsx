import type { ReactNode } from "react";
import { theme } from "@/config/theme";
import { cn } from "@/utils/cn";

type PageHeroProps = {
  children: ReactNode;
  className?: string;
};

/** Standard inner page hero spacing below fixed header */
export function PageHero({ children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-white/10",
        theme.spacing.pageX,
        theme.spacing.heroTop,
        theme.spacing.heroBottom,
        className,
      )}
    >
      {children}
    </section>
  );
}
