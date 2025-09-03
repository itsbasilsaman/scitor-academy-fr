"use client"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/ApiThunks';
import type { RootState, AppDispatch } from '../../Redux/Store';

import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowRight } from "react-icons/ai"
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Check localStorage for user on mount
    const storedUser = localStorage.getItem('scitorUser');
    if (storedUser) {
      setIsLoggedIn(true);
      // Optionally redirect automatically:
      window.location.href = "/student-dashboard";
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUserId = userId.replace(/\s+/g, '');
    const trimmedPassword = password.replace(/\s+/g, '');
    dispatch(loginUser({ uniqueId: trimmedUserId, password: trimmedPassword }));
  };

  useEffect(() => {
    if (user && user.success) {
      localStorage.setItem('scitorUser', JSON.stringify(user));
      setIsLoggedIn(true);
      window.location.href = "/student-dashboard";
    }
  }, [user]);

  return (
    <div className="relative flex flex-col min-h-screen pt-20 sm:pt-15 lg:flex-row">
      {/* Background Image */}
      <Image 
        src="/bg.png" 
        alt="Background" 
        fill 
        className="z-0 object-contain object-center" 
        priority
      />
      {/* Overlay for content to ensure readability */}
      <div className="" />
      {/* Left Side - Login Form */}
      <div className="relative z-20 flex items-center justify-center flex-1 p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8 duration-500 animate-in fade-in-50">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight text-gray-900 font-regular lg:text-6xl">Student Login</h1>
            <p className="text-[16px] gray-600 text- font-regular ">Login with your Student User ID and Password to access your dashboard.</p>
          </div>

          {isLoggedIn ? (
            <Link href="/student-dashboard">
              <button
                type="button"
                className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group"
              >
                Go to Student Dashboard
                <MdOutlineArrowOutward className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          ) : (
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label htmlFor="userid" className="ml-8 block text-[12px] font-regular  text-[#737F8D]">
                  User ID *
                </label>
                <div className="relative flex items-center w-full px-4 transition-all duration-200 border border-gray-400 rounded-full bg-[#F2F8FF] h-14 focus-within:ring-2 focus-within:ring-blue-200">
                  <Image src="/name-card.png" alt="User ID" width={24} height={24} className="w-4 mr-3" />
                  <input
                    id="userid"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="flex-1 h-full text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none autofill:bg-[#F2F8FF] font-regular"
                    placeholder="Enter your User ID"
                    autoComplete="username"
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
                    placeholder="Enter your Password"
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

              {/* Error Message */}
              {error && (
                <div className="mb-2 text-sm text-center text-red-600">{error}</div>
              )}

              <button
                type="submit"
                className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
                <MdOutlineArrowOutward className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
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

           <Link href="/signup" >
              <button className="flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-300 transform bg-transparent border-2 border-gray-600 rounded-full hover:bg-white hover:text-gray-900 hover:scale-105 group">
                Sign Up
                <AiOutlineArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
           </Link>

            <p className="mt-2 text-lg text-white ">to start learning for free.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
