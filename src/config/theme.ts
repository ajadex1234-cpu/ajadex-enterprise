/**
 * Design tokens mirrored from the live marketing UI.
 * Layout utilities compose these into class strings — values are unchanged from the original site.
 */
export const theme = {
  colors: {
    page: "#070707",
    pageClass: "bg-[#070707]",
    foreground: "text-white",
    muted: "text-zinc-300",
    mutedSoft: "text-zinc-400",
    mutedFaint: "text-zinc-500",
    border: "border-white/10",
    borderSubtle: "border-white/20",
    emerald: {
      eyebrow: "text-emerald-300",
      badge: "text-emerald-200",
      accent: "text-emerald-100",
    },
    amber: {
      eyebrow: "text-amber-300",
      accent: "text-amber-200",
    },
    sky: {
      eyebrow: "text-sky-300",
    },
    primaryButton: "bg-white text-black",
    ghostButton:
      "border border-white/20 text-white transition hover:bg-white hover:text-black",
  },
  spacing: {
    sectionY: "py-24",
    sectionYMedium: "py-20",
    sectionYSmall: "py-10",
    pageX: "px-6",
    heroTop: "pt-36",
    heroBottom: "pb-20",
    headerOffset: "pt-36",
  },
  radius: {
    card: "rounded-lg",
    pill: "rounded-full",
  },
  shadows: {
    card: "shadow-xl shadow-black/20",
    cardHeavy: "shadow-2xl shadow-black/30",
    emeraldBadge: "shadow-lg shadow-emerald-950/40",
  },
  animation: {
    ease: [0.22, 1, 0.36, 1] as const,
    duration: {
      fast: 0.25,
      medium: 0.45,
      slow: 0.75,
      page: 0.85,
      loader: 0.9,
    },
    stagger: {
      children: 0.14,
      delayChildren: 0.08,
    },
    hover: {
      liftSmall: { y: -3, scale: 1.02 },
      liftMedium: { y: -6 },
      liftLarge: { y: -10, scale: 1.01 },
    },
  },
  typography: {
    eyebrow:
      "text-sm font-bold uppercase tracking-[0.2em]",
    h1: "text-5xl font-black tracking-tight md:text-7xl",
    h2: "text-4xl font-black tracking-tight md:text-6xl",
    h2Medium: "text-4xl font-black tracking-tight md:text-5xl",
    body: "text-lg leading-8 text-zinc-300",
  },
  layout: {
    container: "mx-auto max-w-7xl",
    containerNarrow: "mx-auto max-w-5xl",
    containerWide: "mx-auto max-w-7xl",
    page: "min-h-screen bg-[#070707] text-white",
    header:
      "fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl",
  },
} as const;

export type Theme = typeof theme;
