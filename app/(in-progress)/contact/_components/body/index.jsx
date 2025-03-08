"use client";

import { useEffect } from "react";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import { Form } from "@/app/_components/Form";
import { useCanvas } from "@/app/contexts";

import { variants } from "../variants";
import { Contacts } from "./contacts";
import styles from "./styles.module.scss";

export function Body() {
  const pathName = usePathname();
  const { setNavOpen } = useCanvas();

  useEffect(() => {
    setNavOpen(false);
  }, [pathName]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 1.2, delay: 0.1 }}
      className={`row max-md:flex-col ${styles.body}`}
    >
      <div className={`${styles.form}`}>
        <Form />
      </div>
      <Contacts />
    </motion.div>
  );
}
