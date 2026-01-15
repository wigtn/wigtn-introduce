import type { Variants, Transition } from "framer-motion";

// Transition presets
export const TRANSITION = {
  fast: { duration: 0.3 } as Transition,
  normal: { duration: 0.5 } as Transition,
  slow: { duration: 0.8 } as Transition,
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as Transition,
} as const;

// Animation variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

// Stagger container for list animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Viewport settings
export const VIEWPORT = {
  once: { once: true },
  onceWithMargin: { once: true, margin: "-100px" },
  always: { once: false },
} as const;

// Combined animation presets for common use cases
export const ANIMATE = {
  fadeIn: {
    initial: "initial",
    whileInView: "animate",
    viewport: VIEWPORT.once,
    variants: fadeIn,
    transition: TRANSITION.normal,
  },
  fadeInUp: {
    initial: "initial",
    whileInView: "animate",
    viewport: VIEWPORT.once,
    variants: fadeInUp,
    transition: TRANSITION.smooth,
  },
  staggerList: {
    initial: "initial",
    whileInView: "animate",
    viewport: VIEWPORT.once,
    variants: staggerContainer,
  },
  staggerItem: {
    variants: staggerItem,
    transition: TRANSITION.smooth,
  },
} as const;
