"use client";
import Image from "next/image";
import styles from "./belmontearboretum.module.scss";
import MainInner from "../../components/MainInner/MainInner";

export default function pagebelmontearboretum() {
  return (
    <>
      <MainInner>
        <div className={styles.wrapper}>
          <div className={styles.contentTitle}>
            <h3>Belmonte Arboretum in februari</h3>
            <p>Wageningen</p>
          </div>
          <div className={styles.img1}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-1.jpg"
              alt="Picture of the author"
              width={1009}
              height={650}
            />
            <div className={styles.imgTitle}>
              <p>hamamelis * intermedia</p>
            </div>
          </div>

          <div className={styles.img2}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img3}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img4}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img5}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-5.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img6}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-6.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img7}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202502-belmonte-arboretum-7.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img8}>
            <Image
              className={styles.img}
              src="/images/202502-belmonte-arboretum/202503-belmonte-arboretum-8.jpg"
              alt="Picture of the author"
              width={1009}
              height={650}
            />
          </div>
        </div>
      </MainInner>
    </>
  );
}
