import { FaGraduationCap, FaQuoteLeft } from "react-icons/fa"
import Image from "next/image"

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "Scitor Academy helped me speak confidently in interviews and meetings. The demo classes were super helpful.",
      name: "Aisha Khan",
      location: "UAE",
      rating: 5,
    },
    {
      text: "Their spoken English course is very structured. I improved a lot in just 2 months. Highly recommended!",
      name: "Rahul Menon",
      location: "India",
      rating: 5,
    },
    {
      text: "I loved the bilingual (English & Arabic) support. It made learning smooth and comfortable.",
      name: "Sara Al-Mutairi",
      location: "Saudi Arabia",
      rating: 5,
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-600"}`}>
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="overflow-hidden relative mx-8 my-8 text-white bg-[#1f1f1f] rounded-[25px] md:mx-12 lg:mx-16 xl:mx-20 md:my-12 lg:my-16 xl:my-20">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full blur-3xl transform -translate-y-1/2"></div>
        </div>
        <Image src="/testimonial-side-image.png" alt="Scitor Academy" width={500} height={100}  className=" h-[500px] object-contain absolute right-0  "/>

        <div className="container relative z-10 px-6 py-16 mx-auto md:px-8 lg:px-12 xl:px-24 md:py-20 lg:py-24 xl:py-28">
          <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
            {/* Left side - Main content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <p className="text-sm tracking-wider text-gray-400 uppercase lg:text-base">Testimonials</p>
                <h1 className="text-3xl leading-tight font-regular md:text-4xl">
                  What Our Students Say
                </h1>
              </div>

              <div className="space-y-6 lg:space-y-8">
             
                <p className="max-w-[450px] text-base leading-relaxed text-gray-300 md:text-lg  ">
                  Scitor Academy completely transformed my confidence in speaking English. The demo classes were
                  engaging and gave me a real taste of the learning experience. What I loved most was how practical and
                  career-focused the lessons were. The instructors are incredibly supportive and always ready to guide
                  you. I've already seen an improvement in my communication skills at work. I highly recommend Scitor to
                  anyone looking to grow professionally.
                </p>
              </div>

              {/* Statistics */}
              <div>
              <FaGraduationCap className="mb-4 w-12 h-12 text-gray-500" />
              <div className="flex flex-col justify-center items-center py-10 w-full rounded-lg">
               
                <div className="text-5xl font-extrabold tracking-tight select-none md:text-6xl lg:text-7xl text-outline">12,000+</div>
                <p className="mt-2 text-lg font-light tracking-wide text-gray-500 md:text-xl">Students Empowered Worldwide</p>
              </div>
              </div>
            </div>

            {/* Right side - Testimonial cards */}
            <div className="space-y-6 lg:space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-[25px] border border-gray-700 backdrop-blur-sm bg-[#282828] relative py-2 pt-8">
                  <div className="p-4 lg:p-6">
                     <Image src="/quote.png" alt="Scitor Academy" width={50} height={50}  className=" w-[30px]  object-contain absolute left-3 top-6 "/>
                    <p className="mb-4 text-sm leading-relaxed text-white lg:text-base lg:mb-6 font-regular">
                      {testimonial.text}
                    </p>
                    <div className="space-y-2">
                      <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                      <p className="text-sm font-medium text-white lg:text-base">
                        {testimonial.name} | {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
    </div>
  )
}
