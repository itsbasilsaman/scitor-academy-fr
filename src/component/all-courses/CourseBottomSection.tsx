"use client"
import { FiArrowRight } from "react-icons/fi"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
 
export default function CourseBottomSection() {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";
  return (
    <main className="h-auto bg-white" dir={direction}>
      {/* Ready to Begin Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[87rem]">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image Column */}
            <div className={isArabic ? "order-1 lg:order-2" : "order-2 lg:order-1"}>
              <div className="relative aspect-[4/3] w-full h-[400px] max-w-md mx-auto lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={isArabic ? "طالب يعمل على الكمبيوتر المحمول في مساحة مكتبية حديثة" : "Student working on laptop in modern office space"}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div className={isArabic ? "order-2 text-center lg:order-1 lg:text-right" : "order-1 text-center lg:order-2 lg:text-left"}>
              <h2 className="mb-6 text-3xl font-medium text-gray-900 sm:text-4xl lg:text-5xl">
                {isArabic ? "هل أنت جاهز للبدء؟" : "Ready to Begin?"}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-900 sm:text-[24px]">
                {isArabic
                  ? "استخدم الفلاتر لاستكشاف دورتك، أو ابدأ تجربة مجانية اليوم!"
                  : "Use the filters to discover your course, or Start a Free Demo today!"}
              </p>
              <button className="inline-flex items-center gap-4 px-6 py-2 text-base font-medium text-gray-900 transition-all duration-200 bg-white border-2 border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <span>{isArabic ? "ابدأ تجربة مجانية" : "Start a Free DEMO"}</span>
                <FiArrowRight className={isArabic ? "w-4 h-4 mr-2" : "w-4 h-4 ml-2"} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

 
