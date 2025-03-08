"use client";

import { motion } from "framer-motion";

import { FixedOverlay } from "@/components";

import { OffcanvasBackdrop } from "./back-drop";
import { OffcanvasFooter } from "./footer";
import { OffcanvasLinks } from "./links";
import { slideLeft } from "./variants";

const MotionComponent = motion(FixedOverlay);

export function OffcanvasBody() {
  return (
    <MotionComponent
      className="fixed z-40"
      variants={slideLeft}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <OffcanvasBackdrop />

      <div className="absolute right-0 top-0 h-screen bg-foreground text-background">
        <div className="flex h-full flex-col justify-between p-20 max-sm:w-screen max-sm:p-5 sm:pb-14">
          <OffcanvasLinks />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}
