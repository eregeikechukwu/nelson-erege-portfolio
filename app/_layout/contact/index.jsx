"use client";

import { useRef } from "react";

import { motion } from "framer-motion";

import { useContactSlider, useHardScroll, useSlowScroll } from "@/hooks";

import { SocialInfo, UserDetails } from "./components";

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);
  useSlowScroll(contentRef, 1, 150, -300);

  return (
    <motion.footer
      ref={containerRef}
      className="relative bg-foreground text-background md:max-h-screen"
      style={{ y: transformY }}
    >
      <div
        ref={contentRef}
        className="max-md:pb-20 max-md:pt-36 md:pb-28 md:pt-24"
      >
        <UserDetails transformX={transformX} />
        <SocialInfo />
      </div>
    </motion.footer>
  );
}
