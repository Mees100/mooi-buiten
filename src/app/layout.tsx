import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "../components/Navigation";
import { Gwendolyn, Roboto } from "next/font/google";
import BtnBackToTop from "../components/ButtonBackToTop/BtnBackToTop";
import styles from "../styles/layout.module.scss";
import type { Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};
const gwendolyn = Gwendolyn({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-gwendolyn",
});
const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mooi Buiten",
  description: "Buiten, waar de zon schijnt!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${roboto.variable} ${gwendolyn.variable}`}>
      <body>
        <Navigation />
        <main className={styles.main}>{children}</main>
        <BtnBackToTop />
      </body>
    </html>
  );
}
