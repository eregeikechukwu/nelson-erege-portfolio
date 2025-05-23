"use client";

import { useEffect } from "react";

import Lenis from "lenis";

export function useHardScroll(lerp = 0.05, wheelMultiplier = 0.5) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: lerp,
      infinite: false,
      wheelMultiplier: wheelMultiplier,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    if (typeof window === "undefined") return;

    if (window.innerWidth < 768) return;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);
}
