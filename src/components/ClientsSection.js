import Image from "next/image";

export default function ClientsSection() {
  const clientTypes = [
    {
      title: "Limited Companies",
      description:
        "Ongoing accounting, compliance, and advisory support tailored to company structures and reporting requirements.",
    },
    {
      title: "Sole Traders & Freelancers",
      description:
        "Clear and manageable accounting solutions designed for self-employed professionals.",
    },
    {
      title: "Landlords & Property Investors",
      description:
        "Specialist tax and reporting services aligned with UK property regulations.",
    },
    {
      title: "Individuals",
      description:
        "Personal tax support for those requiring expert handling of their financial affairs.",
    },
  ];

  return (
    <section id="clients" className="relative w-full bg-[#0B1C2D] py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F7FA] mb-6">
            Supporting a <span className="text-[#C9A14A]">Wide Range</span> of
            Clients
          </h2>
          <p className="text-xl text-[#AAB2BD] max-w-3xl mx-auto">
            From startups to established businesses, we provide expert
            accounting solutions for all
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A14A] hover:shadow-opacity-10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#C9A14A] bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all">
                  <div className="w-2 h-2 bg-[#C9A14A] rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3 group-hover:text-[#C9A14A] transition-colors">
                  {client.title}
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/homepage/home-page-section-4.webp"
                alt="Our clients"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-transparent to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#C9A14A] bg-opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
