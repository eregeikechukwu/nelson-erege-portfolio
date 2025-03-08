/** @type {import('framer-motion').Variants} */
// const delay = window.location.hash ? 0.7 : 2.5;
export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.2 },
  },
};
