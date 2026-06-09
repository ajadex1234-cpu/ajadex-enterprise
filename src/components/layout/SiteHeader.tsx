"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { QuickSearch } from "@/components/ui/QuickSearch";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/config/site";
import { mainNavItems } from "@/constants/navigation";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { mobileNavItem, mobileNavPanel } from "@/lib/motion/presets";
import { cn } from "@/utils/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-token bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="relative block h-12 w-36">
          <Image
            src={siteConfig.assets.logo}
            alt={siteConfig.name}
            fill
            priority
            quality={85}
            sizes="(max-width: 768px) 100px, 144px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-fg md:flex">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-page-fg focus-visible:outline-2 focus-visible:outline-emerald-300 focus-visible:outline-offset-2 rounded-sm px-2 py-1",
                  isActive && "text-page-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <QuickSearch compact />
          <ThemeToggle />
        </div>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full bg-page-fg px-5 py-3 text-sm font-bold text-page transition hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-emerald-300 focus-visible:outline-offset-2 md:inline-flex"
        >
          Start Project
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="rounded-full border border-border-token px-4 py-3 text-sm font-bold focus-visible:outline-2 focus-visible:outline-emerald-300 focus-visible:outline-offset-2 min-h-12 min-w-12"
          >
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileNavPanel}
            className="overflow-hidden border-t border-border-token bg-card md:hidden"
          >
            <nav className="flex flex-col gap-5 px-6 py-6 text-muted-fg">
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={mobileNavItem}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-semibold text-page-fg focus-visible:outline-2 focus-visible:outline-emerald-300 focus-visible:outline-offset-2 rounded-sm px-2 py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={mainNavItems.length}
                variants={mobileNavItem}
                initial="closed"
                animate="open"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-page-fg px-5 py-3 text-center font-bold text-page focus-visible:outline-2 focus-visible:outline-emerald-300 focus-visible:outline-offset-2 inline-block"
                >
                  Start Project
                </Link>
              </motion.div>
              <QuickSearch />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
