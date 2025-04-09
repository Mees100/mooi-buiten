"use client";
import Image from "next/image";
import styles from "./amersfoort.module.scss";
import MainInner from "../../components/MainInner/MainInner";

export default function Test() {
  return (
    <>
      <MainInner>
        <div className={styles.wrapper}>
          <div className={styles.contentTitle}>
            <h3>Amersfoort</h3>
          </div>

          <div className={styles.img1}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-1.jpg"
              alt="Picture of the author"
              width={1009}
              height={665}
            />
          </div>

          <div className={styles.img2}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img3}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-6.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img4}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img5}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img6}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-5.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img7}>
            <Image
              className={styles.img}
              src="/images/202502-amersfoort/202502-amersfoort-7.jpg"
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
