"use client";

import { Copyright } from "lucide-react";
import Link from "next/link";

import { MagneticButton } from "@/components";

export function NavbarBrand() {
  return (
    <Link href={"/"}>
      <MagneticButton maxwidth={16}>
        <div className="group flex cursor-pointer items-center pb-5 max-sm:pb-0">
          <div className="transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]">
            <Copyright className="w-4" />
          </div>

          <div className="relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8">
            <h6 className="transition-transform duration-500 ease-in-expo group-hover:-translate-x-full">
              Code by
            </h6>
            <h6 className="ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14">
              Nelson
            </h6>
            <h6 className="absolute left-24 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14">
              Erege
            </h6>
          </div>
        </div>
      </MagneticButton>
    </Link>
  );
}
