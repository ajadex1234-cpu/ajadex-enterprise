import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageTransition } from "@/components/motion/PageTransition";

type MarketingLayoutProps = {
  children: ReactNode;
};

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SiteHeader />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
    </>
  );
}
