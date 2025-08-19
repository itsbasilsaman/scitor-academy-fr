/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState } from "react"
import { FaPlus } from "react-icons/fa"

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
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
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2"
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
  const tabs = ["OVERVIEW", "SYLLABUS", "REVIEWS", "INSTRUCTORS", "FAQ"]

  const tabContent = {
    0: ( // OVERVIEW
      <div className="space-y-6">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-900">Course Overview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Introduction</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                This beginner-level Spoken English course is designed for learners who want to start speaking English
                confidently in everyday situations. Whether you're a student, professional, or someone looking to
                improve your communication skills, this course provides a solid foundation in English speaking, grammar,
                vocabulary, and pronunciation.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900">Who This Course is For</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Beginners who struggle with English communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Students preparing for higher studies or interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Professionals who want to improve everyday spoken fluency</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Anyone who feels nervous or underconfident speaking English</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-gray-900">Course Goals</h3>
              <p className="mb-3 text-sm text-gray-600">By the end of this course, you will:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Understand and construct basic English sentences</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Gain confidence in daily conversations (shopping, travel, phone calls)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Learn commonly used words and phrases</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Speak using correct pronunciation and tone</span>
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
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">Module 1: Introduction to English</h3>
            <ul className="ml-4 space-y-1 text-sm text-gray-600">
              <li>• Basic greetings and introductions</li>
              <li>• Common phrases for daily use</li>
              <li>• Pronunciation fundamentals</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">Module 2: Grammar Basics</h3>
            <ul className="ml-4 space-y-1 text-sm text-gray-600">
              <li>• Sentence structure</li>
              <li>• Tenses and their usage</li>
              <li>• Question formation</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">Module 3: Conversation Skills</h3>
            <ul className="ml-4 space-y-1 text-sm text-gray-600">
              <li>• Everyday conversations</li>
              <li>• Phone etiquette</li>
              <li>• Professional communication</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    2: ( // REVIEWS
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Student Reviews</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
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
          <div className="p-4 border rounded-lg">
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
        </div>
      </div>
    ),
    3: ( // INSTRUCTORS
      <div className="space-y-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Meet Your Instructor</h2>
        <div className="p-6 border rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-white bg-blue-500 rounded-full">
              MJ
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Mr. Mark Jaikson</h3>
              <p className="mb-2 text-sm text-purple-600">English Language Expert</p>
              <p className="text-sm leading-relaxed text-gray-600">
                With over 10 years of experience in teaching English, Mark specializes in helping beginners build
                confidence in spoken English. He has helped thousands of students improve their communication skills
                through his engaging and practical teaching methods.
              </p>
              <div className="mt-3 text-sm text-gray-500">
                <div>📚 10+ years teaching experience</div>
                <div>🎓 Masters in English Literature</div>
                <div>⭐ 4.9/5 average rating from 5000+ students</div>
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
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">Is this course suitable for complete beginners?</h3>
            <p className="text-sm text-gray-600">
              Yes, this course is specifically designed for beginners with little to no English speaking experience.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">How long do I have access to the course?</h3>
            <p className="text-sm text-gray-600">
              You get lifetime access to all course materials and can learn at your own pace.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">Will I get a certificate after completion?</h3>
            <p className="text-sm text-gray-600">
              Yes, you'll receive a certificate of completion that you can add to your resume or LinkedIn profile.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="mb-2 font-semibold text-gray-900">Can I interact with the instructor?</h3>
            <p className="text-sm text-gray-600">
              Yes, you can ask questions in the course discussion forum and get responses from the instructor.
            </p>
          </div>
        </div>
      </div>
    ),
  }

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                index === activeTab
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content with smooth animation */}
      <div className="p-6">
        <div key={activeTab} className="duration-300 animate-in fade-in-0 slide-in-from-right-4">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </div>
    </Card>
  )
}
