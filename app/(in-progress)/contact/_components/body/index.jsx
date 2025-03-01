"use client";

import { motion } from "motion/react";

import { Form } from "@/app/_components/Form";

import { variants } from "../variants";
import { Contacts } from "./contacts";
import styles from "./styles.module.scss";

export function Body() {
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
