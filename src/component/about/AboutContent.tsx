import Image from "next/image"

export default function AboutContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <p className="text-sm font-medium text-gray-600 mb-2 pl-2 md:pl-[180px] text-center md:text-left">
        About SCITOR ACADEMY
      </p>
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-regular leading-tight mb-6">
          Empowering Communication. <br className="hidden md:block" /> Enabling Careers.
        </h1>
      </div>
      <p className="text-base text-gray-700 px-2 md:pl-[620px] max-w-3xl md:max-w-7xl mb-16 text-center md:text-left mx-auto md:mx-0">
        Welcome to SCITOR ACADEMY — where modern education meets practical outcomes. We&apos;re on a mission to
        empower individuals with strong communication skills and career-ready knowledge in today&apos;s digital era.
        Whether it&apos;s mastering spoken English or becoming a digital marketing pro, we&apos;ve got you covered.
      </p>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-regular text-center mb-10 md:mb-16">
          Why Scitor Academy?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Feature Card 1 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-02.png" alt="award" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center md:text-left">Personalized Coaching</h3>
            <p className="text-gray-600 text-center md:text-left">
              Get expert guidance with customized lessons based on your goals, level, and speaking style. Whether
              you&apos;re a beginner or job seeker, we tailor the learning to fit you.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-01.png" alt="globe" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center md:text-left">Arabic & English Support</h3>
            <p className="text-gray-600 text-center md:text-left">
              Learn in the language you&apos;re most comfortable with. All lessons, instructions, and support are
              available in both English and Arabic for a smooth learning experience.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-04.png" alt="target" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center md:text-left">Practice-focused Learning</h3>
            <p className="text-gray-600 text-center md:text-left">
              Gain real-world confidence with roleplays, live conversations, and speaking drills. We focus on doing, not
              just theory.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <Image src="/value-03.png" alt="mobile" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-[18px] font-semibold my-3 text-center md:text-left">Mobile-Ready Learning</h3>
            <p className="text-gray-600 text-center md:text-left">
              Learn anytime, anywhere. Our platform works perfectly on mobile, tablet, or desktop—no app required, just
              open and learn!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}