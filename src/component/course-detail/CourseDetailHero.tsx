/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import Image from "next/image"
import { FaStar, FaLock } from "react-icons/fa"
import { useState, useRef, useEffect } from "react"
import CourseVideoPlayer, { CourseVideo } from "./CourseVideoPlayer"

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
  // Playlist: first video is the hero video, then the others
  const videos: CourseVideo[] = [
    {
      id: 0,
      title: "Basic Spoken English (Demo)",
      duration: "8:00",
      thumbnail: "https://img.youtube.com/vi/LOE8ESPIMpE/hqdefault.jpg",
      locked: false,
      youtubeId: "LOE8ESPIMpE",
    },
    {
      id: 1,
      title: "Introduction to the Course",
      duration: "5:32",
      thumbnail: "https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/dc2516e84eef404e80c49a8b91b11138.png",
      locked: false,
      youtubeId: "ueNsPJgWNAg",
    },
    {
      id: 2,
      title: "Getting Started: First Steps",
      duration: "7:10",
      thumbnail: "https://leadschool.in/wp-content/uploads/2022/04/Untitled%20design%20(90).png",
      locked: false,
      youtubeId: null,
    },
    {
      id: 3,
      title: "Advanced Tips (Locked)",
      duration: "6:45",
      thumbnail: "https://treecampus.in/wp-content/uploads/2023/02/Optimized-imgpsh_fullsize_anim-3.jpg",
      locked: true,
      youtubeId: null,
    },
  ];

  const [showPlayer, setShowPlayer] = useState(false);

  // formatTime now handled in shared component

  // All player logic handled in shared component

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
      <div className="relative z-10 flex flex-col justify-between h-full p-3 sm:p-4 md:p-8">
        {/* Top Rating */}
        <div className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm text-white/90">
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" />
            ))}
          </div>
          <span className="truncate">4.8 (1k reviews)</span>
        </div>

        {/* Center Play Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowPlayer(true)}
            className="z-20 flex items-center justify-center w-12 h-12 border rounded-full sm:w-16 sm:h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}} className="sm:w-10 sm:h-10 w-7 h-7">
              <polygon points="15,10 30,20 15,30" fill="white" />
            </svg>
          </button>
        </div>

        {/* Bottom Content */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-lg font-bold leading-tight text-white sm:text-2xl md:text-3xl">Basic Spoken English</h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-blue-500 rounded-full sm:w-8 sm:h-8 sm:text-sm">
                M
              </div>
              <div className="text-white/90">
                <div className="text-xs font-medium sm:text-sm">Mr. Mark Jaikson</div>
                <div className="text-[10px] sm:text-xs text-white/70">Tutor</div>
              </div>
            </div>
            <div className="ml-auto text-xs sm:text-sm text-white/90 whitespace-nowrap">Watch Free Demo Classes</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <CourseVideoPlayer
        videos={videos}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        initialVideoId={videos[0].id}
      />
      <style jsx global>{`
        @keyframes seek-fwd2 {
          0% { opacity: 0; transform: scale(0.7) translateY(40px) rotate(-10deg); }
          30% { opacity: 1; transform: scale(1.2) translateY(-10px) rotate(5deg); }
          70% { opacity: 1; transform: scale(1.1) translateY(-10px) rotate(0deg); }
          100% { opacity: 0; transform: scale(0.7) translateY(-40px) rotate(10deg); }
        }
        @keyframes seek-back2 {
          0% { opacity: 0; transform: scale(0.7) translateY(-40px) rotate(10deg); }
          30% { opacity: 1; transform: scale(1.2) translateY(10px) rotate(-5deg); }
          70% { opacity: 1; transform: scale(1.1) translateY(10px) rotate(0deg); }
          100% { opacity: 0; transform: scale(0.7) translateY(40px) rotate(-10deg); }
        }
        .animate-seek-fwd2 {
          animation: seek-fwd2 0.5s cubic-bezier(.4,2,.6,1) both;
        }
        .animate-seek-back2 {
          animation: seek-back2 0.5s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .aspect-video {
          aspect-ratio: 16/9;
        }
        @media (max-width: 768px) {
          .fixed.inset-0.z-50.flex.items-center.justify-center.bg-black\/95.animate-fadeIn > div {
            flex-direction: column !important;
            border-radius: 0 !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
          .w-full.md\:w-80 {
            width: 100% !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.1) !important;
          }
        }
      `}</style>
    </div>
  )
}
