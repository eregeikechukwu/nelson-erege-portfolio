"use client";

import { useContext, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { CanvasContext, useCanvas } from "@/app/contexts";
import { useNavOpen } from "@/hooks";

import { OffcanvasBody, OffcanvasToggle } from "./components";

export function Offcanvas() {
  // const [isOpen, setOpen] = useState(false);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setOpen(false);
  // }, [pathname]);

  const { setIsNavOpen, setNavOpen } = useNavOpen();

  const { isNavOpen } = useCanvas();

  // const { isNavOpen, setNavOpen, setIsopen } = useContext(CanvasContext);

  useEffect(() => {
    console.log(isNavOpen + "  from offCanvas");
  }, [isNavOpen]);

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
