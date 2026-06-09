"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionEase } from "@/lib/motion";
import type { PortfolioItem } from "@/types/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
  onOpen?: (item: PortfolioItem) => void;
};

export function PortfolioCard({ item, onOpen }: PortfolioCardProps) {
  return (
    <motion.article
      layout
      id={item.id}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen ? () => onOpen(item) : undefined}
      onKeyDown={
        onOpen
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onOpen(item);
              }
            }
          : undefined
      }
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 16 }}
      transition={{ duration: 0.35, ease: motionEase }}
      whileHover={{ y: -8 }}
      className={`overflow-hidden rounded-lg border border-border-token bg-card shadow-2xl shadow-black/30 ${
        onOpen ? "cursor-pointer" : ""
      }`}
    >
      <div className="relative h-56">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${
            item.kind === "client" ? "object-top" : ""
          }`}
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            item.kind === "client"
              ? "bg-emerald-400/20 text-emerald-100"
              : "bg-sky-400/20 text-sky-100"
          }`}
        >
          {item.kind === "client" ? "Client work" : "Concept"}
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-amber-200 capitalize">
          {item.category.replace("-", " ")}
        </p>
        <h3 className="mt-2 text-xl font-black">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-soft-fg">{item.summary}</p>
        {item.metrics && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.metrics.map((metric) => (
              <span
                key={metric.label}
                className="rounded-full border border-border-token bg-white/[0.03] px-3 py-1 text-xs text-soft-fg"
              >
                <span className="font-bold text-page-fg">{metric.value}</span>{" "}
                {metric.label}
              </span>
            ))}
          </div>
        )}
        {onOpen && (
          <p className="mt-5 text-sm font-bold text-emerald-200">
            View details →
          </p>
        )}
        {!onOpen && item.link && item.cta && (
          <p className="mt-5 text-sm font-bold text-emerald-200">{item.cta} →</p>
        )}
      </div>
    </motion.article>
  );
}
