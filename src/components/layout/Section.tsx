import type { ReactNode } from "react";
import { theme } from "@/config/theme";
import { cn } from "@/utils/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn(theme.spacing.pageX, theme.spacing.sectionYMedium, className)}>
      {children}
    </section>
  );
}
