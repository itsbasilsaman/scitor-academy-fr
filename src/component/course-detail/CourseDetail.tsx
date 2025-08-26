/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
// import type React from "react" // removed duplicate
import { FaStar, FaUsers, FaCalendar, FaGlobe, FaClock, FaBook, FaAward, FaMobile } from "react-icons/fa"

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2"
  let variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90"

  if (variant === "outline") {
    variantClasses = "border border-input hover:bg-accent hover:text-accent-foreground"
  } else if (variant === "secondary") {
    variantClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

import React, { useState } from "react"
// ...existing code...

const CurrencyTogglerInline = ({ currency, setCurrency }: { currency: 'SAR' | 'USD'; setCurrency: (c: 'SAR' | 'USD') => void }) => (
  <div className="flex items-center gap-2 px-1 py-1 ml-4 bg-white rounded-full shadow cursor-pointer">
    <button
      className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-xs ${currency === 'SAR' ? 'bg-[#6606E3] text-white' : 'bg-gray-100 text-gray-700'}`}
      onClick={() => setCurrency('SAR')}
      aria-label="Show price in SAR"
    >
      SAR
    </button>
    <span className="text-xs font-bold text-gray-400">|</span>
    <button
      className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-colors duration-200 text-xs ${currency === 'USD' ? 'bg-[#6606E3] text-white' : 'bg-gray-100 text-gray-700'}`}
      onClick={() => setCurrency('USD')}
      aria-label="Show price in USD"
    >
      USD
    </button>
  </div>
)

export default function CourseDetails() {
  const [currency, setCurrency] = useState<'SAR' | 'USD'>('SAR')
  // Example prices
  const prices = {
    SAR: { current: 'SAR 1,599', old: 'SAR 1,999' },
    USD: { current: 'USD 425', old: 'USD 530' }
  }
  return (
    <div className="space-y-6">
      {/* Pricing Card */}
      <div className="p-6 bg-white border border-gray-300 rounded-[15px]">
        <div className="space-y-4">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 font-manrope">{prices[currency].current}</span>
              <span className="text-lg text-gray-300 line-through font-manrope">{prices[currency].old}</span>
            </div>
            <CurrencyTogglerInline currency={currency} setCurrency={setCurrency} />
          </div>

          <div className="w-full py-3 font-medium text-center text-white bg-black cursor-pointer rounded-2xl hover:bg-gray-800">
            Add to Cart
          </div>

          <div
            className="w-full py-3 font-medium text-center text-purple-700 bg-transparent border border-purple-200 cursor-pointer rounded-2xl hover:bg-purple-50"
          >
            Enroll Now
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="p-6 border rounded-[15px] border-gray-300 bg-white/80 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaStar className="w-4 h-4 text-purple-500" />
            <span>Rating 4.8/5</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaUsers className="w-4 h-4 text-purple-500" />
            <span>Enrolled Students: 1.6K</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaCalendar className="w-4 h-4 text-purple-500" />
            <span>Last Updated: Aug 02, 2023</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaGlobe className="w-4 h-4 text-purple-500" />
            <span>Language: English</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaClock className="w-4 h-4 text-purple-500" />
            <span>Duration: 2 hrs 30 mins</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaBook className="w-4 h-4 text-purple-500" />
            <span>Subtitles: English, Arabic</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaAward className="w-4 h-4 text-purple-500" />
            <span>Level: Beginner</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaAward className="w-4 h-4 text-purple-500" />
            <span>Certificate: Upon Completion</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaMobile className="w-4 h-4 text-purple-500" />
            <span>Access: Lifetime Access Anytime</span>
          </div>
        </div>
      </div>

      {/* Master Skills Card */}
      <div className="relative overflow-hidden text-white border border-gray-300   bg-gradient-to-br from-gray-800 to-gray-900 rounded-[15px]">
        <div className="absolute inset-0">
            {/* Next.js Image component for optimized image handling */}
            <Image
              src="https://theamericaninstitute.in/wp-content/uploads/belt5-770x385.jpg"
              alt="Master skills"
              width={400}
              height={400}
              className="object-cover w-full h-full opacity-60"
              priority
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative z-10 p-6 space-y-4">
          <h3 className="text-2xl font-bold">
            Master Skills
            <br />
            Today
          </h3>

          <Button
            variant="secondary"
            className="text-white border bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            Start Chat
          </Button>
        </div>
      </div>
    </div>
  )
}
