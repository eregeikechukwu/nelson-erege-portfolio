"use client";

import { useContext, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { CanvasContext, useCanvas } from "../contexts";

export function useNavOpen() {
  // const [isOpen, setOpen] = useState(false);
  const { isNavOpen, setNavOpen } = useCanvas();
  const pathname = usePathname();

  const setIsNavOpen = function () {
    setNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return { isNavOpen, setIsNavOpen, setNavOpen };
}
