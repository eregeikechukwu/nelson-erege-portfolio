'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';
/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();
  const scrollContainerRef = useRef(null);
  const lenis = useLenis(); // Ensure this returns a valid Lenis instance

  // useEffect(() => {
  //   if (!lenis || !scrollContainerRef.current) return;

  //   const scrollHandler = event => {
  //     event.preventDefault(); // Prevent default scroll

  //     // Determine scroll direction and control speed
  //     const slowFactor = 2; // Adjust this for slower scrolling
  //     const scrollAmount = event.deltaY * slowFactor; // Adjust scroll amount based on deltaY

  //     // Get the current scroll position
  //     const currentScroll = scrollContainerRef.current.scrollTop;

  //     // Update Lenis scroll position
  //     lenis.scrollTo(currentScroll + scrollAmount, {
  //       duration: 0.5, // Duration for the scroll animation
  //     });
  //   };

  //   const container = scrollContainerRef.current;

  //   // Add event listener for mouse wheel
  //   container.addEventListener('wheel', scrollHandler, { passive: false });

  //   // Cleanup listener on component unmount
  //   return () => {
  //     container.removeEventListener('wheel', scrollHandler);
  //   };
  // }, [lenis]);
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1,
      smooth: true,
      lerp: 0.05,
      infinite: false,
      wheelMultiplier: 0.5,
      easing: t => 1 - Math.pow(1 - t, 3),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);

  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  return (
    <div ref={scrollContainerRef} className='h-auto overflow-auto'>
      <div key={pathname} className='overflow-hidden'>
        <AnimatePresence mode='wait'>
          {isLoading ? <Preloader /> : null}
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
}
