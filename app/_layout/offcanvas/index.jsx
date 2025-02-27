"use client";

import { useContext, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { CanvasContext } from "@/app/contexts";
import { useNavOpen } from "@/hooks";

import { OffcanvasBody, OffcanvasToggle } from "./components";

export function Offcanvas() {
  // const [isOpen, setOpen] = useState(false);
  // const pathname = usePathname();

  // useEffect(() => {
  //   setOpen(false);
  // }, [pathname]);

  const { isNavOpen, setNavOpen, setIsopen } = useContext(CanvasContext);

  console.log(isNavOpen + "  from offCanvas");

  return (
    <>
      <AnimatePresence mode="wait">
        {isNavOpen ? <OffcanvasBody /> : null}
      </AnimatePresence>
      <OffcanvasToggle
        isOpen={isNavOpen}
        handleOpen={setNavOpen}
        handleNav={setIsopen}
      />
    </>
  );
}
