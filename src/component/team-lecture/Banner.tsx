import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function TeamBanner() {
  return (
    
    <div className="flex items-center justify-center w-full h-auto p-3 py-12 pt-16 bg-white sm:h-screen sm:p-4 md:p-6 lg:p-8">
      <div className="
        w-full max-w-[87rem]
        h-[300px] sm:h-[80vh] md:h-[calc(100vh-3rem)] lg:h-[500px]
        bg-cover bg-center bg-no-repeat
        rounded-xl sm:rounded-2xl md:rounded-3xl
        flex flex-col justify-center items-center
        relative overflow-hidden mt-4 sm:mt-8
     
      "    style={{ backgroundImage: 'url(/contact-banner.png)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute w-16 h-16 bg-white rounded-full top-8 left-4 sm:top-20 sm:left-20 sm:w-32 sm:h-32 blur-xl"></div>
          <div className="absolute w-24 h-24 bg-white rounded-full bottom-16 right-4 sm:bottom-32 sm:right-32 sm:w-48 sm:h-48 blur-xl"></div>
          <div className="absolute w-12 h-12 bg-white rounded-full top-1/2 left-1/4 sm:w-24 sm:h-24 blur-lg"></div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="absolute z-10 top-2 left-2 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-12 lg:left-12">
          <div className="px-3 py-2 rounded-lg shadow-sm bg-white/90 backdrop-blur-sm sm:px-6 sm:py-4">
            <nav className="flex items-center space-x-1 text-xs text-gray-600 sm:space-x-2 sm:text-sm">
              <span className="transition-colors cursor-pointer hover:text-gray-900">Home</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-gray-900">Our Instructors </span>
               
            </nav>
          </div>
        </div>

        {/* Download/Action Button */}
        <div className="absolute z-10 bottom-2 right-2 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12">
          <button className="flex items-center justify-center w-10 h-10 transition-colors duration-200 border-0 rounded-full shadow-sm cursor-pointer sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm hover:bg-white">
            <IoArrowDownCircleOutline className="text-[20px] sm:text-[24px]" />
          </button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl px-2 mx-auto text-center sm:px-4 md:px-8">
          <h1 className="mb-4 text-3xl font-light tracking-wide text-white sm:text-4xl md:text-6xl sm:mb-6 md:mb-8">
            Meet Our Instructors
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute z-10 transform -translate-x-1/2 bottom-4 sm:bottom-8 left-1/2 animate-bounce">
          <div className="flex justify-center w-5 h-8 border-2 rounded-full sm:w-6 sm:h-10 border-white/50">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
  