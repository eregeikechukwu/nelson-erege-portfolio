"use client";

import { MoveDownRight } from "lucide-react";
import { motion } from "motion/react";

import { Arrow, ProfilePicture } from "@/components";

import { variants } from "../variants";
import styles from "./styles.module.scss";

function Headers() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 1.2 }}
      className={styles.headers}
    >
      <div className={`${styles.headers__head} flex-col`}>
        <h1 className={styles.headers__head__h1}>
          <span>
            <ProfilePicture />
            Let&#39;s start a&nbsp;
          </span>
          <span>project together</span>
          <div className="absolute -top-10 right-0 w-1 rotate-[85deg] md:hidden">
            <Arrow />
          </div>
        </h1>
      </div>
      <div className={`${styles.headers__profilepic} flex-col`}>
        <ProfilePicture />
        <div className={styles.arrow}>
          <Arrow />
        </div>
      </div>
    </motion.div>
  );
}

export { Headers };
