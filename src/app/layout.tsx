import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gwendolyn } from "next/font/google";
import BtnBackToTop from "./components/ButtonBackToTop/BtnBackToTop";

const gwendolyn = Gwendolyn({
  weight: "700",
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
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <BtnBackToTop />
        <Footer />
      </body>
    </html>
  );
}
