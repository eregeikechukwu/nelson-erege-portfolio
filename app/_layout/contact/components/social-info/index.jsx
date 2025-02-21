"use client";

import { useEffect, useRef, useState } from "react";

import { delay } from "framer-motion";
import Link from "next/link";

import { MagneticButton } from "@/components";
import { socialMedias } from "@/data";
import { useTime } from "@/hooks";
import { randomId } from "@/utils";

import { ListTitle } from "./index.styled";

export function SocialInfo() {
  const time = useTime();

  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className="border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border"
      >
        <Link href={href} target="_blank" rel="noopener" passHref>
          <MagneticButton className="overflow-visible p-0">
            {title}
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className="px-12 pb-4 pt-10 text-white">
      <div className="flex flex-wrap items-stretch justify-between gap-5">
        <div className="flex gap-8">
          <div>
            <ListTitle>Version</ListTitle>
            <p className="mt-3">2025 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className="mt-3">
              <time>{time} GMT+2</time>
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <ListTitle>Socials</ListTitle>
          <ul className="flex gap-8">{medias}</ul>
        </div>
      </div>
    </div>
  );
}
