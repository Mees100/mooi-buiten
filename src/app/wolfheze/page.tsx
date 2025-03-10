"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./wolfheze.module.scss";
import MainInner from "../components/MainInner/MainInner";

export default function Test() {
  return (
    <>
      <MainInner>
        <div className={styles.wrapper}>
          <div className={styles.contentTitle}>
            <h3>Mooie ochtend in januari op de Veluwe</h3>
            <p>
              Deze mooie natuur ligt in de gemeente Arnem, maar in werkelijkheid
              is het niet ver van het station Wolfheze in de gemeente Renkum, de
              plaats ligt ten zuiden van de spoorlijn, ten oosten van Johanna
              Hoeve
            </p>
          </div>
          <div className={styles.img1}>
            <Image
              src="/202501_Wolfheze/heideveld.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>

          <div className={styles.img2}>
            <Image
              src="/202501_Wolfheze/ice.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img3}>
            <Image
              src="/202501_Wolfheze/boom.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img4}>
            <Image
              src="/202501_Wolfheze/meerenbos.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img5}>
            <Image
              src="/202501_Wolfheze/veld.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img6}>
            <Image
              src="/202501_Wolfheze/gras.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
        </div>
      </MainInner>
    </>
  );
}
