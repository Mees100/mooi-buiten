"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainRow from "./components/MainRow/MainRow";
import MainInner from "./components/MainInner/MainInner";

const style = {
  color: "black",
  textDecoration: "none",
};

export default function Home() {
  return (
    <>
      <MainRow>
        <div className={styles.bgGrey}>
          <MainInner>
            <div>
              <Image
                src="/veluwe-schappen.jpg"
                alt="Picture of the author"
                width={1200}
                height={650}
              />
              <div className={styles.quoteTypography}>
                <p>Veluwe</p>
              </div>
            </div>
          </MainInner>
        </div>
      </MainRow>
      <MainRow>
        <div>
          <MainInner>
            <div className={styles.containerFlex}>
              <div className={styles.layoutCards}>
                <Image
                  src="/krokus-2.jpg"
                  alt="Picture of the author"
                  width={360}
                  height={360}
                />
                <div className={styles.titleCard}>
                  <p>Bloemen</p>
                </div>
              </div>
              <div className={styles.layoutCards}>
                <Image
                  src="/amersfoort-1.jpg"
                  alt="Picture of the author"
                  width={360}
                  height={360}
                />
                <div className={styles.titleCard}>
                  <p>Amersfoort</p>
                </div>
              </div>
              <div className={styles.layoutCards}>
                {" "}
                <Image
                  src="/hamamelis.jpg"
                  alt="Picture of the author"
                  width={360}
                  height={360}
                />
                <div className={styles.titleCard}>
                  <p>Arboretum Belmonte in de lente</p>
                </div>
              </div>
            </div>
          </MainInner>
        </div>
      </MainRow>
      <MainRow>
        <div>
          <MainInner>
            <div className={styles.containerFlex}>
              <div className={styles.textContent}>
                <h3>Veluwe</h3>
                <p>Wolfheze in januari. Vorstelijke en mistige ochtend </p>
                <button className={styles.btnContent}>
                  <Link href="./wolfheze" style={style}>
                    Bekijk meer foto's
                  </Link>
                </button>
              </div>
              <div>
                <Image
                  src="/meer.jpg"
                  alt="Picture of the author"
                  width={700}
                  height={450}
                  className={styles.imgContent}
                />
              </div>
            </div>
          </MainInner>
        </div>
      </MainRow>
      <MainRow>
        <div className={styles.bgGrey + " " + styles.containerFlex}>
          <MainInner>
            <h1>Over mij</h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Risus sit
              mauris non class tempus lobortis etiam sem himenaeos. Sociosqu
              euismod penatibus mattis inceptos tincidunt facilisi fusce erat.
            </p>
            <p>
              Vehicula feugiat ultricies dui ad rutrum venenatis. Class mauris
              dictum magna rhoncus habitant potenti posuere nostra. Blandit
              litora metus nisl tempus eros ridiculus finibus volutpat. Lacinia
              ante semper habitasse malesuada risus. Litora penatibus erat augue
              mus velit congue. Nec lacinia vel porttitor, fermentum id
              facilisis ipsum sagittis.
            </p>
          </MainInner>
        </div>
      </MainRow>
    </>
  );
}
