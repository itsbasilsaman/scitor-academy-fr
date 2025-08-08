"use client"

import type React from "react"

import Image from "next/image"
import {   IoTimeOutline, IoBookOutline, IoPlaySharp } from "react-icons/io5"
import { GoArrowUpRight } from "react-icons/go";
 

// Manual Button Component
interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
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

export default function MainBanner() {
  return (
    <div className="relative w-full max-h-screen p-2 sm:p-4 bg-white bg-gradient-to-br md:p-8">
    
  <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-cyan-300 rounded-full opacity-30 blur-[120px] sm:blur-[200px]"></div>
  
  
  <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-purple-300 rounded-full opacity-30 blur-[120px] sm:blur-[200px]"></div>

      <div className="mx-auto px-2 sm:px-4 md:px-8 pt-[60px] sm:pt-[90px] ">
        <div className="grid items-end grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl text-gray-900 font-regular md:text-5xl pt-4 sm:pt-10 max-w-full sm:max-w-[540px]">
                Start learning today with expert-led lessons.
              </h1>
              <Button className="px-2 py-2 sm:py-3 text-gray-900 transition-all duration-200 bg-white border border-gray-800 rounded-lg hover:bg-gray-50 group w-full sm:w-auto">
                Get in Touch
                <GoArrowUpRight className="ml-2 sm:ml-3 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
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
                    <div className="text-xs sm:text-sm text-white/90">Hours of Content Delivered</div>
                  </div>
                </CardContent>
              </Card>

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
                    <div className="text-xs sm:text-sm text-white/90">Learners Transformed</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 min-h-[260px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[560px]">
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
                  <h2 className="text-lg sm:text-2xl md:text-3xl leading-tight text-white font-regular md:text-4xl ">
                    Transforming learners into achievers
                  </h2>
                </div>

                {/* Video Preview Card */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                  <div className="pr-1 sm:pr-2 border-0 shadow-lg rounded-xl backdrop-blur-sm bg-white/95">
                    <CardContent className="p-1 sm:p-2 rounded-lg ">
                      <div className="flex items-center gap-2 sm:gap-4">
                        {/* Video Thumbnail */}
                        <div className="relative flex-shrink-0">
                          <div className="relative w-14 h-10 sm:w-20 sm:h-16 overflow-hidden rounded-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=64&fit=crop&crop=center"
                              alt="Video thumbnail"
                              fill
                              className="object-cover"
                            />
                            
                            {/* Play button overlay */}
                            <div className="absolute flex items-center justify-center gap-0.5 sm:gap-1 px-0.5 sm:px-1 py-0.5 sm:py-1 rounded-full bottom-1 left-1 bg-black/70">
                              <Image
                                src="/play-video-icon.png"
                                alt="Play video icon"
                                width={10}
                                height={10}
                                className="w-2.5 sm:w-3"
                              />
                              <span className="text-white text-[7px] sm:text-[8px] font-medium">Play Video</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm font-medium leading-tight text-gray-900">
                            See It in Action! Watch<br className="hidden sm:block" />
                            Our Demo Video to<br className="hidden sm:block" />
                            Discover More...
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
