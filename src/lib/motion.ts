import type { Variants } from "framer-motion";

/** Primary easing curve used across marketing animations */
export const motionEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: motionEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 28,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: motionEase,
    },
  },
};

/** Scroll-triggered reveal used in proof sections */
export const scrollReveal = {
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.75, ease: motionEase },
} as const;

export const scrollRevealScale = {
  initial: { opacity: 0, scale: 0.96, y: 28 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease: motionEase },
} as const;

export const modalTransition = {
  duration: 0.35,
  ease: motionEase,
} as const;

export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;
