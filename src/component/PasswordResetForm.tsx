"use client"


import type React from "react"
import { useState } from "react"
import { IoArrowForward, IoMail } from "react-icons/io5"
import Image from "next/image"

export function PasswordResetForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Handle password reset logic here
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-[url('/bg.png')] bg-cover bg-center">
      <div className="grid items-center w-full max-w-6xl gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left side - Form */}
        <div className="space-y-8 lg:pr-8">
          <div className="space-y-4">
            <h1 className="text-3xl tracking-tight text-gray-900 font-regular sm:text-4xl lg:text-[48px]">
              Forgot your password? No worries — reset it here.
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <IoMail className="absolute text-xl text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 text-base transition-colors duration-200 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="flex items-center justify-center w-full h-12 gap-2 px-8 py-3 text-base font-medium text-white transition-colors duration-200 bg-gray-900 rounded-lg sm:w-auto hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  Send Reset Link
                  <IoArrowForward className="text-lg" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right side - Decorative illustration replaced with image */}
        <div className="items-center justify-center hidden lg:flex">
          <div className="relative w-[480px] h-[480px]">
            <Image src="/scitor-bg-logo.png" alt="Scitor Academy Logo" fill className="object-contain" />
          </div>
        </div>

        {/* Mobile illustration replaced with image */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="relative w-48 h-48">
            <Image src="/scitor-bg-logo.png" alt="Scitor Academy Logo" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
