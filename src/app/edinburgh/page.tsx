"use client";
import Image from "next/image";
import styles from "./edinburgh.module.scss";
import MainInner from "../../components/MainInner/MainInner";

export default function Edinburgh() {
  return (
    <>
      <MainInner>
        <div className={styles.wrapper}>
          <div className={styles.contentTitle}>
            <h3>Edinburgh in maart</h3>
            <p>Arthur &apos;s Seat</p>
          </div>

          <div className={styles.img1}>
            <Image
              className={styles.img}
              src="/images/202503-edinburgh/202503-edinburgh-1.jpg"
              alt="Picture of the author"
              width={1009}
              height={665}
            />
          </div>

          <div className={styles.img2}>
            <Image
              className={styles.img}
              src="/images/202503-edinburgh/202503-edinburgh-2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img3}>
            <Image
              className={styles.img}
              src="/images/202503-edinburgh/202503-edinburgh-4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img4}>
            <Image
              className={styles.img}
              src="/images/202503-edinburgh/202503-edinburgh-3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.img5}>
            <Image
              className={styles.img}
              src="/images/202503-edinburgh/202503-edinburgh-5.jpg"
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
