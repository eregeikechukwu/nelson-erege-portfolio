"use client";

import { useRef } from "react";

import { motion } from "framer-motion";

import { useMagnetic } from "@/hooks";
import { cn } from "@/utils";

import { MagneticItem } from "./index.styled";
import { magneticVariance } from "./index.variance";
import styles from "./style.module.scss";

/** @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline'; size: 'default' | 'md' | 'lg' | 'xl';}} */
export function MagneticButton({
  children,
  className,
  variant,
  size,
  maxwidth,
  ...props
}) {
  /** @type {import('react').MutableRefObject<HTMLButtonElement>} */
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  const magneticItemStyles = {
    maxWidth: `${maxwidth}ch`,
    position: "relative",
    zIndex: 1,
    display: "block",
    width: "max-content",
    wordBreak: "break-all",
  };

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 4,
        stiffness: x === 0 && y === 0 ? 150 : 50,
        mass: x === 0 && y === 0 ? 0.5 : 0.01,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1 }}
      {...props}
    >
      <motion.span
        style={magneticItemStyles}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 4,
          stiffness: x === 0 && y === 0 ? 150 : 50,
          mass: x === 2 && y === 2 ? 0.5 : 0.01,
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

// <MagneticItem style={{ maxWidth: `${maxwidth}ch` }}>{children}</MagneticItem>;
