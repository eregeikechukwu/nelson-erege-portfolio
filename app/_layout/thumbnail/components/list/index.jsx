'use client';

import { Variable } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { thumbnailOptions } from '@/data';

import styles from './styles.module.scss';
import css from '../../../../icons/css.svg';
import figma from '../../../../icons/figma.svg';
import html from '../../../../icons/html.svg';
import javascript from '../../../../icons/javascript.svg';
import nextjs from '../../../../icons/nextjs.svg';
import react from '../../../../icons/react.svg';
import scss from '../../../../icons/scss.svg';
import tailwind from '../../../../icons/tailwind.svg';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */

const iconPaths = {
  react: react,
  css: css,
  javascript: javascript,
  html: html,
  nextjs: nextjs,
  scss: scss,
  tailwind: tailwind,
  figma: figma,
  // Add more mappings as needed
};

export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, stack }, index) => {
    console.log(`/app/icons/${stack[0].toLowerCase()}.svg`);

    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
        style={
          {
            // paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
            // paddingBlock: 'clamp(1em,3vw,4em)',
          }
        }
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <div className={styles.projects__list__container}>
          <Link href={href} className={styles.projects__list__link} passHref>
            <div
              className={`${styles.projects__list__thumbnail} flex-projects-col`}
            >
              <div className={styles.title__image}>
                <div
                  className={`${styles.overlay__image} overlay-projects`}
                  style={{
                    backgroundImage:
                      'url(https://res.cloudinary.com/du0dbvljb/image/upload/v1739313600/cld-sample-2.png)',
                  }}
                ></div>
              </div>
            </div>
            <div className={`${styles.projects__list__title} flex-col`}>
              <h4>
                <span>{title}</span>
              </h4>
              <div className={styles.stripe}></div>
            </div>
            <div className={`${styles.projects__list__stack} flex-col`}>
              {stack.map((item, i) => {
                const lowerCaseItem = item.toLowerCase();
                const iconSrc = iconPaths[lowerCaseItem];

                return (
                  <div key={`skill ${i}`}>
                    <span>{item}</span>
                    <Image
                      src={iconSrc}
                      alt={`${item}-icon`}
                      width={50}
                      height={50}
                      style={{ width: '50px', height: 'auto' }}
                    />
                  </div>
                );
              })}
            </div>
            <div className={`${styles.projects__list__details} flex-col`}></div>
          </Link>
        </div>
      </li>
    );
  });

  return <ul className={`group ${styles.projects__list}`}>{items}</ul>;
}
