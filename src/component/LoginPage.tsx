"use client"

import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowRight } from "react-icons/ai"
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="relative flex flex-col min-h-screen pt-20 sm:pt-15 lg:flex-row">
      {/* Background Image */}
      <Image 
        src="/bg.png" 
        alt="Background" 
        fill 
        className="object-contain object-center z-0" 
        priority
      />
      {/* Overlay for content to ensure readability */}
      <div className=" " />
      {/* Left Side - Login Form */}
      <div className="relative z-20 flex items-center justify-center flex-1 p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8 duration-500 animate-in fade-in-50">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight text-gray-900 font-regular lg:text-6xl">Welcome Back!</h1>
            <p className="text-[16px] gray-600 text- font-regular ">Login to continue your learning journey.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="email" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">
                Username or Email *
              </label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-[#F2F8FF] h-14 focus-within:ring-2 focus-within:ring-blue-200">
                <Image src="/email.png" alt="Email" width={24} height={24} className="w-4 mr-3" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-full text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none autofill:bg-[#F2F8FF] font-regular"
                  placeholder="Enter your email"
                  autoComplete="email"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">
                Password *
              </label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-[#F2F8FF] h-14 focus-within:ring-2 focus-within:ring-blue-200">
                <Image src="/password.png" alt="Password" width={24} height={24} className="w-4 mr-3" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 h-full pr-10 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none autofill:bg-[#F2F8FF] font-regular"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  style={{ backgroundColor: 'transparent' }}
                />
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 1000px #F2F8FF inset !important;
          box-shadow: 0 0 0 1000px #F2F8FF inset !important;
          -webkit-text-fill-color: #222 !important;
        }
        input, textarea, button {
          font-family: var(--font-regular, inherit) !important;
        }
      `}</style>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-400 right-4 hover:text-gray-600 focus:outline-none"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  {showPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-[12px] font-regular  text-[#737F8D]">
                  Remember me
                </label>
              </div>
              <button type="button" className="transition-colors  text-[12px] font-regular  text-[#737F8D] hover:text-gray-800">
                Forgot your password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group"
            >
              Login
              <MdOutlineArrowOutward className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Sign Up Section */}
      <div className="relative z-20 flex items-center justify-center flex-1 p-6 lg:p-12">
        <div className="bg-black relative overflow-hidden flex flex-col   p-8 lg:p-12 rounded-3xl w-full max-w-lg h-[500px] lg:h-[600px]">
          {/* Background Image */}
          <Image 
            src="/login-boxbg.jpg" 
            alt="Sign Up Background" 
            fill 
            className="z-0 object-cover object-center" 
            style={{ borderRadius: '1.5rem' }}
            priority
          />
          {/* Overlay for dark effect */}
          <div className="absolute inset-0 z-10 bg-black/80 rounded-3xl" />
          {/* Background Pattern */}
          <div className="absolute inset-0 z-20 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-600"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

           

          <div className="z-40 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-3xl leading-tight text-white font-regular lg:text-4xl">
                Don&apos;t have an
                <br />
                account?
              </h2>
            </div>

            <button className="flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 transform bg-transparent border-2 border-gray-600 rounded-full hover:bg-white hover:text-gray-900 hover:scale-105 group">
              Sign In
              <AiOutlineArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-lg text-white">to start learning for free.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
