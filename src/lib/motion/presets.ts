import type { Variants } from "framer-motion";
import { motionEase } from "@/lib/motion";

/** Apple-style modal backdrop + panel springs */
export const appleModalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.28, ease: motionEase },
};

export const appleModalPanel: Variants = {
  initial: {
    opacity: 0,
    scale: 0.92,
    y: 24,
    filter: "blur(12px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 340,
      damping: 32,
      mass: 0.85,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    filter: "blur(8px)",
    transition: { duration: 0.22, ease: motionEase },
  },
};

export const mobileNavPanel: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.38, ease: motionEase },
      opacity: { duration: 0.28, ease: motionEase },
    },
  },
};

export const mobileNavItem: Variants = {
  closed: { opacity: 0, x: -12 },
  open: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 + index * 0.05,
      duration: 0.35,
      ease: motionEase,
    },
  }),
};
