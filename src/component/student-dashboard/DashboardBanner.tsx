/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../Redux/Store';
import { fetchCourses } from '../../../Redux/ApiThunks';
import { IoSearch, IoHome, IoStar, IoTime, IoPersonCircle } from "react-icons/io5"
import { useLanguage } from '../../context/LanguageContext';

export default function KingsClubDashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch<AppDispatch>();
  const { language } = useLanguage();
  const coursesState = useSelector((state: RootState) => state.courses);
  const courses = Array.isArray(coursesState.data) ? coursesState.data : [];
  // Arabic translations
  const t = {
    helloStudent: language === 'ar' ? 'مرحبا بالطالب' : 'Hello Student',
    home: language === 'ar' ? 'الرئيسية' : 'Home',
    favorites: language === 'ar' ? 'المفضلة' : 'Favorites',
    history: language === 'ar' ? 'السجل' : 'History',
    profile: language === 'ar' ? 'الملف الشخصي' : 'Profile',
    searchCategory: language === 'ar' ? 'ابحث في الفئات ...' : 'Search Category ...',
    noCourses: language === 'ar' ? 'لم يتم العثور على دورات.' : 'No courses found.',
  };

  useEffect(() => {
    if (!coursesState.data) {
      dispatch(fetchCourses());
    }
  }, [dispatch, coursesState.data]);


  // Filter courses by search query (name and description)
  const filteredCourses = courses.filter((course: any) => {
    const name = language === 'ar' ? course.courseNameAr : course.courseName;
    const desc = language === 'ar' ? course.descriptionAr : course.description;
    const query = searchQuery.toLowerCase();
    return (
      name.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query)
    );
  });

  // Skeleton loading state
  const isLoading = coursesState.loading || !coursesState.data;
  const skeletonArray = Array.from({ length: 6 });

  return (
    <div className="min-h-screen text-black bg-white pt-[70px] md:pt-[100px]">
      {/* Desktop Header */}
      <header className="items-center justify-between hidden p-6 md:flex">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold tracking-wider text-black">{t.helloStudent}</div>
        </div>
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8 px-8 py-3 rounded-full bg-[#620ADB]/10">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === "home" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoHome size={20} />
            <span className="text-sm">{t.home}</span>
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === "favorites" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoStar size={20} />
            <span className="text-sm">{t.favorites}</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === "history" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoTime size={20} />
            <span className="text-sm">{t.history}</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === "profile" ? "bg-[#620ADB] text-white" : "  hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoPersonCircle size={20} />
            <span className="text-sm">{t.profile}</span>
          </button>
        </nav>
        {/* Desktop Search */}
        <div className="relative">
          <IoSearch className="absolute text-black transform -translate-y-1/2 left-3 top-1/2" size={20} />
          <input
            type="text"
            placeholder={t.searchCategory}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 pl-10 pr-4 text-black placeholder-black transition-all duration-200 border border-[#620ADB]/40 rounded-[12px] w-80 bg-[#620ADB]/5 focus:border-[#620ADB] focus:ring-2 focus:ring-[#620ADB]/20 focus:outline-none"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          />
        </div>
      </header>
      {/* Mobile Header */}
      <header className="flex flex-col gap-4 p-4 md:hidden">
        <div className="text-xl font-bold tracking-wider text-center text-black">{t.helloStudent}</div>
        {/* Mobile Search */}
        <div className="relative">
          <IoSearch className="absolute text-black transform -translate-y-1/2 left-3 top-1/2" size={18} />
          <input
            type="text"
            placeholder={t.searchCategory}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-10 pr-4 text-black placeholder-black transition-all duration-200 border border-[#620ADB]/40 rounded-[12px] bg-[#620ADB]/5 focus:border-[#620ADB] focus:ring-2 focus:ring-[#620ADB]/20 focus:outline-none"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          />
        </div>
      </header>

      {/* Main Content */}
  <main className="p-4 md:p-6">
        <div className="mb-8">
          

          {/* Course Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              skeletonArray.map((_, idx) => (
                <div key={idx} className="animate-pulse bg-white border border-[#620ADB]/30 rounded-lg overflow-hidden shadow-lg group hover:scale-105 hover:shadow-2xl hover:shadow-[#620ADB]/10 transition-all duration-500 flex flex-col justify-between">
                  <div className="relative h-48 overflow-hidden md:h-72">
                    <div className="w-full h-full bg-[#620ADB]/10" />
                  </div>
                  {/* Animated shimmer bar at the bottom */}
                  <div className="relative w-full h-8 mt-2 md:h-10">
                    <div className="absolute inset-0 rounded-b-lg bg-gradient-to-r from-[#620ADB]/30 via-[#fff]/40 to-[#620ADB]/30 overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/2 bg-white/30 animate-[shimmer_1.5s_linear_infinite]" style={{background: 'linear-gradient(90deg, transparent, #fff 60%, transparent)', opacity: 0.7}} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                {filteredCourses.length === 0 && (
                  <div className="col-span-3 py-8 text-center text-gray-500">{t.noCourses}</div>
                )}
                {filteredCourses.map((course: any, index: number) => (
                  <a
                    key={course._id}
                    href={`/course-details/${course._id}`}
                    className="block"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="relative overflow-hidden transition-all duration-500 bg-white border border-[#620ADB]/30 rounded-lg group hover:border-[#620ADB]/60 hover:scale-105 hover:shadow-2xl hover:shadow-[#620ADB]/10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden md:h-72">
                        <Image
                          src={course.imageUrl || "/placeholder.svg"}
                          alt={language === 'ar' ? course.courseNameAr : course.courseName}
                          fill
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#620ADB]/30 via-white/10 to-transparent" />
                        {/* Purple overlay on hover */}
                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-[#620ADB]/10 group-hover:opacity-100" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="px-4 py-2 transition-transform duration-300 transform translate-y-2 rounded-lg bg-[#620ADB]/40 backdrop-blur-sm group-hover:translate-y-0">
                          <h3 className="text-sm font-bold tracking-wide text-white md:text-base">
                            {language === 'ar' ? course.courseNameAr : course.courseName}
                          </h3>
                          <p className="mt-1 text-xs text-white/80 md:text-sm">
                            {language === 'ar' ? course.descriptionAr : course.description}
                          </p>
                        </div>
                      </div>
                      {/* Hover effect border */}
                      <div className="absolute inset-0 transition-opacity duration-300 border-2 border-[#620ADB] rounded-lg opacity-0 group-hover:opacity-100" />
                    </div>
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
  <nav className="fixed bottom-0 left-0 right-0 border-t border-[#620ADB] md:hidden bg-[#620ADB]/50 rounded-full mx-3 my-2 backdrop-blur-sm">
  <div className="flex items-center justify-around py-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col rounded-2xl items-center gap-1 px-4 py-2 transition-all duration-300 ${activeTab === "home" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoHome size={20} />
            <span className="text-xs">{t.home}</span>
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex flex-col  rounded-2xl  items-center gap-1 px-4 py-2 transition-all duration-300 ${activeTab === "favorites" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoStar size={20} />
            <span className="text-xs">{t.favorites}</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex flex-col  rounded-2xl  items-center gap-1 px-4 py-2 transition-all duration-300 ${activeTab === "history" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoTime size={20} />
            <span className="text-xs">{t.history}</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col  rounded-2xl  items-center gap-1 px-4 py-2 transition-all duration-300 ${activeTab === "profile" ? "bg-[#620ADB] text-white" : "  text-white hover:bg-[#620ADB] hover:text-white"}`}
          >
            <IoPersonCircle size={20} />
            <span className="text-xs">{t.profile}</span>
          </button>
        </div>
      </nav>

      {/* Mobile bottom padding to account for fixed navigation */}
      <div className="h-20 md:hidden" />
    </div>

  )
}
