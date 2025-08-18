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

  useHardScroll(0.05, 2);
  const { hashPath } = useHashPath();

  // The duration is dynamic based on if the page has a hash or if ots the home page load
  useEffect(() => {
    setDuration(pathname === "/" && !hashPath ? 1900 : 200);
  }, [hashPath, pathname]);

  useEffect(() => {
    duration !== 0 &&
      setTimeout(() => {
        setLoading(false);
        !hashPath ? window.scrollTo(0, 0) : null;
      }, duration);
  }, [duration, hashPath]);

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
