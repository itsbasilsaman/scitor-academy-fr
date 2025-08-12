import Image from "next/image";

export default function AcademyFeatures() {
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
          <div className="flex flex-col justify-center order-2 space-y-2 sm:space-y-3 md:space-y-4 md:order-none">
            <h2 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">Real Industry Relevance</h2>
            <h3 className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">Bilingual Learning (English + Arabic)</h3>
            <h3 className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">Interactive Demo Classes</h3>
            <h3 className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">Certified Instructors</h3>
            <h3 className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">Affordable. Accessible. Flexible.</h3>
            <h3 className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">Personalized Learning Dashboard</h3>
            <h3 className="text-base font-normal text-gray-300 sm:text-lg md:text-xl">Community & Support</h3>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-2 pt-0 sm:p-4 sm:pt-0 md:p-8 md:pt-0">
          <h2 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl md:text-2xl">Learn what matters. Apply what works.</h2>
          <p className="mb-2 text-sm leading-relaxed text-gray-300 sm:mb-3 sm:text-base md:text-lg">
            At SCITOR ACADEMY, every course is designed in close alignment with current industry trends, employer
            expectations, and global skill standards. Our curriculum is not just academic—it&apos;s practical,
            application-driven, and shaped by real-world demands.
          </p>
          <p className="mb-2 text-sm leading-relaxed text-gray-300 sm:mb-3 sm:text-base md:text-lg">
            Whether you&apos;re mastering Spoken English for confident workplace communication or diving into Digital
            Marketing with tools like SEO, Meta Ads, and Google Analytics, you&apos;ll gain skills that employers are
            actively looking for.
          </p>
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
            We continuously update our course content with the latest tools, case studies, and scenarios used by
            professionals today. This means you&apos;re not just preparing for exams—you&apos;re preparing for the job
            market, freelance gigs, or entrepreneurial success.
          </p>
        </div>

  <div className="pl-2 sm:pl-6 md:pl-12">
          {/* Key Highlights Section */}
          <div className="p-2 pt-0 sm:p-4 sm:pt-0 md:p-8 md:pt-0">
            <div className="pl-2 border-l-4 border-blue-500">
              <h3 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg md:text-xl">Key Highlights</h3>
              <ul className="space-y-1 text-xs text-gray-300 list-none sm:space-y-2 sm:text-base md:text-lg">
                <li>• Industry-reviewed course modules</li>
                <li>• Practical assignments & real-world projects</li>
                <li>• Guest sessions by working professionals</li>
                <li>• Certification that adds value to your resume</li>
                <li>• Tool-based training: Google Ads, Canva, ChatGPT, Meta Business Suite & more</li>
              </ul>
            </div>
          </div>
      
          {/* Concluding Statement */}
          <div className="max-w-full p-2 pt-0 sm:p-4 sm:pt-0 md:p-8 md:pt-0">
            <h2 className="text-base font-semibold leading-tight text-gray-200 sm:text-lg md:text-2xl lg:text-3xl">
              When you learn with SCITOR ACADEMY, you don&apos;t just pass—you progress.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}