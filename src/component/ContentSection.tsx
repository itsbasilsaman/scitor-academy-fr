 
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function ContentSection() {
  return (
    <section className="relative h-auto overflow-hidden lg:h-screen">
      {/* Background logo image - responsive positioning */}
      <div className="absolute -translate-y-1/2 left-4 sm:left-8 md:left-12 top-1/2 -translate-x-1/4 sm:-translate-x-1/6 md:-translate-x-1/8 lg:-translate-x-1/10">
        <div className="relative">
         
           <Image
            src="/scitor-bg-logo.png" 
            alt="Scitor Academy Background Logo" 
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[30rem] xl:h-[30rem] object-contain opacity-60"
          />
        </div>
      </div>

      {/* Main content - responsive layout */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 py-8 lg:ml-86 sm:px-6 md:px-8 lg:px-12 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:ml-32 xl:ml-48 lg:mr-0 lg:max-w-3xl">
          {/* Main heading - responsive typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-regular leading-tight mb-6 sm:mb-8 md:mb-12 lg:mb-16 lg:max-w-2xl">
            <span className="text-cyan-400">Scitor Academy</span>{" "}
            <span className="text-gray-900">
              combines expert instructors, native-style content, and personalized coaching to make English accessible to
              everyone.
            </span>
          </h1>

          {/* Bottom section with tagline and button - responsive spacing */}
          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:mt-auto lg:max-w-2xl">
            <p className="text-gray-900 text-sm sm:text-base md:text-[17px] font-regular">Built for Learners, Backed by Experts</p>

            <button
              className="self-center px-3 py-2 text-sm font-medium transition-colors bg-transparent border border-gray-500 rounded-md group hover:border-gray-400 hover:bg-gray-50 sm:px-4 sm:py-3 sm:text-base sm:self-auto"
            >
              Discover more
              <GoArrowUpRight className="inline w-4 h-4 ml-2 transition-transform sm:ml-4 sm:h-6 sm:w-6 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Additional decorative elements for larger screens */}
      <div className="absolute hidden w-16 h-16 rounded-full lg:block right-10 top-20 bg-cyan-200/30 blur-sm"></div>
      <div className="absolute hidden w-12 h-12 rounded-full lg:block right-32 bottom-32 bg-purple-200/40 blur-sm"></div>
    </section>
  )
}
