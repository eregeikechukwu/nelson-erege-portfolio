"use client";

import { useRef } from "react";

import { motion } from "framer-motion";

import { projectOptions } from "@/data";
import { useProjectSlider } from "@/hooks";
import { randomId } from "@/utils";

import { ProjectSlider } from "./slider";
import styles from "./styles.module.scss";

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);

  const firstSlider = projectOptions.first.map(({ type, source }) => {
    const id = randomId();
    return <ProjectSlider key={id} type={type} source={source} />;
  });

  const secondSlider = projectOptions.second.map(({ type, source }) => {
    const id = randomId();
    return <ProjectSlider key={id} type={type} source={source} />;
  });

  return (
    <section ref={containerRef} className="relative z-10 mt-14">
      <div className="grid items-center max-sm:h-[16.5rem]">
        <div className="bg-background max-sm:pb-8">
          <motion.div
            className="mb-10 flex gap-10"
            style={{
              width: "120vw",
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className="mb-10 flex gap-10"
            style={{
              width: "120vw",
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className={`${styles.curvedDiv} w-screen bg-background`}
          style={{
            height: transformY,
          }}
        />
      </div>
    </section>
  );
}
