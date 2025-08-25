/* eslint-disable react/no-unescaped-entities */
import { FaGraduationCap } from "react-icons/fa"
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
      <span key={i} className={`text-base ${i < rating ? "text-yellow-400" : "text-gray-500"}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="px-2 py-8 bg-white sm:px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="relative rounded-3xl bg-[#1f1f1f] overflow-hidden shadow-xl">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10">
          <div className="absolute right-0 -translate-y-1/2 rounded-full top-1/2 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gray-700 to-gray-800 blur-3xl"></div>
        </div>
        {/* Side Image */}
        {/* <Image
          src="/testimonial-side-image.png"
          alt="Scitor Academy"
          width={400}
          height={400}
          className="hidden lg:block absolute right-0 bottom-0 h-[350px] xl:h-[450px] object-contain z-0"
        /> */}
        <div className="relative z-10 px-4 py-10 sm:px-8 md:px-12 lg:px-20 xl:px-28 md:py-16">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* Left */}
            <div className="flex-1 w-full space-y-8">
              <div className="space-y-2">
                <p className="text-xs tracking-wider text-gray-400 uppercase sm:text-sm">Testimonials</p>
                <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                  What Our Students Say
                </h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Scitor Academy completely transformed my confidence in speaking English. The demo classes were engaging and gave me a real taste of the learning experience. What I loved most was how practical and career-focused the lessons were. The instructors are incredibly supportive and always ready to guide you. I've already seen an improvement in my communication skills at work. I highly recommend Scitor to anyone looking to grow professionally.
              </p>
              {/* Stats */}
              <div className="flex flex-col items-center gap-2 mt-6 sm:items-start">
              <div className="flex items-center gap-4">
                  <FaGraduationCap className="w-12 h-12 mb-2 text-gray-500" />
                  <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">12,000+</div>
              </div>
                <p className="text-base font-light text-gray-400 sm:text-lg">Students Empowered Worldwide</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col flex-1 w-full gap-6">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-gray-700 bg-[#282828]/90 backdrop-blur-md px-5 py-6 sm:px-7 sm:py-8 shadow-md"
                >
                  <Image
                    src="/quote.png"
                    alt="Quote"
                    width={32}
                    height={32}
                    className="absolute object-contain w-5 h-5 left-4 top-3 opacity-80"
                  />
                  <p className="mb-4 text-sm font-normal leading-relaxed text-white sm:text-base">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                    <span className="ml-2 text-xs text-gray-400 sm:text-sm">
                      {testimonial.name} | {testimonial.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
    </section>
  )
}