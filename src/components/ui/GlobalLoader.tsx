"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { motionEase } from "@/lib/motion";
import { theme } from "@/config/theme";

export function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setLoading(true);
    }, 0);

    const hideTimer = window.setTimeout(() => {
      setLoading(false);
    }, theme.animation.duration.loader * 1000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: theme.animation.duration.medium, ease: motionEase }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.22),transparent_34%),radial-gradient(circle_at_45%_70%,rgba(245,158,11,0.14),transparent_30%)]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="relative h-20 w-20 rounded-full border-4 border-white/20 border-t-emerald-300"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55, ease: motionEase }}
            className="relative mt-8 text-sm font-bold uppercase tracking-[0.45em] text-zinc-300"
          >
            AJADEX
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="relative mt-3 text-sm text-zinc-500"
          >
            Loading premium growth experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
