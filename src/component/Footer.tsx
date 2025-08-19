import Link from "next/link"
import Image from "next/image"
import {   FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 py-12 text-gray-300 bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/footer-logo.png"
            width={160}
            height={160}
            alt="Scitor Academy Logo"
            className="mb-4 w-[200px]"
          />
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} className="text-gray-400" />
              <span>{"+91 98765 43210"}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={20} className="text-gray-400" />
              <span>support@scitoracademy.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt size={20} className="text-gray-400" />
              <address className="not-italic">
                SCITOR ACADEMY,
                <br />
                {"2nd Floor, Knowledge Hub Building,"}
                <br />
                Kochi, Kerala, India - 682001
              </address>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Academy </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Careers
                </Link>
              </li>
            </ul>
          </div> 

          {/* Courses & Programs Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Courses & Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Spoken English
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Business Communication
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Resume & Interview Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Contact Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-50">Help & Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-50">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-gray-800 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">{"© BrandBlk. All Rights Reserved 2025"}</p>
          <div className="flex space-x-6">
            <Link href="#" aria-label="LinkedIn" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaYoutube size={24} />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-gray-400 transition-colors hover:text-gray-50">
              <FaFacebook size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
