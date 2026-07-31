"use client";

import { useId, useState } from "react";

export default function Accordion({ items = [], headingLevel = "h3" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();
  const HeadingTag = headingLevel;

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={buttonId}
            className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] rounded-lg border border-[#C9A14A]/20 overflow-hidden"
          >
            <HeadingTag className="text-base font-semibold m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left text-[#F5F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                <span className="pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-[#C9A14A] flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </HeadingTag>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? "px-6 pb-4" : undefined}
            >
              {isOpen && (
                <p className="text-sm text-[#AAB2BD] leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
