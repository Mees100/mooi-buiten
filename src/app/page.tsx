import styles from "./page.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bannerImage1}>
          <Image
            src="/ice.jpg"
            alt="Picture of the author"
            width={460}
            height={550}
          />
        </div>
        <div className={styles.bannerImage2}>
          <Image
            src="/meer.jpg"
            alt="Picture of the author"
            width={921}
            height={550}
          />
        </div>
        <div className={styles.bannerImage3}>
          <Image
            src="/heideveld.jpg"
            alt="Picture of the author"
            width={460}
            height={550}
          />
        </div>

        <div className={styles.sectionQuote}>
          <q className={styles.quoteTypography}>
            Nature is not a place to visit. It is home.
          </q>
          <p style={{ fontSize: 20 }}>– Gary Snyder</p>
        </div>
        <div className={styles.currentContentDescription}>
          <h3>Wolfheze</h3>
          <p>In januari tekst...</p>
          <button className={styles.btnContent}>meer</button>
        </div>
        <div className={styles.currentContentImg}>
          <Image
            src="/tak.jpg"
            alt="Picture of the author"
            width={459}
            height={500}
          />
        </div>

        <div className={styles.content}></div>
        <div className={styles.card1}></div>
        <div className={styles.card2}></div>
        <div className={styles.card3}></div>
      </div>
    </>
  );
}
