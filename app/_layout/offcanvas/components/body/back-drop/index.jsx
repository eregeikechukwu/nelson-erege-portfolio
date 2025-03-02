"use client";

import { motion } from "framer-motion";

import styles from "./style.module.scss";

export function OffcanvasBackdrop() {
  const windowHeight = window.innerHeight;

  const initialPath = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q-100 ${
    windowHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q100 ${
    windowHeight / 2
  } 100 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 1.3,
        ease: [0.76, 0, 0.24, 1],
        delay: 0,
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        delay: -0.2,
      },
    },
  };

  return (
    <motion.svg
      className={`absolute top-0 h-screen fill-foreground stroke-none ${styles.backdrop}`}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </motion.svg>
  );
}
