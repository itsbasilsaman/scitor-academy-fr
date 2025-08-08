/* eslint-disable @typescript-eslint/no-explicit-any */
// ...existing code...
"use client"

import { useState } from "react"
import { IoChevronBack, IoChevronForward, IoPlay } from "react-icons/io5"
import { FiArrowUpRight } from "react-icons/fi"
import Image from "next/image"

// Type definitions
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "ghost"
  size?: "default" | "icon"
  [key: string]: any
}

// ...existing code...

interface Course {
  id: number
  title: string
  subtitle?: string
  image: string
  bgColor: string
  textColor: string
  hasFlag: boolean
  hasSpeechBubble: boolean
  hasVideo: boolean
  description: string
}

// Manual Button Component
const Button = ({ children, onClick, className = "", variant = "default", size = "default", ...props }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// ...existing code...

export default function OurCourses() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const courses: Course[] = [
    {
      id: 0,
      title: "Basic Spoken English",
      subtitle: "Foundation course for beginners",
      image: "https://www.westend61.de/images/0001266403pw/young-man-student-study-at-home-using-laptop-and-learning-online-CAVF64908.jpg",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      hasFlag: false,
      hasSpeechBubble: true,
      hasVideo: false,
      description: "Learn essential English speaking skills",
    },
    {
      id: 1,
      title: "Intermediate English",
      subtitle: "Office, travel, and daily conversation skills",
      image: "https://www.westend61.de/images/0001266403pw/young-man-student-study-at-home-using-laptop-and-learning-online-CAVF64908.jpg",
      bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
      textColor: "text-white",
      hasFlag: true,
      hasSpeechBubble: false,
      hasVideo: true,
      description: "Master professional and social English",
    },
    {
      id: 2,
      title: "Advanced English",
      subtitle: "Fluency and advanced communication",
      image: "https://www.westend61.de/images/0001266403pw/young-man-student-study-at-home-using-laptop-and-learning-online-CAVF64908.jpg",
      bgColor: "bg-gradient-to-br from-purple-300 to-pink-300",
      textColor: "text-gray-800",
      hasFlag: true,
      hasSpeechBubble: false,
      hasVideo: false,
      description: "Achieve native-level proficiency",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center md:mb-12">
          <p className="text-sm md:text-[16px] text-black mb-2">Our courses</p>
          <h1 className="text-2xl leading-tight text-gray-900 md:text-4xl lg:text-5xl font-regular">
            Choose the Right English Course for You
          </h1>
        </div>

        {/* Desktop View - Three Cards */}
        <div className="hidden lg:flex lg:justify-center lg:gap-6 xl:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`
                group
                ${index === 1 ? 'lg:w-[520px]' : 'lg:w-[350px]'}
                ${index === 0 || index === 2 ? 'lg:hover:w-[430px]' : ''}
                w-[300px] h-[420px] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 ${course.bgColor} relative
              `}
            >
              {/* Course Image - 70% height */}
              <div className="relative h-[70%] overflow-hidden">
                <Image 
                  src={course.image || "/placeholder.svg"} 
                  alt={course.title} 
                  fill 
                  className="object-cover" 
                />

                {/* Top Badge - Flag or Speech Bubble */}
                {course.hasSpeechBubble && (
                  <div className="absolute px-3 py-2 bg-white rounded-full shadow-sm top-4 left-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
                        <span className="text-xs font-bold text-white">EN</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">ENGLISH</span>
                    </div>
                  </div>
                )}

                {course.hasFlag && (
                  <div className="absolute flex gap-1 top-4 left-4">
                    <div className="flex items-center justify-center w-8 h-6 bg-red-600 rounded-sm">
                      <span className="text-xs text-white">🇺🇸</span>
                    </div>
                    <div className="flex items-center justify-center w-8 h-6 bg-blue-800 rounded-sm">
                      <span className="text-xs text-white">🇬🇧</span>
                    </div>
                  </div>
                )}

                {/* Demo Video Button - Only for Intermediate */}
                {course.hasVideo && (
                  <div className="absolute px-4 py-2 transform -translate-x-1/2 bg-white rounded-full shadow-lg bottom-4 left-1/2">
                    <div className="flex items-center gap-2">
                      <IoPlay className="w-4 h-4 text-gray-800" />
                      <span className="text-sm font-medium text-gray-800">Play Demo</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Course Info - 30% height */}
              <div className="h-[30%] p-6 flex flex-col justify-between">
                <div>
                  <h3 className={`text-xl font-semibold ${course.textColor} mb-1`}>{course.title}</h3>
                  {course.subtitle && (
                    <p className={`text-sm ${course.textColor} opacity-80 mb-2`}>{course.subtitle}</p>
                  )}
                  {course.description && (
                    <p className={`text-xs ${course.textColor} opacity-70`}>{course.description}</p>
                  )}
                </div>

                      {/* Floating Diagonal Arrow Button (Bottom Right, Outside Card) */}
                      <div className="absolute z-10 -bottom-4 -right-4">
                        <div className="flex items-center justify-center w-10 h-10 transition-colors bg-black rounded-full shadow-lg cursor-pointer hover:bg-gray-800">
                          <FiArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="flex-shrink-0 w-full px-2">
                  <div className={`w-full max-w-[300px] h-[420px] rounded-2xl shadow-lg overflow-hidden mx-auto transition-transform duration-300 hover:scale-105 ${course.bgColor} relative`}>
                    {/* Course Image - 70% height */}
                    <div className="relative h-[70%] overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />

                      {/* Top Badge - Flag or Speech Bubble */}
                      {course.hasSpeechBubble && (
                        <div className="absolute px-3 py-2 bg-white rounded-full shadow-sm top-4 left-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
                              <span className="text-xs font-bold text-white">EN</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-800">ENGLISH</span>
                          </div>
                        </div>
                      )}

                      {course.hasFlag && (
                        <div className="absolute flex gap-1 top-4 left-4">
                          <div className="flex items-center justify-center w-8 h-6 bg-red-600 rounded-sm">
                            <span className="text-xs text-white">🇺🇸</span>
                          </div>
                          <div className="flex items-center justify-center w-8 h-6 bg-blue-800 rounded-sm">
                            <span className="text-xs text-white">🇬🇧</span>
                          </div>
                        </div>
                      )}

                      {/* Demo Video Button - Only for Intermediate */}
                      {course.hasVideo && (
                        <div className="absolute px-4 py-2 transform -translate-x-1/2 bg-white rounded-full shadow-lg bottom-4 left-1/2">
                          <div className="flex items-center gap-2">
                            <IoPlay className="w-4 h-4 text-gray-800" />
                            <span className="text-sm font-medium text-gray-800">Play Demo</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Course Info - 30% height */}
                    <div className="h-[30%] p-6 flex flex-col justify-between">
                      <div>
                        <h3 className={`text-xl font-semibold ${course.textColor} mb-1`}>{course.title}</h3>
                        {course.subtitle && (
                          <p className={`text-sm ${course.textColor} opacity-80 mb-2`}>{course.subtitle}</p>
                        )}
                        {course.description && (
                          <p className={`text-xs ${course.textColor} opacity-70`}>{course.description}</p>
                        )}
                      </div>

                      {/* Floating Diagonal Arrow Button (Bottom Right, Outside Card) */}
                      <div className="absolute z-10 -bottom-4 -right-4">
                        <div className="flex items-center justify-center w-10 h-10 transition-colors bg-black rounded-full shadow-lg cursor-pointer hover:bg-gray-800">
                          <FiArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white rounded-full shadow-md hover:shadow-lg"
              onClick={prevSlide}
            >
              <IoChevronBack className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="bg-white rounded-full shadow-md hover:shadow-lg"
              onClick={nextSlide}
            >
              <IoChevronForward className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
