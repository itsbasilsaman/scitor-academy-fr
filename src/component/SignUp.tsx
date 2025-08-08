"use client"

import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agree, setAgree] = useState(false)

  return (
    <div className="flex flex-col min-h-screen lg:flex-row bg-[url('/bg.png')] bg-cover bg-center">
      {/* Left Side - Sign Up Form */}
      <div className="flex flex-col justify-center flex-1 order-1 px-4 py-8 pt-12 sm:pt-20 lg:px-24 lg:order-1">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="mt-16 mb-8 text-3xl tracking-tight text-gray-900 font-regular sm:text-4xl lg:text-[48px]">Create your free account and start learning today.</h1>
          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">Full Name</label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-white h-14 focus-within:ring-2 focus-within:ring-blue-200 mt-1">
                <Image src="/name-card.png" alt="Full Name" width={22} height={22} className="w-5 mr-3" />
                <input
                  id="fullname"
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="flex-1 h-full text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none autofill:bg-transparent font-regular"
                  
                  autoComplete="name"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">Email Address</label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-white h-14 focus-within:ring-2 focus-within:ring-blue-200 mt-1">
                <Image src="/mail-card.png" alt="Email" width={22} height={22} className="w-5 mr-3" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 h-full text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none font-regular"
                  
                  autoComplete="email"
                />
              </div>
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">Phone Number</label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-white h-14 focus-within:ring-2 focus-within:ring-blue-200 mt-1">
                <Image src="/phone.png" alt="Phone" width={22} height={22} className="w-5 mr-3" />
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="flex-1 h-full text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none font-regular"
                
                  autoComplete="tel"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">Password</label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-white h-14 focus-within:ring-2 focus-within:ring-blue-200 mt-1">
                <Image src="/password.png" alt="Password" width={22} height={22} className="w-5 mr-3" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="flex-1 h-full pr-10 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none font-regular"
               
                  autoComplete="new-password"
                />
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
            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">Confirm Password</label>
              <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-white h-14 focus-within:ring-2 focus-within:ring-blue-200 mt-1">
                <Image src="/password.png" alt="Confirm Password" width={22} height={22} className="w-5 mr-3" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="flex-1 h-full pr-10 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none font-regular"
               
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute text-gray-400 right-4 hover:text-gray-600 focus:outline-none"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={e => setAgree(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agree" className="text-xs text-gray-500">
                I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
              </label>
            </div>
            {/* Sign Up Button */}
            <button
              type="submit"
              className="flex items-center justify-center w-40 mt-2 text-base font-medium text-white bg-black rounded-lg h-14 hover:bg-gray-800 group"
            >
              Sign In
              <MdOutlineArrowOutward className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
      {/* Right Side - Already have account */}
      <div className="flex items-center justify-center flex-1 order-2 w-full p-4 sm:p-6 lg:p-12 lg:order-2">
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 rounded-3xl w-full max-w-lg h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] min-h-[250px]"
          style={{
            background: `linear-gradient(135deg, #1CA7EC99 0%, #5F86F299 100%), url('/signup-boxbg.jpg') center/cover no-repeat`
          }}
        >
          {/* Logo */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
            {/* <Image src="/logo.png" alt="Logo" width={60} height={60} className="sm:w-[90px] sm:h-[90px]" /> */}
          </div>
          <div className="z-10 w-full space-y-6 text-left sm:space-y-8">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:mb-8 sm:text-4xl">Already have an account?</h2>
            <button className="flex items-center justify-center px-4 py-2 text-base font-medium text-white transition-all duration-200 bg-black rounded-lg sm:px-6 hover:bg-gray-800 group">
              Login here
              <MdOutlineArrowOutward className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-base text-white sm:mt-6 sm:text-lg">to start learning</p>
          </div>
        </div>
      </div>
    </div>
  )
}
