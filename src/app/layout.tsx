import type { Viewport } from "next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { GlobalLoader } from "@/components/ui/GlobalLoader";
import { defaultMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ajadex-theme");var m=window.matchMedia("(prefers-color-scheme: light)").matches;var d=t||(m?"light":"dark");document.documentElement.dataset.theme=d;document.documentElement.classList.remove("dark","light");document.documentElement.classList.add(d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-black focus:p-3 focus:font-bold">
          Skip to main content
        </a>
        <AppProviders>
          <GlobalLoader />
          {children}
          <FloatingWhatsApp />
        </AppProviders>
      </body>
    </html>
  );
}
