'use client';

import styles from './styles.module.scss';

export function Globe() {
  return (
    <div className={styles.globe}>
      <div className={styles.globe__wrap}>
        <div className={styles.globe__circle}></div>
        <div className={styles.globe__circle}></div>
        <div className={styles.globe__circle}></div>
        <div className={styles.globe__circlehor}></div>
        <div className={styles.globe__circlehormiddle}></div>
      </div>
    </div>
  );
}
