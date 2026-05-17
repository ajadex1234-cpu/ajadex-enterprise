import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { GlobalLoader } from "@/components/ui/GlobalLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJADEX Expert Enterprise | Ecommerce & Digital Marketing",
  description:
    "Portfolio for AJADEX Expert Enterprise, an ecommerce and digital marketing brand building storefronts, paid ads systems, and brand growth assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalLoader />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
