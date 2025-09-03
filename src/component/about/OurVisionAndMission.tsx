"use client"
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image"
// ...existing code...

export default function OurVision() {
  const { content } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 px-4 lg:flex-row sm:p-6 md:p-8 lg:p-12 sm:px-8 md:px-16 bg-gradient-to-br from-scitor-light-blue to-scitor-light-purple">
      {/* Left Section: SCITOR ACADEMY Text */}
      <div className="flex flex-col items-center justify-center flex-1 w-full pl-0 mb-6 text-center lg:items-start lg:text-left sm:mb-8 lg:mb-0 lg:mr-16 lg:pl-4">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
          <Image 
            src="/scitor-academy.png" 
            alt="SCITOR ACADEMY" 
            width={800} 
            height={800}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
       
      {/* Right Section: Vision and Mission Card (Manual Implementation) */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[600px] h-auto min-h-[320px] sm:min-h-[350px] md:h-[380px] rounded-[10px] bg-[#6606E3] text-white shadow-2xl p-4 sm:p-6 md:p-8">
        <div className="p-0">
          {" "}
          {/* This div acts as CardContent */}
          <div className="grid gap-4 py-2 sm:gap-6 sm:py-4">
            {/* Our Vision */}
            <div className="relative">
              <h2 className="mb-2 text-base font-semibold uppercase sm:text-lg sm:mb-3">{content.ourVision?.visionTitle ?? "OUR VISION"}</h2>
              <p className="text-xs sm:text-sm leading-relaxed   max-w-full sm:max-w-[300px]">
                {content.ourVision?.visionDesc ?? "To be a leader in delivering affordable, skill-based education that bridges the gap between aspiration and achievement."}
              </p>
              <Image 
                src="/mission-img.png" 
                alt="VISION" 
                width={500} 
                height={500} 
                className="absolute z-0 w-24 top-4 sm:top-6 -right-4 sm:-right-8 h-28 sm:w-36 sm:h-40 md:w-48 md:h-48 text-scitor-target-icon opacity-70" 
              />
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="mb-2 text-base font-semibold uppercase sm:text-lg sm:mb-3">{content.ourVision?.missionTitle ?? "OUR MISSION"}</h2>
              <p className="text-xs sm:text-sm leading-relaxed max-w-full sm:max-w-[300px]">
                {content.ourVision?.missionDesc ?? "We aim to create a generation of confident communicators and digital professionals ready to compete on a global stage."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
