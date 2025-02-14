"use client";
import Form from "next/form";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.titleContactPage}>
          <h1>Neem contact op met mij</h1>
          <h2>Contactformulier</h2>
          <h2>E-mail verzenden</h2>
        </div>
        <div className={styles.contactForm}>
          <Form action="/search">
            <label>Naam</label>
            <input
              type="text"
              id="fname"
              name="Naam"
              placeholder="jouw naam"
            ></input>
            <label>E-mailadres</label>
            <input
              type="text"
              id="lname"
              name="E-mailadres"
              placeholder="jouw e-mailadres"
            ></input>
            <label>Onderwerp *</label>
            <input
              type="text"
              id="lname"
              name="Onderwerp"
              placeholder="Onderwerp"
            ></input>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>
    </>
  );
}
