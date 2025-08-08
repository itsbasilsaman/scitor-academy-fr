import Image from "next/image"

export default function LearningJourney() {
  return (
    <section className="w-full py-8 bg-white sm:py-8 md:py-16 sm:px-2 md:px-6 lg:px-12">
      <div className="container px-2 py-6 sm:px-2 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <h1 className="text-2xl tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl font-regular">
              Start Your Learning Journey Today!
            </h1>
            <ul className="grid gap-3 pl-0 text-base text-gray-700 sm:text-lg md:pl-28">
              <li className="flex items-center gap-2 sm:gap-3">
                ⏹️
                <span>Explore trending courses</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                ⏹️
                <span>Try free demo classes</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                ⏹️
                <span>Learn from industry experts</span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-gray-800 sm:text-lg md:text-xl">
              Join Scitor Academy and unlock your potential with the right skills for tomorrow&apos;s opportunities! 🚀
            </p>
          </div>

          {/* Right Column: Images */}
          <div className="relative flex flex-col items-center w-full md:items-end">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-full md:max-w-sm lg:max-w-md aspect-[3/3] rounded-xl overflow-hidden">
              <Image
                src="https://www.lucidadvertising.com/wp-content/uploads/2022/09/Digital-Marketing-image-scaled.jpeg"
                alt="Digital Marketing Concepts on a screen"
                fill
                style={{ objectFit: "cover" }}
                className=" rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden sm:w-24 sm:h-24 md:w-44 md:h-44 rounded-xl translate-x-1/4 translate-y-1/4">
              <Image
                src="https://kvnpromos.in/in/wp-content/uploads/2021/03/digital-marketing-agency-in-chennai.png"
                alt="Enter key with a graduation cap icon"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 176px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}