"use client";
import MainInner from "../components/MainInner/MainInner";
import MainRow from "../components/MainRow/MainRow";
import styles from "./about.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <>
      <MainRow>
        <MainInner>
          <div className={styles.containerAbout}>
            <div className={styles.contentWrapper}>
              <div className={styles.text}>
                <h1>Over mij</h1>
                <p>
                  Ik ben Alina. Ik heb veel interesses, waaronder natuur,
                  wandelen, reizen, en fotografie. Behalve in de natuur, wandel
                  ik ook graag in steden. Ik vind het leuk om de architectuur te
                  bestuderen en musea te bezoeken. Ik heb mijn hobby&apos;s
                  gecombineerd en deze blog gemaakt om mooie plekken en momenten
                  te delen.
                </p>
                <p>
                  Ik heb geen favoriet seizoen, omdat elk zijn eigen charme
                  hebt. Ik geloof dat de natuur geen slecht weer kent. Daarom
                  ben ik graag buiten, ongeacht het weer en het seizoen. Ik maak
                  foto&apos;s met de camera Canon EOS M200.
                </p>
              </div>

              <div className={styles.imageAbout}>
                <Image
                  className={styles.img}
                  src="/me.jpg"
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </MainInner>
      </MainRow>
    </>
  );
}
