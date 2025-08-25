"use client"


import { FaStar, FaShare } from "react-icons/fa"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface CourseCardProps {
  id: string
  title: string
  image: string
  rating: number
  reviewCount: number
  description: string
  price: number
  originalPrice: number
  currency: string
  instructor: {
    name: string
    avatar: string
  }
  isLive?: boolean
}

const courseData = [
  {
    id: "1",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 4.0,
    reviewCount: 1234,
    description:
      "Learn the fundamentals of spoken English with interactive lessons and practical exercises. Perfect for beginners looking to improve their communication skills.",
    price: 39999,
    originalPrice: 49999,
    currency: "Rs.",
    instructor: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    isLive: true,
  },
  {
    id: "2",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 5.0,
    reviewCount: 2156,
    description:
      "Master conversational English through real-world scenarios and practical speaking exercises. Build confidence in everyday conversations.",
    price: 39999,
    originalPrice: 59999,
    currency: "Rs.",
    instructor: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    isLive: true,
  },
  {
    id: "3",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 5.0,
    reviewCount: 3421,
    description:
      "Comprehensive English speaking course with personalized feedback and interactive sessions. Suitable for all skill levels.",
    price: 39999,
    originalPrice: 45999,
    currency: "Rs.",
    instructor: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    id: "4",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 4.0,
    reviewCount: 1876,
    description:
      "Interactive English speaking course with focus on pronunciation and fluency. Includes one-on-one practice sessions.",
    price: 39999,
    originalPrice: 52999,
    currency: "Rs.",
    instructor: {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    isLive: true,
  },
  {
    id: "5",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 5.0,
    reviewCount: 2987,
    description:
      "Learn English speaking through immersive techniques and practical applications. Perfect for career advancement.",
    price: 39999,
    originalPrice: 48999,
    currency: "Rs.",
    instructor: {
      name: "David Brown",
      avatar: "/placeholder.svg?height=24&width=24",
    },
    isLive: true,
  },
  {
    id: "6",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 5.0,
    reviewCount: 4123,
    description:
      "Advanced spoken English course with emphasis on business communication and professional speaking skills.",
    price: 39999,
    originalPrice: 55999,
    currency: "Rs.",
    instructor: {
      name: "Lisa Davis",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    id: "7",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 4.0,
    reviewCount: 1654,
    description: "Structured English speaking program with weekly assessments and personalized learning paths.",
    price: 39999,
    originalPrice: 47999,
    currency: "Rs.",
    instructor: {
      name: "Tom Anderson",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    id: "8",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 5.0,
    reviewCount: 3567,
    description: "Comprehensive English communication course covering grammar, vocabulary, and speaking confidence.",
    price: 39999,
    originalPrice: 51999,
    currency: "Rs.",
    instructor: {
      name: "Emma Taylor",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    id: "9",
    title: "Basic Spoken English",
    image: "https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png",
    rating: 5.0,
    reviewCount: 2834,
    description:
      "Interactive English learning experience with live sessions and practical speaking exercises for real-world application.",
    price: 39999,
    originalPrice: 49999,
    currency: "Rs.",
    instructor: {
      name: "Chris Martin",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
]

function CourseCard({
  id,
  title,
  image,
  rating,
  reviewCount,
  description,
  price,
  originalPrice,
  currency,
  instructor,
  isLive = false,
}: CourseCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/course-detail");
  };
  return (
    <div
      className="transition-shadow duration-200 bg-white border border-gray-100 rounded-[30px] cursor-pointer hover:shadow-lg"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
    >
      {/* Course Image */}
      <div className="relative w-full h-[300px] ">
        <Image src={"/badge-icon.png"} alt={""} width={50} height={50} className="absolute z-20 top-1 left-[-42px]" />
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
       
        <button className="absolute p-2 transition-colors rounded-md top-3 right-3 bg-white/80 hover:bg-white">
          <FaShare className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Course Content */}
      <div
        className="p-4 space-y-3 "
        style={{
          background: "linear-gradient(to right, rgba(224, 198, 253, 1) 1%, rgba(143, 221, 255, 0.5) 32%, rgba(95, 236, 253, 0.5) 58%, rgba(131, 145, 161, 0.5) 100%)"
        }}
      >

         <span className="px-5 py-1 text-xs font-medium text-black bg-white rounded-full ">
            Beginner
          </span>
        
        {/* Title */}
        <h3 className="mt-4 text-lg text-gray-900 lg:text-[22px] lfont-medium line-clamp-2">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 ">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`h-3 w-3 ${i < Math.floor(rating) ? "text-[#6606E3]" : "text-gray-300"}`} />
              ))}
            </div>
          </div>
          <span className="text-xs text-gray-500">({reviewCount.toLocaleString()})</span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">{description}</p>
        
        <div className="w-full h-1 border-b border-gray-400 "></div>

        {/* Price and Instructor */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {currency} {price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {currency} {originalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={instructor.avatar || "/placeholder.svg"}
              alt={instructor.name}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CourseCards() {
  return (
    <div className="container px-4 py-8 mx-auto sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 gap-6 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {courseData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}
