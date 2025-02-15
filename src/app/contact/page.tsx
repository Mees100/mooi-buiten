"use client";
import Form from "next/form";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.contactForm}>
          <Form action="/search">
            <h2>Contactformulier</h2>
            <div className={styles.controlLabelstar}>
              <strong>*</strong>
              Verplicht veld
            </div>

            <div className={styles.formRow}>
              <label htmlFor="fname" className={styles.required}>
                Naam
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="jouw naam"
              ></input>
            </div>
            <div className={styles.formRow}>
              <label htmlFor="lname" className={styles.required}>
                E-mailadres
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="jouw e-mailadres"
              ></input>
            </div>
            <div className={styles.formRow}>
              <label htmlFor="subject" className={styles.required}>
                Onderwerp
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Onderwerp"
              ></input>
            </div>
            <div>
              <label htmlFor="message" className={styles.required}>
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Schrijf hier je bericht.."
              ></textarea>
            </div>
            <button type="submit">Verstuur e-mail</button>
          </Form>
        </div>
      </div>
    </>
  );
}
