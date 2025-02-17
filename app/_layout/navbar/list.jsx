"use client";

import { useState } from "react";

import { Dot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Center, MagneticButton } from "@/components";
import { navItems } from "@/data";
import { randomId } from "@/utils";

export function NavbarList() {
  const path = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const items = navItems.slice(1).map(({ href, title }) => {
    const id = randomId();
    const isActive = path === href;
    const scale = !isHovered ? (isActive ? 150 : 0) : 0;

    return (
      <li
        key={id}
        className="group p-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={href} passHref>
          <MagneticButton>
            <span className="text-base capitalize">{title}</span>
            <Center>
              <Dot
                className={` scale-${scale} transition-transform duration-200 ease-in-expo group-hover:scale-150`}
              />
            </Center>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className="flex items-center max-lg:hidden">{items}</ul>;
}
