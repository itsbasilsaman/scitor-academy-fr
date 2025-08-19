/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react"
import { FaStar, FaUsers, FaCalendar, FaGlobe, FaClock, FaBook, FaAward, FaMobile } from "react-icons/fa"

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2"
  let variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90"

  if (variant === "outline") {
    variantClasses = "border border-input hover:bg-accent hover:text-accent-foreground"
  } else if (variant === "secondary") {
    variantClasses = "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

export default function CourseDetails() {
  return (
    <div className="space-y-6">
      {/* Pricing Card */}
      <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">₹39,999</span>
            <span className="text-lg text-gray-500 line-through">₹49,999</span>
          </div>

          <Button className="w-full py-3 font-medium text-white bg-black rounded-lg hover:bg-gray-800">
            Add to Cart
          </Button>

          <Button
            variant="outline"
            className="w-full py-3 font-medium text-purple-700 bg-transparent border-purple-200 rounded-lg hover:bg-purple-50"
          >
            Enroll Now
          </Button>
        </div>
      </Card>

      {/* Course Info */}
      <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaStar className="w-4 h-4 text-purple-500" />
            <span>Rating 4.8/5</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaUsers className="w-4 h-4 text-purple-500" />
            <span>Enrolled Students: 1.6K</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaCalendar className="w-4 h-4 text-purple-500" />
            <span>Last Updated: Aug 02, 2023</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaGlobe className="w-4 h-4 text-purple-500" />
            <span>Language: English</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaClock className="w-4 h-4 text-purple-500" />
            <span>Duration: 2 hrs 30 mins</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaBook className="w-4 h-4 text-purple-500" />
            <span>Subtitles: English, Arabic</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaAward className="w-4 h-4 text-purple-500" />
            <span>Level: Beginner</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaAward className="w-4 h-4 text-purple-500" />
            <span>Certificate: Upon Completion</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaMobile className="w-4 h-4 text-purple-500" />
            <span>Access: Lifetime Access Anytime</span>
          </div>
        </div>
      </Card>

      {/* Master Skills Card */}
      <Card className="relative overflow-hidden text-white border-0 shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Master skills"
            className="object-cover w-full h-full opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative z-10 p-6 space-y-4">
          <h3 className="text-2xl font-bold">
            Master Skills
            <br />
            Today
          </h3>

          <Button
            variant="secondary"
            className="text-white border bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
          >
            Start Chat
          </Button>
        </div>
      </Card>
    </div>
  )
}
