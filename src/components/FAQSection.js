import Link from "next/link";
import Accordion from "@/components/Accordion";
import { homepageFaqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section id="faqs" className="relative w-full bg-surface py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Common questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Accordion items={homepageFaqs} />
        </div>

        <div className="text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            View all FAQs
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
