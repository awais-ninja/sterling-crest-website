import PageShell from "@/components/PageShell";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import { ConsultationCta } from "@/components/ConsultationCta";
import { faqCategories } from "@/data/faqs";
import { createPageMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Accountancy FAQs | Sterling Crest",
  description:
    "Answers to common questions about Sterling Crest accountancy services, fees, documents, deadlines and how to get started.",
  path: "/faqs",
});

export default function FAQsPage() {
  const allFaqs = faqCategories.flatMap((category) => category.items);

  return (
    <PageShell>
      <JsonLd data={getFaqSchema(allFaqs)} />
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              Frequently asked questions
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-8">
              Practical answers about our services, fees and working process. If
              your question is not listed, send us an enquiry.
            </p>
            <ConsultationCta location="faqs_hero">Speak to Our Team</ConsultationCta>
          </div>
        </div>
      </section>

      {faqCategories.map((category, index) => (
        <section
          key={category.id}
          className={`py-12 md:py-16 ${
            index % 2 === 0 ? "bg-[#0B1C2D]" : "bg-[#081524]"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F7FA] mb-6">
              {category.title}
            </h2>
            <Accordion items={category.items} />
          </div>
        </section>
      ))}

      <section className="py-16 bg-gradient-to-b from-[#081524] to-[#050E18]">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#F5F7FA] mb-4">
            Still have questions?
          </h2>
          <p className="text-[#AAB2BD] mb-8">
            Send a short enquiry and we will help with the next step.
          </p>
          <ConsultationCta location="faqs_cta">Arrange Your Consultation</ConsultationCta>
        </div>
      </section>
    </PageShell>
  );
}
