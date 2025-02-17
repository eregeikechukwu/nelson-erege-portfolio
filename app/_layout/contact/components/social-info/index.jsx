"use client";

import { useEffect, useRef, useState } from "react";

import { delay } from "framer-motion";
import Link from "next/link";

import { MagneticButton } from "@/components";
import { socialMedias } from "@/data";
import { randomId } from "@/utils";

import { ListTitle } from "./index.styled";

export function SocialInfo() {
  const initTime = useRef();
  const [time, setTime] = useState("03:12 PM");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();

      // const delay = (60 - time.getSeconds()) * 1000;

      const hours =
        time.getHours() > 12
          ? `${time.getHours() - 12}`.padStart(2, 0)
          : `${time.getHours()}`.padStart(2, 0);
      const minutes = `${time.getMinutes()}`.padStart(2, 0);

      const timeSect = time.getHours() > 12 ? "PM" : "AM";

      setTime(`${hours}:${minutes} ${timeSect}`);
      initTime.current = `${hours}:${minutes} ${timeSect}`;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className="border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border"
      >
        <Link href={href} target="_blank" rel="noopener" passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className="px-12 pb-4 pt-10">
      <div className="flex flex-wrap items-stretch justify-between gap-5">
        <div className="flex gap-8">
          <div>
            <ListTitle>Version</ListTitle>
            <p className="mt-5">2025 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className="mt-5">
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
