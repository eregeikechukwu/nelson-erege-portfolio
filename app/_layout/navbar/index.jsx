"use client";

import { NavbarBrand } from "./brand";
import { NavbarList } from "./list";

export function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-10">
      <div className="flex items-center justify-between px-8 py-4 text-background max-md:px-[0.8rem] max-md:py-0 max-sm:py-4 max-sm:pr-6">
        <NavbarBrand />
        <NavbarList />
      </div>
    </nav>
  );
}
