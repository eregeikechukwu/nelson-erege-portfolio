"use client";

import { useState } from "react";

import { formFields } from "@/data";

import styles from "./styles.module.scss";
import { MagneticButton } from "../common";

function Field({ field, formData, handleChange, checkIfEmpty, isEmpty }) {
  console.log("component  rerendered");
  return (
    <div className={`${styles.field} ${styles.flex_col}`}>
      <h5>0{field.index}</h5>
      <label for={field.name} style={{ opacity: `${isEmpty ? 0.33 : 1}` }}>
        {field.label}
      </label>
      <input
        name={field.name}
        type={field.type}
        value={formData[field.name]}
        onChange={(e) => {
          handleChange(e);
          checkIfEmpty(e);
        }}
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

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = function () {
    const nameBoolean = !/^[\s]*$/.test(formData.name);
    const emailBoolean = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      formData.email,
    );
    const messageBoolean =
      formData.message.length > 4 && formData.message.length < 1000;
    console.log(
      "nameBoo: " +
        nameBoolean +
        "emailboo: " +
        emailBoolean +
        "messageboo: " +
        messageBoolean,
    );
    setIsError(!(nameBoolean && emailBoolean && messageBoolean));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData.name);
  };

  const checkIfEmpty = function (e) {
    const regex = /^[\s]*$/;
    const boolean = regex.test(e.target.value);
    setIsEmpty(!boolean);
  };

  return (
    <form className={styles.form} noValidate>
      {formFields.map((field, index) => (
        <Field
          field={field}
          key={field.id}
          formData={formData}
          handleChange={handleChange}
          checkIfEmpty={checkIfEmpty}
          isEmpty={isEmpty}
        />
      ))}
      <div
        className={`${styles.form__message} ${styles.flex_col} ${styles.field}`}
      >
        <h5>05</h5>
        <label class="label" for="message">
          Your message
        </label>
        <textarea
          type="text"
          id="form-message"
          name="message"
          value={formData.message}
          onChange={(e) => {
            checkIfEmpty(e);
            handleChange(e);
          }}
          rows="7"
          required={true}
          placeholder="Hello Dennis, can you help me with ... *"
        />
        <div className={styles.error__message}>
          <span>Please enter a text between 3 and 3000 characters</span>
        </div>
      </div>
      <div
        className={styles.send}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          console.log(formData.message.length);
        }}
      >
        <MagneticButton variant="primary" size="sd">
          Send it!
        </MagneticButton>
      </div>
    </form>
  );
}
