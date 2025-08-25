/* eslint-disable @typescript-eslint/no-require-imports */
"use client"

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import Image from "next/image";
import { FaLock } from "react-icons/fa";

export interface CourseVideo {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  locked: boolean;
  youtubeId: string | null;
}

interface CourseVideoPlayerProps {
  videos: CourseVideo[];
  initialVideoId?: number;
  onClose?: () => void;
  showPlayer: boolean;
  setShowPlayer: (show: boolean) => void;
}

interface ProgressMap {
  [videoId: number]: number;
}

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const CourseVideoPlayer: React.FC<CourseVideoPlayerProps> = ({
  videos,
  initialVideoId,
  onClose,
  showPlayer,
  setShowPlayer,
}) => {
  const [currentVideo, setCurrentVideo] = useState<CourseVideo>(
    initialVideoId ? videos.find((v) => v.id === initialVideoId) || videos[0] : videos[0]
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seekAnim, setSeekAnim] = useState<null | "+5" | "-5">(null);
  const [progressMap, setProgressMap] = useState<ProgressMap>({});
  const [playlistOrder, setPlaylistOrder] = useState<number[]>(videos.map(v => v.id));
  const playerRef = useRef<YouTubePlayer | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [resumeSeek, setResumeSeek] = useState<number | null>(null);
  const [showLockedModal, setShowLockedModal] = useState(false);
  const router = typeof window !== 'undefined' ? require('next/navigation').useRouter() : null;

  // Save progress on time update
  useEffect(() => {
    if (!currentVideo) return;
    setProgressMap((prev) => ({ ...prev, [currentVideo.id]: currentTime }));
  }, [currentTime, currentVideo]);

  // When switching video, set resumeSeek (but don't seek immediately)
  useEffect(() => {
    if (progressMap[currentVideo.id]) {
      setResumeSeek(progressMap[currentVideo.id]);
    } else {
      setResumeSeek(null);
    }
  }, [currentVideo]);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    setDuration(event.target.getDuration());
    setIsPlaying(true);
    // Only seek here, not in click handler
    if (resumeSeek && resumeSeek > 0) {
      event.target.seekTo(resumeSeek, true);
    }
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

  // Playlist order: current video at top, then previous videos in order of last play
  const playlist = playlistOrder.map(id => videos.find(v => v.id === id)!).filter(Boolean);

  return showPlayer ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fadeIn">
      <div className="relative flex flex-col w-full h-full max-w-full max-h-full md:flex-row">
        {/* Left: Video Player */}
        <div className="flex flex-col flex-1 min-w-0 bg-black">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-black/90 border-white/10">
            <h3 className="text-lg font-bold text-white truncate">{currentVideo.title}</h3>
            <button
              className="ml-4 text-3xl text-white hover:text-purple-400"
              onClick={() => {
                setShowPlayer(false);
                if (onClose) onClose();
              }}
              aria-label="Close video"
            >
              ×
            </button>
          </div>
          {/* Video + Controls */}
          <div className="flex flex-col items-center justify-center flex-1 w-full p-0 bg-black md:p-6">
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-black rounded-none aspect-video md:rounded-xl">
              {currentVideo.youtubeId && (
                <YouTube
                  videoId={currentVideo.youtubeId}
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
                  className="w-full h-full bg-black border-0"
                  onReady={onPlayerReady}
                  onStateChange={onPlayerStateChange}
                />
              )}
              {/* Custom Controls UI */}
              <div className="absolute bottom-0 left-0 flex flex-col w-full px-4 pt-2 pb-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <button
                    className="p-1 text-white/80 hover:text-white"
                    onClick={() => {
                      if (playerRef.current) {
                        playerRef.current.seekTo(Math.max(0, currentTime - 5), true);
                        setSeekAnim("-5");
                        setTimeout(() => setSeekAnim(null), 500);
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
                        setSeekAnim("+5");
                        setTimeout(() => setSeekAnim(null), 500);
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
                {/* Seek Animation Overlay */}
                {seekAnim && (
                  <div className={`absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold px-10 py-4 rounded-2xl pointer-events-none select-none shadow-2xl
                    ${seekAnim === "+5" ? "bg-green-500/90 text-white animate-seek-fwd2" : "bg-blue-500/90 text-white animate-seek-back2"}`}
                  >
                    {seekAnim === "+5" ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        +5s
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        -5s
                        <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full max-w-3xl px-4 mt-4 text-center">
              <p className="text-base text-white/80 sm:text-lg">Enjoy a sneak peek of the course content!</p>
            </div>
          </div>
        </div>
        {/* Right: Playlist with progress */}
        <div className="flex flex-col flex-shrink-0 w-full max-h-full overflow-y-auto border-l md:w-96 bg-black/90 border-white/10">
          <h4 className="px-4 pt-4 pb-2 text-base font-semibold text-white border-b border-white/10">Other Course Videos</h4>
          <div className="grid gap-4 px-4 py-4 md:grid-cols-1">
            {playlist.slice(1).map((video) => (
              <div key={video.id} className="flex flex-col items-center gap-2 p-3 transition-all cursor-pointer rounded-xl bg-white/5 hover:bg-white/10"
                onClick={() => {
                  if (video.locked) {
                    setShowLockedModal(true);
                  } else if (video.youtubeId) {
                    setCurrentVideo(video);
                    setIsPlaying(true);
                    setPlaylistOrder((prev) => {
                      const filtered = prev.filter(id => id !== video.id);
                      return [video.id, ...filtered];
                    });
                    playerRef.current = null;
                    if (intervalRef.current) {
                      clearInterval(intervalRef.current);
                      intervalRef.current = null;
                    }
                  }
                }}
              >
      {/* Locked Video Modal */}
      {showLockedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-2 bg-black/80 md:px-0">
          <div className="relative flex flex-col w-full max-w-md gap-5 p-4 mx-auto mt-10 mb-10 bg-white border border-gray-200 shadow-2xl md:max-w-2xl rounded-2xl md:p-10 animate-fadeIn md:mt-0 md:mb-0">
            <button
              className="absolute text-2xl text-gray-400 transition top-3 right-3 md:top-5 md:right-5 md:text-3xl hover:text-gray-700"
              onClick={() => setShowLockedModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="mb-1 text-lg font-bold leading-tight text-center text-gray-900 md:text-2xl md:mb-2">This course is part of a 15-course Professional Certificate</h2>
            <p className="mb-1 text-sm text-center text-gray-700 md:text-base md:mb-2">Introduction to Software Engineering is part of the IBM Full Stack Software Developer Professional Certificate.</p>
            <ul className="px-2 mb-2 space-y-1 text-xs text-gray-700 list-disc list-inside md:text-base md:space-y-2 md:px-6">
              <li>Unlimited access to all 15 courses</li>
              <li>EMI payment options</li>
              <li>Certificate upon completion</li>
              <li>14 day refund period</li>
            </ul>
            <div className="flex flex-col items-center justify-between gap-3 p-3 bg-gray-100 md:flex-row md:gap-6 rounded-xl md:p-5">
              <div className="flex flex-col w-full gap-1 md:w-auto">
                <span className="text-xs font-semibold md:text-base">How much time do you need to finish?</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">1 month</span>
                  <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">3 months</span>
                  <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">6 months</span>
                  <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">FREE UPGRADE</span>
                </div>
                <span className="mt-2 text-xs text-gray-600">Estimated Study Time: 17 hours/week</span>
              </div>
              <div className="flex flex-col items-center w-full mt-2 md:items-end md:w-auto md:mt-0">
                <span className="text-lg font-bold text-gray-900 md:text-2xl">₹1,166/month</span>
                <span className="text-xs text-gray-600 md:text-sm">(Total ₹3,499)</span>
              </div>
            </div>
            <button
              className="w-full py-3 mt-2 text-base font-medium text-white transition bg-blue-600 rounded-lg shadow hover:bg-blue-700 active:scale-95 md:text-lg"
              onClick={() => {
                setShowLockedModal(false);
                if (router) router.push('/payment-section');
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
                <div className="relative w-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={220}
                    height={124}
                    className="object-cover w-full h-32 rounded-lg shadow md:h-36"
                  />
                  {/* Progress bar for watched videos */}
                  {progressMap[video.id] && (
                    <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-lg bg-gray-700/60">
                      <div
                        className="h-2 transition-all bg-green-500 rounded-b-lg"
                        style={{ width: `${Math.min(100, (progressMap[video.id] / ((video.youtubeId && playerRef.current && video.id === currentVideo.id) ? duration : 480)) * 100)}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="w-full mt-1 text-center">
                  <div className="text-sm font-semibold text-white truncate">{video.title}</div>
                  <div className="text-xs text-white/60">{video.duration}</div>
                </div>
                {video.locked && <FaLock className="mt-1 text-base text-red-500" />}
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </div>
  ) : null;
};

export default CourseVideoPlayer;
