import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-[#AAB2BD] leading-relaxed">
              These terms and conditions govern the provision of accountancy and
              tax services by Sterling Crest Accountants LTD. Please read them
              carefully.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Service Provision
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Sterling Crest Accountants LTD provides professional
                  accountancy and tax services in accordance with UK regulatory
                  standards. Services are delivered based on agreed scope,
                  timelines, and fee structures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Client Responsibilities
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Clients are required to provide accurate, complete, and timely
                  information necessary for service delivery. Failure to provide
                  required information may affect service quality and timelines.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Fees and Payment
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Fees are agreed in advance and clearly communicated. Payment
                  terms are specified in engagement letters. Late payment may
                  result in suspension of services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Professional Standards
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  All services are provided in accordance with professional
                  accountancy standards and UK regulatory requirements. We
                  maintain professional indemnity insurance as required.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Our liability is limited to the extent permitted by law and
                  professional regulations. We are not liable for losses arising
                  from incomplete or inaccurate information provided by clients.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Termination
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Either party may terminate the engagement with reasonable
                  notice. Upon termination, outstanding fees remain due, and we
                  will provide necessary handover documentation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Contact
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed mb-4">
                  For questions about these terms, please contact us:
                </p>
                <p className="text-[#AAB2BD]">
                  Email:{" "}
                  <a
                    href="mailto:info@sterlingcrestaccountants.co.uk"
                    className="text-[#C9A14A] hover:underline"
                  >
                    info@sterlingcrestaccountants.co.uk
                  </a>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <p className="text-sm text-[#AAB2BD]">
                  Last updated: {new Date().getFullYear()}. These terms may be
                  updated periodically. Continued use of our services
                  constitutes acceptance of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
