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
  openGraph: {
    title: "Cursed Diary",
    description:
      "Your go to website for creepy, horror stuff, be here if you want to read something new, something cool",
    images:
      "https://img.playbook.com/NktCs8OODKJS3YFewWmjzpqchieg42AkC0SSv3iW2kU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MzODQ1MDMz/LTFhMmYtNGIxZS04/OTAyLTgyZDdkM2Ix/YzliZA",
    countryName: "IN",
    siteName: "https://curseddiary.vercel.app",
  },
  metadataBase: new URL("https://curseddiary.vercel.app"),
  publisher: "Cursed Diary",
  robots: "index,follow",
  twitter: {
    title: "Cursed Diary",
    images:
      "https://img.playbook.com/NktCs8OODKJS3YFewWmjzpqchieg42AkC0SSv3iW2kU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MzODQ1MDMz/LTFhMmYtNGIxZS04/OTAyLTgyZDdkM2Ix/YzliZA",
    description:
      "Your go to website for creepy, horror stuff, be here if you want to read something new, something cool",
  },
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
