"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { MagneticButton, ProfilePicture } from "@/components";

import { Container, ImageWrapper, MainTitle, Row } from "./index.styled";

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className="flex items-center gap-8">
          <ProfilePicture />
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className="flex items-center justify-between">
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className="relative w-full">
          <div className="h-px bg-muted-foreground" />
          <div className="absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 max-md:-translate-x-1/4">
            <motion.div style={{ x: transformX }}>
              <Link href="/contact" passHref>
                <MagneticButton
                  variant="primary"
                  size="lc"
                  className="blur-[0.6px]"
                >
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row className="max-md:mt-6">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <div>
            <a href="mailto:eregeikechukwu@gmail.com">
              <MagneticButton
                variant="outline"
                size="mc"
                className="w-full border-muted-foreground"
              >
                eregeikechukwu@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href="tel:+2347019211773">
              <MagneticButton
                variant="outline"
                size="mc"
                className="w-full border-muted-foreground"
              >
                +234 701 921 1773
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
