"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay, FaLock } from "react-icons/fa";
import CourseVideoPlayer, { CourseVideo } from "./CourseVideoPlayer";

const videos: CourseVideo[] = [
  {
    id: 1,
    title: "Introduction to the Course",
    duration: "5:32",
    thumbnail: "https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/dc2516e84eef404e80c49a8b91b11138.png",
    locked: false,
    youtubeId: "ueNsPJgWNAg",
  },
  {
    id: 2,
    title: "Getting Started: First Steps",
    duration: "7:10",
    thumbnail: "https://leadschool.in/wp-content/uploads/2022/04/Untitled%20design%20(90).png",
    locked: false,
    youtubeId: null,
  },
  {
    id: 3,
    title: "Advanced Tips (Locked)",
    duration: "6:45",
    thumbnail: "https://treecampus.in/wp-content/uploads/2023/02/Optimized-imgpsh_fullsize_anim-3.jpg",
    locked: true,
    youtubeId: null,
  },
];

const VideoPreviews = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <section className="px-2 my-8 sm:px-4">
      <h2 className="mb-4 text-2xl font-bold text-center md:text-left">Course Video Previews</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl group hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl"
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={400}
              height={225}
              className="object-cover w-full h-40 transition-transform duration-300 sm:h-48 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="flex justify-end">
                {video.locked && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-full animate-pulse">
                    Locked
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white drop-shadow">{video.title}</h3>
                  <span className="text-sm text-white/80">{video.duration}</span>
                </div>
                <button
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 group-hover:scale-110 group-active:scale-95 ${video.locked ? "cursor-not-allowed" : "hover:shadow-purple-400"}`}
                  onClick={() => {
                    if (video.locked) {
                      setShowModal(true);
                    } else {
                      setShowPlayer(true);
                    }
                  }}
                  disabled={video.locked}
                  aria-label={video.locked ? "Locked" : "Play"}
                >
                  {video.locked ? (
                    <FaLock className="text-xl text-gray-700 animate-bounce group-active:animate-none" />
                  ) : (
                    <FaPlay className="text-xl text-purple-700 group-hover:animate-pulse" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for locked video */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-2 bg-black/60">
          <div className="relative w-full max-w-sm p-8 bg-white shadow-2xl rounded-xl animate-fadeIn">
            <button
              className="absolute text-2xl text-gray-500 top-2 right-2 hover:text-gray-700"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="mb-2 text-xl font-bold">Unlock This Video</h3>
            <p className="mb-4 text-gray-600">This lesson is locked. Please purchase the course to access all content.</p>
            <button className="w-full py-3 font-medium text-white transition bg-purple-700 rounded-lg hover:bg-purple-800 active:scale-95">Pay & Unlock</button>
          </div>
        </div>
      )}

      <CourseVideoPlayer
        videos={videos}
        showPlayer={showPlayer}
        setShowPlayer={setShowPlayer}
        initialVideoId={videos[0].id}
      />
  {/* react-youtube styles */}
  <style jsx global>{`
    @keyframes seek-fwd2 {
      0% { opacity: 0; transform: scale(0.7) translateY(40px) rotate(-10deg); }
      30% { opacity: 1; transform: scale(1.2) translateY(-10px) rotate(5deg); }
      70% { opacity: 1; transform: scale(1.1) translateY(-10px) rotate(0deg); }
      100% { opacity: 0; transform: scale(0.7) translateY(-40px) rotate(10deg); }
    }
    @keyframes seek-back2 {
      0% { opacity: 0; transform: scale(0.7) translateY(-40px) rotate(10deg); }
      30% { opacity: 1; transform: scale(1.2) translateY(10px) rotate(-5deg); }
      70% { opacity: 1; transform: scale(1.1) translateY(10px) rotate(0deg); }
      100% { opacity: 0; transform: scale(0.7) translateY(40px) rotate(-10deg); }
    }
    .animate-seek-fwd2 {
      animation: seek-fwd2 0.5s cubic-bezier(.4,2,.6,1) both;
    }
    .animate-seek-back2 {
      animation: seek-back2 0.5s cubic-bezier(.4,2,.6,1) both;
    }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        .aspect-video {
          aspect-ratio: 16/9;
        }
        @media (max-width: 768px) {
          .fixed.inset-0.z-50.flex.items-center.justify-center.bg-black\/95.animate-fadeIn > div {
            flex-direction: column !important;
            border-radius: 0 !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
          .w-full.md\:w-80 {
            width: 100% !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.1) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoPreviews;
