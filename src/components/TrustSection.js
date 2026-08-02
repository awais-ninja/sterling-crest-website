import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";

export default function TrustSection() {
  const features = [
    {
      title: "Registered UK limited company",
      description:
        "Sterling Crest Accountants Ltd is registered in England and Wales, giving clients a clear corporate counterpart for engagements.",
    },
    {
      title: "Clear engagement process",
      description:
        "We confirm scope, fees and responsibilities in writing before work begins, so expectations are aligned from the start.",
    },
    {
      title: "Confidential handling of information",
      description:
        "Financial and personal information is handled carefully and used only for agreed services and legal obligations.",
    },
    {
      title: "Deadline focused support",
      description:
        "We help you plan around HMRC and Companies House dates with organised records and clear reminders.",
    },
    {
      title: "Support for businesses and individuals",
      description:
        "From sole traders and landlords to limited companies, we adapt our support to your circumstances.",
    },
    {
      title: "Remote consultation available",
      description:
        "Discuss your requirements by phone or online video call. Practical for clients across the UK.",
    },
  ];

  return (
    <section id="trust" className="relative w-full bg-surface py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Why clients choose us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Accountancy support you can work with
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto">
            Straightforward processes, careful handling of information and clear
            next steps without exaggerated claims.
          </p>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          stagger={70}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-interactive bg-gradient-to-br from-surface-elevated to-surface p-6 md:p-8 rounded-2xl"
            >
              <h3 className="card-heading text-xl font-semibold text-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-ink-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
