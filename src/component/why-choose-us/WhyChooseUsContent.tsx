"use client"
import { useLanguage } from "@/context/LanguageContext";


export default function WhyChooseUsContent() {
  const { language, content } = useLanguage();
  // Section title
  const sectionTitle = language === 'ar' ? 'لماذا نحن؟' : 'Why Choose Us';
  // Header
  const header = language === 'ar'
    ? 'شريكك في إتقان الإنجليزية والمهارات المهنية.'
    : 'Your partner in mastering English and career-ready skills.';
  // Description
  const description = language === 'ar'
    ? 'في أكاديمية سيتور، نلتزم بتقديم تعليم عالي الجودة يمكّن المتعلمين من التفوق في حياتهم المهنية. لهذا يثق بنا آلاف الطلاب في رحلتهم التعليمية.'
    : 'At Scitor Academy, we are committed to providing high-quality education that empowers learners to excel in their careers. Here’s why thousands of students trust us for their learning journey;';
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 mx-auto md:py-20">
      <p className="mb-2 text-sm font-medium text-center text-gray-600 ">
        {sectionTitle}
      </p>
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center ">
        <h1 className="mb-6 text-3xl leading-tight md:text-5xl font-regular">
          {header}
        </h1>
      </div>
      <p className="max-w-3xl px-2 mx-auto mb-16 text-base text-center text-gray-700 md:max-w-4xl md:mx-0">
        {description}
      </p>
    </div>
  );
}