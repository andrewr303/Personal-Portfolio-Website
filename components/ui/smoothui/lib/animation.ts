import type { Transition } from "motion/react";

/** Shared motion presets for the smoothui primitives. */
export const DURATION_INSTANT: Transition = { duration: 0 };

export const SPRING_DEFAULT: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
