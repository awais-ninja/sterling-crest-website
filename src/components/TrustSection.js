export default function TrustSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "UK Compliance Focused",
      description:
        "All services are delivered in line with current UK tax legislation and regulatory standards, giving you confidence and peace of mind.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Experienced & Detail-Driven",
      description:
        "Our work is grounded in accuracy, consistency, and careful attention to detail across every engagement.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Clear, Practical Advice",
      description:
        "We explain your financial position in plain terms, helping you make informed decisions without unnecessary complexity.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Client-Centred Approach",
      description:
        "Every client relationship is built on transparency, responsiveness, and long-term trust.",
    },
  ];

  return (
    <section id="trust" className="relative w-full bg-[#0B1C2D] py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
            Professional Accountancy You Can{" "}
            <span className="text-[#C9A14A]">Rely On</span>
          </h2>
          <p className="text-xl text-[#AAB2BD] max-w-3xl mx-auto">
            Combining technical expertise with clear communication to deliver
            exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-8 rounded-2xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A14A] hover:shadow-opacity-10 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A14A] bg-opacity-5 rounded-full blur-3xl group-hover:bg-opacity-10 transition-all"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#C9A14A] bg-opacity-10 rounded-xl flex items-center justify-center text-[#C9A14A] mb-6 group-hover:bg-opacity-20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3 group-hover:text-[#C9A14A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
