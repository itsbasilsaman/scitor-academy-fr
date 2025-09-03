
"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
 
export default function LearningJourney() {
  const { language } = useLanguage();
  // Arabic and English content
  const title = language === 'ar' ? 'ابدأ رحلتك التعليمية اليوم!' : 'Start Your Learning Journey Today!';
  const items = language === 'ar'
    ? [
        'استكشف الدورات الرائجة',
        'جرّب الدروس التجريبية المجانية',
        'تعلم من خبراء الصناعة'
      ]
    : [
        'Explore trending courses',
        'Try free demo classes',
        'Learn from industry experts'
      ];
  const desc = language === 'ar'
    ? 'انضم إلى أكاديمية سيتور وافتح إمكانياتك بالمهارات المناسبة لفرص الغد! 🚀'
    : "Join Scitor Academy and unlock your potential with the right skills for tomorrow's opportunities! 🚀";
  return (
    <section className="w-full px-3 py-6 bg-white sm:py-8 sm:px-2 md:py-16 md:px-6 lg:px-12">
      <div className="container px-0 py-4 sm:px-2 md:px-6">
        <div className="grid items-center gap-6 md:grid-cols-2 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-6">
            <h1 className="text-xl tracking-tight text-center sm:text-2xl md:text-3xl lg:text-5xl font-regular md:text-left">
              {title}
            </h1>
            <ul className="grid gap-2 pl-0 text-sm text-gray-700 sm:text-lg md:pl-20">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 sm:gap-3">
                  ⏹️ <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-center text-gray-800 sm:text-lg md:text-xl md:text-left">
              {desc}
            </p>
          </div>
          {/* Right Column: Images */}
          <div className="relative flex flex-col items-center w-full mt-6 md:items-end md:mt-0">
            <div className="relative w-full h-40 sm:h-56 md:w-full md:max-w-sm lg:max-w-md aspect-[3/3] rounded-xl overflow-hidden">
              <Image
                src="https://www.lucidadvertising.com/wp-content/uploads/2022/09/Digital-Marketing-image-scaled.jpeg"
                alt="Digital Marketing Concepts on a screen"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="absolute bottom-0 right-0 hidden w-12 h-12 shadow-lg sm:w-20 sm:h-20 md:w-44 md:h-44 rounded-xl translate-x-1/4 translate-y-1/4 md:block">
              <Image
                src="https://kvnpromos.in/in/wp-content/uploads/2021/03/digital-marketing-agency-in-chennai.png"
                alt="Enter key with a graduation cap icon"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 176px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}