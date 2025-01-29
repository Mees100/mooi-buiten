"use client";
import { useState, useEffect } from "react";
import styles from "./BtnBackToTop.module.scss";

const BtnBackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    visible && (
      <button
        className={styles.btnBacktoTop}
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          color: "black",
          border: "1px solid #5580A6",
          borderRadius: "50%",
          padding: "15px 15px",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 4px 8px #5580A6",
        }}
      >
        ↑
      </button>
    )
  );
};

export default BtnBackToTop;
