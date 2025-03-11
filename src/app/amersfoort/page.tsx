"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./amersfoort.module.scss";
import MainInner from "../components/MainInner/MainInner";

export default function Test() {
  return (
    <>
      <MainInner>
        <div className={styles.wrapper}>
          <div className={styles.contentTitle}>
            <h3>Amersfoort</h3>
            <p>
              Vlak naast de A50 en op loopafstand van station Wolfheze ligt dit
              schitterende heideveld. Op een mooie januari ochtend met veel mist
              en rijp heb ik er deze foto's gemaakt. (2025)
            </p>
          </div>

          <div className={styles.img1}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort1.jpg"
              alt="Picture of the author"
              width={1009}
              height={550}
            />
          </div>

          <div className={styles.img2}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img3}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort6.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img4}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img5}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img6}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort5.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img7}>
            <Image
              src="/202501_Amersfoort/202502_amersfoort7.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </MainInner>
    </>
  );
}
