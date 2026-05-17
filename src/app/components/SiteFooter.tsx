import Image from "next/image";
import Link from "next/link";
import { QuickSearch } from "./QuickSearch";
import { SocialLinks } from "./SocialLinks";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="relative block h-14 w-44">
            <Image
              src="/logo.png"
              alt="AJADEX Expert Enterprise"
              fill
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-md leading-7 text-zinc-400">
            Ecommerce development, digital marketing, and brand growth systems
            for businesses building stronger online revenue.
          </p>
          <p className="mt-6 text-sm text-zinc-500">
            Lagos, Nigeria. Serving brands online.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h3 className="font-bold">Pages</h3>
          <div className="mt-5 flex flex-col gap-3 text-zinc-400">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-5 space-y-3 text-zinc-400">
            <p>ajadexenterprise@gmail.com</p>
            <p>+234 701 408 0845</p>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Quick Search</h3>
          <div className="mt-5">
            <QuickSearch />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          Copyright {new Date().getFullYear()} Ajadex Expert Enterprise. All
          rights reserved.
        </p>
        <p>Portfolio site for ecommerce and digital marketing work.</p>
      </div>
    </footer>
  );
}
