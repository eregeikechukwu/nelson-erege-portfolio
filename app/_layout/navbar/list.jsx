"use client";

import { useContext, useEffect, useState } from "react";

import clsx from "clsx";
import { Dot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CanvasContext, useCanvas } from "@/app/contexts";
import { Center, MagneticButton } from "@/components";
import { navItems } from "@/data";
import { useNavOpen } from "@/hooks";
import { randomId } from "@/utils";

function NavLink({ href, title, isHovered }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <li className="group p-4 max-md:px-2">
      <Link href={href} passHref>
        <MagneticButton>
          <span className="text-base capitalize">{title}</span>
          <Center>
            <Dot
              className={clsx(
                `scale-150 opacity-0 transition-opacity duration-200 ease-in-expo group-hover:opacity-100`,
                { "opacity-100": isActive && !isHovered },
              )}
            />
          </Center>
        </MagneticButton>
      </Link>
    </li>
  );
}

export function NavbarList() {
  const [isHovered, setIsHovered] = useState(false);

  const { isNavOpen, setIsOpen, setNavOpen } = useCanvas();

  const { setIsNavOpen } = useNavOpen();

  console.log(isNavOpen + " its from navBarList");

  return (
    <>
      <ul
        className="flex items-center max-sm:hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navItems.slice(1).map(({ href, title }, id) => (
          <NavLink href={href} title={title} isHovered={isHovered} key={id} />
        ))}
      </ul>
      <div className="flex items-center gap-1 sm:hidden" onClick={setIsNavOpen}>
        <Dot className="scale-150" />
        <span className={clsx("z-50", { "text-red-600": isNavOpen })}>
          Menu
        </span>
      </div>
    </>
  );
}
