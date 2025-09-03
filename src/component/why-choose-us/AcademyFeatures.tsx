
"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AcademyFeatures() {
  const { language } = useLanguage();
  // Arabic and English content
  const features = language === 'ar'
    ? [
        'ملاءمة حقيقية لسوق العمل',
        'تعلم ثنائي اللغة (إنجليزي + عربي)',
        'دروس تجريبية تفاعلية',
        'مدربون معتمدون',
        'تعليم ميسر ومرن وفي متناول الجميع',
        'لوحة تحكم تعليمية مخصصة',
        'مجتمع ودعم مستمر'
      ]
    : [
        'Real Industry Relevance',
        'Bilingual Learning (English + Arabic)',
        'Interactive Demo Classes',
        'Certified Instructors',
        'Affordable. Accessible. Flexible.',
        'Personalized Learning Dashboard',
        'Community & Support'
      ];
  const descTitle = language === 'ar' ? 'تعلم ما يهم. طبق ما ينفع.' : 'Learn what matters. Apply what works.';
  const desc1 = language === 'ar'
    ? 'في أكاديمية سيتور، يتم تصميم كل دورة بما يتماشى مع اتجاهات السوق الحالية وتوقعات أصحاب العمل والمعايير العالمية للمهارات. منهجنا ليس أكاديميًا فقط—بل عملي، يركز على التطبيق، ويواكب متطلبات العالم الحقيقي.'
    : "At SCITOR ACADEMY, every course is designed in close alignment with current industry trends, employer expectations, and global skill standards. Our curriculum is not just academic—it's practical, application-driven, and shaped by real-world demands.";
  const desc2 = language === 'ar'
    ? 'سواء كنت تتقن الإنجليزية المحكية للتواصل الوظيفي أو تتعلم التسويق الرقمي باستخدام أدوات مثل SEO وMeta Ads وGoogle Analytics، ستحصل على مهارات يبحث عنها أصحاب العمل.'
    : "Whether you're mastering Spoken English for confident workplace communication or diving into Digital Marketing with tools like SEO, Meta Ads, and Google Analytics, you'll gain skills that employers are actively looking for.";
  const desc3 = language === 'ar'
    ? 'نقوم بتحديث محتوى الدورات باستمرار بأحدث الأدوات والدراسات والحالات العملية المستخدمة من قبل المحترفين اليوم. هذا يعني أنك لا تستعد فقط للامتحانات—بل تستعد لسوق العمل، والعمل الحر، أو النجاح الريادي.'
    : "We continuously update our course content with the latest tools, case studies, and scenarios used by professionals today. This means you're not just preparing for exams—you're preparing for the job market, freelance gigs, or entrepreneurial success.";
  const highlightsTitle = language === 'ar' ? 'أهم المميزات' : 'Key Highlights';
  const highlights = language === 'ar'
    ? [
        '• وحدات الدورة مراجعة من قبل خبراء الصناعة',
        '• مهام عملية ومشاريع واقعية',
        '• جلسات ضيوف من محترفين عاملين',
        '• شهادة تضيف قيمة لسيرتك الذاتية',
        '• تدريب عملي على الأدوات: Google Ads, Canva, ChatGPT, Meta Business Suite والمزيد'
      ]
    : [
        '• Industry-reviewed course modules',
        '• Practical assignments & real-world projects',
        '• Guest sessions by working professionals',
        '• Certification that adds value to your resume',
        '• Tool-based training: Google Ads, Canva, ChatGPT, Meta Business Suite & more'
      ];
  const concluding = language === 'ar'
    ? 'عندما تتعلم مع أكاديمية سيتور، أنت لا تجتاز فقط—بل تتقدم.'
    : "When you learn with SCITOR ACADEMY, you don't just pass—you progress.";
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-3 py-4 pt-0 text-white bg-white sm:p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-full p-3 py-6 overflow-hidden bg-gray-900 rounded-lg shadow-xl sm:rounded-xl md:rounded-2xl sm:p-4 md:p-8">
        {/* Grid Section */}
        <div className="grid gap-6 p-2 sm:p-4 md:grid-cols-2 md:p-8">
          {/* Left Section: Image */}
          <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[3/2] rounded-md overflow-hidden order-1 md:order-none">
            <Image 
              src="https://citizenside.com/wp-content/uploads/2023/11/what-is-ai-technology-1699896183.jpg" 
              alt="Academy Features" 
              width={2000} 
              height={2000} 
              className="object-cover w-full h-full rounded-md sm:rounded-xl"
              priority
            />
          </div>
          {/* Right Section: Features List */}
          <div className="flex flex-col justify-center order-2 space-y-2 sm:space-y-3 md:space-y-4 md:order-none" >
            {features.map((feature, idx) => (
              <h3 key={idx} className="text-base font-normal text-gray-300 sm:text-lg md:text-xl" style={{ fontFamily: '"Manrope", sans-serif' }}>{feature}</h3>
            ))}
          </div>
        </div>
        {/* Description Section */}
        <div className="p-2 pt-0 sm:p-4 sm:pt-0 md:p-8 md:pt-0">
          <h2 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl md:text-2xl">{descTitle}</h2>
          <p className="mb-2 text-sm leading-relaxed text-gray-300 sm:mb-3 sm:text-base md:text-lg">{desc1}</p>
          <p className="mb-2 text-sm leading-relaxed text-gray-300 sm:mb-3 sm:text-base md:text-lg">{desc2}</p>
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">{desc3}</p>
        </div>
        <div className="pl-2 sm:pl-6 md:pl-12">
          {/* Key Highlights Section */}
          <div className="p-2 pt-0 sm:p-4 sm:pt-0 md:p-8 md:pt-0">
            <div className="pl-2 border-l-4 border-blue-500">
              <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg md:text-xl">{highlightsTitle}</h3>
              <ul className="space-y-1 text-xs text-gray-300 list-none sm:space-y-2 sm:text-base md:text-lg" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Concluding Statement */}
          <div className="max-w-full p-2 pt-0 sm:p-4 sm:pt-0 md:p-8 md:pt-0">
            <h2 className="text-base font-semibold leading-tight text-gray-200 sm:text-lg md:text-2xl lg:text-3xl">
              {concluding}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}