"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainRow from "./components/MainRow/MainRow";
import MainInner from "./components/MainInner/MainInner";

export default function Home() {
  return (
    <>
      <MainRow>
        <div className={styles.bgGrey}>
          <MainInner>
            <div className={styles.banner}>
              <Image
                className={styles.imgBanner}
                src="/img/imgHomePage/veluwe-schapen.jpg"
                alt="Picture of the author"
                width={1200}
                height={650}
              />
              <div className={styles.bannerTitle}>Veluwe</div>
            </div>
          </MainInner>
        </div>
      </MainRow>
      <MainRow>
        <div>
          <MainInner>
            <div className={styles.containerFlex}>
              <div className={styles.layoutCards}>
                <Link href="./edinburgh">
                  <Image
                    className={styles.imgCards}
                    src="/202503_Edinburgh/202503_edinburgh_5.jpg"
                    alt="Picture of the author"
                    width={360}
                    height={360}
                  />
                  <div className={styles.titleCard}>Edinburgh</div>
                </Link>
              </div>
              <div className={styles.layoutCards}>
                <Link href="./amersfoort">
                  <Image
                    className={styles.imgCards}
                    src="/amersfoort-1.jpg"
                    alt="Picture of the author"
                    width={360}
                    height={360}
                  />
                  <div className={styles.titleCard}>Amersfoort</div>
                </Link>
              </div>
              <div className={styles.layoutCards}>
                <Link href="./belmonte_arboretum">
                  {" "}
                  <Image
                    className={styles.imgCards}
                    src="/hamamelis.jpg"
                    alt="Picture of the author"
                    width={360}
                    height={360}
                  />
                  <div className={styles.titleCard}>Belmonte Arboretum</div>
                </Link>
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
                <h2>Veluwe</h2>
                <p>Ijzige en mistige ochtend in januari</p>
                <button className={styles.btnContent}>
                  <Link href="./wolfheze">Bekijk foto&apos;s</Link>
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
        <div>
          <MainInner>
            <div className={styles.quote}>
              <q className={styles.quoteTypography}>
                Nature is not a place to visit. It is home.
              </q>
              <p style={{ fontSize: 20 }}>– Gary Snyder</p>
            </div>
          </MainInner>
        </div>
      </MainRow>

      <MainRow>
        <div className={styles.bgGrey}>
          <MainInner>
            <div className={styles.imgGallery}>
              <div className={styles.imgBox1}>
                <Image
                  className={styles.imgBlock + " " + styles.imgVertical}
                  src="/Lunezee.jpg"
                  alt="Picture of the author"
                  width={450}
                  height={700}
                />
              </div>
              <div className={styles.imgBox2}>
                <div>
                  <Image
                    className={styles.imgBlock}
                    src="/mistInBergen.jpg"
                    alt="Picture of the author"
                    width={600}
                    height={350}
                  />
                </div>
                <div>
                  <Image
                    className={styles.imgBlock}
                    src="/bergbloem.jpg"
                    alt="Picture of the author"
                    width={600}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </MainInner>
        </div>
      </MainRow>
    </>
  );
}
