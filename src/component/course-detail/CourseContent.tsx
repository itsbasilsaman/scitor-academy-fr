/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState } from "react"
import { FaPlus } from "react-icons/fa"

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-[15px] border bg-card text-card-foreground ${className}`}>{children}</div>
}

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[15px] text-sm font-medium transition-transform transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2"
  const variantClasses =
    variant === "outline"
      ? "border border-input hover:bg-accent hover:text-accent-foreground"
      : "bg-primary text-primary-foreground hover:bg-primary/90"

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function CourseContent() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedModules, setExpandedModules] = useState<number[]>([])
  const [reviewInput, setReviewInput] = useState("")
  const [reviewStars, setReviewStars] = useState(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const tabs = ["OVERVIEW", "SYLLABUS", "REVIEWS", "INSTRUCTORS", "FAQ"]

  const tabContent = {
    0: ( // OVERVIEW
      <div className="space-y-6">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Course Overview</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">Your Progress</span>
              <span className="text-xs text-gray-500">75% Complete</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-[15px] mt-1">
              <div className="h-3 bg-purple-500 rounded-[15px]" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Introduction</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Unlock your potential with our immersive Spoken English course! Designed for all backgrounds, this program blends interactive lessons, real-life scenarios, and expert guidance to help you speak English confidently. Join a vibrant community and transform your communication skills for academic, professional, and personal success.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">Who This Course is For</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Anyone eager to improve English fluency, from beginners to intermediate learners</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Students preparing for global opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Professionals seeking career advancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Travelers and social enthusiasts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-gray-900">Course Goals</h3>
              <p className="mb-3 text-sm text-gray-600">By the end of this course, you will:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Communicate confidently in English in any situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Master essential grammar and vocabulary</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Develop natural pronunciation and listening skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Build confidence for interviews, presentations, and networking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-600 bg-transparent border-gray-300 hover:bg-gray-50"
        >
          <FaPlus className="w-4 h-4" />
          Show more
        </Button>
      </div>
    ),
    1: ( // SYLLABUS
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Course Syllabus</h2>
        <div className="space-y-4">
          {[{
            title: "Module 1: Introduction to English",
            details: ["Basic greetings and introductions", "Common phrases for daily use", "Pronunciation fundamentals"]
          }, {
            title: "Module 2: Grammar Basics",
            details: ["Sentence structure", "Tenses and their usage", "Question formation"]
          }, {
            title: "Module 3: Conversation Skills",
            details: ["Everyday conversations", "Phone etiquette", "Professional communication"]
          }].map((mod, idx) => (
            <div key={mod.title} className="p-4 border rounded-[15px]">
              <button
                className="flex items-center justify-between w-full font-semibold text-left text-gray-900 cursor-pointer"
                onClick={() => setExpandedModules(
                  expandedModules.includes(idx)
                    ? expandedModules.filter(i => i !== idx)
                    : [...expandedModules, idx]
                )}
              >
                {mod.title}
                <span>{expandedModules.includes(idx) ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${expandedModules.includes(idx) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {expandedModules.includes(idx) && (
                  <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                    {mod.details.map((d, i) => <li key={i}>• {d}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    2: ( // REVIEWS
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Student Reviews</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-[15px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-8 h-8 text-sm text-white bg-blue-500 rounded-full">
                S
              </div>
              <div>
                <div className="text-sm font-medium">Sarah Johnson</div>
                <div className="text-sm text-yellow-500">★★★★★</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Excellent course! Really helped me improve my spoken English confidence.
            </p>
          </div>
          <div className="p-4 border rounded-[15px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center w-8 h-8 text-sm text-white bg-green-500 rounded-full">
                R
              </div>
              <div>
                <div className="text-sm font-medium">Raj Patel</div>
                <div className="text-sm text-yellow-500">★★★★★</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Great instructor and well-structured lessons. Highly recommended!</p>
          </div>
          <div className="p-4 border rounded-[15px]">
            <h3 className="mb-2 font-semibold text-gray-900">Add Your Review</h3>
            <div className="flex items-center gap-2 mb-2">
              {[1,2,3,4,5].map(star => (
                <span
                  key={star}
                  className={`cursor-pointer text-2xl transition-transform duration-200 ${reviewStars >= star ? 'text-yellow-400 scale-125' : 'text-gray-300 scale-100'} cursor-pointer`}
                  onClick={() => setReviewStars(star)}
                  style={{ display: 'inline-block' }}
                >★</span>
              ))}
            </div>
            <textarea
              className="w-full p-2 border rounded-[15px] text-sm"
              rows={2}
              placeholder="Share your experience..."
              value={reviewInput}
              onChange={e => setReviewInput(e.target.value)}
            />
            <Button className="mt-2">Submit Review</Button>
          </div>
        </div>
      </div>
    ),
    3: ( // INSTRUCTORS
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Meet Your Instructor</h2>
        <div className="p-6 border rounded-[15px]">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-white bg-blue-500 rounded-full">
              MJ
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Mr. Mark Jaikson</h3>
              <p className="mb-2 text-sm text-purple-600">English Language Expert</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Mark is passionate about empowering learners. He uses innovative teaching methods, interactive exercises, and real-world examples to make English fun and accessible. Connect with Mark for personalized guidance and mentorship!
              </p>
              <div className="mt-3 text-sm text-gray-500">
                <div>📚 10+ years teaching experience</div>
                <div>🎓 Masters in English Literature</div>
                <div>⭐ 4.9/5 average rating from 5000+ students</div>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">LinkedIn</a>
                <a href="mailto:mark@academy.com" className="text-purple-600 hover:underline">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    4: ( // FAQ
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[{
            q: "Is this course suitable for complete beginners?",
            a: "Absolutely! The course is designed for learners with little to no English speaking experience."
          }, {
            q: "How long do I have access to the course?",
            a: "You get lifetime access to all course materials and can learn at your own pace."
          }, {
            q: "Will I get a certificate after completion?",
            a: "Yes, you'll receive a certificate of completion to showcase your achievement."
          }, {
            q: "Can I interact with the instructor?",
            a: "Yes, you can ask questions in the course discussion forum and get direct responses from the instructor."
          }].map((item, idx) => (
            <div key={item.q} className="p-4 border rounded-[15px]">
              <button
                className="flex items-center justify-between w-full font-semibold text-left text-gray-900 cursor-pointer"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              >
                {item.q}
                <span>{faqOpen === idx ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${faqOpen === idx ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faqOpen === idx && (
                  <p className="mt-2 text-sm text-gray-600">{item.a}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  }

  return (
    
    <div  className="border-0 bg-white/80 backdrop-blur-sm">
      {/* Navigation Tabs */}
      <div className="">
        <div className="flex overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 my-2 cursor-pointer text-sm font-medium whitespace-nowrap border-1 rounded-[15px] mx-2 transition-all duration-300 transform ${
                index === activeTab
                  ? "border-purple-500 text-purple-600 scale-105 bg-purple-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:scale-105 hover:bg-gray-100"
              }`}
              style={{ minWidth: 120 }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content with smooth animation */}
      <div className="p-6 rounded-[15px]">
        <div
          key={activeTab}
          className="transition-all duration-500 ease-in-out animate-fade-slide"
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </div>
    </div>
  )
}
