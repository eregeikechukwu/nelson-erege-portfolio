"use client";

import { Form } from "@/app/_components/Form";

import { Contacts } from "./contacts";
import styles from "./styles.module.scss";

function Body() {
  return (
    <div className={`row ${styles.body}`}>
      <div className={`${styles.form}`}>
        <Form />
      </div>
      <Contacts />
    </div>
  );
}

export { Body };
