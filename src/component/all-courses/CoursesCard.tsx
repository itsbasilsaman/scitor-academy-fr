"use client"


import { FaShare } from "react-icons/fa"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useLanguage } from "../../context/LanguageContext"

 



 


export default function CourseCards() {
  const router = useRouter();
  const { content, direction } = useLanguage();
  // Track currency for each course card by id
  const [currencyMap, setCurrencyMap] = useState<{ [id: string]: 'SAR' | 'USD' }>({});
  const conversionRate = 0.27;

  // Toggler UI for inside card, now per card
  const CurrencyTogglerInline = ({ id, currency }: { id: string; currency: 'SAR' | 'USD' }) => (
    <div className="flex items-center gap-2 px-1 py-1 ml-4 bg-white rounded-full shadow cursor-pointer">
      <button
        className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-xs ${currency === 'SAR' ? 'bg-[#6606E3] text-white' : 'bg-gray-100 text-gray-700'}`}
        onClick={() => setCurrencyMap((prev) => ({ ...prev, [id]: 'SAR' }))}
        aria-label="Show price in SAR"
      >
        SAR
      </button>
      <span className="text-xs font-bold text-gray-400">|</span>
      <button
        className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-xs ${currency === 'USD' ? 'bg-[#6606E3] text-white' : 'bg-gray-100 text-gray-700'}`}
        onClick={() => setCurrencyMap((prev) => ({ ...prev, [id]: 'USD' }))}
        aria-label="Show price in USD"
      >
        USD
      </button>
    </div>
  );

  return (
    <div className="container px-4 py-8 mx-auto sm:px-8 lg:px-16" dir={direction}>
      <div className="grid grid-cols-1 gap-6 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
        {content.courses.map((course) => {
          // Use per-card currency, default to SAR
          const currency = currencyMap[course.id] || 'SAR';
          const showCurrency = currency === 'SAR' ? 'SAR' : 'USD';
          const price = currency === 'SAR' ? (course.price || 0) : Math.round((course.price || 0) * conversionRate);
          const originalPrice = currency === 'SAR' ? (course.originalPrice || 0) : Math.round((course.originalPrice || 0) * conversionRate);
          return (
            <div
              key={course.id}
              className="transition-shadow duration-200 bg-white border border-gray-100 rounded-[30px] cursor-pointer hover:shadow-lg"
              role="button"
              tabIndex={0}
              onClick={() => {}}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // No navigation
                }
              }}
              style={{borderRadius:"30px"}}
            >
            {/* Course Image */}
            <div className="relative w-full h-[300px] rounded-t-[30px]   " >
              <Image src={"/badge-icon.png"} alt={""} width={50} height={50} className="absolute z-20 top-4 left-[-41px]" />
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover  rounded-t-[30px] " />
              <button className="absolute p-2 transition-colors rounded-md top-3 right-3 bg-white/80 hover:bg-white">
                <FaShare className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Course Content */}
            <div
              className="p-4 space-y-3 rounded-b-[30px]"
              style={{
                background:
                  "linear-gradient(to right, rgba(224, 198, 253, 1) 1%, rgba(143, 221, 255, 0.5) 32%, rgba(95, 236, 253, 0.5) 58%, rgba(131, 145, 161, 0.5) 100%)",
              }}
            >
              <span className="px-5 py-1 text-xs font-medium text-black bg-white rounded-full ">{course.subtitle || "Beginner"}</span>
              {/* Title */}
              <h3 className="mt-4 text-lg text-gray-900 lg:text-[22px] lfont-medium line-clamp-2">{course.title}</h3>
              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">{course.description}</p>
              <div className="w-full h-1 border-b border-gray-400 "></div>
              {/* Price and Instructor (if available) */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center justify-between w-full" style={{ fontFamily: '"Manrope", sans-serif' }}>
                  <div className="flex items-center gap-2">
                    {price > 0 && (
                      <span className="text-lg font-bold text-gray-900">
                        {showCurrency} {price.toLocaleString()}
                      </span>
                    )}
                    {originalPrice > 0 && (
                      <span className="text-sm text-gray-500 line-through">
                        {showCurrency} {originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <CurrencyTogglerInline id={course.id.toString()} currency={currency} />
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
