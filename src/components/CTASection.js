import { ConsultationCta } from "@/components/ConsultationCta";
import Reveal from "@/components/Reveal";
import { businessDetails } from "@/config/business";

export default function CTASection() {
  return (
    <section
      id="contact-cta"
      className="relative w-full py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgb(var(--surface-elevated)), rgb(var(--surface-deep)))",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative z-10">
        <Reveal>
          <div className="cta-panel card-interactive bg-gradient-to-br from-surface to-surface-elevated p-8 md:p-14 rounded-3xl border-gold/30">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
              Next step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-5">
              Tell us what support you need
            </h2>
            <p className="text-lg text-ink-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              Send a short enquiry and we will discuss your requirements.{" "}
              {businessDetails.responseTime}
            </p>
            <ConsultationCta location="homepage_cta">
              Arrange Your Consultation
            </ConsultationCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
