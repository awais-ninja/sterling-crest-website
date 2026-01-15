import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A14A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider px-4 py-2 border border-[#C9A14A] border-opacity-30 rounded-full">
                Trusted UK Accountants
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F7FA] leading-tight">
              Clarity, Compliance, and{" "}
              <span className="relative inline-block">
                <span className="text-[#C9A14A]">Growth</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#C9A14A] bg-opacity-20 -z-10"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#AAB2BD] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Professional accountancy and tax services delivered with
              precision, clarity, and integrity across the UK.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/contact"
                className="group relative bg-[#C9A14A] text-[#0B1C2D] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#B08B3E] transition-all duration-300 text-center shadow-lg shadow-[#C9A14A] shadow-opacity-20 hover:shadow-xl hover:shadow-[#C9A14A] hover:shadow-opacity-30 transform hover:-translate-y-1"
              >
                Book a Consultation
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#C9A14A] text-[#C9A14A] px-10 py-4 rounded-lg font-semibold text-lg bg-transparent hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-all duration-300 text-center"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#C9A14A]">20+</div>
                <div className="text-sm text-[#AAB2BD] mt-1">Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#C9A14A]">15+</div>
                <div className="text-sm text-[#AAB2BD] mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#C9A14A]">100%</div>
                <div className="text-sm text-[#AAB2BD] mt-1">Compliance</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] to-transparent z-10"></div>
              <Image
                src="/homepage/home-page-hero-section.webp"
                alt="Professional accounting services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A14A] bg-opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C9A14A] bg-opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
