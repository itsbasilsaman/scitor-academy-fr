"use client";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { ArabicText } from "./arabicFontUtils";
import React, { useEffect, useState } from "react";

// Add global style for fadeInUp animation only once
if (typeof window !== "undefined" && !document.getElementById("fadeInUp-keyframes")) {
  const style = document.createElement("style");
  style.id = "fadeInUp-keyframes";
  style.innerHTML = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

export default function OurValues() {
  const { language } = useLanguage();
  const valuesContent = {
    en: {
      header: "Our values",
      title: "Why Scitor Academy?",
      items: [
        {
          img: "/value-02.png",
          alt: "award",
          title: "Personalized Coaching",
          desc: "Get expert guidance with customized lessons based on your goals, level, and speaking style. Whether you're a beginner or job seeker, we tailor the learning to fit you."
        },
        {
          img: "/value-01.png",
          alt: "globe",
          title: "Arabic & English Support",
          desc: "Learn in the language you're most comfortable with. All lessons, instructions, and support are available in both English and Arabic for a smooth learning experience."
        },
        {
          img: "/value-04.png",
          alt: "target",
          title: "Practice-focused Learning",
          desc: "Gain real-world confidence with roleplays, live conversations, and speaking drills. We focus on doing, not just theory."
        },
        {
          img: "/value-03.png",
          alt: "mobile",
          title: "Mobile-Ready Learning",
          desc: "Learn anytime, anywhere. Our platform works perfectly on mobile, tablet, or desktop—no app required, just open and learn!"
        }
      ]
    },
    ar: {
      header: <ArabicText>قيمنا</ArabicText>,
      title: <ArabicText>لماذا أكاديمية سيتور؟</ArabicText>,
      items: [
        {
          img: "/value-02.png",
          alt: <ArabicText>جائزة</ArabicText>,
          title: <ArabicText>تدريب شخصي</ArabicText>,
          desc: <ArabicText>احصل على إرشاد الخبراء مع دروس مخصصة بناءً على أهدافك ومستواك وأسلوبك في التحدث. سواء كنت مبتدئًا أو باحثًا عن عمل، نحن نخصص التعلم ليناسبك.</ArabicText>
        },
        {
          img: "/value-01.png",
          alt: <ArabicText>عالم</ArabicText>,
          title: <ArabicText>دعم العربية والإنجليزية</ArabicText>,
          desc: <ArabicText>تعلم باللغة التي تفضلها. جميع الدروس والتعليمات والدعم متوفر باللغتين الإنجليزية والعربية لتجربة تعلم سلسة.</ArabicText>
        },
        {
          img: "/value-04.png",
          alt: <ArabicText>هدف</ArabicText>,
          title: <ArabicText>تعلم عملي مركز على التدريب</ArabicText>,
          desc: <ArabicText>اكتسب الثقة من خلال المحاكاة والمحادثات الحية وتمارين التحدث. نركز على التطبيق وليس فقط النظرية.</ArabicText>
        },
        {
          img: "/value-03.png",
          alt: <ArabicText>جوال</ArabicText>,
          title: <ArabicText>تعلم جاهز للجوال</ArabicText>,
          desc: <ArabicText>تعلم في أي وقت وأي مكان. منصتنا تعمل بشكل مثالي على الجوال أو الجهاز اللوحي أو الكمبيوتر—بدون تطبيق، فقط افتح وابدأ التعلم!</ArabicText>
        }
      ]
    }
  };
  const v = valuesContent[language];
  const isArabic = language === "ar";
  // Animation state for mounting
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="w-full h-auto px-4 py-12 overflow-x-hidden sm:px-6 lg:px-8 sm:py-12"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={`mb-8 sm:mb-12 ${isArabic ? "text-right" : "text-center"}`}>
          <p className={`mb-2 text-sm font-medium text-gray-600 sm:text-base ${isArabic ? "text-right" : "text-center"}`}><ArabicText>{v.header}</ArabicText></p>
          <h2 className={`pb-8 text-2xl font-normal text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl ${isArabic ? "text-right" : "text-center"}`}><ArabicText heading>{v.title}</ArabicText></h2>
        </div>
        {/* Features Grid */}
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 ${isArabic ? "justify-items-end" : "justify-items-start sm:justify-items-stretch"}`}>
          {v.items.map((item, idx) => {
            // Stagger animation by index
            const fadeInUpStyle = mounted
              ? {
                  animation: `fadeInUp 0.8s ease forwards`,
                  animationDelay: `${idx * 0.2 + 0.1}s`,
                  opacity: 0,
                }
              : {};
            return (
              <div
                key={idx}
                className={`p-4 transition-transform duration-300 ease-in-out bg-white hover:scale-105 rounded-xl ${isArabic ? "text-right" : "text-left"}`}
                style={fadeInUpStyle}
              >
                <div className={`flex mb-4 sm:mb-6 ${isArabic ? "flex-row-reverse" : "flex-row"} ${isArabic ? "justify-end" : "justify-start"}`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                    <Image src={item.img} alt={typeof item.alt === 'string' ? item.alt : ''} width={64} height={64} className="object-contain w-full h-full" />
                  </div>
                </div>
                <h3 className={`mb-2 text-lg font-semibold text-gray-900 sm:text-xl sm:mb-3 ${isArabic ? "text-right" : "text-left"}`}><ArabicText heading>{item.title}</ArabicText></h3>
                <p className={`text-sm leading-relaxed text-gray-600 sm:text-base ${isArabic ? "text-right" : "text-left"}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
