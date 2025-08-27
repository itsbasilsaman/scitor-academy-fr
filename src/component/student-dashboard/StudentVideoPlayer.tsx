"use client"

import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

interface StudentVideoPlayerProps {
  videoId: string;
  showPlayer: boolean;
  setShowPlayer: (show: boolean) => void;
}

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const StudentVideoPlayer: React.FC<StudentVideoPlayerProps> = ({ videoId, showPlayer, setShowPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Removed seekAnim state
  const playerRef = useRef<YouTubePlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    setDuration(event.target.getDuration());
    setIsPlaying(true);
    event.target.playVideo();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const t = playerRef.current?.getCurrentTime?.();
      if (typeof t === "number") setCurrentTime(t);
    }, 500);
  };

  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    if (event.data === 1) setIsPlaying(true);
    else setIsPlaying(false);
  };

  useEffect(() => {
    if (!showPlayer && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [showPlayer]);

  useEffect(() => {
    if (!showPlayer) setCurrentTime(0);
  }, [showPlayer]);

  return showPlayer ? (
    <div className="fixed inset-0 z-50 flex flex-col w-full h-screen bg-black/95 animate-fadeIn">
      {/* Parent wrapper for all content */}
      <div className="relative flex flex-col w-full h-full max-w-full max-h-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-black/90 border-white/10">
          <h3 className="text-lg font-bold text-white truncate">Demo Video</h3>
          <button
            className="ml-4 text-3xl text-white hover:text-purple-400"
            onClick={() => setShowPlayer(false)}
            aria-label="Close video"
          >
            ×
          </button>
        </div>
        {/* Video + Controls */}
        <div className="flex flex-col w-full h-full overflow-y-auto md:h-auto md:overflow-hidden">
          {/* Desktop: video and controls overlay; Mobile: video top, controls below, scrollable */}
          <div className="relative w-full h-64 md:h-[520px] bg-black aspect-video md:aspect-video md:rounded-xl">
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  modestbranding: 1,
                  rel: 0,
                  showinfo: 0,
                  fs: 1,
                },
              }}
              className="absolute inset-0 object-cover w-full h-full bg-black border-0"
              onReady={onPlayerReady}
              onStateChange={onPlayerStateChange}
            />
            {/* Controls overlay for desktop */}
            <div className="absolute bottom-0 left-0 flex-col hidden w-full px-4 pt-2 pb-3 md:flex bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <div className="flex items-center gap-2">
                <button
                  className="p-1 text-white/80 hover:text-white"
                  onClick={() => {
                    if (playerRef.current) {
                      playerRef.current.seekTo(Math.max(0, currentTime - 5), true);
                    }
                  }}
                  aria-label="Back 5 seconds"
                  tabIndex={0}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                <button
                  className="p-1 text-white/80 hover:text-white"
                  onClick={() => {
                    if (!playerRef.current) return;
                    if (isPlaying) playerRef.current.pauseVideo();
                    else playerRef.current.playVideo();
                  }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  tabIndex={0}
                >
                  {isPlaying ? (
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/></svg>
                  ) : (
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 4v16l13-8-13-8z" fill="currentColor"/></svg>
                  )}
                </button>
                <button
                  className="p-1 text-white/80 hover:text-white"
                  onClick={() => {
                    if (playerRef.current) {
                      playerRef.current.seekTo(Math.min(duration, currentTime + 5), true);
                    }
                  }}
                  aria-label="Forward 5 seconds"
                  tabIndex={0}
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                <span className="flex items-center gap-1 ml-3 text-xs text-white/80">
                  <span className={`inline-block w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></span>
                  {isPlaying ? 'Playing' : 'Paused'}
                </span>
                <span className="px-2 py-1 ml-auto font-mono text-xs text-white rounded shadow bg-black/60">
                  {formatTime(currentTime)} <span className="text-white/50">/</span> {formatTime(duration)}
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/20 rounded mt-2 cursor-pointer" onClick={(e) => {
                if (!playerRef.current) return;
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                const x = (e as React.MouseEvent<HTMLDivElement>).clientX - rect.left;
                const percent = x / rect.width;
                playerRef.current.seekTo(duration * percent, true);
              }}>
                <div
                  className="h-1.5 bg-purple-500 rounded"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          {/* Mobile controls below video, scrollable for other content */}
          <div className="flex flex-col px-4 py-4 bg-black md:hidden">
            <div className="flex items-center gap-2 mb-4">
              <button
                className="p-1 text-white/80 hover:text-white"
                onClick={() => {
                  if (playerRef.current) {
                    playerRef.current.seekTo(Math.max(0, currentTime - 5), true);
                  }
                }}
                aria-label="Back 5 seconds"
                tabIndex={0}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <button
                className="p-1 text-white/80 hover:text-white"
                onClick={() => {
                  if (!playerRef.current) return;
                  if (isPlaying) playerRef.current.pauseVideo();
                  else playerRef.current.playVideo();
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
                tabIndex={0}
              >
                {isPlaying ? (
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/></svg>
                ) : (
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 4v16l13-8-13-8z" fill="currentColor"/></svg>
                )}
              </button>
              <button
                className="p-1 text-white/80 hover:text-white"
                onClick={() => {
                  if (playerRef.current) {
                    playerRef.current.seekTo(Math.min(duration, currentTime + 5), true);
                  }
                }}
                aria-label="Forward 5 seconds"
                tabIndex={0}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
              <span className="flex items-center gap-1 ml-3 text-xs text-white/80">
                <span className={`inline-block w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></span>
                {isPlaying ? 'Playing' : 'Paused'}
              </span>
              <span className="px-2 py-1 ml-auto font-mono text-xs text-white rounded shadow bg-black/60">
                {formatTime(currentTime)} <span className="text-white/50">/</span> {formatTime(duration)}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/20 rounded mt-2 cursor-pointer" onClick={(e) => {
              if (!playerRef.current) return;
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              const x = (e as React.MouseEvent<HTMLDivElement>).clientX - rect.left;
              const percent = x / rect.width;
              playerRef.current.seekTo(duration * percent, true);
            }}>
              <div
                className="h-1.5 bg-purple-500 rounded"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Other content below for mobile scroll */}
          <div className="flex flex-col px-4 py-4 space-y-4 md:hidden">
            {/* Example: You can map other video contents here */}
            {/* <OtherVideoContents /> */}
            {/* Placeholder for demonstration */}
            <div className="p-4 text-center text-white bg-gray-900 rounded-lg">Other video contents go here. User can scroll and view below the video.</div>
          </div>
        </div>
      </div>
      <style jsx global>{`
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
          .fixed.inset-0.z-50.bg-black\/95.animate-fadeIn.flex.flex-col.h-screen.w-full > div > div.flex.flex-col.w-full.h-full.md\:h-screen.md\:flex-row {
            flex-direction: column !important;
          }
          .relative.w-full.md\:w-2\/3.h-64.md\:h-full.bg-black.aspect-video {
            width: 100vw !important;
            height: 220px !important;
            max-width: 100vw !important;
            max-height: 220px !important;
            border-radius: 0 !important;
          }
          .flex.flex-col.justify-center.w-full.md\:w-1\/3.px-4.py-4.md\:py-0.bg-black {
            width: 100vw !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  ) : null;
};

export default StudentVideoPlayer;
