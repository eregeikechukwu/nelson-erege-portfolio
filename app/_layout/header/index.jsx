"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/dist/lenis-react";
import { MoveDownRight } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { Globe, ParallaxSlider } from "@/components";
import { useHashPath, useHeaderTranslate, useSlowScroll } from "@/hooks";

import styles from "./header.module.scss";
import { slideUp } from "./variants";

export function Header() {
  const ref = useRef(null);

  useSlowScroll(ref, 3, 370);

  //Translate variants
  const { slideUp, delay } = useHeaderTranslate();

  return (
    <ReactLenis duration={5} easing={(t) => Math.pow(t, 2)} root>
      <Link href={"/#work"} id="worklink" className="hidden"></Link>
      <motion.header
        className="page relative h-screen overflow-hidden bg-secondary-foreground text-background md:h-[110vh]"
        variants={slideUp}
        initial="initial"
        animate={delay && slideUp.enter}
      >
        <div className={styles.header__image}>
          <CldImage
            src="https://res.cloudinary.com/du0dbvljb/image/upload/v1741020392/result_4_nndg3d.png"
            className={`header-image object-cover md:scale-125 md:object-contain`}
            ref={ref}
            fill={true}
            sizes="100vw"
            alt="Nelson Erege Personal Picture"
          />
        </div>

        <div className="relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal">
          <motion.div
            className="select-none"
            variants={slideUp}
            initial="initial"
            animate={delay && slideUp.parallaxEnter}
          >
            <h1 className="text-[max(9em,15vw)] md:mb-12">
              <ParallaxSlider repeat={4} baseVelocity={2}>
                <span className="pe-12">
                  Nelson Erege
                  <span className="spacer">—</span>
                </span>
              </ParallaxSlider>
            </h1>
          </motion.div>

          <div className="md:flex">
            <div className={`max-d:hidden ${styles.hanger}`}>
              <p>
                <span>Located</span> <span>in</span> <span>Nigeria</span>
              </p>
              <svg
                width="300px"
                height="121px"
                viewBox="0 0 300 121"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Combined Shape</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(0.000000, -366.000000)"
                    fill="#1C1D20"
                  >
                    <g
                      id="Group"
                      transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)"
                    >
                      <g
                        id="Hanger"
                        transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)"
                      >
                        <path
                          d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
                          id="Combined-Shape"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <div className={styles.hanger__digitalball}>
                <div className={styles.hanger__digitalball__overlay}></div>
                <Globe />
              </div>
            </div>

            <motion.div
              variants={slideUp}
              initial="initial"
              animate={delay && slideUp.parallaxEnter}
              className="mx-10 max-md:relative max-md:my-12 max-md:flex max-md:justify-between max-sm:ml-4 md:absolute md:right-[-2%] md:top-[45%] md:ml-auto md:mr-16"
            >
              <div className="absolute top-[-12.5vh] mb-4 max-md:-top-12 md:mb-20">
                <MoveDownRight size={28} strokeWidth={1.25} />
              </div>

              <h4 className="text-[clamp(1.55em,2.4vw,2.75em)]">
                <span className="block">Front-end</span>
                <span className="block">Engineer &amp; Developer</span>
              </h4>

              <div className="relative md:hidden">
                <Globe />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </ReactLenis>
  );
}
