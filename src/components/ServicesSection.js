import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      description:
        "Accurate financial records maintained with structure and consistency to support compliance and informed decision-making.",
      icon: "📊",
    },
    {
      title: "Tax Planning & Compliance",
      description:
        "Personal and business tax services designed to meet HMRC requirements while identifying legitimate efficiencies.",
      icon: "📋",
    },
    {
      title: "Self-Assessment Tax Returns",
      description:
        "Preparation and submission of self-assessment returns with accuracy, timeliness, and full regulatory compliance.",
      icon: "📝",
    },
    {
      title: "Payroll Services",
      description:
        "Reliable payroll management ensuring employees are paid correctly and statutory obligations are met.",
      icon: "💰",
    },
    {
      title: "Business Advisory",
      description:
        "Practical financial insight to support planning, performance monitoring, and sustainable business growth.",
      icon: "💼",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-24"
      style={{ background: "linear-gradient(to bottom, #0B1C2D, #081524)" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
            Comprehensive{" "}
            <span className="text-[#C9A14A]">Accountancy Services</span>
          </h2>
          <p className="text-xl text-[#AAB2BD] max-w-3xl mx-auto">
            Tailored solutions designed to meet your unique financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/homepage/home-page-section-3.webp"
                alt="Accountancy services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Services List */}
          <div className="order-1 lg:order-2 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10 hover:-translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#F5F7FA] mb-2 group-hover:text-[#C9A14A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#AAB2BD] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#C9A14A] font-semibold text-lg hover:gap-4 transition-all group"
          >
            View All Services
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
