import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO / ABOVE THE FOLD */}
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Get in Touch with Our Team
            </h1>
            <p className="text-lg md:text-xl text-[#AAB2BD] mb-10 leading-relaxed">
              Whether you have questions about our services, need assistance
              with your accountancy requirements, or would like to arrange a
              consultation, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact-info"
                className="bg-[#C9A14A] text-[#0B1C2D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B08B3E] transition-colors duration-300 text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="#contact-info"
                className="border-2 border-[#C9A14A] text-[#C9A14A] px-8 py-4 rounded-lg font-semibold text-lg bg-transparent hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-all duration-300 text-center"
              >
                Speak to an Accountant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT INFORMATION */}
      <section id="contact-info" className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#C9A14A] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#C9A14A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@sterlingcrestaccountants.co.uk"
                  className="text-[#C9A14A] hover:text-[#B08B3E] transition-colors"
                >
                  info@sterlingcrestaccountants.co.uk
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#C9A14A] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#C9A14A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Phone
                </h3>
                <p className="text-[#AAB2BD]">[UK number]</p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#C9A14A] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#C9A14A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Location
                </h3>
                <p className="text-[#AAB2BD]">United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS HOURS */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Business Hours
            </h2>

            <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#C9A14A] border-opacity-10">
                  <span className="text-[#F5F7FA] font-medium">
                    Monday - Friday
                  </span>
                  <span className="text-[#AAB2BD]">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#C9A14A] border-opacity-10">
                  <span className="text-[#F5F7FA] font-medium">Saturday</span>
                  <span className="text-[#AAB2BD]">Closed</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#F5F7FA] font-medium">Sunday</span>
                  <span className="text-[#AAB2BD]">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section
        className="relative w-full py-20"
        style={{ background: "linear-gradient(to bottom, #081524, #050E18)" }}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-6">
            Ready to Discuss Your Accountancy Needs?
          </h2>
          <p className="text-lg text-[#AAB2BD] mb-10 leading-relaxed">
            Contact us today to arrange a consultation and discover how we can
            support your financial requirements.
          </p>
          <Link
            href="#contact-info"
            className="bg-[#C9A14A] text-[#0B1C2D] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#B08B3E] transition-colors duration-300 inline-block"
          >
            Arrange Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
