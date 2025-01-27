"use client";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <nav className={styles.nav}>
        <Link href="./" className={pathname === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link
          href="./about"
          className={pathname === "/about" ? styles.active : ""}
        >
          About
        </Link>
        <Link
          href="./contact"
          className={pathname === "/contact" ? styles.active : " "}
        >
          Contact
        </Link>
      </nav>
      <div className={styles.NavHeader}>
        <p>Mooi Nederland</p>
      </div>
    </>
  );
}
