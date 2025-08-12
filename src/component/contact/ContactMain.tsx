"use client"

import type React from "react"
import { useState } from "react"
import {   FaEnvelope, FaMapMarkerAlt,    FaComment } from "react-icons/fa"
import { GoArrowUpRight } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { SiGooglemessages } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import Image from "next/image"

export default function ContactMain() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }
  
  

  return (
    <div className="min-h-screen px-2 py-6 bg-white sm:px-4 sm:py-8 md:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-6xl lg:max-w-[87rem]">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 shadow-lg rounded-3xl">
            <div className="p-4 sm:p-8 lg:p-12 lg:py-16">
              <div className="space-y-6">
                <div>
                  <h1 className="mb-4 text-2xl text-gray-900 sm:text-3xl lg:text-5xl font-regular">{"Let's Get in Touch"}</h1>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-base">
                    Whether you have questions about courses, pricing, scheduling a demo, or anything else — our team is
                    ready to help.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block mb-1 ml-4 text-xs font-medium text-gray-700 sm:ml-6 lg:mb-2 lg:ml-6 sm:text-sm lg:text-sm">
                      Full Name
                    </label>
                    <div className="relative rounded-full">
                      <IoIosContact  className="absolute text-[23px] gray-400 transform -translate-y-1/2 text- left-4 top-1/2" />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="flex w-full h-10 py-2 pl-10 pr-3 text-xs bg-white border border-gray-300 rounded-full sm:h-12 lg:h-12 sm:py-3 lg:py-3 sm:text-sm lg:text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 ml-4 text-xs font-medium text-gray-700 sm:ml-6 lg:mb-2 lg:ml-6 sm:text-sm lg:text-sm">
                      Email Address
                    </label>
                    <div className="relative">
                      <MdOutlineAlternateEmail  className="absolute text-[23px]text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex w-full h-10 py-2 pl-10 pr-3 text-xs bg-white border border-gray-300 rounded-full sm:h-12 lg:h-12 sm:py-3 lg:py-3 sm:text-sm lg:text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-1 ml-4 text-xs font-medium text-gray-700 sm:ml-6 lg:mb-2 lg:ml-6 sm:text-sm lg:text-sm">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FiPhoneCall className="absolute text-[17px] gray-400 transform -translate-y-1/2 text- left-4 top-1/2" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange }
                        className="flex w-full h-10 py-2 pl-10 pr-3 text-xs bg-white border border-gray-300 rounded-full sm:h-12 lg:h-12 sm:py-3 lg:py-3 sm:text-sm lg:text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1 ml-4 text-xs font-medium text-gray-700 sm:ml-6 lg:mb-2 lg:ml-6 sm:text-sm lg:text-sm ">
                      Subject
                    </label>
                    <div className="relative">
                      <FaComment className="absolute text-[16px] gray-400 transform -translate-y-1/2 text- left-4 top-1/2" />
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="flex w-full h-10 py-2 pl-10 pr-3 text-xs bg-white border border-gray-300 rounded-full sm:h-12 lg:h-12 sm:py-3 lg:py-3 sm:text-sm lg:text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 ml-4 text-xs font-medium text-gray-700 sm:ml-6 lg:mb-2 lg:ml-6 sm:text-sm lg:text-sm">
                      Message
                    </label>
                    <div className="relative">
                      <SiGooglemessages className="absolute text-[20px] gray-400 text- left-4 top-3" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="flex min-h-[80px] sm:min-h-[120px] lg:min-h-[120px] w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 py-2 sm:py-3 lg:py-3 text-xs sm:text-sm lg:text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500 resize-none"
                      />
                    </div>
                  </div>
          
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full h-10 gap-2 px-4 py-2 text-xs font-medium text-white transition-colors bg-gray-900 rounded-full sm:h-12 lg:h-12 sm:py-3 lg:py-3 sm:text-base lg:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-gray-800 focus-visible:ring-gray-900"
                  >
                    Submit
                    <GoArrowUpRight className="text-base sm:text-lg lg:text-lg" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 space-y-6 sm:space-y-8 lg:mt-0">
            {/* Profile Image */}
            <div className="hidden overflow-hidden shadow-lg sm:block rounded-3xl bg-gradient-to-br from-blue-200 to-blue-300">
              <div className="p-0">
                <div className="aspect-[4/3] relative w-full h-40 sm:h-56 md:h-64 lg:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Professional contact person"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full sm:p-5">
                    <FiPhoneCall className="text-base text-purple-600 sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 sm:text-lg">+91 859 036 r9978</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full sm:p-5">
                    <FaEnvelope className="text-base text-purple-600 sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 sm:text-lg">support@scitoracademy.com</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full sm:p-5">
                    <FaMapMarkerAlt className="text-base text-purple-600 sm:text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 sm:text-lg">2nd Floor, ABC Towers, Kochi, Kerala</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
