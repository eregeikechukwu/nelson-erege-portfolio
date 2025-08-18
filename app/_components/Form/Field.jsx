import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

export function Field({ field, formData, handleChange, isError, status }) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isWrong, setIswrong] = useState(false);

  const checkIfEmpty = function (e) {
    const regex = /^[\s]*$/;
    const boolean = regex.test(e.target.value);
    setIsEmpty(!boolean);
  };

  useEffect(() => {
    // checkIfEmpty();
  }, [formData[field.name]]);

  useEffect(() => {
    if (status !== "Message sent successfully" || status !== "sending") {
      setIsEmpty(false);
    }
  }, [status]);

  useEffect(() => {
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
  }, [isError, formData.name, field.name, formData.email]);

  return (
    <div className={`${styles.field} ${styles.flex_col}`}>
      <h5>0{field.index}</h5>
      <label htmlFor={field.name} style={{ opacity: `${isEmpty ? 0.33 : 1}` }}>
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
      {field.required && isWrong && (
        <div className={styles.error__message}>
          <span>{field.errorMessage}</span>
        </div>
      )}
    </div>
  );
}
