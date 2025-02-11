'use client';

import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';

export function Description() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(ref.current, { top: '10%' });
    gsap.to(ref.current, {
      backgroundPosition: 'centre -100px',
      y: -200,
      duration: 3,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-4/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className='md:absolute md:left-[83%] md:top-[100%] '
        >
          <div
            className='absolute lg:top-[130%]  top-3/4 right-0  z-10'
            ref={ref}
          >
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='ab'>
                About me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
