"use client";
import { FormEvent } from "react";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;

    if (form && form instanceof HTMLFormElement) {
      const formData = new FormData(form);

      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      console.log(response);
    }
  }

  return (
    <section className={styles.container} id="contact">
      <h1>Contact Me</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={styles["form-container"]}
      >
        <label htmlFor="name">Name</label>
        <input name="name" id="name" className={styles["form-input"]} />
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          id="email"
          className={styles["form-input"]}
        />
        <label htmlFor="message">Message</label>
        <textarea
          required
          name="message"
          id="email"
          className={styles["form-input"]}
          rows={7}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
