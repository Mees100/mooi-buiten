"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.headerBar}>
        <div className={styles.headerTopWrapper}>
          <div className={styles.logo}>
            <Link href="./">Mooi Buiten</Link>
          </div>
          <nav className={styles.nav}>
            <Link
              href="./"
              className={
                pathname === "/"
                  ? styles.menuLink + " " + styles.active
                  : styles.menuLink
              }
            >
              Home
            </Link>
            <Link
              href="./about"
              className={
                pathname === "/about"
                  ? styles.menuLink + " " + styles.active
                  : styles.menuLink
              }
            >
              About
            </Link>
            <Link
              href="./contact"
              className={
                pathname === "/contact"
                  ? styles.menuLink + " " + styles.active
                  : styles.menuLink
              }
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.clearHeader}></div>
    </>
  );
}
