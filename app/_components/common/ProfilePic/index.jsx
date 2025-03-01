"use client";

import { useCanvas } from "@/app/contexts";
import { useNavOpen } from "@/hooks";

import styles from "./styles.module.scss";

export function ProfilePicture() {
  const { isNavOpen, setIsOpen } = useCanvas();
  const { setIsNavOpen } = useNavOpen();

  console.log(isNavOpen + "  from globe");

  return <div className={styles.profilePicture} onClick={setIsNavOpen}></div>;
}
