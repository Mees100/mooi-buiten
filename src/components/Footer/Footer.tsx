"use client";

import { useRouter } from "next/navigation";
import styles from "./Footer.module.scss";

export default function Footer() {
  const router = useRouter();
  function goHome() {
    router.push("/");
  }
  return (
    <footer className={styles.footer}>
      <button className={styles.btn} onClick={router.back}>
        ←
      </button>
      <button className={styles.btn} onClick={goHome}>
        home
      </button>
      <button className={styles.btn} onClick={router.forward}>
        →
      </button>
    </footer>
  );
}
