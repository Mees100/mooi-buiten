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
          bottom: "30px",
          right: "27px",
          color: "#616055",
          border: "none",
          borderRadius: "50%",
          padding: "8px 15px",
          fontSize: "25px",
          cursor: "pointer",
          boxShadow: "0 4px 8px #3b3955",
          backgroundColor: "transparent",
        }}
      >
        ↑
      </button>
    )
  );
};

export default BtnBackToTop;
