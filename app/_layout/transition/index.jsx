"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

import { useHardScroll, useLenis, useTimeOut } from "@/hooks";

import { Preloader } from "./preloader";
/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();
  const scrollContainerRef = useRef(null);
  const lenis = useLenis(); // Ensure this returns a valid Lenis instance

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     // duration: 1,
  //     smooth: true,
  //     lerp: 0.05,
  //     infinite: false,
  //     wheelMultiplier: 0.5,
  //     easing: (t) => 1 - Math.pow(1 - t, 3),
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => cancelAnimationFrame(raf);
  // }, []);
  useHardScroll(0.05, 0.5);

  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  return (
    <div ref={scrollContainerRef} className="h-auto overflow-auto">
      <div key={pathname} className="overflow-hidden">
        <AnimatePresence mode="wait">
          {isLoading ? <Preloader /> : null}
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
}
