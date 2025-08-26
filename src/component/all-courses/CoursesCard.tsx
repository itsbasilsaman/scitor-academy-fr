"use client"


import { FaStar, FaShare } from "react-icons/fa"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

 

const courseData = [
  {
    id: "1",
    title: "Spoken English Mastery",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 4.8,
    reviewCount: 1520,
    description:
      "Unlock fluent communication with our Spoken English Mastery course. Includes interactive speaking sessions, grammar workshops, and real-life conversation practice. Ideal for students and professionals looking to boost confidence and fluency.",
    price: 39999,
    originalPrice: 49999,
    currency: "SAR.",
    instructor: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    isLive: true,
  },
  {
    id: "2",
    title: "AI Fundamentals & Applications",
    image: "https://www.cxoinsightme.com/wp-content/uploads/2020/07/AI_shutterstock_1722492775-scaled.jpg",
    rating: 4.9,
    reviewCount: 980,
    description:
      "Dive into Artificial Intelligence! Learn the basics of AI, machine learning, and practical applications in business and daily life. Includes hands-on projects, beginner-friendly coding, and expert guest lectures.",
    price: 49999,
    originalPrice: 59999,
    currency: "SAR.",
    instructor: {
      name: "Amit Verma",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    isLive: true,
  },
]

 

export default function CourseCards() {
  const router = useRouter();
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
    <div className="container px-4 py-8 mx-auto sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 gap-6 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
        {courseData.map((course) => {
          // Use per-card currency, default to SAR
          const currency = currencyMap[course.id] || 'SAR';
          const showCurrency = currency === 'SAR' ? 'SAR' : 'USD';
          const price = currency === 'SAR' ? course.price : Math.round(course.price * conversionRate);
          const originalPrice = currency === 'SAR' ? course.originalPrice : Math.round(course.originalPrice * conversionRate);
          return (
            <div
              key={course.id}
              className="transition-shadow duration-200 bg-white border border-gray-100 rounded-[30px] cursor-pointer hover:shadow-lg"
              role="button"
              tabIndex={0}
              onClick={() => router.push('/course-detail')}
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  router.push('/course-detail');
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
              <span className="px-5 py-1 text-xs font-medium text-black bg-white rounded-full ">Beginner</span>
              {/* Title */}
              <h3 className="mt-4 text-lg text-gray-900 lg:text-[22px] lfont-medium line-clamp-2">{course.title}</h3>
              {/* Rating */}
              <div className="flex items-center gap-2 ">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-900">{course.rating.toFixed(1)}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`h-3 w-3 ${i < Math.floor(course.rating) ? "text-[#6606E3]" : "text-gray-300"}`} />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-500">({course.reviewCount.toLocaleString()})</span>
              </div>
              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">{course.description}</p>
              <div className="w-full h-1 border-b border-gray-400 "></div>
              {/* Price and Instructor */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center justify-between w-full" style={{ fontFamily: '"Manrope", sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      {showCurrency} {price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {showCurrency} {originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <CurrencyTogglerInline id={course.id} currency={currency} />
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
