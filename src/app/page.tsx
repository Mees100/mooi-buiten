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
      <MainRow>
        <div>
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
