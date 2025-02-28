"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const CanvasContext = createContext();

function CanvasProvider({ children }) {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const pathname = usePathname();

  const setIsOpen = function () {
    setNavOpen((prev) => !prev);
  };

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);
  console.log(isNavOpen + "  from canvasProvider");

  return (
    <CanvasContext.Provider value={{ isNavOpen, setNavOpen, setIsOpen }}>
      {console.log(isNavOpen)}
      {children}
    </CanvasContext.Provider>
  );
}

function useCanvas() {
  const context = useContext(CanvasContext);

  if (context === undefined) {
    throw new Error("Canvas context is used outside the CanvasProvider");
  }

  return context;
}

export { CanvasProvider, useCanvas, CanvasContext };
