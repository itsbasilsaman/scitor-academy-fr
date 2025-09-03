"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Sora } from "next/font/google";
import Navbar from "@/component/Navbar";
import ContentWithDirection from "@/component/ContentWithDirection";
import Footer from "@/component/Footer";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function HtmlWithLang({ children }: { children: React.ReactNode }) {
  const { language, direction } = useLanguage();
  return (
    <html lang={language || "en"}>
      <body className={sora.className}>
        <div dir={direction || "ltr"}>
          <Navbar />
        </div>
        <ContentWithDirection>
          {children}
          <Footer />
        </ContentWithDirection>
      </body>
    </html>
  );
}
