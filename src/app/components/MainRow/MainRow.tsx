"use client";

import { ReactNode } from "react";
import styles from "./MainRow.module.scss";

export default function MainRow({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.mainRow}>{children}</div>
    </>
  );
}
