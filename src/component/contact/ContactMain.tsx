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
    <div className="min-h-screen px-4 py-8 bg-white sm:p-4 md:p-6 lg:p-8 ">
      <div className="mx-auto max-w-[87rem]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 shadow-lg rounded-3xl ">
            <div className="p-8 lg:p-12 lg:py-16">
              <div className="space-y-6">
                <div>
                  <h1 className="mb-4 text-3xl text-gray-900 font-regular lg:text-5xl">{"Let's Get in Touch"}</h1>
                  <p className="text-base leading-relaxed text-gray-600 ">
                    Whether you have questions about courses, pricing, scheduling a demo, or anything else — our team is
                    ready to help.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block mb-2 ml-6 text-sm font-medium text-gray-700">
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
                        className="flex w-full h-12 py-3 pl-10 pr-3 text-sm bg-white border border-gray-300 rounded-full ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                    
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 ml-6 text-sm font-medium text-gray-700">
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
                        className="flex w-full h-12 py-3 pl-10 pr-3 text-sm bg-white border border-gray-300 rounded-full ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                      
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 ml-6 text-sm font-medium text-gray-700">
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
                        className="flex w-full h-12 py-3 pl-10 pr-3 text-sm bg-white border border-gray-300 rounded-full ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                             
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 ml-6 text-sm font-medium text-gray-700 ">
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
                        className="flex w-full h-12 py-3 pl-10 pr-3 text-sm bg-white border border-gray-300 rounded-full ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500"
                 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 ml-6 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="relative">
                      <SiGooglemessages className="absolute text-[20px] gray-400 text- left-4 top-3" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="flex min-h-[120px] w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 py-3 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:border-blue-500 resize-none"
                     
                      />
                    </div>
                  </div>
          
                  <button
                    type="submit"
                    className="flex items-center justify-between w-full h-12 gap-3 px-4 py-3 text-base font-medium text-white transition-colors bg-gray-900 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-gray-800 focus-visible:ring-gray-900 sm:w-auto "
                  >
                    Submit 
                    < GoArrowUpRight className="" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="overflow-hidden shadow-lg rounded-3xl bg-gradient-to-br from-blue-200 to-blue-300">
              <div className="p-0">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://tse3.mm.bing.net/th/id/OIP.TOdWH7V3u50DE2O8sxXv8gHaE8?pid=Api&P=0&h=180"
                    alt="Professional contact person"
                    fill
                    className="object-cover object-center"
                    
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-5 bg-purple-100 rounded-full">
                      <FiPhoneCall  className="text-lg text-purple-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">+91 859 036 r9978</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-5 bg-purple-100 rounded-full">
                      <FaEnvelope className="text-lg text-purple-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">support@scitoracademy.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-5 bg-purple-100 rounded-full">
                      <FaMapMarkerAlt className="text-lg text-purple-600" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">2nd Floor, ABC Towers, Kochi, Kerala</p>
                    </div>
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
