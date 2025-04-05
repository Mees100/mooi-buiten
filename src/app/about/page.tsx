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
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Risus sit
                  mauris non class tempus lobortis etiam sem himenaeos. Sociosqu
                  euismod penatibus mattis inceptos tincidunt facilisi fusce
                  erat.
                </p>
                <p>
                  Vehicula feugiat ultricies dui ad rutrum venenatis. Class
                  mauris dictum magna rhoncus habitant potenti posuere nostra.
                  Blandit litora metus nisl tempus eros ridiculus finibus
                  volutpat. Lacinia ante semper habitasse malesuada risus.
                  Litora penatibus erat augue mus velit congue. Nec lacinia vel
                  porttitor, fermentum id facilisis ipsum sagittis.
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
