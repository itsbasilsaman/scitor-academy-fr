import Image from "next/image"
import { HiArrowUpRight } from "react-icons/hi2"

const instructors = [
  {
    id: 1,
    name: "Ms. Anjali Thomas",
    role: "Spoken English Instructor",
    image: "https://www.filmibeat.com/ph-big/2020/01/mammootty_1579675009200.jpg",
  },
  {
    id: 2,
    name: "Mr. Ramesh Krishnan",
    role: "Digital Marketing Instructor",
    image: "https://www.filmibeat.com/ph-big/2020/01/mammootty_1579675009200.jpg",
  },
  {
    id: 3,
    name: "Ms. Farah Ibrahim",
    role: "Business English & Job Interview Prep",
    image: "https://www.filmibeat.com/ph-big/2020/01/mammootty_1579675009200.jpg",
  },
  {
    id: 4,
    name: "Mr. Jacob Mathew",
    role: "Spoken English Instructor",
    image: "https://www.filmibeat.com/ph-big/2020/01/mammootty_1579675009200.jpg",
  },
]

export default function InstructorTeam() {
  return (
  <section className="px-4 py-12 overflow-x-hidden sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm text-black font-regular">Our team</p>
          <h2 className="text-3xl text-gray-900 font-regular sm:text-4xl lg:text-5xl">Meet Our Expert Instructors</h2>
        </div>
        
        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="cursor-pointer group">
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden transition-shadow duration-300 bg-white shadow-sm rounded-2xl hover:shadow-md">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Arrow Icon */}
                  <div className="absolute flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-black rounded-full right-4 bottom-4 group-hover:bg-gray-800">
                    <HiArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="text-center sm:text-left">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 sm:text-xl">{instructor.name}</h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
