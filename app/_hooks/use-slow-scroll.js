"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useSlowScroll(
  ref,
  duration = 3,
  transform = 10,
  y = 0,
  top = "10px",
) {
  //   const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(ref.current, { y: y });
    gsap.to(ref.current, {
      backgroundPosition: "centre -100px",
      y: transform,
      duration: duration,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [ref]);
}
