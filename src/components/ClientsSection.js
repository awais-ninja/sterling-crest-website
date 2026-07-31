import Image from "next/image";

export default function ClientsSection() {
  const clientTypes = [
    {
      title: "Limited companies",
      description:
        "Accounts, corporation tax, payroll and VAT support for directors who need organised year end and day to day compliance.",
    },
    {
      title: "Sole traders and freelancers",
      description:
        "Bookkeeping and self assessment support designed for self employed professionals managing busy workloads.",
    },
    {
      title: "Landlords and property investors",
      description:
        "Property income summaries, expense tracking and self assessment support for UK rental portfolios.",
    },
    {
      title: "Contractors and CIS workers",
      description:
        "Practical help with CIS records, returns and related tax reporting for construction related work.",
    },
  ];

  return (
    <section id="clients" className="relative w-full bg-[#0B1C2D] py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-3">
            Who we help
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F7FA] mb-4">
            Support for individuals and growing businesses
          </h2>
          <p className="text-lg text-[#AAB2BD] max-w-3xl mx-auto">
            Whether you are starting out or already trading, we focus on clear
            records, timely filings and practical next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {clientTypes.map((client) => (
              <div
                key={client.title}
                className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 rounded-xl border border-[#C9A14A]/20"
              >
                <h3 className="text-lg font-semibold text-[#F5F7FA] mb-2">
                  {client.title}
                </h3>
                <p className="text-[#AAB2BD] leading-relaxed text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/homepage/home-page-section-4.webp"
                alt="Business discussion representing client focused accountancy support"
                fill
                sizes="(max-width: 1024px) 0px, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
