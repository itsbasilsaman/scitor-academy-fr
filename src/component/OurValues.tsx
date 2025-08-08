 
import Image from "next/image"

export default function OurValues() {
  return (
    <section className="px-4 py-8 w-full h-auto sm:px-6 lg:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-2 text-sm font-medium text-gray-600 sm:text-base">Our values</p>
          <h2 className="text-2xl font-normal text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">Why Scitor Academy?</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Personalized Coaching */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center mb-4 sm:justify-start sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                 <Image src="/value-02.png" alt="award" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl sm:mb-3">Personalized Coaching</h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Get expert guidance with customized lessons based on your goals, level, and speaking style. Whether you&apos;re
              a beginner or job seeker, we tailor the learning to fit you.
            </p>
          </div>

          {/* Arabic & English Support */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center mb-4 sm:justify-start sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <Image src="/value-01.png" alt="globe" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl sm:mb-3">Arabic & English Support</h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Learn in the language you&apos;re most comfortable with. All lessons, instructions, and support are available
              in both English and Arabic for a smooth learning experience.
            </p>
          </div>

          {/* Practice-focused Learning */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center mb-4 sm:justify-start sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <Image src="/value-04.png" alt="target" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl sm:mb-3">Practice-focused Learning</h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Gain real-world confidence with roleplays, live conversations, and speaking drills. We focus on doing, not
              just theory.
            </p>
          </div>

          {/* Mobile-Ready Learning */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center mb-4 sm:justify-start sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <Image src="/value-03.png" alt="mobile" width={64} height={64} className="w-full h-full object-contain" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl sm:mb-3">Mobile-Ready Learning</h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Learn anytime, anywhere. Our platform works perfectly on mobile, tablet, or desktop—no app required, just
              open and learn!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
