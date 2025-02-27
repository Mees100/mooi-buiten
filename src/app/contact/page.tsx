"use client";
import Form from "next/form";
import styles from "./Contact.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fname: string;
  lname: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // console.log(errors);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.contactForm}>
          <Form action="/search" onSubmit={handleSubmit(onSubmit)}>
            <h2>Contactformulier</h2>
            <div className={styles.controlLabelstar}>
              <strong>*</strong>
              Verplicht veld
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="fname" className={styles.required}>
                Naam
              </label>
              <input
                type="text"
                id="fname"
                {...register("fname", { required: "Dit veld is verplicht" })}
                placeholder="jouw naam"
              ></input>
              {errors.fname && (
                <span className={styles.errorMessage}>
                  {errors.fname.message}
                </span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lname" className={styles.required}>
                E-mailadres
              </label>
              <input
                type="text"
                id="lname"
                {...register("lname", { required: "Dit veld is verplicht" })}
                placeholder="jouw e-mailadres"
              ></input>
              {errors.lname && (
                <span className={styles.errorMessage}>
                  {errors.lname.message}
                </span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="subject" className={styles.required}>
                Onderwerp
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", {
                  required: "Dit veld is verplicht",
                  minLength: { value: 5, message: "Vul minstens 5 letters in" },
                })}
                placeholder="Onderwerp"
              ></input>
              {errors.subject && (
                <span className={styles.errorMessage}>
                  {errors.subject.message}
                </span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.required}>
                Bericht
              </label>
              <textarea
                id="message"
                placeholder="Schrijf hier je bericht.."
                {...register("message")}
              ></textarea>
            </div>
            <button type="submit">Verstuur e-mail</button>
          </Form>
        </div>
      </div>
    </>
  );
}
