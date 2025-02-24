"use client";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { useHardScroll, useHashPath, useLenis, useTimeOut } from "@/hooks";

import { Preloader } from "./preloader";
/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const pathname = usePathname();
  const scrollContainerRef = useRef(null);

  useHardScroll(0.05, 0.5);
  const isHash = useHashPath();

  // The duration is dynamic based on if the page has a hash or if ots the home page load
  useEffect(() => {
    setDuration(pathname === "/" && !isHash ? 2000 : 200);
  }, [isHash, pathname]);

  useEffect(() => {
    duration !== 0 &&
      setTimeout(() => {
        setLoading(false);
        !isHash ? window.scrollTo(0, 0) : null;
      }, duration);
  }, [duration, isHash]);

  return (
    <div ref={scrollContainerRef} className="h-auto overflow-auto">
      <div key={pathname} className="overflow-hidden">
        <AnimatePresence mode="wait">
          {isLoading ? <Preloader /> : null}
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
}
