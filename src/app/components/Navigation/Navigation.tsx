"use client";
import styles from "./Navigation.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="./">Home</Link>
      <Link href="./about">About</Link>
      <Link href="./contact">Contact</Link>
    </nav>
  );
}
