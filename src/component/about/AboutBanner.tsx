import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function AboutBanner() {
  return (
    <div className="h-auto  sm:h-screen w-full bg-white p-3 py-12 pt-16 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
      <div className="
        w-full max-w-[87rem]
        h-[300px] sm:h-[80vh] md:h-[calc(100vh-3rem)] lg:h-[500px]
        bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400
        rounded-xl sm:rounded-2xl md:rounded-3xl
        flex flex-col justify-center items-center
        relative overflow-hidden mt-4 sm:mt-8
      ">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-8 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-16 right-4 sm:bottom-32 sm:right-32 w-24 h-24 sm:w-48 sm:h-48 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-white rounded-full blur-lg"></div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="absolute top-2 left-2 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-6 sm:py-4 shadow-sm">
            <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600">
              <span className="hover:text-gray-900 cursor-pointer transition-colors">Home</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">About Us</span>
            </nav>
          </div>
        </div>

        {/* Download/Action Button */}
        <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-10">
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm border-0 flex items-center justify-center transition-colors duration-200 cursor-pointer">
            <IoArrowDownCircleOutline className="text-[20px] sm:text-[24px]" />
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center px-2 sm:px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 md:mb-8 tracking-wide">
            About Us
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
  