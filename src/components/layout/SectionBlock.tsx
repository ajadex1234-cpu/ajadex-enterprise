"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { cn } from "@/utils/cn";

type SectionBlockProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrowClassName?: string;
  header?: ReactNode;
};

export function SectionBlock({
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
  eyebrowClassName = "text-emerald-300",
  header,
}: SectionBlockProps) {
  return (
    <section
      className={cn("border-y border-border-token px-6 py-20", className)}
    >
      <Container className={containerClassName}>
        {(header || eyebrow || title || description) && (
          <MotionReveal className="mb-10 max-w-3xl">
            {header ?? (
              <>
                {eyebrow && (
                  <p className={cn("agency-eyebrow", eyebrowClassName)}>
                    {eyebrow}
                  </p>
                )}
                {title && (
                  <h2 className="agency-display mt-4 max-w-4xl">{title}</h2>
                )}
                {description && (
                  <p className="mt-4 leading-7 text-soft-fg">{description}</p>
                )}
              </>
            )}
          </MotionReveal>
        )}
        {children}
      </Container>
    </section>
  );
}
