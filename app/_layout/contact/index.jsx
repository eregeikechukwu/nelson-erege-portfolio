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
      className="relative max-h-screen bg-foreground text-background"
      style={{ y: transformY }}
    >
      <div ref={contentRef} className="md:pb-[9rem] md:pt-24">
        <UserDetails transformX={transformX} />
        <SocialInfo />
      </div>
    </motion.footer>
  );
}
