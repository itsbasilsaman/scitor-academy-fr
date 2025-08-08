import { FaArrowRight } from "react-icons/fa"

export default function HeroSection() {
  return (
    <div className="p-4 w-full h-auto bg-gray-50 md:p-8 lg:p-16">
      <div
        className="overflow-hidden relative  p-8 rounded-3xl md:p-12 lg:p-16 xl:p-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(172, 142, 222, 0), rgba(172, 142, 222, 1)), url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="mb-6 text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Ready to Speak Fluently or Build Your Career?
          </h1>

          <p className="mb-8 max-w-6xl text-lg text-white text-regular md:text-xl">
            Join hundreds of learners transforming their communication skills and careers through{" "}
            <span className="font-semibold">Scitor Academy</span>. We're here to guide you every step of the way.
          </p>

          <button
            type="button"
            className="flex items-center px-6 py-3 text-lg font-medium text-white rounded-lg border border-white backdrop-blur-sm transition-all group bg-white/10 hover:bg-white hover:text-purple-600 md:text-lg"
          >
            Get in touch
            <FaArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
