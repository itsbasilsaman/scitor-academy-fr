/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react"
import Image from "next/image"
import { FaPlay, FaStar } from "react-icons/fa"

const Button = ({
  children,
  className = "",
  size = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  size?: "default" | "lg"
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const sizeClasses = size === "lg" ? "h-11 px-8" : "h-10 px-4 py-2"

  return (
    <button className={`${baseClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function CourseHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 aspect-video">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/007/032/577/large_2x/young-man-or-son-teaching-his-grandfather-elderly-dad-learning-to-using-computer-at-home-photo.jpg"
          alt="Course instructor"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
        {/* Top Rating */}
        <div className="flex items-center gap-2 text-sm text-white/90">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-4 h-4 text-yellow-400" />
            ))}
          </div>
          <span>4.8 (1k reviews)</span>
        </div>

        {/* Center Play Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-16 h-16 border rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            <FaPlay className="w-6 h-6 ml-1 text-white" />
          </Button>
        </div>

        {/* Bottom Content */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-white md:text-3xl">Basic Spoken English</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-500 rounded-full">
                M
              </div>
              <div className="text-white/90">
                <div className="text-sm font-medium">Mr. Mark Jaikson</div>
                <div className="text-xs text-white/70">Tutor</div>
              </div>
            </div>
            <div className="ml-auto text-sm text-white/90">Watch Free Demo Classes</div>
          </div>
        </div>
      </div>
    </div>
  )
}
