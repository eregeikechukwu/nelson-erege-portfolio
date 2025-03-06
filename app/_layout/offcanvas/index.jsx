"use client";

import { useContext, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { CanvasContext, useCanvas } from "@/app/contexts";
import { useNavOpen } from "@/hooks";

import { OffcanvasBody, OffcanvasToggle } from "./components";

export function Offcanvas() {
  const pathname = usePathname();

  const { setIsNavOpen, setNavOpen } = useNavOpen();

  const { isNavOpen } = useCanvas();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isNavOpen ? <OffcanvasBody /> : null}
      </AnimatePresence>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.4 }}
            className="fixed inset-0 z-30 h-screen w-screen bg-black opacity-25"
          >
            &nbsp;
          </motion.div>
        )}
      </AnimatePresence>
      <OffcanvasToggle
        isOpen={isNavOpen}
        handleOpen={setNavOpen}
        handleNav={setIsNavOpen}
      />
    </>
  );
}
