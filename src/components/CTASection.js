import { ConsultationCta } from "@/components/ConsultationCta";
import { businessDetails } from "@/config/business";

export default function CTASection() {
  return (
    <section
      id="contact-cta"
      className="relative w-full py-20 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #081524, #050E18)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
        <div className="bg-gradient-to-br from-[#0B1C2D] to-[#081524] p-8 md:p-14 rounded-3xl border border-[#C9A14A]/30">
          <p className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-3">
            Next step
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] mb-5">
            Tell us what support you need
          </h2>
          <p className="text-lg text-[#AAB2BD] mb-8 leading-relaxed max-w-2xl mx-auto">
            Send a short enquiry and we will discuss your requirements.{" "}
            {businessDetails.responseTime}
          </p>
          <ConsultationCta location="homepage_cta">Arrange Your Consultation</ConsultationCta>
        </div>
      </div>
    </section>
  );
}
