"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Dot } from "lucide-react";

import { Center } from "@/components";
import { preloaderWords } from "@/data";
import { useDimensions, useTimeOut } from "@/hooks";

import { fade, slideUp } from "./variants";

const MotionComponent = motion(Center);

export function Preloader() {
  const { width, height } = useDimensions();
  const [greeting, setGreeting] = useState(preloaderWords[0]);

  useEffect(() => {
    // const timeouts = [1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 3200];
    let timeouts = [];
    for (let index = 0; index < preloaderWords.length; index++) {
      // const element = array[index];
      timeouts = [
        ...timeouts,
        index === 0 || index === preloaderWords.length - 1
          ? 200 * (index + 1) + 800
          : 200 * (index + 1),
      ];
    }

    timeouts.forEach((timeout, index) => {
      setTimeout(() => {
        setGreeting(preloaderWords[index + 1]);
        console.log(timeout);
        clearTimeout();
      }, timeout);
    });

    // clearTimeout();

    return;
  }, []);

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
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 3.1 },
    },
  };
  //0.3
  return (
    <MotionComponent
      className="fixed z-50 h-screen w-screen cursor-wait bg-foreground"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className="text-3xl text-background md:text-4xl"
            variants={fade}
            initial="initial"
            animate="enter"
          >
            <Dot size={48} className="me-3" />
            {/* <p>{preloaderWords[index]}</p> */}
            <p>{greeting}</p>
          </MotionComponent>
          <motion.svg className="absolute top-0 -z-10 h-[calc(100%+300px)] w-full">
            <motion.path
              className="fill-foreground"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
