import Image from "next/image"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="w-full px-4 py-16 md:py-24 lg:py-32">
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
          <h2 className="max-w-3xl mx-auto text-3xl tracking-tight text-black md:text-4xl lg:text-5xl font-regular">
            Join the community that&apos;s shaping the future.
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-black/90">
            Book a free demo today or explore our trending courses.
          </p>
       <Link href={'/all-courses'}>
            <button className="px-10 py-3 mt-8 text-lg text-white bg-black rounded-lg shadow-lg hover:bg-gray-800">
              Explore Now
            </button>
       </Link   >
        </div>
      </div>
    </section>
  )
}
