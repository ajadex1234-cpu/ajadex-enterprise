import { HomePage } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata("home");

export default function Home() {
  return <HomePage />;
}
