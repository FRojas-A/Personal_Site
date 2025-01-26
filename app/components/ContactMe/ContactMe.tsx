"use client";
import { FormEvent } from "react";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;

    if (form && form instanceof HTMLFormElement) {
      const formData = new FormData(form);

      try {
        const response = await fetch("/api/contact", {
          method: "post",
          body: formData,
        });
        // TODO: notification for successful and failed responses
      } catch (error) {
        console.log(error);
      }
    }
  }

  const autoExpand = (event: FormEvent) => {
    const textArea = event.target as HTMLTextAreaElement;
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };

  return (
    <section className={styles.container} id="contact">
      <h1>Contact Me</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={styles["form-container"]}
      >
        <div className={styles["form-field"]}>
          <input
            required
            name="name"
            id="name"
            className={styles["form-input"]}
          />
          <label htmlFor="name" title="Name"></label>
        </div>
        <div className={styles["form-field"]}>
          <input
            required
            name="email"
            id="email"
            className={styles["form-input"]}
          />
          <label htmlFor="email" title="Email"></label>
        </div>
        <div className={styles["form-field"]}>
          <textarea
            onInput={(e) => autoExpand(e)}
            required
            name="message"
            id="email"
            className={styles["form-input"]}
            rows={1}
          />
          <label htmlFor="message" title="Message"></label>
        </div>
        <div className={styles["submit-container"]}>
          <button type="submit" className={styles["form-submit"]}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
