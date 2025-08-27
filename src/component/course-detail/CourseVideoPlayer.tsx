/* eslint-disable @typescript-eslint/no-require-imports */
"use client"

import React, { useState, useRef, useEffect } from "react";
// import VideoPreviews from "./VideoPreviews";
import LockedVideoModal from "../LockedVideoModal";
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

  const playerModalRef = React.useRef<HTMLDivElement>(null);
  const handlePlayerModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (playerModalRef.current && e.target === e.currentTarget) {
      setShowPlayer(false);
      if (onClose) onClose();
    }
  };
  return showPlayer ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fadeIn" onClick={handlePlayerModalClick} ref={playerModalRef}>
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
            <div className="relative w-full h-full mx-auto overflow-hidden bg-black rounded-none aspect-video md:rounded-xl" style={{maxWidth: '100vw', maxHeight: '100vh'}}>
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
                  className="absolute inset-0 object-cover w-full h-full bg-black border-0"
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
                {/* Seek Animation Overlay removed as requested */}
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
      {/* Locked Video Modal (common) */}
      {showLockedModal && (
        <LockedVideoModal
          open={showLockedModal}
          onClose={() => setShowLockedModal(false)}
        />
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
