"use client";

import Link from "next/link";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What accountancy services do you provide?",
      answer:
        "We provide accounting and bookkeeping, tax planning and compliance, self-assessment tax returns, payroll services, and business advisory support for individuals and businesses across the UK.",
    },
    {
      question: "Do you work with both individuals and businesses?",
      answer:
        "Yes. We work with individuals, sole traders, limited companies, landlords, and property investors, tailoring our services to suit each client's circumstances.",
    },
    {
      question: "Are your services compliant with UK tax regulations?",
      answer:
        "All services are delivered in accordance with current UK tax legislation and HMRC requirements. Compliance and accuracy are central to our work.",
    },
    {
      question: "How do I get started with Sterling Crest Accountants LTD?",
      answer:
        "You can begin by arranging an initial consultation, during which we discuss your requirements, assess your situation, and outline the most appropriate services.",
    },
    {
      question: "How are your fees structured?",
      answer:
        "Fees are agreed in advance based on the scope and complexity of the services required. Transparency is maintained at all times.",
    },
  ];

  return (
    <section id="faqs" className="relative w-full bg-[#0B1C2D] py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C9A14A] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-4">
            Frequently Asked <span className="text-[#C9A14A]">Questions</span>
          </h2>
        </div>

        {/* Compact FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] rounded-lg border border-[#C9A14A] border-opacity-20 overflow-hidden transition-all duration-300 hover:border-opacity-40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h3 className="text-base font-semibold text-[#F5F7FA] pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#C9A14A] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-[#AAB2BD] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-[#C9A14A] font-semibold hover:gap-4 transition-all group"
          >
            View All FAQs
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
