"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import Balancer from "react-wrap-balancer";

import { MagneticButton, ParallaxFade, ParallaxReveal } from "@/components";
import { useSlowScroll } from "@/hooks";

import { Title, Wrapper } from "./index.styled";

const phrase =
  "I'm a passionate web developer with a strong focus on building interactive and high-performance applications. I specialize in React, Next.js, and modern front-end technologies, combining sleek UI design with smooth animations. My passion lies in creating seamless user experiences and solving real-world problems through code.";

export function Description() {
  const ref = useRef(null);

  useSlowScroll(ref, 3, -180);

  return (
    <article className="container relative max-sm:px-[1.3rem]" id="about">
      <Wrapper>
        <div className="basis-full lg:basis-9/12">
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className="basis-7/12 lg:basis-4/12">
          <ParallaxFade>
            <Balancer as="p" className="mt-2 text-base lg:text-lg">
              I&apos;m always eager to learn and adapt, constantly exploring new
              technologies to refine my skills. I see challenges as
              opportunities for growth and innovation
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: "-15%" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="md:absolute md:left-[83%] md:top-3/4"
        >
          <div
            className="absolute right-0 top-1/4 z-10 md:top-3/4 lg:top-[130%]"
            ref={ref}
          >
            <a
              href="/Nelson_Erege_Resume.pdf"
              download="Nelson_Erege_Resume.pdf"
            >
              <MagneticButton variant="ghost" size="ab">
                <div className="flex items-center gap-1">
                  Resume
                  <AiOutlineDownload className="mr-2" />
                </div>
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
