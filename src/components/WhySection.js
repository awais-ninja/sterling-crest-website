import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";

export default function WhySection() {
  const values = [
    {
      title: "Organised records",
      description:
        "We help keep your figures in order so tax returns, accounts and management discussions start from reliable information.",
    },
    {
      title: "Clear explanations",
      description:
        "You receive plain English summaries of what the numbers mean and what needs to happen next.",
    },
    {
      title: "Deadline awareness",
      description:
        "We plan work around the filing and payment dates that apply to your affairs.",
    },
    {
      title: "Measured advice",
      description:
        "Guidance is practical and responsible. We do not overpromise tax outcomes or guarantee results.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative w-full py-20 md:py-24"
      style={{
        background:
          "linear-gradient(to bottom, rgb(var(--surface-elevated)), rgb(var(--surface-deep)))",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Our approach
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            How we work with you
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto">
            Practical benefits that help day to day finances and statutory
            filings run more smoothly.
          </p>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          stagger={80}
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="card-interactive bg-gradient-to-br from-surface to-surface-elevated p-6 md:p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div
                  className="icon-interactive w-1 h-12 bg-gold rounded-full shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="card-heading text-xl font-semibold text-ink mb-2">
                    {value.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
