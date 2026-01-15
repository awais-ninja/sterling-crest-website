export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We take time to understand your circumstances, objectives, and compliance requirements.",
    },
    {
      number: "02",
      title: "Tailored Financial Review",
      description:
        "Your financial position is assessed with accuracy and attention to detail.",
    },
    {
      number: "03",
      title: "Ongoing Service & Support",
      description:
        "We deliver agreed services consistently, remaining available for guidance and updates.",
    },
    {
      number: "04",
      title: "Review & Planning",
      description:
        "Regular reviews ensure your finances remain aligned with regulations and future goals.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-[#0B1C2D] py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
            A Clear and <span className="text-[#C9A14A]">Simple Process</span>
          </h2>
          <p className="text-xl text-[#AAB2BD] max-w-3xl mx-auto">
            Four straightforward steps to professional accounting excellence
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connecting Line (not for last item) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-[#C9A14A] bg-opacity-20 z-0"
                  style={{ width: "calc(100% - 4rem)" }}
                ></div>
              )}

              <div className="relative bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-2xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A14A] hover:shadow-opacity-10 hover:-translate-y-2 z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A14A] bg-opacity-5 rounded-full blur-3xl group-hover:bg-opacity-10 transition-all"></div>

                <div className="relative z-10">
                  <div className="text-6xl font-bold text-[#C9A14A] text-opacity-20 mb-4 group-hover:text-opacity-30 transition-all">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F7FA] mb-4 group-hover:text-[#C9A14A] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#AAB2BD] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
