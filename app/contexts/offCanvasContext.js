"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CanvasContext = createContext();

function CanvasProvider({ children }) {
  const [isNavOpen, setNavOpen] = useState(false);

  const setIsOpen = function () {
    setNavOpen((prev) => !prev);
  };

  return (
    <CanvasContext.Provider value={{ isNavOpen, setNavOpen, setIsOpen }}>
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
