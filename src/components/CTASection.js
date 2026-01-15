import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #081524, #050E18)" }}
    >
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

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <div className="bg-gradient-to-br from-[#0B1C2D] to-[#081524] p-12 md:p-16 rounded-3xl border border-[#C9A14A] border-opacity-30 shadow-2xl">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
            Speak with a{" "}
            <span className="text-[#C9A14A]">Professional Accountant</span>
          </h2>
          <p className="text-xl text-[#AAB2BD] mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you require ongoing accountancy support or help with a
            specific financial matter, Sterling Crest Accountants LTD is ready
            to assist with clarity and confidence.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#C9A14A] text-[#0B1C2D] px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#B08B3E] transition-all duration-300 shadow-lg shadow-[#C9A14A] shadow-opacity-20 hover:shadow-xl hover:shadow-[#C9A14A] hover:shadow-opacity-30 transform hover:-translate-y-1"
          >
            Arrange Your Consultation
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
