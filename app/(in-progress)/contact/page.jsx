import { InProgress } from "@/components";
import { Navbar, Transition } from "@/layout";

import { Body, Headers } from "./_components";
import styles from "./main.module.scss";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Contact",
  description:
    "Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Nelson",
};

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Headers />
          <Body />
        </div>
      </main>
    </Transition>
  );
}
