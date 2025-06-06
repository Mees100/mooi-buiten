"use client";
import Image from "next/image";
import styles from "./veluwe.module.scss";
import MainInner from "../../components/MainInner/MainInner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

export default function Veluwe() {
  return (
    <>
      <MainInner>
        <div className={styles.wrapper}>
          <div className={styles.contentTitle}>
            <h3>Mooie ochtend in januari op de Veluwe</h3>
            <p>
              Vlak naast de A50 en op loopafstand van station Wolfheze ligt dit
              schitterende heideveld. Op een mooie januari ochtend met veel mist
              en rijp heb ik er deze foto&apos;s gemaakt. (2025)
            </p>
            <p className={styles.iconTitle}>
              <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon>{" "}
              <a
                target="_blank"
                href="https://www.openstreetmap.org/?mlat=52.00723&mlon=5.80625#map=16/52.00723/5.80625"
              >
                Bekijk de locatie
              </a>
            </p>
          </div>
          <div className={styles.img1}>
            <Image
              className={styles.img}
              src="/images/202501-veluwe/202501-veluwe-1.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>

          <div className={styles.img2}>
            <Image
              className={styles.img}
              src="/images/202501-veluwe/202501-veluwe-2.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img3}>
            <Image
              className={styles.img}
              src="/images/202501-veluwe/202501-veluwe-3.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img4}>
            <Image
              className={styles.img}
              src="/images/202501-veluwe/202501-veluwe-4.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img5}>
            <Image
              className={styles.img}
              src="/images/202501-veluwe/202501-veluwe-5.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
          <div className={styles.img6}>
            <Image
              className={styles.img}
              src="/images/202501-veluwe/202501-veluwe-6.jpg"
              alt="Picture of the author"
              width={450}
              height={450}
            />
          </div>
        </div>
      </MainInner>
    </>
  );
}
