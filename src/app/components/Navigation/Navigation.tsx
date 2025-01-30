"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const style = {
    color: "#545756",
    padding: "5px",
    textDecoration: "none",
  };
  return (
    <>
      <div className={styles.header_nav}>
        <nav className={styles.nav}>
          <Link
            style={style}
            href="./"
            className={pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
          <Link
            style={style}
            href="./about"
            className={pathname === "/about" ? styles.active : ""}
          >
            About
          </Link>
          <Link
            style={style}
            href="./contact"
            className={pathname === "/contact" ? styles.active : " "}
          >
            Contact
          </Link>
        </nav>

        <div className={styles.HeaderMenu}>
          <h1>Mooi Nederland</h1>
        </div>
      </div>
    </>
  );
}
