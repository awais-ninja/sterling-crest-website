import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO / ABOVE THE FOLD */}
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Professional Accountants Built on Trust and Precision
            </h1>
            <p className="text-lg md:text-xl text-[#AAB2BD] mb-10 leading-relaxed">
              Sterling Crest Accountants LTD is a UK-based accountancy practice
              providing reliable, compliant, and structured financial services
              to individuals and businesses. Our work is defined by accuracy,
              integrity, and clear professional standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#C9A14A] text-[#0B1C2D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B08B3E] transition-colors duration-300 text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#C9A14A] text-[#C9A14A] px-8 py-4 rounded-lg font-semibold text-lg bg-transparent hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-all duration-300 text-center"
              >
                Speak to an Accountant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST & INTRODUCTION */}
      <section className="relative w-full bg-[#0B1C2D] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-4">
              A Disciplined and Client-Focused Practice
            </h2>
            <p className="text-lg text-[#AAB2BD] leading-relaxed">
              We operate with a clear focus on delivering accountancy services
              that are accurate, transparent, and aligned with UK regulatory
              requirements. Our approach is measured and professional, ensuring
              clients receive consistent and dependable support.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE ARE */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Who We Are
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  A Professional UK Accountancy Firm
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Sterling Crest Accountants LTD was established to provide
                  dependable accountancy and tax services delivered with clarity
                  and structure. We support clients across the UK, offering both
                  ongoing and project-based services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Focused on Accuracy and Compliance
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Our work is grounded in careful attention to detail and a
                  thorough understanding of UK accounting standards and tax
                  legislation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Clear Communication
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We believe effective accountancy relies on clear,
                  straightforward communication, ensuring clients understand
                  their financial position and obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE WORK WITH */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Our Clients
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Businesses Across the UK
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  We work with limited companies, sole traders, and growing
                  businesses across a wide range of sectors.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Self-Employed Professionals
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Support for freelancers and contractors requiring structured
                  and compliant financial management.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Landlords and Property Investors
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Specialist services addressing property-related income and tax
                  requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Individuals and Directors
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Personal tax and advisory services for individuals with
                  ongoing or complex financial responsibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR VALUES & APPROACH */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Our Professional Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Integrity
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We act ethically and responsibly in all client engagements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Precision
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Accuracy and consistency are central to every service we
                  provide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Transparency
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Clients are given clear explanations, defined scopes of work,
                  and upfront fees.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Long-Term Perspective
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We support clients with a view toward sustainable financial
                  outcomes rather than short-term fixes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Our Working Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">1</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Understanding Your Requirements
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  We begin by understanding your financial position, objectives,
                  and compliance needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">2</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Structured Service Delivery
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Services are delivered using clearly defined processes and
                  timelines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">3</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Ongoing Communication
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Clients receive consistent updates and have access to
                  professional guidance throughout the engagement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">4</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Review and Planning
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  We regularly review client arrangements to ensure continued
                  compliance and alignment with changing circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PRIMARY CALL TO ACTION */}
      <section
        className="relative w-full py-20"
        style={{ background: "linear-gradient(to bottom, #081524, #050E18)" }}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-6">
            Work with a Professional Accountancy Firm
          </h2>
          <p className="text-lg text-[#AAB2BD] mb-10 leading-relaxed">
            If you are seeking dependable accountancy support delivered with
            clarity and professionalism, Sterling Crest Accountants LTD is ready
            to assist.
          </p>
          <Link
            href="/contact"
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
