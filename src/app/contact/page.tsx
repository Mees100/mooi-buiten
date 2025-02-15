"use client";
import Form from "next/form";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.contactForm}>
          <Form action="/search">
            <fieldset>
              <legend>Contactformulier</legend>
              <div className={styles.controlLabelstar}>
                <label>
                  <strong>*</strong>
                  Verplicht veld
                </label>
              </div>

              <div className={styles.controlLabel}>
                <label>
                  Naam
                  <span className={styles.star}>*</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="fname"
                  name="Naam"
                  placeholder="jouw naam"
                ></input>
              </div>
              <div className={styles.controlLabel}>
                <label>
                  E-mailadres
                  <span className={styles.star}>*</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="lname"
                  name="E-mailadres"
                  placeholder="jouw e-mailadres"
                ></input>
              </div>
              <div className={styles.controlLabel}>
                <label>
                  Onderwerp
                  <span className={styles.star}>*</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="lname"
                  name="Onderwerp"
                  placeholder="Onderwerp"
                ></input>
              </div>
              <div>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                ></textarea>
              </div>
              <button type="submit">Verstuur e-mail</button>
            </fieldset>
          </Form>
        </div>
      </div>
    </>
  );
}
