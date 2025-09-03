"use client"
import { useLanguage } from "@/context/LanguageContext";
// ...existing code...


export default function CoursesContent() {
  const { language, direction } = useLanguage();
  const isArabic = language === 'ar';
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 mx-auto md:py-12" dir={direction}>
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="w-full mb-4 text-2xl leading-tight text-center md:mb-6 md:text-5xl font-regular">
          {isArabic
            ? 'ابحث عن الدورة المناسبة لتعزيز مهاراتك'
            : 'Find the Right Course to Boost Your Skills'}
        </h1>
      </div>
      <p className="max-w-6xl mb-8 text-base text-center text-gray-700 md:mb-16">
        {isArabic
          ? 'في أكاديمية سيتور، نقدم مجموعة مختارة من الدورات العملية والمطلوبة المصممة لرفع مستوى حياتك المهنية وثقتك بنفسك. سواء كنت ترغب في إتقان التواصل من خلال اللغة الإنجليزية المحكية أو استكشاف عالم التسويق الرقمي المتنامي بسرعة، فإن برامجنا التي يقودها خبراء مصممة لجميع المستويات.'
          : "At SCITOR ACADEMY, we offer a curated selection of practical and in-demand courses designed to elevate your career and confidence. Whether you're looking to master communication through Spoken English or explore the fast-growing world of Digital Marketing, our expert-led programs are tailored for all levels."}
      </p>
    </div>
  )
}