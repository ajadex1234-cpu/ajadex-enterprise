"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { QuickSearch } from "@/components/ui/QuickSearch";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";
import { mainNavItems } from "@/constants/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={theme.layout.header}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative block h-12 w-36">
          <Image
            src={siteConfig.assets.logo}
            alt={siteConfig.name}
            fill
            priority
            sizes="144px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <QuickSearch compact />
        </div>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02] md:inline-flex"
        >
          Start Project
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold md:hidden"
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5 text-zinc-300">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-bold text-black"
            >
              Start Project
            </Link>
            <QuickSearch />
          </nav>
        </div>
      )}
    </header>
  );
}
