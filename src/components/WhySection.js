export default function WhySection() {
  const values = [
    {
      title: "Accuracy Without Compromise",
      description:
        "We prioritise precision in every calculation, submission, and report.",
    },
    {
      title: "Structured & Transparent",
      description:
        "Our processes are clearly defined, ensuring you always understand what is being done and why.",
    },
    {
      title: "Long-Term Financial Perspective",
      description:
        "We look beyond short-term compliance to support stable financial outcomes over time.",
    },
    {
      title: "Professional Integrity",
      description:
        "Advice is delivered responsibly, ethically, and in your best long-term interest.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative w-full py-24"
      style={{ background: "linear-gradient(to bottom, #081524, #050E18)" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
            A Measured, <span className="text-[#C9A14A]">Professional</span>{" "}
            Approach
          </h2>
          <p className="text-xl text-[#AAB2BD] max-w-3xl mx-auto">
            Built on principles of accuracy, transparency, and long-term value
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0B1C2D] to-[#081524] p-8 rounded-2xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A14A] hover:shadow-opacity-10 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A14A] bg-opacity-5 rounded-full blur-2xl group-hover:bg-opacity-10 transition-all"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1 h-12 bg-[#C9A14A] rounded-full"></div>
                  <h3 className="text-2xl font-semibold text-[#F5F7FA] group-hover:text-[#C9A14A] transition-colors">
                    {value.title}
                  </h3>
                </div>
                <p className="text-[#AAB2BD] text-lg leading-relaxed pl-5">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
