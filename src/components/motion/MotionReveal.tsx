"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/motion";
import { cn } from "@/utils/cn";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
};

/** Scroll-triggered fade-up — layout unchanged, motion only. */
export function MotionReveal({
  children,
  className,
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeUp}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
