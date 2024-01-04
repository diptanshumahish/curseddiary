import type { Metadata } from "next";
import { Kosugi_Maru } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Kosugi_Maru({ subsets: ["latin"], weight: ["400"] });

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
      <body className={`${inter.className} bg-theme-bg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
