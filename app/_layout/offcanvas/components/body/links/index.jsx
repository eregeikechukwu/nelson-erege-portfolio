"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/data";

import { scale, slideOut } from "./variants";

export function OffcanvasLinks() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const items = navItems.map(({ href, title }, index) => {
    const id = index;
    return (
      <motion.li
        key={id}
        className="relative my-6 flex items-center md:mb-0"
        variants={slideOut}
        custom={id}
        initial="initial"
        animate="enter"
        exit="exit"
        onPointerEnter={() => setActiveLink(href)}
      >
        <motion.div
          className="absolute max-sm:right-4 sm:-left-14"
          variants={scale}
          animate={activeLink === href ? "open" : "closed"}
        >
          <Dot size={52} />
        </motion.div>
        <Link
          href={href}
          className="text-[2.5rem] capitalize leading-9 max-sm:text-[2.8rem]"
        >
          {title}
        </Link>
      </motion.li>
    );
  });

  return (
    <div className="mt-2 flex flex-col gap-3 max-sm:mt-20">
      <div className="mb-4 border-b border-solid border-gray-500 pb-5 max-sm:mb-0 max-sm:pb-4">
        <h5 className="text-[0.6rem] uppercase text-white">Navigation</h5>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>{items}</ul>
    </div>
  );
}
//Laptop viewport
//1209 x 634 layout
//1209 x 634 layout

//galeery vudeo layout
//1280 x 943 layout
