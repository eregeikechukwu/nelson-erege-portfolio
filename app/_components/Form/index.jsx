"use client";

import { useEffect, useReducer, useState } from "react";

import { formFields } from "@/data";

import styles from "./styles.module.scss";
import { MagneticButton } from "../common";
import { Field } from "./Field";

const initialState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
  isWrong: false,
  isError: false,
  isEmpty: false,
  status: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_STATUS":
      return { ...state, status: action.value };
    case "SET_ISWRONG":
      return { ...state, isWrong: action.value };
    case "SET_ISERROR":
      return { ...state, isError: action.value };
    case "SET_ISEMPTY":
      return { ...state, isEmpty: action.value };
    case "RESET_FORM":
      return { initialState };

    default:
      return state;
  }
}

export function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  //Error setter function
  const errorSetter = function (nameBoolean, emailBoolean, messageBoolean) {
    dispatch({
      type: "SET_ISERROR",
      value: !(nameBoolean && emailBoolean && messageBoolean),
    });
  };

  //Email sender function
  const sendEmail = async function (e) {
    dispatch({ type: "SET_STATUS", value: "Sending..." });
    console.log("Email is to try sending now");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    const result = await response.json();
    if (response.ok) {
      dispatch({ type: "SET_STATUS", value: "Message sent successfully" });
      dispatch({ type: "RESET_FORM" });
      alert("Message sent successfully");
    } else {
      dispatch({
        type: "SET_STATUS",
        value: "Failed to send message, please try again later",
      });
      alert("Failed to send message, please try again later");
    }
  };
  console.log(state.status);

  const handleSubmit = function (e) {
    e.preventDefault();
    const nameBoolean = !/^[\s]*$/.test(state.name);
    const emailBoolean = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      state.email,
    );
    const messageBoolean =
      state.message.length > 4 && state.message.length < 1000;

    //Setting general form error state
    errorSetter(nameBoolean, emailBoolean, messageBoolean);

    //MAIN EMAIL SENDER CALLER!!!!!
    CallSender();
  };

  console.log(state.isError);

  const CallSender = function () {
    console.log(state.isError);
    if (!state.isError) {
      sendEmail();
    }
  };

  //HANDLE FORM FIELDS CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: value,
    });
  };

  const checkIfEmpty = function (e) {
    const regex = /^[\s]*$/;
    const boolean = regex.test(e.target.value);
    dispatch({ type: "SET_ISEMPTY", value: !boolean });
  };

  useEffect(() => {
    state.isError &&
      (() => {
        const boolean = state.message.length > 2 && state.message.length < 1000;
        dispatch({ type: "SET_ISWRONG", value: !boolean });
      })();
  }, [state.isError, state.message]);

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <Field
          field={field}
          key={field.id}
          formData={state}
          handleChange={handleChange}
          isError={state.isError}
        />
      ))}
      <div
        className={`${styles.form__message} ${styles.flex_col} ${styles.field}`}
      >
        <h5>05</h5>
        <label
          htmlFor="message"
          style={{ opacity: `${state.isEmpty ? 0.33 : 1}` }}
        >
          Your message
        </label>
        <textarea
          type="text"
          id="form-message"
          name="message"
          value={state.message}
          onChange={(e) => {
            checkIfEmpty(e);
            handleChange(e);
          }}
          rows="7"
          required={true}
          placeholder="Hello Nelson, can you help me with ... *"
        />
        {state.isWrong && (
          <div className={styles.error__message}>
            <span>Please enter a text between 3 and 3000 characters</span>
          </div>
        )}
      </div>
      <div className={styles.send}>
        <MagneticButton variant="primary" size="sd">
          Send it!
        </MagneticButton>
      </div>
    </form>
  );
}
