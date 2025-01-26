"use client";
import { FormEvent, useState } from "react";
import styles from "./ContactMe.module.css";
import Spinner from "../Spinner/Spinner";

export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formVis, setFormVis] = useState(true);

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;

    if (form && form instanceof HTMLFormElement) {
      const span = form.firstChild as HTMLSpanElement;

      if (form.checkValidity()) {
        const formData = new FormData(form);
        setLoading(true);

        try {
          const response = await fetch("/api/contact", {
            method: "post",
            body: formData,
          });

          if (response.status !== 200) throw response;

          setFormMessage(
            "Your message has been received! I'll be in touch with you shortly.",
          );
          setFormVis(false);
          span.className = `${styles["message-success"]}`;
        } catch (error) {
          setFormMessage(
            "There was an issue sending your message. Please try again!",
          );
          span.className = `${styles["message-failure"]}`;
        } finally {
          setLoading(false);
        }
      }
    }
  }

  const autoExpand = (event: FormEvent) => {
    const textArea = event.target as HTMLTextAreaElement;
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };

  const isEmpty = (event: FormEvent): void => {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (
      input.value !== "" &&
      !input.classList.toString().includes("not-empty")
    ) {
      input.className += ` ${styles["not-empty"]}`;
    } else if (input.value === "") {
      input.className = `${styles["form-input"]}`;
    }

    if (input.name === "name") {
      if (input.validity.tooShort)
        setNameError("Minimum length: 3 characters.");
      else if (input.validity.valueMissing) setNameError("Required");
      else if (input.validity.patternMismatch)
        setNameError(
          "Please use only letters, spaces, hyphens, and apostrophes.",
        );
      else if (nameError) setNameError("");
    } else if (input.name === "email") {
      if (input.validity.typeMismatch)
        setEmailError("Please enter a valid email.");
      else if (input.validity.valueMissing) setEmailError("Required");
      else if (emailError) setEmailError("");
    } else if (input.name === "message") {
      if (input.validity.valueMissing) setMessageError("Required");
      else if (input.validity.tooShort)
        setMessageError("Minimum length: 20 characters");
      else if (messageError) setMessageError("");
    }
  };

  return (
    <section className={styles.container} id="contact">
      <h1>Contact Me</h1>
      <p>
        Whether you have questions about my projects, want to discuss ideas, or
        just want to say hello, feel free to drop me a message!
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={styles["form-container"]}
      >
        <span>{formMessage}</span>
        {formVis && (
          <>
            <div className={styles["form-field"]}>
              <input
                required
                type="text"
                name="name"
                id="name"
                className={styles["form-input"]}
                onChange={(e) => isEmpty(e)}
                minLength={3}
                pattern="^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńñòóôöõøùúûüųūýÿžżźÀÁÂÄÃÅĄČĆĘÈÉÊËĖĮÌÍÎÏŁŃÑÒÓÔÖÕØÙÚÛÜŲŪÝŸŽŻŹ' \-]+$"
              />
              <label htmlFor="name" title="Name" />
              <span>{nameError}</span>
            </div>
            <div className={styles["form-field"]}>
              <input
                required
                type="email"
                name="email"
                id="email"
                className={styles["form-input"]}
                onChange={(e) => isEmpty(e)}
              />
              <label htmlFor="email" title="Email" />
              <span>{emailError}</span>
            </div>
            <div className={styles["form-field"]}>
              <textarea
                onInput={(e) => autoExpand(e)}
                required
                name="message"
                id="email"
                className={styles["form-input"]}
                rows={1}
                onChange={(e) => isEmpty(e)}
                minLength={20}
              />
              <label htmlFor="message" title="Message" />
              <span>{messageError}</span>
            </div>
            <div className={styles["submit-container"]}>
              <button type="submit" className={styles["form-submit"]}>
                Send
              </button>
            </div>
          </>
        )}
      </form>
      {loading && <Spinner />}
    </section>
  );
}
