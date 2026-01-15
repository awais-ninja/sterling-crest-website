"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-[#0B1C2D] border-b border-[#C9A14A] transition-all ${
          isScrolled ? "shadow-lg shadow-[#C9A14A] shadow-opacity-10" : ""
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Sterling Crest Accountants LTD"
                width={250}
                height={85}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Center/Right */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors font-medium"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors flex items-center font-medium">
                  Services
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-96 z-50 pt-2">
                    <div className="bg-[#081524] border border-[#C9A14A] border-opacity-30 shadow-xl rounded-lg overflow-hidden">
                      <div className="grid grid-cols-2 divide-x divide-[#C9A14A] divide-opacity-30">
                        {/* Column 1 */}
                        <div className="p-4">
                          <Link
                            href="/services"
                            className="block text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 text-sm"
                            onClick={() => setServicesOpen(false)}
                          >
                            Accounting & Bookkeeping
                          </Link>
                          <Link
                            href="/services"
                            className="block text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 text-sm"
                            onClick={() => setServicesOpen(false)}
                          >
                            Tax Planning & Compliance
                          </Link>
                          <Link
                            href="/services"
                            className="block text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 text-sm"
                            onClick={() => setServicesOpen(false)}
                          >
                            Self-Assessment
                          </Link>
                        </div>
                        {/* Column 2 */}
                        <div className="p-4">
                          <Link
                            href="/services"
                            className="block text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 text-sm"
                            onClick={() => setServicesOpen(false)}
                          >
                            Payroll Services
                          </Link>
                          <Link
                            href="/services"
                            className="block text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 text-sm"
                            onClick={() => setServicesOpen(false)}
                          >
                            Business Advisory
                          </Link>
                        </div>
                      </div>
                      <div className="border-t border-[#C9A14A] border-opacity-30 p-4">
                        <Link
                          href="/services"
                          className="block text-center text-[#C9A14A] font-semibold hover:text-[#B08B3E] transition-colors text-sm"
                          onClick={() => setServicesOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button - Right */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#C9A14A] text-[#0B1C2D] px-6 py-2.5 rounded-md font-semibold hover:bg-[#B08B3E] transition-colors text-sm"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#C9A14A] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-[#0B1C2D] z-50 shadow-2xl transform transition-transform lg:hidden overflow-y-auto border-l border-[#C9A14A] border-opacity-30">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <Image
                  src="/logo.svg"
                  alt="Sterling Crest Accountants LTD"
                  width={160}
                  height={50}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#C9A14A]"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-8 border-t border-[#C9A14A] border-opacity-30">
                <Link
                  href="/contact"
                  className="block w-full bg-[#C9A14A] text-[#0B1C2D] px-6 py-4 rounded-md font-semibold hover:bg-[#B08B3E] transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
