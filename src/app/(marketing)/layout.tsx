import { MarketingLayout } from "@/components/layout/MarketingLayout";

export default function MarketingRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
