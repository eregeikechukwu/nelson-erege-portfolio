'use client';

import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { MagneticButton } from '@/components';
import { useOffcanvasToggle } from '@/hooks';
import { cn } from '@/utils';

import classes from './index.module.css';

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {import('react').Dispatch<SetStateAction<boolean>>} props.handleOpen
 */
export function OffcanvasToggle({ isOpen, handleOpen }) {
  /** @type {import('react').MutableRefObject<HTMLDivElement>} */
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const { scrollYProgress } = useOffcanvasToggle({
    element: containerRef,
    callback: latest => latest <= 1 && handleOpen(false),
  });

  // const [location, setLocation] = useState(() => {
  //   usePathname();
  // });

  const location = usePathname();

  useEffect(() => {
    // const root = document.body;
    // console.log(root);

    // const observerCallback = entries => {
    //   const [entry] = entries;
    //   console.log(entry);
    //   if (entry.isIntersecting) {
    //     setIsIntersecting(true);
    //     console.log(entry.isIntersecting);
    //   } else {
    //     console.log(entry.isIntersecting);
    //     setIsIntersecting(false);
    //   }
    //   // });
    // };

    // const observerOptions = {
    //   root: null,
    //   rootMargin: '200px',
    //   threshold: 0,
    // };

    // const observer = new IntersectionObserver(
    //   observerCallback,
    //   observerOptions,
    // );
    // console.log(root);

    // observer.observe(root);
    let triggered = false;
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;

      if (scrollTop > 200 && !triggered) {
        triggered = true;
        setIsIntersecting(true);
      } else {
        triggered = false;
        setIsIntersecting(false);
      }
    });
  }, [location]);
  console.log(isIntersecting);

  return (
    <AnimatePresence>
      {!isIntersecting ? null : (
        <motion.div
          // ref={containerRef}
          ref={elementRef}
          className={classes.wrapper}
          initial={{ scale: 0 }}
          // initial={false}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
          // style={{ scale: scrollYProgress }}
        >
          <MagneticButton
            size='md'
            variant='ghost'
            className='border border-solid border-muted-foreground'
            onClick={() => handleOpen(!isOpen)}
          >
            <span
              className={cn([classes.burger], [isOpen && classes.burgerActive])}
            />
            <span className='sr-only focus:not-sr-only'>Offcanvas Toggle</span>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
