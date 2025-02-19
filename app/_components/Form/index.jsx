"use client";

import { useEffect, useState } from "react";

import { formFields } from "@/data";

import styles from "./styles.module.scss";
import { MagneticButton } from "../common";

function Field({ field, formData, handleChange, isError }) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isWrong, setIswrong] = useState(false);

  const checkIfEmpty = function (e) {
    const regex = /^[\s]*$/;
    const boolean = regex.test(e.target.value);
    setIsEmpty(!boolean);
  };

  useEffect(() => {
    console.log("The value chabged na");

    isError &&
      (() => {
        if (field.name === "email") {
          const emailData = formData.email;
          const boolean = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            emailData,
          );
          setIswrong(!boolean);
        }
        if (field.name === "name") {
          const nameData = formData.name;
          const boolean = /^[\s]*$/.test(nameData);
          setIswrong(boolean);
        }
      })();
  }, [isError, formData]);

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
        autoFocus="off"
        onChange={(e) => {
          handleChange(e);
          checkIfEmpty(e);
        }}
        required={field.required}
        placeholder={field.placeholder}
      />
      {field.required && isWrong && (
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
  const [isWrong, setIswrong] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = function () {
    const nameBoolean = !/^[\s]*$/.test(formData.name);
    const emailBoolean = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      formData.email,
    );
    const messageBoolean =
      formData.message.length > 4 && formData.message.length < 1000;

    setIsError(!(nameBoolean && emailBoolean && messageBoolean));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkIfEmpty = function (e) {
    const regex = /^[\s]*$/;
    const boolean = regex.test(e.target.value);
    setIsEmpty(!boolean);
  };

  useEffect(() => {
    isError &&
      (() => {
        const boolean =
          formData.message.length > 3 && formData.message.length < 1000;
        setIswrong(!boolean);
      })();
  }, [isError, formData]);

  return (
    <form className={styles.form} noValidate>
      {formFields.map((field, index) => (
        <Field
          field={field}
          key={field.id}
          formData={formData}
          handleChange={handleChange}
          isError={isError}
        />
      ))}
      <div
        className={`${styles.form__message} ${styles.flex_col} ${styles.field}`}
      >
        <h5>05</h5>
        <label for="message" style={{ opacity: `${isEmpty ? 0.33 : 1}` }}>
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
        {isWrong && (
          <div className={styles.error__message}>
            <span>Please enter a text between 3 and 3000 characters</span>
          </div>
        )}
      </div>
      <div
        className={styles.send}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          console.log(isError);
        }}
      >
        <MagneticButton variant="primary" size="sd">
          Send it!
        </MagneticButton>
      </div>
    </form>
  );
}
