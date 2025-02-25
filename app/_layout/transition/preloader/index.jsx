"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Dot, WindIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { Center } from "@/components";
import { preloaderWords } from "@/data";
import { useDimensions, useHashPath, useTimeOut } from "@/hooks";

import { fade, greetingFade, slideUp } from "./variants";

const MotionComponent = motion(Center);

console.log(preloaderWords);

export function Preloader() {
  const { width, height } = useDimensions();
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    setIsloaded(true);
  }, [width]);

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };
  //0.3
  return (
    <MotionComponent
      className="fixed z-50 h-screen w-screen cursor-wait bg-[var(--color-dark-dark)]"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      {isLoaded ? <Greetings /> : null}
    </MotionComponent>
  );

  function Greetings() {
    const [greeting, setGreeting] = useState(preloaderWords[0]);
    const { hashPath, hasLoaded, hash } = useHashPath();

    const path = usePathname();

    useEffect(() => {
      let timeouts = [];
      for (let index = 0; index < preloaderWords.length; index++) {
        timeouts = [
          ...timeouts,
          index === 0 || index === preloaderWords.length - 1
            ? 200 * (index + 1) + 1200
            : 200 * (index + 1),
        ];
      }

      const ochetraTimeout = function () {
        timeouts.forEach((timeout, index) => {
          setTimeout(() => {
            setGreeting(preloaderWords[index + 1]);
            clearTimeout();
          }, timeout);
        });
      };

      //Set transition title to pathName
      const setToPath = function () {
        const array = !hashPath
          ? path.split("").slice(1)
          : hasLoaded
            ? window.location.hash.split("").slice(1)
            : "";
        const greeting = array[0].toUpperCase() + array.slice(1).join("");
        setGreeting(greeting);
      };

      //Main Caller
      if (hasLoaded) {
        path === "/" && !hash ? ochetraTimeout() : setToPath();
      }

      console.log(hasLoaded + "it has loaded");

      return;
    }, [path, hasLoaded, hashPath, hash]);

    return (
      <>
        <MotionComponent
          className="text-3xl text-background md:text-4xl"
          variants={greetingFade}
          initial="initial"
          animate="enter"
        >
          <Dot size={48} className="me-3" />
          <p>{greeting}</p>
        </MotionComponent>
        <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
          <motion.path
            className="fill-[var(--color-dark-dark)]"
            variants={curve}
            initial="initial"
            exit="exit"
          />
        </motion.svg>
      </>
    );
  }
}
