"use client";
import { FaArrowRight } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"
import { ArabicText } from "./arabicFontUtils";
export default function HeroSection() {
  const { content, language } = useLanguage();
  const hero = content.heroSection;
  const isArabic = language === 'ar';
  return (
    <div className={`w-full h-auto p-4 md:p-8 lg:p-16${isArabic ? ' rtl' : ''}`}>
      <div
        className="relative p-8 overflow-hidden rounded-3xl md:p-12 lg:p-16 xl:p-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(172, 142, 222, 0), rgba(172, 142, 222, 1)), url(/hero-bg.png)`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        {/* Content */}
        <div className={`relative z-10 max-w-4xl${isArabic ? ' text-right' : ''}`}>
          <h1 className={`mb-6 text-4xl leading-tight text-white md:text-5xl lg:text-6xl ${isArabic ? 'text-right' : 'text-center md:text-left'}`}>
            <ArabicText heading>{hero.heading}</ArabicText>
          </h1>

          <p className={`max-w-6xl mb-8 text-[15px] text-white text-regular md:text-xl${isArabic ? ' text-right' : ''}`}>
            <ArabicText>{hero.description}</ArabicText>
          </p>

          <button
            type="button"
            className={`flex items-center px-6 py-3 text-lg font-medium text-white transition-all border border-white rounded-lg backdrop-blur-sm group bg-white/10 hover:bg-white hover:text-purple-600 md:text-lg${isArabic ? ' justify-end' : ''}`}
          >
            {hero.button}
            <FaArrowRight className={`w-5 h-5 ml-2 transition-transform group-hover:translate-x-1${isArabic ? ' rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  )
}
