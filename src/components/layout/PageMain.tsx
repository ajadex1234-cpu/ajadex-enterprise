import type { ReactNode } from "react";
import { theme } from "@/config/theme";
import { cn } from "@/utils/cn";

type PageMainProps = {
  children: ReactNode;
  className?: string;
};

export function PageMain({ children, className }: PageMainProps) {
  return <main className={cn(theme.layout.page, className)}>{children}</main>;
}
