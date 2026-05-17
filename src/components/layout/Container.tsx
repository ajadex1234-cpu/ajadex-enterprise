import type { ReactNode } from "react";
import { theme } from "@/config/theme";
import { cn } from "@/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        narrow ? "mx-auto max-w-5xl" : theme.layout.container,
        className,
      )}
    >
      {children}
    </div>
  );
}
