"use client"

// Removed: import { Button } from "@/components/ui/button"
// ...existing code...
import { GoArrowUpRight } from "react-icons/go";

export default function HelpSection() {
  return (
    <div className="w-full">
      {/* Map Section */}
      <div className="relative w-full h-64 overflow-hidden md:h-80 lg:h-96">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=46.5563%2C24.5247%2C46.8563%2C24.8247&layer=mapnik&marker=24.7136%2C46.6753"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Riyadh, Saudi Arabia"
          className="absolute inset-0"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
      </div>

      {/* Help Content Section */}
      <div className="relative z-10 px-4 -mt-20 md:-mt-24 lg:-mt-32 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg sm:p-8 lg:p-12">
            <div className="text-center sm:text-left">
              <h1 className="mb-4 text-3xl text-gray-900 font-regular sm:text-4xl lg:text-5xl sm:mb-6">Need help fast?</h1>

              <div className="mb-6 space-y-2 sm:mb-8">
                <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
                  Browse our FAQs or chat with our support team for instant help.
                </p>
                <p className="text-sm text-gray-500 sm:text-base">{"We're here from 9 AM to 9 PM every day."}</p>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 sm:justify-start">
                <button
                  type="button"
                  className="flex items-center justify-between gap-5 px-4 py-3 text-base text-white transition bg-gray-900 rounded-full font-regular hover:bg-gray-800"
                >
                  
                  Start Chat
                  <GoArrowUpRight/>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-5 px-4 py-3 text-base font-medium text-gray-700 transition bg-transparent border border-gray-300 rounded-full justify-n hover:bg-gray-50"
                >
                  
                  Browse FAQs
                  <GoArrowUpRight/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}