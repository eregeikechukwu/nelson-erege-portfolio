/** @type {import('framer-motion').Variants} */
export const slideLeft = {
  initial: {
    x: "calc(100% + 190px)",
  },
  enter: {
    x: "0",
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: "calc(100% + 190px)",
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
