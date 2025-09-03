"use client"

import React from "react"
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
 

// Manual Button Component
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex justify-center items-center px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {children}
    </button>
  )
}

// Manual Card Components
interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-3xl shadow-sm ${className}`}>{children}</div>
}

function CardContent({ children, className = "" }: CardProps) {
  return <div className={className}>{children}</div>
}
export default function MainBanner(){
  const { language, content } = useLanguage();
  const banner = content.mainBanner;
  const isAr = language === "ar";
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
  className={`relative w-full h-auto px-2 overflow-x-hidden bg-white hp-2 sm:p-4 bg-gradient-to-br md:p-8 ${isAr ? "text-right" : "text-left"}`}
      >
        {/* Hide blurred circles on mobile */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-cyan-300 rounded-full opacity-30 blur-[120px] sm:blur-[200px] hidden xs:block sm:block md:block"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-purple-300 rounded-full opacity-30 blur-[120px] sm:blur-[200px] hidden xs:block sm:block md:block"></div>
        <div className="mx-auto px-2 sm:px-4 md:px-8 pt-[60px] sm:pt-[90px] ">
          <div className="grid items-end grid-cols-1 gap-0 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between h-full space-y-6 sm:space-y-8"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <h1 className="text-2xl sm:text-4xl text-gray-900 font-medium sm:font-regular md:text-5xl  pt-8 sm:pt-10 max-w-full sm:max-w-[540px]">
                  {banner.heading}
                </h1>
                <Link href={'/all-courses'}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button className="w-full cursor-pointer text-[18px] px-2 py-3 font-semibold text-gray-900 transition-all duration-200 bg-white border border-gray-800 rounded-[15px] font-sem sm:py-3 hover:bg-gray-50 group sm:w-auto">
                      {banner.button}
                      <GoArrowUpRight className={`ml-2 sm:ml-3 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isAr ? "rotate-180" : ""}`} />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Statistics Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2"
              >
                {/* Card 1 */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative overflow-hidden text-white border-0 min-h-[140px] sm:min-h-[180px] md:min-h-[220px]">
                    <div className="absolute inset-0">
                      <Image
                        src="/clock-bg.png"
                        alt="Clock background"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="relative p-3 sm:p-4 md:p-6">
                      <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                        <Image
                          src="/clock-icon.png"
                          alt="Play video icon"
                          width={36}
                          height={36}
                          className="w-8 sm:w-10 md:w-12"
                        />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                        <div className="text-xl font-semibold sm:text-2xl md:text-4xl">500K+</div>
                        <div className="text-xs sm:text-sm text-white/90">{banner.stat1}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Card 2 */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-white border-0 bg-gradient-to-r from-slate-300 to-slate-800 min-h-[140px] sm:min-h-[180px] md:min-h-[220px]">
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                        <Image
                          src="/learners-icon.png"
                          alt="Play video icon"
                          width={36}
                          height={36}
                          className="w-8 sm:w-10 md:w-16"
                        />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                        <div className="text-xl font-semibold sm:text-2xl md:text-4xl">350+</div>
                        <div className="text-xs sm:text-sm text-white/90">{banner.stat2}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-6 lg:mt-0"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0.85 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative rounded-3xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 min-h-[260px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[560px]"
              >
                {/* Hero Image */}
                <Image
                  src="https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork.jpg"
                  alt="Person with digital technology overlay"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/20">
                  <div className="absolute top-4 right-4 left-4 sm:top-8 sm:right-8 sm:left-8">
                    <h2 className="text-lg leading-tight text-white sm:text-2xl md:text-3xl font-regular ">
                      {banner.heroHeading}
                    </h2>
                  </div>
                  {/* Video Preview Card */}
                  <div className="absolute bottom-2 left-2 right-2 lg:right-auto sm:bottom-3 sm:left-3">
                    <div className="pr-1 border-0 shadow-lg sm:pr-2 rounded-xl backdrop-blur-sm bg-white/95">
                      <CardContent className="p-1 rounded-lg sm:p-2 ">
                        <div className="flex items-center gap-2 sm:gap-4">
                          {/* Video Thumbnail */}
                          <div className="relative flex-shrink-0">
                            <div className="relative h-10 overflow-hidden rounded-lg w-14 sm:w-20 sm:h-16">
                              <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=64&fit=crop&crop=center"
                                alt="Video thumbnail"
                                fill
                                className="object-cover"
                              />
                              {/* Play button overlay */}
                              <div className="absolute flex items-center justify-center gap-0.5 sm:gap-1 px-0.5 sm:px-1 py-0.5 sm:py-1 rounded-md sm:rounded-full bottom-1 left-1 bg-black/70">
                                <Image
                                  src="/play-video-icon.png"
                                  alt="Play video icon"
                                  width={10}
                                  height={10}
                                  className="w-2.5 sm:w-3"
                                />
                                <span className="text-white  text-[4px] sm:text-[8px] font-medium">{banner.playVideo}</span>
                              </div>
                            </div>
                          </div>
                          {/* Text Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs font-medium leading-tight text-gray-900 sm:text-sm">
                              {banner.demoText.map((line, idx) => (
                                <React.Fragment key={idx}>
                                  {line}<br className="hidden sm:block" />
                                </React.Fragment>
                              ))}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
