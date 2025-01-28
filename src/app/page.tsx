import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <Image
            src="/ice.jpg"
            alt="Picture of the author"
            width={459}
            height={550}
          />
        </div>
        <div className={styles.box}>
          {" "}
          <Image
            src="/meer.jpg"
            alt="Picture of the author"
            width={918}
            height={550}
          />
        </div>
        <div className={styles.box}>
          <Image
            src="/boom.jpg"
            alt="Picture of the author"
            width={457}
            height={550}
          />
        </div>
        <div className={styles.box}>d</div>
        <div className={styles.banner}>
          <q className={styles.bannerTypography}>
            Nature is not a place to visit. It is home.
          </q>
          <p style={{ fontSize: 20 }}>– Gary Snyder</p>
        </div>
        <div className={styles.box}>f</div>
        <div className={styles.box}>g</div>
        <div className={styles.box}>h</div>
        <div className={styles.box}>i</div>
        <div className={styles.box}>k</div>
        <div className={styles.box}>l</div>
        <div className={styles.box}>l</div>
      </div>
    </>
  );
}
