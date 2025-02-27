"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export function useNavOpen() {
  const [isOpen, setOpen] = useState(false);

  const pathname = usePathname();

  const setIsOpen = function () {
    setOpen(!isOpen);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return { isOpen, setOpen };
}
