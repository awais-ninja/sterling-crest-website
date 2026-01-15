import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO / ABOVE THE FOLD */}
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#AAB2BD] mb-10 leading-relaxed">
              This page addresses common questions about our accountancy and tax
              services, how we work, and what you can expect when working with
              Sterling Crest Accountants LTD. If your question is not answered
              here, we encourage you to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#C9A14A] text-[#0B1C2D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B08B3E] transition-colors duration-300 text-center"
              >
                Speak to an Accountant
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#C9A14A] text-[#C9A14A] px-8 py-4 rounded-lg font-semibold text-lg bg-transparent hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-all duration-300 text-center"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST & CLARITY INTRODUCTION */}
      <section className="relative w-full bg-[#0B1C2D] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-4">
              Clear Answers from Professional Accountants
            </h2>
            <p className="text-lg text-[#AAB2BD] leading-relaxed">
              Understanding your financial obligations and options is essential.
              Our approach is to provide straightforward, accurate answers so
              you can make informed decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES & SCOPE QUESTIONS */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Our Services
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  What accountancy services do you provide?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We provide accounting and bookkeeping, tax planning and
                  compliance, self-assessment tax returns, payroll services, and
                  business advisory support for individuals and businesses
                  across the UK.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Do you work with both individuals and businesses?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Yes. We work with individuals, sole traders, limited
                  companies, landlords, and property investors, tailoring our
                  services to suit each client's circumstances.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Do you offer ongoing accountancy support or one-off services?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We offer both. Some clients engage us for ongoing compliance
                  and advisory services, while others require assistance with
                  specific matters such as tax returns or financial reviews.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Can you take over from my existing accountant?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Yes. We manage the professional handover process efficiently,
                  including communication with your previous accountant, to
                  ensure a smooth transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TAX & COMPLIANCE QUESTIONS */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Tax & Regulatory Compliance
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Are your services compliant with UK tax regulations?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  All services are delivered in accordance with current UK tax
                  legislation and HMRC requirements. Compliance and accuracy are
                  central to our work.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Do you help with tax planning as well as tax returns?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Yes. Where appropriate, we provide tax planning guidance to
                  help clients manage liabilities responsibly while remaining
                  fully compliant with regulations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Can you assist with HMRC enquiries or correspondence?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We can support clients in responding to HMRC queries, ensuring
                  information is presented accurately and professionally.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Do you remind clients about filing deadlines?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Yes. As part of our service, we help clients stay informed of
                  key deadlines to reduce the risk of late submissions or
                  penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS & WORKING RELATIONSHIP */}
      <section className="relative w-full bg-gradient-to-b from-[#0B1C2D] to-[#081524] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              How We Work
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  How do I get started with Sterling Crest Accountants LTD?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  You can begin by arranging an initial consultation, during
                  which we discuss your requirements, assess your situation, and
                  outline the most appropriate services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  What information do you need from me?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  This depends on the services required. We will clearly explain
                  what documentation is needed and guide you through the
                  process.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Will I have a dedicated point of contact?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Yes. Clients benefit from consistent communication and a clear
                  point of contact for their accountancy needs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  How do you communicate with clients?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We communicate via email, phone, and scheduled meetings,
                  ensuring clarity and responsiveness at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FEES & ENGAGEMENT */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-12 text-center">
              Fees & Engagement Terms
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  How are your fees structured?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Fees are agreed in advance based on the scope and complexity
                  of the services required. Transparency is maintained at all
                  times.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Are there any hidden charges?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  No. All fees are clearly outlined before work begins, and any
                  additional services are discussed and agreed beforehand.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3">
                  Do you offer fixed-fee services?
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Where appropriate, we offer fixed-fee arrangements to provide
                  certainty and clarity for our clients.
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
            Still Have Questions?
          </h2>
          <p className="text-lg text-[#AAB2BD] mb-10 leading-relaxed">
            If you would like further clarification or wish to discuss your
            circumstances in detail, our team is available to provide
            professional guidance.
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
