"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { MagneticButton } from "@/components";
import { useOffcanvasToggle } from "@/hooks";
import { cn } from "@/utils";

import classes from "./index.module.css";

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {import('react').Dispatch<SetStateAction<boolean>>} props.handleOpen
 */
export function OffcanvasToggle({ isOpen, handleOpen, handleNav }) {
  /** @type {import('react').MutableRefObject<HTMLDivElement>} */
  const containerRef = useRef(null);
  const scrollRef = useRef(false);
  const [isIntersecting, setIsIntersecting] = useState(scrollRef.current);
  const [isTriggered, setIsTriggered] = useState(null);

  const { scrollYProgress } = useOffcanvasToggle({
    element: containerRef,
    callback: (latest) => latest <= 1 && handleOpen(false),
  });

  const location = usePathname();

  const watchFunction = function () {
    const scale = scrollYProgress.get();
    const wasTriggered = isTriggered; // Store the current state for comparison
    const wasIntersecting = isIntersecting;

    if (scale > 0.027) {
      if (!wasTriggered) {
        setIsTriggered(true);
        if (!wasIntersecting) {
          setIsIntersecting(true);
        }
      }
    } else {
      setIsIntersecting(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      watchFunction();
    });
    watchFunction();
  }, [location]);

  return (
    <AnimatePresence>
      {isIntersecting || isOpen ? (
        <motion.div
          ref={containerRef}
          className={classes.wrapper}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: isIntersecting || isOpen ? 2 : 0,
            repeat: 0,
            repeatType: "reverse", //
          }}
        >
          <MagneticButton
            size="md"
            variant="ghost"
            className="border border-solid border-muted-foreground"
            onClick={handleNav}
          >
            <span
              className={cn([classes.burger], [isOpen && classes.burgerActive])}
            />
            <span className="sr-only focus:not-sr-only">Offcanvas Toggle</span>
          </MagneticButton>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
