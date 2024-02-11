import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NextTopLoader from "nextjs-toploader";

const km = Kosugi_Maru({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Cursed Diary",
  description:
    "Your go to website if you wanna read about some creepy stuff | horror blogs | Real life incidents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${km.className} bg-theme-bg`}>
        <NextTopLoader color="#e3a86d" shadow={false} showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
