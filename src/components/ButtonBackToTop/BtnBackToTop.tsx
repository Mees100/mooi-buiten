"use client";
import { useState, useEffect } from "react";
import styles from "./BtnBackToTop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";

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
      <button className={styles.btnBacktoTop} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};

export default BtnBackToTop;
