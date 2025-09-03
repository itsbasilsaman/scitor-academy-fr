"use client"

// Removed: import { Button } from "@/components/ui/button"
// ...existing code...
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "@/context/LanguageContext";

export default function HelpSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      title: "Contact Our Riyadh Support Team",
      desc: "For assistance, visit our office or reach out to our local support team in Saudi Arabia. We are dedicated to helping you with all your educational needs.",
      address1: "Building No. 6143, 1 King Abdulaziz Rd,",
      address2: "Al Aarid, Riyadh 13342, Saudi Arabia",
      open: "Open: 9 AM – 9 PM, every day",
      call: "Call Local Support",
      email: "Email Support"
    },
    ar: {
      title: "تواصل مع فريق الدعم في الرياض",
      desc: "للمساعدة، يمكنك زيارة مكتبنا أو التواصل مع فريق الدعم المحلي في المملكة العربية السعودية. نحن ملتزمون بمساعدتك في جميع احتياجاتك التعليمية.",
      address1: "مبنى رقم 6143، طريق الملك عبدالعزيز 1،",
      address2: "العريض، الرياض 13342، المملكة العربية السعودية",
      open: "ساعات العمل: 9 صباحًا – 9 مساءً، يوميًا",
      call: "اتصل بالدعم المحلي",
      email: "راسل الدعم"
    }
  };
  const t = content[language];
  return (
    <div className="w-full">
      {/* Map Section */}
      <div className="relative w-full h-48 overflow-hidden sm:h-64 md:h-80 lg:h-96">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=46.5945%2C24.8165%2C46.6005%2C24.8205&layer=mapnik&marker=24.8185%2C46.5975"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t.address2}
          className="absolute inset-0"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
      </div>

      {/* Help Content Section */}
      <div className="relative z-10 px-3 -mt-16 sm:px-6 md:-mt-24 lg:-mt-32 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow-lg sm:p-8 lg:p-12">
            <div
              className={
                language === "ar"
                  ? "text-right sm:text-right"
                  : "text-center sm:text-left"
              }
            >
              <h1 className="mb-3 text-2xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl sm:mb-6">{t.title}</h1>

              <div className="mb-5 space-y-2 sm:mb-8">
                <p className="max-w-2xl text-sm text-gray-600 sm:text-lg">
                  {t.desc}
                </p>
                <div className="mt-2 text-base font-medium text-gray-700">
                  <span className="block">{t.address1}</span>
                  <span className="block">{t.address2}</span>
                </div>
                <p className="mt-2 text-xs text-gray-500 sm:text-base">{t.open}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-start">
                <a
                  href="tel:+966112345678"
                  className="flex items-center justify-center w-full gap-3 px-4 py-3 text-base text-white transition bg-green-700 rounded-full sm:w-auto font-regular hover:bg-green-800"
                >
                  {t.call}
                  <GoArrowUpRight/>
                </a>

                <a
                  href="mailto:support@scitoracademy.sa"
                  className="flex items-center justify-center w-full gap-3 px-4 py-3 text-base font-medium text-gray-700 transition bg-transparent border border-gray-300 rounded-full sm:w-auto hover:bg-gray-50"
                >
                  {t.email}
                  <GoArrowUpRight/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}