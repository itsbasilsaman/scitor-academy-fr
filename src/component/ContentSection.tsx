"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLanguage } from "../context/LanguageContext";

export default function ContentSection() {
  const { language } = useLanguage();
  const content = {
    en: {
      baseText:
        "Scitor Academy combines expert instructors, native-style content, and personalized coaching to make English accessible to everyone.",
      highlightGroups: [
        {
          words: ["Scitor Academy"],
          color: "text-[#1FD5EB]",
          animation: "animate-highlight-cyan",
        },
        {
          words: ["expert instructors"],
          color: "text-[#6E06F6]",
          animation: "animate-highlight-purple",
        },
        {
          words: ["native-style content"],
          color: "text-[#1FD5EB]",
          animation: "animate-highlight-cyan",
        },
        {
          words: ["personalized coaching"],
          color: "text-[#6E06F6]",
          animation: "animate-highlight-purple",
        },
      ],
      tagline: "Built for Learners, Backed by Experts",
      button: "Discover more",
      dir: "ltr",
      align: "text-left",
    },
    ar: {
      baseText:
        "تجمع أكاديمية سيتور بين مدربين خبراء، ومحتوى بأسلوب أصلي، وتدريب شخصي لجعل الإنجليزية متاحة للجميع.",
      highlightGroups: [
        {
          words: ["أكاديمية سيتور"],
          color: "text-[#1FD5EB]",
          animation: "animate-highlight-cyan",
        },
        {
          words: ["مدربين خبراء"],
          color: "text-[#6E06F6]",
          animation: "animate-highlight-purple",
        },
        {
          words: ["محتوى بأسلوب أصلي"],
          color: "text-[#1FD5EB]",
          animation: "animate-highlight-cyan",
        },
        {
          words: ["تدريب شخصي"],
          color: "text-[#6E06F6]",
          animation: "animate-highlight-purple",
        },
      ],
      tagline: "مصمم للمتعلمين، مدعوم بالخبراء",
      button: "اكتشف المزيد",
      dir: "rtl",
      align: "text-right",
    },
  };
  const { baseText, highlightGroups, tagline, button, dir, align } = content[language];
  const [activeGroup, setActiveGroup] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cycle highlight group
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActiveGroup((prev) => (prev + 1) % highlightGroups.length);
      }, 500);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused]);

  // Split text into words/groups
  function renderAnimatedText() {
    let rendered = baseText;
    highlightGroups.forEach((group, idx) => {
      group.words.forEach((word) => {
        // For Arabic, match word boundaries more loosely
        const regex = language === "ar"
          ? new RegExp(`(${word})`, "g")
          : new RegExp(`\\b(${word})\\b`, "g");
        rendered = rendered.replace(
          regex,
          (match) =>
            `<span class='${
              idx === activeGroup
                ? `${group.color} ${group.animation} cursor-pointer`
                : "text-gray-900 transition-all"
            }' data-group='${idx}'>${match}</span>`
        );
      });
    });
    return rendered;
  }

  // Pause/resume on click
  function handleClick(e: React.MouseEvent<HTMLHeadingElement>) {
    const target = e.target as HTMLElement;
    if (target.dataset.group) {
      setPaused((prev) => !prev);
    }
  }

  // Add hover effect
  function handleMouseOver(e: React.MouseEvent<HTMLHeadingElement>) {
    const target = e.target as HTMLElement;
    if (target.dataset.group) {
      target.classList.add("scale-105");
    }
  }
  function handleMouseOut(e: React.MouseEvent<HTMLHeadingElement>) {
    const target = e.target as HTMLElement;
    if (target.dataset.group) {
      target.classList.remove("scale-105");
    }
  }

  return (
    <section className="relative h-auto py-4 overflow-x-hidden lg:h-screen" dir={dir}>
      {/* Background logo image - responsive positioning */}
      <div className="absolute -translate-y-1/2 left-4 sm:left-8 md:left-12 top-1/2 -translate-x-1/4 sm:-translate-x-1/6 md:-translate-x-1/8 lg:-translate-x-1/10">
        <div className="relative">
         
           <Image
            src="/scitor-bg-logo.png"
            alt="Scitor Academy Background Logo"
            width={320}
            height={320}
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[30rem] xl:h-[30rem] object-contain opacity-60"
          />
        </div>
      </div>

      {/* Main content - responsive layout */}
      <div className="relative z-10 flex flex-col justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 sm:py-12 md:py-16 lg:py-20">
        <div className={`max-w-4xl mx-auto lg:ml-32 xl:ml-48 lg:mr-0 lg:max-w-3xl ${align}`}>
          {/* Main heading - animated highlight groups */}
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-regular leading-tight mb-6 sm:mb-8 md:mb-12 lg:mb-16 lg:max-w-2xl ${align}`}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            dangerouslySetInnerHTML={{ __html: renderAnimatedText() }}
          />

          {/* Bottom section with tagline and button - responsive spacing */}
          <div className={`flex flex-col gap-4 mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:mt-auto lg:max-w-2xl ${align}`}>
            <p className={`text-gray-900 text-sm sm:text-base md:text-[17px] font-regular ${align}`}>{tagline}</p>

            <button
              className="self-center px-3 py-2 text-sm font-medium transition-colors bg-transparent border border-gray-500 rounded-md group hover:border-gray-400 hover:bg-gray-50 sm:px-4 sm:py-3 sm:text-base sm:self-auto"
            >
              {button}
              <GoArrowUpRight className={`inline w-4 h-4 ${language === "ar" ? "mr-2 sm:mr-4" : "ml-2 sm:ml-4"} transition-transform h-6 w-6 group-hover:translate-x-1`} />
            </button>
          </div>
        </div>
      </div>

      {/* Additional decorative elements for larger screens */}
      <div className="absolute hidden w-16 h-16 rounded-full lg:block right-10 top-20 bg-cyan-200/30 blur-sm"></div>
      <div className="absolute hidden w-12 h-12 rounded-full lg:block right-32 bottom-32 bg-purple-200/40 blur-sm"></div>
    </section>
  )
}
