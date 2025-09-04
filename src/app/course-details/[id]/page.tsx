/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react";
import Link from "next/link"
import { useState, useEffect } from "react"
import StudentVideoPlayer from "./StudentVideoPlayer"
import { FiSearch, FiChevronLeft, FiChevronRight,   FiStar, FiPlay } from "react-icons/fi"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { fetchCourseById } from '../../../../Redux/ApiThunks';
import type { AppDispatch } from '../../../../Redux/Store';
import { useLanguage } from '../../../context/LanguageContext';

interface Lesson {
  id: number;
  title: string;
  lessonTitleAr: string;
  instructor: string;
  date: string;
  thumbnail: string;
  isFavorite: boolean;
  duration?: string;
  videoId: string;
  lessonNumber: number;
  lessonDuration?: string;
}

export default function ClassDashboard({ params }: { params: Promise<{ id: string }> }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showPlayer, setShowPlayer] = useState<number | false>(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const { language } = useLanguage();

  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams?.id;

  useEffect(() => {
    setLoading(true);
    if (courseId) {
      dispatch(fetchCourseById(courseId))
        .unwrap()
        .then((data) => {
          setCourse(data);
          if (Array.isArray(data.lessons)) {
            setLessons(
              data.lessons.map((lesson: any) => ({
                id: lesson._id ?? lesson.lessonNumber ?? 0,
                title: lesson.lessonTitle ?? "",
                lessonTitleAr: lesson.lessonTitleAr ?? "",
                instructor: "",
                date: lesson.lessonDate ? lesson.lessonDate.slice(0, 10) : "",
                thumbnail: lesson.thumbnailUrl ?? "",
                isFavorite: false,
                duration: lesson.lessonDuration ?? "",
                videoId: lesson.youtubeUrl ?? "",
                lessonNumber: lesson.lessonNumber ?? 0,
                lessonDuration: lesson.lessonDuration ?? "",
              }))
            );
          } else {
            setLessons([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('CourseById error:', error);
          setCourse(null);
          setLessons([]);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [courseId, dispatch]);

  const toggleFavorite = (lessonId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(lessonId)) {
      newFavorites.delete(lessonId);
    } else {
      newFavorites.add(lessonId);
    }
    setFavorites(newFavorites);
  };

  // Enhanced search filter for multiple fields
  const filteredLessons = lessons.filter((lesson) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      lesson.title.toLowerCase().includes(query) ||
      lesson.lessonTitleAr.toLowerCase().includes(query) ||
      lesson.lessonNumber.toString().includes(query) ||
      lesson.lessonDuration?.toLowerCase().includes(query) ||
      lesson.date?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen pt-[100px] bg-white text-black">
      {/* Header */}
      <header className="bg-white border-b border-[#620ADB]/30">
        <div className="px-4 py-4 md:px-6">
          {/* Mobile header layout */}
          <div className="flex flex-col w-full gap-3 md:flex-row md:items-center md:justify-between">
            {/* Top row: Back button and course info */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-2">
                <Link href="/student-dashboard">
                  <button className="p-2 transition-colors rounded-lg hover:bg-[#620ADB]/10 border border-[#620ADB]/20 md:border-0">
                    {language === 'ar' ? (
                      <FiChevronRight className="w-5 h-5" />
                    ) : (
                      <FiChevronLeft className="w-5 h-5" />
                    )}
                  </button>
                </Link>
                <span className="text-lg font-semibold md:text-xl line-clamp-2">
                  {language === 'ar' ? course?.courseNameAr : course?.courseName}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-700 md:text-base md:mt-0">
                {language === 'ar' ? course?.descriptionAr : course?.description}
              </p>
            </div>
            {/* Search input row */}
            <div className={`relative mt-2 md:mt-0 max-w-full md:max-w-md ${language === 'ar' ? 'text-right' : ''}`}> 
              {language === 'ar' ? (
                <>
                  <input
                    type="text"
                    placeholder="ابحث عن الدروس..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setLoading(true); setTimeout(() => setLoading(false), 400); }}
                    className="w-full py-2 pr-10 pl-4 transition-all border rounded-lg bg-[#620ADB]/5 border-[#620ADB]/40 text-black placeholder-[#620ADB] focus:outline-none focus:ring-2 focus:ring-[#620ADB]/30 text-right"
                    dir="rtl"
                  />
                  <FiSearch className="absolute w-4 h-4 transform -translate-y-1/2 right-3 top-1/2 text-[#620ADB]" />
                </>
              ) : (
                <>
                  <FiSearch className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-[#620ADB]" />
                  <input
                    type="text"
                    placeholder="Search lessons..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setLoading(true); setTimeout(() => setLoading(false), 400); }}
                    className="w-full py-2 pl-10 pr-4 transition-all border rounded-lg bg-[#620ADB]/5 border-[#620ADB]/40 text-black placeholder-[#620ADB] focus:outline-none focus:ring-2 focus:ring-[#620ADB]/30"
                    dir="ltr"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-6">
          {loading ? (
            // Skeleton loader for lessons
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#620ADB]/30 rounded-lg overflow-hidden animate-pulse transition-all duration-500 hover:scale-[1.04] cursor-pointer"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="w-full h-full bg-[#620ADB]/10 animate-skeltonPulse" style={{ minHeight: 180 }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#620ADB]/30 animate-bounce" />
                  </div>
                  <div className="absolute p-2 rounded-full top-3 right-3 bg-[#620ADB]/20" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-[#620ADB]/10 w-16 h-4 animate-skeltonPulse" />
                    <span className="text-xs bg-[#620ADB]/10 w-16 h-4 animate-skeltonPulse" />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="mb-2 w-32 h-4 bg-[#620ADB]/10 rounded animate-skeltonPulse" />
                    <div className="w-16 h-4 bg-[#620ADB]/10 rounded animate-skeltonPulse" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredLessons.map((lesson) => (
              <div
                key={lesson.lessonNumber}
                className="group bg-white border border-[#620ADB]/30 rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.04] cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${lesson.lessonNumber % 10 * 80}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={lesson.thumbnail || "/placeholder.svg"}
                    alt={language === 'ar' ? lesson.lessonTitleAr : lesson.title}
                    width={320}
                    height={180}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-[#620ADB]/20" />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className={`p-3 rounded-full bg-[#620ADB] scale-90 transition-transform duration-500 group-hover:scale-110 group-hover:animate-bounce`}
                      onClick={() => {
                        setShowPlayer(lesson.id);
                      }}
                      aria-label="Play"
                    >
                      <FiPlay className="w-6 h-6 ml-1 text-white" />
                    </button>
                  </div>
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(lesson.id);
                    }}
                    className="absolute p-2 transition-colors duration-300 rounded-full top-3 right-3 bg-[#620ADB]/80 hover:bg-[#620ADB] shadow"
                  >
                    <FiStar
                      className={`w-4 h-4 transition-colors duration-300 ${
                        favorites.has(lesson.id) ? "text-yellow-400 fill-current" : "text-white"
                      }`}
                    />
                  </button>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {language === 'ar' ? (
                      <span className="px-2 py-1 text-xs font-medium rounded text-[#620ADB] bg-[#620ADB]/10" style={{direction: 'rtl', textAlign: 'right'}}>
                        الدرس:  {lesson.lessonNumber}
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-medium rounded text-[#620ADB] bg-[#620ADB]/10">
                       <span className="font-semibold"> Lesson: </span>{lesson.lessonNumber}
                      </span>
                    )}
                    {language === 'ar' ? (
                      <span className="text-xs text-[#620ADB]" style={{textAlign: 'right', direction: 'rtl'}}>
                        <span className="font-semibold">المدة :</span>
                        <span style={{textAlign: 'left', direction: 'ltr', display: 'inline-block', minWidth: '60px'}}>{lesson.lessonDuration}</span>
                      </span>
                    ) : (
                      <span className="text-xs text-[#620ADB]" >
                        <span className="font-semibold">Duration :</span>
                        <span style={{textAlign: 'left', direction: 'ltr', display: 'inline-block', minWidth: '60px'}}> {lesson.lessonDuration}</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-2 ">
                    <h3 className="mb-2 text-sm font-semibold transition-colors duration-300 md:text-base line-clamp-2 group-hover:text-[#620ADB]">
                      {language === 'ar' ? lesson.lessonTitleAr : lesson.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#620ADB]" style={{textAlign: 'left', direction: 'ltr'}}>{lesson.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {!loading && filteredLessons.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No lessons found matching your search.</p>
          </div>
        )}
        {/* Student Video Player for selected video */}
        {!loading && showPlayer !== false && (
          <StudentVideoPlayer
            videoId={filteredLessons[showPlayer]?.videoId}
            showPlayer={true}
            setShowPlayer={() => setShowPlayer(false)}
          />
        )}
      </main>
    </div>
  );
}
