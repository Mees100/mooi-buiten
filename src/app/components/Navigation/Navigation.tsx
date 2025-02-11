"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const style = {
    color: "#545756",
    padding: "15px",
    textDecoration: "none",
    margin: "0",
    alignContent: "center",
  };
  return (
    <>
      <div className={styles.header_top_wrapper}>
        <div className={styles.logo}>
          <h1>Mooi Nederland</h1>
        </div>
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
      </div>

      <div className={styles.HeaderMenu}>
        {/* <h1>Mooi Nederland</h1> */}

        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
      </div>
    </>
  );
}
