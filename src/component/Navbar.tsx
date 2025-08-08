"use client"

import { useState } from "react"
import Link from "next/link"
 
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";


const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about-us" },
  { name: "COURSES", href: "/courses" },
  { name: "WHY CHOOSE US", href: "/why-choose-us" },
 
  { name: "CONTACT", href: "/contact-us" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed z-50 transition-all bg-white border border-b border-gray-300 rounded-full top-2 left-2 right-2 sm:top-4 sm:left-8 sm:right-8 lg:top-4 lg:left-16 lg:right-16">
      <div className="container px-2 mx-auto sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="flex items-center justify-center p-2 text-gray-700 transition-all rounded-full hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
            >
                <HiOutlineSquares2X2 className="text-[28px] text-purple-600" />
            </button>
            {/* Mobile Sidebar Menu */}
            <div
              className={`fixed inset-0 z-[100] transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
              style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-40' : 'opacity-0'}`}
                onClick={() => setIsOpen(false)}
              ></div>
              {/* Sidebar */}
              <aside
                className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-2xl rounded-r-2xl p-6 flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                aria-label="Mobile menu"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                
                    <Image
                                src="/scitor-logo.png"
                                alt="Play video icon"
                                width={150}
                                height={150}
                                className="object-cover w-8 sm:w-10 md:w-20"
                              />
                  </div>
                  <button
                    className="p-2 text-gray-500 rounded-full hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                </div>
                <nav className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-base font-semibold text-gray-700 transition-colors rounded-lg hover:text-purple-600 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-6 mt-auto border-t border-gray-100">
                  <button
                    className="w-full px-4 py-3 text-base font-semibold text-white transition-colors rounded-lg shadow-md bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </button>
                </div>
              </aside>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2">
             <Image
                                src="/scitor-logo.png"
                                alt=" "
                                width={150}
                                height={150}
                                className="w-16 ml-4"
                              />
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-purple-600 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 space-x-2">
            <button
              className="relative hidden text-sm font-medium tracking-wide text-gray-600 transition-colors sm:flex hover:text-purple-600 group"
              aria-label="Language"
            >
              <CiGlobe className="text-[28px] sm:text-[30px]" />
            </button>
            <button
              className="hidden px-5 py-3 text-sm font-semibold text-white rounded-full transition-colors bg-[#6606E3] hover:bg-purple-900 sm:inline"
            >
              Get in Touch
            </button>
            <button
              className="rounded-full text-[#6606E3]  sm:inline-block lg:hidden"
            >
               <CiGlobe className="text-[28px] sm:text-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
