"use client";

import { useCanvas } from "@/app/contexts";
import { useNavOpen } from "@/hooks";

import styles from "./styles.module.scss";

export function Globe() {
  const { isNavOpen, setIsOpen } = useCanvas();
  const { setIsNavOpen } = useNavOpen();

  return (
    <div className={styles.globe} onClick={setIsNavOpen}>
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
