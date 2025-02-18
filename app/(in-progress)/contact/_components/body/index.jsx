"use client";

import { Form } from "@/app/_components/Form";

import styles from "./styles.module.scss";

function Body() {
  return (
    <div className={`row ${styles.body}`}>
      <div className={`${styles.form}`}>
        <Form />
      </div>
      <div className={`${styles.contacts}`}></div>
    </div>
  );
}

export { Body };
