"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainRow from "../components/MainRow/MainRow";
import MainInner from "../components/MainInner/MainInner";

export default function Home() {
  return (
    <>
      <MainRow>
        <div className={styles.bgGrey}>
          <MainInner>
            <div className={styles.banner}>
              <Image
                className={styles.imgBanner}
                src="/images/home-page/veluwe-schapen.jpg"
                alt="Schapen op de Veluwe"
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
                    src="/images/202503-edinburgh/202503-edinburgh-5.jpg"
                    alt="panoramisch uitzicht op Edinburgh"
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
                    src="/images/202502-amersfoort/202502-amersfoort-4.jpg"
                    alt="een straat in Amersfoort"
                    width={360}
                    height={360}
                  />
                  <div className={styles.titleCard}>Amersfoort</div>
                </Link>
              </div>
              <div className={styles.layoutCards}>
                <Link href="./belmonte-arboretum">
                  {" "}
                  <Image
                    className={styles.imgCards}
                    src="/images/home-page/hamamelis.jpg"
                    alt="hamamelis * intermedia"
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
                  <Link href="./veluwe">Bekijk foto&apos;s</Link>
                </button>
              </div>
              <div>
                <Image
                  src="/images/home-page/meer.jpg"
                  alt="een ven op de Veluwe"
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
                  src="/images/home-page/lunezee.jpg"
                  alt="Lunerzee"
                  width={450}
                  height={700}
                />
              </div>
              <div className={styles.imgBox2}>
                <div>
                  <Image
                    className={styles.imgBlock}
                    src="/images/home-page/mistInBergen.jpg"
                    alt="Mist in de bergen"
                    width={600}
                    height={350}
                  />
                </div>
                <div>
                  <Image
                    className={styles.imgBlock}
                    src="/images/home-page/bergbloem.jpg"
                    alt="bergbloem"
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
