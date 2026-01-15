import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO / ABOVE THE FOLD */}
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Comprehensive Accountancy and Tax Services Across the UK
            </h1>
            <p className="text-lg md:text-xl text-[#AAB2BD] mb-10 leading-relaxed">
              Sterling Crest Accountants LTD provides a full range of
              professional accountancy, tax, and compliance services for
              individuals and businesses. Our work is grounded in accuracy,
              structure, and a clear understanding of UK regulatory
              requirements.
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

      {/* SECTION 2: TRUST & SERVICE OVERVIEW */}
      <section className="relative w-full bg-[#0B1C2D] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-4">
              Professional Support Built on Accuracy and Compliance
            </h2>
            <p className="text-lg text-[#AAB2BD] leading-relaxed">
              Our services are designed to support financial clarity, regulatory
              compliance, and informed decision-making. Whether you require
              ongoing accountancy support or assistance with specific
              obligations, our approach remains consistent, measured, and
              professional.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Our Accountancy Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Accounting & Statutory Accounts
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Preparation of accurate annual accounts in line with UK
                  accounting standards, supporting statutory filing requirements
                  and financial transparency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Bookkeeping Services
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Ongoing bookkeeping to ensure financial records are maintained
                  accurately, consistently, and ready for reporting or review.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Management Accounts
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Regular management reports providing insight into business
                  performance, cash flow, and financial trends.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Tax Planning & Compliance
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Personal and business tax services focused on meeting HMRC
                  obligations while identifying appropriate planning
                  opportunities within current legislation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Corporation Tax
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Preparation and submission of corporation tax returns,
                  ensuring calculations are accurate and deadlines are met.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Self-Assessment Tax Returns
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Accurate preparation and timely submission of self-assessment
                  returns for individuals, sole traders, and company directors.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  VAT Registration & Returns
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  VAT registration guidance, return preparation, and submission
                  in line with HMRC requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Payroll & PAYE Services
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Payroll processing, RTI submissions, payslips, and management
                  of PAYE obligations for employers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  CIS (Construction Industry Scheme)
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  CIS registration, monthly returns, and compliance support for
                  contractors and subcontractors.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Business Advisory Services
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Practical financial guidance to support business planning,
                  performance monitoring, and long-term sustainability.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#C9A14A] font-semibold text-lg hover:gap-4 transition-all group"
              >
                Discuss a Specific Service
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO OUR SERVICES ARE FOR */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Tailored Services for Different Client Types
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Limited Companies
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Comprehensive support covering statutory accounts, corporation
                  tax, payroll, VAT, and ongoing compliance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Sole Traders & Freelancers
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Clear, manageable accounting and tax solutions designed for
                  self-employed professionals.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Landlords & Property Investors
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Specialist services addressing property income reporting,
                  allowable expenses, and tax compliance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Contractors & CIS Workers
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Targeted support for contractors operating under the
                  Construction Industry Scheme.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Individuals & Directors
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Personal tax services for individuals with complex or ongoing
                  tax obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE STERLING CREST */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              A Disciplined and Professional Service Approach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Technical Accuracy
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Every service is delivered with careful attention to detail
                  and current regulatory requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Clear Scope and Fees
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Work is agreed in advance, with transparent service scope and
                  fee structures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Consistent Communication
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Clients are kept informed throughout the engagement, with
                  clear explanations at every stage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Responsible Advice
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  All guidance is provided ethically and in the client's
                  long-term best interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW OUR SERVICES ARE DELIVERED */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Our Service Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">1</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Initial Consultation
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  We assess your requirements and identify the services best
                  suited to your circumstances.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">2</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Service Onboarding
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Information is gathered, responsibilities are clarified, and
                  timelines are established.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">3</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Service Delivery
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Work is completed accurately and efficiently, in line with
                  agreed scope.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 text-center">
                <div className="text-4xl font-bold text-[#C9A14A] mb-4">4</div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Review & Ongoing Support
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  Regular reviews ensure continued compliance and alignment with
                  changing requirements.
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
            Discuss Your Accountancy Needs with Confidence
          </h2>
          <p className="text-lg text-[#AAB2BD] mb-10 leading-relaxed">
            Whether you require a single service or ongoing support, Sterling
            Crest Accountants LTD provides professional guidance delivered with
            clarity and precision.
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
