import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type PageMainProps = {
  children: ReactNode;
  className?: string;
};

export function PageMain({ children, className }: PageMainProps) {
  return (
    <main
      className={cn(
        "min-h-screen bg-page font-sans text-page-fg antialiased",
        className,
      )}
    >
      {children}
    </main>
  );
}
