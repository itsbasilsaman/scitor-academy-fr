"use client"

import Image from "next/image"
import { useState } from "react"
import { IoSearch, IoHome, IoStar, IoTime, IoPersonCircle } from "react-icons/io5"

const courseData = [
  {
    id: 1,
    title: "YOUR FUTURE OWNERS",
    image: "https://englishlabs.in/wp-content/uploads/2019/07/Spoken-English-1.jpg",
    category: "Leadership",
    route: "/course-one",
  },
  {
    id: 2,
    title: "OFFER CLASSES",
    image: "https://static.vecteezy.com/system/resources/previews/000/265/431/original/vector-training-courses-web-banner.jpg",
    category: "Business",
    route: "/course-two",
  },
  {
    id: 3,
    title: "ONLINE COURSES",
    image: "https://www.iare.ac.in/sites/default/files/department_images/AIML.jpg",
    category: "Digital",
    route: "/course-three",
  },
  {
    id: 4,
    title: "THE INVESTOR'S CLUB",
    image: "https://image.freepik.com/free-psd/online-courses-banner-template_23-2148636281.jpg",
    category: "Investment",
    route: "/course-detail",
  },
  {
    id: 5,
    title: "THE KINGMAKER'S CLUB",
    image: "https://thumbs.dreamstime.com/b/remote-education-web-seminar-computing-hi-tech-classes-management-courses-online-manager-management-training-remote-278280254.jpg",
    category: "Elite",
    route: "/course-kingmaker",
  },
  {
    id: 6,
    title: "THE KING'S CLUB",
    image: "https://thumbs.dreamstime.com/b/remote-education-web-seminar-computing-hi-tech-classes-management-courses-online-manager-management-training-remote-278280254.jpg",
    category: "Premium",
    route: "/course-king",
  },
]

export default function KingsClubDashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")

  return (
  <div className="min-h-screen text-black bg-white pt-[70px] md:pt-[100px]">
      {/* Desktop Header */}
  <header className="items-center justify-between hidden p-6 md:flex">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold tracking-wider text-black" >Hello Basil Saman</div>
        
        </div>

        {/* Desktop Navigation */}
  <nav className="flex items-center gap-8 px-8 py-3 rounded-full bg-[#620ADB]/10">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === "home" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoHome size={20} />
            <span className="text-sm">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === "favorites" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoStar size={20} />
            <span className="text-sm">Favorites</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === "history" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoTime size={20} />
            <span className="text-sm">History</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === "profile" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoPersonCircle size={20} />
            <span className="text-sm">Profile</span>
          </button>
        </nav>

        {/* Desktop Search */}
        <div className="relative">
          <IoSearch className="absolute text-black transform -translate-y-1/2 left-3 top-1/2" size={20} />
          <input
            type="text"
            placeholder="Search Category ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 pl-10 pr-4 text-black placeholder-black transition-all duration-200 border border-[#620ADB]/40 rounded-[12px] w-80 bg-[#620ADB]/5 focus:border-[#620ADB] focus:ring-2 focus:ring-[#620ADB]/20 focus:outline-none"
          />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="flex flex-col gap-4 p-4 md:hidden">
        <div className="text-xl font-bold tracking-wider text-center text-black">Hello Basil Saman</div>

        {/* Mobile Search */}
        <div className="relative">
          <IoSearch className="absolute text-black transform -translate-y-1/2 left-3 top-1/2" size={18} />
          <input
            type="text"
            placeholder="Search Category ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-10 pr-4 text-black placeholder-black transition-all duration-200 border border-[#620ADB]/40 rounded-[12px] bg-[#620ADB]/5 focus:border-[#620ADB] focus:ring-2 focus:ring-[#620ADB]/20 focus:outline-none"
          />
        </div>
      </header>

      {/* Main Content */}
  <main className="p-4 md:p-6">
        <div className="mb-8">
          

          {/* Course Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courseData.map((course, index) => {
                return (
                  <a
                    key={course.id}
                          href={course.route}
                    className="block"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="relative overflow-hidden transition-all duration-500 bg-white border border-[#620ADB]/30 rounded-lg group hover:border-[#620ADB]/60 hover:scale-105 hover:shadow-2xl hover:shadow-[#620ADB]/10"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="relative h-48 overflow-hidden md:h-72">
                       <Image
  src={course.image || "/placeholder.svg"}
  alt={course.title}
  fill
  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
/>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#620ADB]/30 via-white/10 to-transparent" />

                        {/* Purple overlay on hover */}
                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-[#620ADB]/10 group-hover:opacity-100" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="px-4 py-2 transition-transform duration-300 transform translate-y-2 rounded-lg bg-[#620ADB]/40 backdrop-blur-sm group-hover:translate-y-0">
                          <h3 className="text-sm font-bold tracking-wide text-white md:text-base">{course.title}</h3>
                        </div>
                      </div>

                      {/* Hover effect border */}
                      <div className="absolute inset-0 transition-opacity duration-300 border-2 border-[#620ADB] rounded-lg opacity-0 group-hover:opacity-100" />
                    </div>
                  </a>
                );
              })}
            </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
  <nav className="fixed bottom-0 left-0 right-0 border-t border-[#620ADB] md:hidden bg-[#620ADB]/50 rounded-full mx-3 my-2 backdrop-blur-sm">
  <div className="flex items-center justify-around py-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col rounded-2xl items-center gap-1 px-4 py-2 transition-all duration-300 ${
              activeTab === "home" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoHome size={20} />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex flex-col  rounded-2xl  items-center gap-1 px-4 py-2 transition-all duration-300 ${
              activeTab === "favorites" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoStar size={20} />
            <span className="text-xs">Favorites</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex flex-col  rounded-2xl  items-center gap-1 px-4 py-2 transition-all duration-300 ${
              activeTab === "history" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoTime size={20} />
            <span className="text-xs">History</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col  rounded-2xl  items-center gap-1 px-4 py-2 transition-all duration-300 ${
              activeTab === "profile" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"
            }`}
          >
            <IoPersonCircle size={20} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>

      {/* Mobile bottom padding to account for fixed navigation */}
      <div className="h-20 md:hidden" />
    </div>
  )
}
