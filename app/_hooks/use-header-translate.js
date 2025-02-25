"use client";

import { useEffect, useState } from "react";

import { useHashPath } from "./use-hash-path";

export function useHeaderTranslate() {
  const [delay, setDelay] = useState(null);
  const { hashPath, hash, hasLoaded } = useHashPath();

  useEffect(() => {
    hasLoaded ? (hashPath ? setDelay(0.7) : setDelay(2.4)) : setDelay(0);
  }, [hashPath, hasLoaded, hash]);

  const slideUp = {
    initial: {
      y: 300,
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: delay,
      },
    },
    parallaxEnter: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0, 0.07, 0, 0.91],
        delay: delay,
      },
    },
  };

  return { slideUp, delay };
}
