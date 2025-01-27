import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <q className={styles.bannerTypography}>
          Nature is not a place to visit. It is home.
        </q>
        <p>– Gary Snyder</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <Image
            src="/ice.jpg"
            alt="Picture of the author"
            width={250}
            height={350}
          />
        </div>
        <div className={styles.box}>
          {" "}
          <Image
            src="/meer.jpg"
            alt="Picture of the author"
            width={500}
            height={350}
          />
        </div>
        <div className={styles.box}>
          <Image
            src="/boom.jpg"
            alt="Picture of the author"
            width={250}
            height={350}
          />
        </div>
        <div className={styles.box}>d</div>
        <div className={styles.box}>e</div>
        <div className={styles.box}>f</div>
      </div>
    </>
  );
}
