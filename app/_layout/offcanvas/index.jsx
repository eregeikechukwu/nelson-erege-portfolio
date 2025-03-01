"use client";

import { useContext, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { CanvasContext, useCanvas } from "@/app/contexts";
import { useNavOpen } from "@/hooks";

import { OffcanvasBody, OffcanvasToggle } from "./components";

export function Offcanvas() {
  const { setIsNavOpen, setNavOpen } = useNavOpen();

  const { isNavOpen } = useCanvas();

  return (
    <>
      <AnimatePresence mode="wait">
        {isNavOpen ? <OffcanvasBody /> : null}
      </AnimatePresence>
      <OffcanvasToggle
        isOpen={isNavOpen}
        handleOpen={setNavOpen}
        handleNav={setIsNavOpen}
      />
    </>
  );
}
