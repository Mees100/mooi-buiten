"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menuLinksClassName = styles.nav;
  if (isMenuOpen) {
    menuLinksClassName += " " + styles.menuLinksOpen;
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className={styles.headerBar}>
        <div className={styles.headerTopWrapper}>
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
          <nav className={menuLinksClassName}>
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
      <div className={styles.headerDropdown}>
        <button className={styles.btnDropdown} onClick={toggleDropdown}>
          De natuur in
        </button>

        {isDropdownOpen && (
          <ul className={styles.menuDropdown}>
            <li className={styles.liDropdown}>
              <Link href="../wolfheze" className={styles.linkDropdown}>
                Veluwe
              </Link>
            </li>
            <li className={styles.liDropdown}>
              <Link
                href="../belmonte_arboretum"
                className={styles.linkDropdown}
              >
                Botanische tuin
              </Link>
            </li>
            <li className={styles.liDropdown}>
              <Link href="../edinburgh" className={styles.linkDropdown}>
                Buitenland
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
