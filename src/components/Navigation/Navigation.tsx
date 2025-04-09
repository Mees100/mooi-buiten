"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let headerTopWrapperClassName = styles.headerTopWrapper;
  if (isMenuOpen) {
    headerTopWrapperClassName += " " + styles.headerTopWrapperMenuOpen;
  }

  return (
    <>
      <div className={styles.headerBar}>
        <div className={headerTopWrapperClassName}>
          <div className={styles.logo}>
            <Link href="./">Mooi Buiten</Link>
          </div>
          <div
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <div className={styles.menuClose}>X</div>
            ) : (
              <>
                <div className={styles.menuBar}></div>
                <div className={styles.menuBar}></div>
                <div className={styles.menuBar}></div>
              </>
            )}
          </div>
          <nav className={styles.nav}>
            <Link
              href="./"
              className={
                pathname === "/"
                  ? styles.menuLink + " " + styles.active
                  : styles.menuLink
              }
              onClick={() => setIsMenuOpen(false)}
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
              onClick={() => setIsMenuOpen(false)}
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
              onClick={() => setIsMenuOpen(false)}
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
