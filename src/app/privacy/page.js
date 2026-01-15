import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-[#AAB2BD] leading-relaxed">
              Sterling Crest Accountants LTD is committed to protecting your
              privacy and personal information. This policy explains how we
              collect, use, and safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT */}
      <section className="relative w-full bg-[#0B1C2D] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Information We Collect
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We collect information necessary to provide our accountancy
                  and tax services, including personal details, financial
                  information, and business data required for compliance and
                  service delivery.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  Your information is used solely for the purpose of delivering
                  accountancy services, meeting regulatory requirements, and
                  maintaining professional standards. We do not share your data
                  with third parties except where required by law or with your
                  explicit consent.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Data Security
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  We implement appropriate technical and organisational measures
                  to protect your personal information against unauthorised
                  access, loss, or destruction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Your Rights
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed">
                  You have the right to access, correct, or request deletion of
                  your personal information. You may also object to processing
                  or request data portability, subject to legal and professional
                  obligations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-xl border border-[#C9A14A] border-opacity-20">
                <h2 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  Contact Us
                </h2>
                <p className="text-[#AAB2BD] leading-relaxed mb-4">
                  For questions about this privacy policy or to exercise your
                  rights, please contact us:
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
                  Last updated: {new Date().getFullYear()}. This policy may be
                  updated periodically. We recommend reviewing this page
                  regularly.
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
