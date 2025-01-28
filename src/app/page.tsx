import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bannerImage1}>
          <Image
            src="/ice.jpg"
            alt="Picture of the author"
            width={459}
            height={550}
          />
        </div>
        <div className={styles.bannerImage2}>
          <Image
            src="/meer.jpg"
            alt="Picture of the author"
            width={918}
            height={550}
          />
        </div>
        <div className={styles.bannerImage3}>
          <Image
            src="/boom.jpg"
            alt="Picture of the author"
            width={459}
            height={550}
          />
        </div>
        <div className={styles.box}>d</div>
        <div className={styles.sectionQuote}>
          <q className={styles.quoteTypography}>
            Nature is not a place to visit. It is home.
          </q>
          <p style={{ fontSize: 20 }}>– Gary Snyder</p>
        </div>
        <div className={styles.box}>f</div>
        <div className={styles.box}>g</div>
      </div>
    </>
  );
}
