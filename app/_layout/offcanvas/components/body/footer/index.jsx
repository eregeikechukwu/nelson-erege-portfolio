"use client";

import Link from "next/link";

import { Stripe } from "@/app/_components/common/Stripe";
import { MagneticButton } from "@/components";
import { socialMedias } from "@/data";
import { randomId } from "@/utils";

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className="text-xs">
        <Link href={href} target="_blank" rel="noopener" passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className="border-t border-gray-500 max-sm:border-solid sm:border-none">
      {/* <Stripe /> */}
      <h5 className="mb-3 mt-6 block ps-2 text-[.6rem] text-white max-md:text-[.6rem]">
        Socials
      </h5>
      <ul className="flex w-full justify-normal gap-2 max-sm:flex-wrap max-sm:gap-2">
        {medias}
      </ul>
    </div>
  );
}
