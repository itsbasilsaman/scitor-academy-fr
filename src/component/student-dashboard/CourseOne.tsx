
"use client"

import Link from "next/link"
import { useState } from "react"
import StudentVideoPlayer from "../../app/course-details/[id]/StudentVideoPlayer"
import { FiSearch, FiChevronLeft, FiFilter, FiCalendar, FiStar, FiPlay } from "react-icons/fi"
import Image from "next/image";

interface Lesson {
  id: number;
  title: string;
  instructor: string;
  date: string;
  thumbnail: string;
  isFavorite: boolean;
  duration?: string;
  videoId: string;
}

const lessons: Lesson[] = [
  {
    id: 1910,
    title: "12-MONTH SPOKEN ENGLISH BATTLE PLAN",
    instructor: "",
    date: "22.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "SqIE6lj2IGo", // demo
  },
  {
    id: 1909,
    title: "RESOURCEFUL ENGLISH THINKING",
    instructor: "",
    date: "21.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "dQw4w9WgXcQ", // Rick Astley
  },
  {
    id: 1908,
    title: "RESOURCEFUL ENGLISH THINKING : IBRAHIM SUBHAN",
    instructor: "Ibrahim Subhan",
    date: "20.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "3JZ_D3ELwOQ", // Mark Ronson - Uptown Funk
  },
  {
    id: 1907,
    title: "YOUR SPOKEN ENGLISH LIFE CYCLE",
    instructor: "",
    date: "19.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "L_jWHffIx5E", // Smash Mouth - All Star
  },
  {
    id: 1906,
    title: "THINK WITHIN THE ENGLISH-BOX",
    instructor: "",
    date: "18.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "9bZkp7q19f0", // PSY - Gangnam Style
  },
  {
    id: 1905,
    title: "THE ENGLISH THINKING MUSCLE",
    instructor: "",
    date: "17.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "kJQP7kiw5Fk", // Luis Fonsi - Despacito
  },
  {
    id: 1904,
    title: "THINK LIKE A CEO – SPOKEN ENGLISH EDITION",
    instructor: "",
    date: "16.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "fJ9rUzIMcZQ", // Queen - Bohemian Rhapsody
  },
  {
    id: 1903,
    title: "PROPERTY INVESTMENTS FOR ENGLISH LEARNERS : BABIL",
    instructor: "Babil",
    date: "15.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "eY52Zsg-KVI", // YouTube Rewind
  },
  {
    id: 1902,
    title: "CONVERSION CLARITY IN ENGLISH : IBRAHIM SUBHAN",
    instructor: "Ibrahim Subhan",
    date: "14.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "hTWKbfoikeg", // Nirvana - Smells Like Teen Spirit
  },
  {
    id: 1901,
    title: "INCOME THAT WORKS WHILE YOU REST – IN ENGLISH : PRIMSON DIAZ",
    instructor: "Primson Diaz",
    date: "13.08.2025",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFavorite: false,
    videoId: "RgKAFK5djSk", // Wiz Khalifa - See You Again
  },
];

export default function ClassDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showPlayer, setShowPlayer] = useState<number | false>(false);

  const toggleFavorite = (lessonId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(lessonId)) {
      newFavorites.delete(lessonId);
    } else {
      newFavorites.add(lessonId);
    }
    setFavorites(newFavorites);
  };

  const filteredLessons = lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-[100px] bg-white text-black">
      {/* Header */}
      <header className="bg-white border-b border-[#620ADB]/30">
        <div className="flex items-center justify-between px-4 py-4 md:px-6">
          <Link href="/student-dashboard">
            <div className="flex items-center gap-4">
              <button className="p-2 transition-colors rounded-lg hover:bg-[#620ADB]/10">
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-semibold md:text-xl">Spoken English Classes</h1>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 transition-colors rounded-lg hover:bg-[#620ADB]/10">
              <FiFilter className="w-5 h-5" />
            </button>
            <button className="p-2 transition-colors rounded-lg hover:bg-[#620ADB]/10">
              <FiCalendar className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 pb-4 md:px-6">
          <div className="relative max-w-md ml-auto">
            <FiSearch className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-[#620ADB]" />
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-10 pr-4 transition-all border rounded-lg bg-[#620ADB]/5 border-[#620ADB]/40 text-black placeholder-[#620ADB] focus:outline-none focus:ring-2 focus:ring-[#620ADB]/30"
            />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-6">
          {filteredLessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              className="group bg-white border border-[#620ADB]/30 rounded-lg overflow-hidden   transition-all duration-500 hover:shadow-2xl hover:shadow-[#620ADB]/20 hover:scale-[1.04] cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${lesson.id % 10 * 80}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={lesson.thumbnail || "/placeholder.svg"}
                  alt={lesson.title}
                  width={320}
                  height={180}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 transition-colors duration-500   group-hover:bg-[#620ADB]/20" />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <button
                    className="p-3 rounded-full bg-[#620ADB]  scale-90 group-hover:scale-110 transition-transform duration-500"
                    onClick={() => {
                      setShowPlayer(idx);
                    }}
                    aria-label="Play"
                  >
                    <FiPlay className="w-6 h-6 ml-1 text-white animate-bounce" />
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
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium rounded text-[#620ADB] bg-[#620ADB]/10">
                    Lesson: {lesson.id}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-semibold transition-colors duration-300 md:text-base line-clamp-2 group-hover:text-[#620ADB]">
                  {lesson.title}
                </h3>
                {lesson.instructor && <p className="mb-2 text-xs text-[#620ADB]">{lesson.instructor}</p>}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#620ADB]">{lesson.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredLessons.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No lessons found matching your search.</p>
          </div>
        )}
        {/* Student Video Player for selected video */}
        {showPlayer !== false && (
          <StudentVideoPlayer
            videoId={filteredLessons[showPlayer].videoId}
            showPlayer={true}
            setShowPlayer={() => setShowPlayer(false)}
          />
        )}
      </main>
    </div>
  );
}
