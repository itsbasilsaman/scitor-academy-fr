"use client"
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image"

export default function AboutContent() {
  const { content } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-12 bg-white">
      <p className="mb-2 text-sm font-medium text-center text-gray-600">
        {content.aboutContent?.subtitle ?? "About SCITOR ACADEMY"}
      </p>
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-6 text-3xl leading-tight text-center md:text-5xl font-regular">
          {content.aboutContent?.header ?? "Empowering Communication. Enabling Careers."}
        </h1>
      </div>
      <p className="max-w-3xl mx-auto mb-16 text-base text-center text-gray-700">
        {content.aboutContent?.description ?? "Welcome to SCITOR ACADEMY — where modern education meets practical outcomes. We're on a mission to empower individuals with strong communication skills and career-ready knowledge in today's digital era. Whether it's mastering spoken English or becoming a digital marketing pro, we've got you covered."}
      </p>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-2xl text-center md:text-4xl font-regular md:mb-16">
          {content.aboutContent?.featuresTitle ?? "Why Scitor Academy?"}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {/* Feature Card 1 */}
          <div className="flex flex-col items-center p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-02.png" alt="award" width={64} height={64} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center">{content.aboutContent?.feature1Title ?? "Personalized Coaching"}</h3>
            <p className="text-center text-gray-600">
              {content.aboutContent?.feature1Desc ?? "Get expert guidance with customized lessons based on your goals, level, and speaking style. Whether you're a beginner or job seeker, we tailor the learning to fit you."}
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col items-center p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-01.png" alt="globe" width={64} height={64} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center">{content.aboutContent?.feature2Title ?? "Arabic & English Support"}</h3>
            <p className="text-center text-gray-600">
              {content.aboutContent?.feature2Desc ?? "Learn in the language you're most comfortable with. All lessons, instructions, and support are available in both English and Arabic for a smooth learning experience."}
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col items-center p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-04.png" alt="target" width={64} height={64} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center">{content.aboutContent?.feature3Title ?? "Practice-focused Learning"}</h3>
            <p className="text-center text-gray-600">
              {content.aboutContent?.feature3Desc ?? "Gain real-world confidence with roleplays, live conversations, and speaking drills. We focus on doing, not just theory."}
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="flex flex-col items-center p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-03.png" alt="mobile" width={64} height={64} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center">{content.aboutContent?.feature4Title ?? "Mobile-Ready Learning"}</h3>
            <p className="text-center text-gray-600">
              {content.aboutContent?.feature4Desc ?? "Learn anytime, anywhere. Our platform works perfectly on mobile, tablet, or desktop—no app required, just open and learn!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}