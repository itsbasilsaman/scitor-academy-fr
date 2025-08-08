import Image from "next/image"

export default function CallToAction() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4">
      <div className="relative mx-auto max-w-[87rem] overflow-hidden rounded-2xl p-8 md:p-12 lg:p-16 text-center flex flex-col items-center justify-center min-h-[250px] md:min-h-[300px]">
        {/* Background Image */}
        <Image
          src="/calltoation-rectangle.png"
          alt=""
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 0, // Ensure it's behind text
          }}
          className="rounded-2xl" // Apply border-radius to the image itself
          quality={100} // High quality for background
          priority // Load immediately as it's a hero-like section
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular text-black tracking-tight max-w-3xl mx-auto">
            Join the community that&apos;s shaping the future.
          </h2>
          <p className="mt-4 text-base   text-black/90 max-w-2xl mx-auto">
            Book a free demo today or explore our trending courses.
          </p>
          <button className="mt-8 bg-black text-white hover:bg-gray-800 px-10 py-3 text-lg rounded-lg shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}
