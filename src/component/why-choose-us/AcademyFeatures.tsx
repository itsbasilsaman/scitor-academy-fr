import Image from "next/image";

export default function AcademyFeatures() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-3 py-12 text-white bg-white sm:p-4 md:p-6 lg:p-8 ">
      <div className="w-full max-w-[87rem] bg-gray-900 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg overflow-hidden p-4 sm:p-6">
        {/* Grid Section */}
        <div className="grid gap-8 p-4 sm:p-6 md:grid-cols-2 md:p-12">
          {/* Left Section: Image */}
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-lg overflow-hidden order-1 md:order-none">
            <Image 
              src="https://citizenside.com/wp-content/uploads/2023/11/what-is-ai-technology-1699896183.jpg" 
              alt="Academy Features" 
              width={2000} 
              height={2000} 
              className="object-cover w-full h-full rounded-xl sm:rounded-2xl"
              priority
            />
          </div>
              
          {/* Right Section: Features List */}
          <div className="flex flex-col justify-center order-2 space-y-3 sm:space-y-4 md:order-none">
            <h2 className="text-2xl font-medium text-white sm:text-3xl md:text-4xl">Real Industry Relevance</h2>
            <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl font-regular">Bilingual Learning (English + Arabic)</h3>
            <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl font-regular">Interactive Demo Classes</h3>
            <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl font-regular">Certified Instructors</h3>
            <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl font-regular">Affordable. Accessible. Flexible.</h3>
            <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl font-regular">Personalized Learning Dashboard</h3>
            <h3 className="text-lg text-gray-400 sm:text-xl md:text-2xl font-regular">Community & Support</h3>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-4 pt-0 sm:p-6 sm:pt-0 md:p-12 md:pt-0">
          <h2 className="mb-3 text-xl font-medium sm:mb-4 sm:text-2xl md:text-3xl">Learn what matters. Apply what works.</h2>
          <p className="mb-3 leading-relaxed text-gray-300 sm:mb-4 sm:text-lg">
            At SCITOR ACADEMY, every course is designed in close alignment with current industry trends, employer
            expectations, and global skill standards. Our curriculum is not just academic—it&apos;s practical,
            application-driven, and shaped by real-world demands.
          </p>
          <p className="mb-3 leading-relaxed text-gray-300 sm:mb-4 sm:text-lg">
            Whether you&apos;re mastering Spoken English for confident workplace communication or diving into Digital
            Marketing with tools like SEO, Meta Ads, and Google Analytics, you&apos;ll gain skills that employers are
            actively looking for.
          </p>
          <p className="leading-relaxed text-gray-300 sm:text-lg">
            We continuously update our course content with the latest tools, case studies, and scenarios used by
            professionals today. This means you&apos;re not just preparing for exams—you&apos;re preparing for the job
            market, freelance gigs, or entrepreneurial success.
          </p>
        </div>

        <div className="pl-4 sm:pl-8 md:pl-20">
          {/* Key Highlights Section */}
          <div className="p-4 pt-0 sm:p-6 sm:pt-0 md:p-12 md:pt-0">
            <div className="pl-4 border-l-4 border-blue-500">
              <h3 className="mb-3 text-lg font-medium sm:mb-4 sm:text-xl md:text-2xl">Key Highlights</h3>
              <ul className="space-y-1 text-gray-300 list-none sm:space-y-2 sm:text-lg">
                <li>• Industry-reviewed course modules</li>
                <li>• Practical assignments & real-world projects</li>
                <li>• Guest sessions by working professionals</li>
                <li>• Certification that adds value to your resume</li>
                <li>• Tool-based training: Google Ads, Canva, ChatGPT, Meta Business Suite & more</li>
              </ul>
            </div>
          </div>
      
          {/* Concluding Statement */}
          <div className="max-w-6xl p-4 pt-0 sm:p-6 sm:pt-0 md:p-12 md:pt-0">
            <h2 className="text-xl font-medium leading-tight text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl">
              When you learn with SCITOR ACADEMY, you don&apos;t just pass—you progress.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}