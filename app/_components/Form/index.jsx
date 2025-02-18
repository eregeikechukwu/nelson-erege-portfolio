"use client";

import { useState } from "react";

import { formFields } from "@/data";

import styles from "./styles.module.scss";
import { MagneticButton } from "../common";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function Field({ field }) {
    const fieldname = field.name;
    // const value = formData;

    return (
      <div className={`${styles.field} ${styles.flex_col}`}>
        <h5>0{field.index}</h5>
        <label for={field.name}>{field.label}</label>
        <input
          type={field.type}
          value={null}
          required={field.required}
          placeholder={field.placeholder}
        />
        {field.required && (
          <div className={styles.error__message}>
            <span>{field.errorMessage}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <form className={styles.form} noValidate>
      {formFields.map((field, index) => (
        <Field field={field} key={field.id} />
      ))}
      <div
        className={`${styles.form__message} ${styles.flex_col} ${styles.field}`}
      >
        <h5>05</h5>
        <label class="label" for="message">
          Your message
        </label>
        <textarea
          class="field"
          type="text"
          id="form-message"
          name="message"
          rows="7"
          required={true}
          placeholder="Hello Dennis, can you help me with ... *"
        />
        <div className={styles.error__message}>
          <span>Please enter a text between 3 and 3000 characters</span>
        </div>
      </div>
      <div className={styles.send}>
        <MagneticButton variant="primary" size="sd">
          Send it!
        </MagneticButton>
      </div>
    </form>
  );
}
