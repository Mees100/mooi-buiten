import styles from "./page.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bannerImg}>
          <Image
            src="/meer.jpg"
            alt="Picture of the author"
            width={1200}
            height={700}
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
          <p>In januari 2025</p>
          <button className={styles.btnContent}>meer</button>
        </div>
        <div className={styles.currentContentImg}>
          <Image
            src="/ice.jpg"
            alt="Picture of the author"
            width={400}
            height={550}
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
