"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { Dot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Center, MagneticButton } from "@/components";
import { navItems } from "@/data";
import { randomId } from "@/utils";

function NavLink({ href, title, isHovered }) {
  const [opacity, setOpacity] = useState(0);
  const path = usePathname();
  const isActive = path === href;

  useEffect(() => {
    console.log(isHovered);

    !isHovered ? (isActive ? setOpacity(100) : setOpacity(0)) : setOpacity(0);
  }, [isHovered]);

  return (
    <li className="group p-4">
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

  return (
    <ul
      className="flex items-center max-lg:hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {navItems.slice(1).map(({ href, title }, id) => (
        <NavLink href={href} title={title} isHovered={isHovered} key={id} />
      ))}
    </ul>
  );
}
