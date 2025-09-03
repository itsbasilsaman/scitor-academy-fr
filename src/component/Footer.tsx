"use client";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const content = {
    en: {
      contact: {
        phone: "+966 0572562699",
        email: "info@scitoracademy.com",
        address: [
          "Saudi Arabia",
          "Building No. 6143, 1 King Abdulaziz Rd, Al Aarid,",
          "Riyadh 13342, Saudi Arabia"
        ]
      },
      academy: ["About Us", "Why Choose Us", "Our Instructors", "Careers"],
      quickLinks: ["Home", "About Us", "Contact", "Blog"],
      help: ["Contact Us", "FAQ", "Privacy Policy", "Terms & Conditions"],
      copyright: "© scitoracademy. All Rights Reserved 2025"
    },
    ar: {
      contact: {
        phone: "+966 0572562699",
        email: "info@scitoracademy.com",
        address: [
          "المملكة العربية السعودية",
          "مبنى رقم 6143، طريق الملك عبدالعزيز، العارض،",
          "الرياض 13342، المملكة العربية السعودية"
        ]
      },
      academy: ["من نحن", "لماذا نحن", "مدرسونا", "الوظائف"],
      quickLinks: ["الرئيسية", "من نحن", "اتصل بنا", "المدونة"],
      help: ["اتصل بنا", "الأسئلة الشائعة", "سياسة الخصوصية", "الشروط والأحكام"],
      copyright: "© جميع الحقوق محفوظة لسيتور أكاديمي 2025"
    }
  };
  const t = content[language];

  return (
    <footer className={`px-4 py-6 bg-gray-950 sm:px-6 lg:px-8 ${language === 'ar' ? 'text-right' : 'text-left'} text-gray-300`}>
      <div className="mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/footer-logo.png"
            width={120}
            height={120}
            alt="Scitor Academy Logo"
            className="mb-2 w-[120px]"
          />
        </div>
        {/* Main Content Section */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} className="text-gray-400" />
              <span>{t.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope size={16} className="text-gray-400" />
              <span>{t.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt size={16} className="text-gray-400" />
              <address className="not-italic">
                {t.contact.address.map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </address>
            </div>
          </div>
          {/* Academy Links */}
          <div>
            <h3 className="mb-2 text-base font-semibold text-white">{language === 'ar' ? 'الأكاديمية' : 'Academy'}</h3>
            <ul className="space-y-2 text-xs">
              {t.academy.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="transition-colors hover:text-gray-50">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-2 text-base font-semibold text-white">{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-2 text-xs">
              {t.quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="transition-colors hover:text-gray-50">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Help & Contact Links */}
          <div>
            <h3 className="mb-2 text-base font-semibold text-gray-50">{language === 'ar' ? 'المساعدة والتواصل' : 'Help & Contact'}</h3>
            <ul className="space-y-2 text-xs">
              {t.help.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="transition-colors hover:text-gray-50">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright and Social Media */}
        <div className="flex flex-col items-center justify-between pt-6 border-t border-gray-800 md:flex-row">
          <p className="mb-2 text-xs text-gray-400 md:mb-0">{t.copyright}</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="LinkedIn" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaLinkedin size={18} />
            </Link>
            <Link href="https://www.instagram.com/scitor.academy?igsh=ejkxbzBjdzd1eHls" aria-label="Instagram" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaInstagram size={18} />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaYoutube size={18} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaFacebook size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}