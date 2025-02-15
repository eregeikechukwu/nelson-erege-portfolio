"use client";

import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/dist/lenis-react";
import { MoveDownRight } from "lucide-react";
import { CldImage } from "next-cloudinary";

import { Globe, ParallaxSlider } from "@/components";
import { useSlowScroll } from "@/hooks";

import styles from "./header.module.scss";
import { slideUp } from "./variants";

export function Header() {
  const ref = useRef(null);

  useSlowScroll(ref, 3, 230);

  return (
    <ReactLenis duration={5} easing={(t) => Math.pow(t, 2)} root>
      <motion.header
        className="page relative h-screen overflow-hidden bg-secondary-foreground text-background md:h-[110vh]"
        variants={slideUp}
        initial="initial"
        animate="enter"
      >
        <CldImage
          src="Adobe_Express_-_file_l62pfw.png"
          className={`header-image object-cover md:scale-125 md:object-contain ${styles.header__image}`}
          ref={ref}
          fill={true}
          sizes="100vw"
          alt="Dennis Snellenberg Personal Picture"
        />

        <div className="relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal">
          <div className="select-none">
            <h1 className="text-[max(9em,15vw)] md:mb-12">
              <ParallaxSlider repeat={4} baseVelocity={2}>
                <span className="pe-12">
                  Nelson Erege
                  <span className="spacer">—</span>
                </span>
              </ParallaxSlider>
            </h1>
          </div>

          <div className="md:flex">
            <div className={`${styles.hanger}`}>
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

            <div className="mx-10 max-md:my-12 md:absolute md:right-[-2%] md:top-[45%] md:ml-auto md:mr-16">
              <div className="mb-4 md:absolute md:top-[-12.5vh] md:mb-20">
                <MoveDownRight size={28} strokeWidth={1.25} />
              </div>

              <h4 className="text-[clamp(1.55em,2.4vw,2.75em)]">
                <span className="block">Freelance</span>
                <span className="block">Designer &amp; Developer</span>
              </h4>
            </div>
          </div>
        </div>
      </motion.header>
    </ReactLenis>
  );
}
