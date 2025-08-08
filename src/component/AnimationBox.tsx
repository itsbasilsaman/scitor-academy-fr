"use client"

import React from "react"

const buttons = Array.from({ length: 10 }, (_, i) => (
  <div
    key={i}
    className="flex-shrink-0 w-[180px] h-[60px] bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center   mx-2"
  >
    <span className="text-lg font-bold tracking-wider text-gray-600">LOREM</span>
    <span className="text-gray-400 text-[6px] uppercase mt-0.5">ipsum</span>
  </div>
))

export default function AnimatedButtonRow() {
  return (
    <div className="relative w-full py-12 overflow-hidden ">
      {/* Gradient overlay for fade effect on the right */}
      <div
        className="absolute inset-y-0 right-0 z-10 w-1/4 pointer-events-none "
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 z-10 w-1/4 pointer-events-none "
        aria-hidden="true"
      />

      <div className="flex animate-scroll-left">
        {/* Duplicate content to create a seamless loop */}
        {buttons}
        {buttons}
        {buttons}
      </div>
    </div>
  )
}
