import Image from "next/image"
import { FaBullseye } from "react-icons/fa" // Importing FaBullseye from react-icons/fa

export default function OurVision() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-scitor-light-blue to-scitor-light-purple">
      {/* Left Section: SCITOR ACADEMY Text */}
      <div className="flex flex-col items-center lg:items-start justify-center flex-1 text-center lg:text-left mb-6 sm:mb-8 lg:mb-0 lg:mr-16 pl-0 lg:pl-4 w-full">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
          <Image 
            src="/scitor-academy.png" 
            alt="SCITOR ACADEMY" 
            width={800} 
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
       
      {/* Right Section: Vision and Mission Card (Manual Implementation) */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[600px] h-auto min-h-[320px] sm:min-h-[350px] md:h-[380px] rounded-[10px] bg-[#6606E3] text-white shadow-2xl p-4 sm:p-6 md:p-8">
        <div className="p-0">
          {" "}
          {/* This div acts as CardContent */}
          <div className="grid gap-4 sm:gap-6 py-2 sm:py-4">
            {/* Our Vision */}
            <div className="relative">
              <h2 className="text-base sm:text-lg font-semibold uppercase mb-2 sm:mb-3">OUR VISION</h2>
              <p className="text-xs sm:text-sm leading-relaxed pr-8 sm:pr-12 max-w-full sm:max-w-[300px]">
                To be a leader in delivering affordable, skill-based education that bridges the gap between aspiration
                and achievement.
              </p>
              <Image 
                src="/mission-img.png" 
                alt="VISION" 
                width={500} 
                height={500} 
                className="absolute top-4 sm:top-6 -right-4 sm:-right-8 w-24 h-28 sm:w-36 sm:h-40 md:w-48 md:h-48 text-scitor-target-icon opacity-70 z-0" 
              />
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold uppercase mb-2 sm:mb-3">OUR MISSION</h2>
              <p className="text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-[300px]">
                We aim to create a generation of confident communicators and digital professionals ready to compete on a
                global stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
