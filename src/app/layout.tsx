import type { Metadata } from "next";
import "./globals.scss";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gwendolyn, Roboto } from "next/font/google";
import BtnBackToTop from "./components/ButtonBackToTop/BtnBackToTop";
import styles from "./styles/container.module.scss";

const gwendolyn = Gwendolyn({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mooi Nederland",
  description: "Natuur in Nederland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navigation />
        <main className={styles.container}>{children}</main>
        <BtnBackToTop />
      </body>
    </html>
  );
}
