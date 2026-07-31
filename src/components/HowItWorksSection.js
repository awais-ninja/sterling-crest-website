export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Initial consultation",
      description:
        "We discuss your circumstances, deadlines and the support you need.",
    },
    {
      number: "02",
      title: "Agreed scope and fees",
      description:
        "You receive a clear outline of services and fees before work begins.",
    },
    {
      number: "03",
      title: "Service delivery",
      description:
        "We prepare the agreed work, keep you informed and request documents promptly.",
    },
    {
      number: "04",
      title: "Review and next steps",
      description:
        "We explain the outcomes and confirm any follow up actions or ongoing support.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-surface py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Our process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            A clear working process
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto">
            Four practical steps from first conversation to completed work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gradient-to-br from-surface-elevated to-surface p-6 md:p-8 rounded-2xl border border-gold/20"
            >
              <div className="text-4xl font-bold text-gold/30 mb-3" aria-hidden="true">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-ink-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
