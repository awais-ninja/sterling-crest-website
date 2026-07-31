import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ConsultationCta } from "@/components/ConsultationCta";
import { businessDetails } from "@/config/business";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Thank You | Sterling Crest Accountants",
  description:
    "Thank you for contacting Sterling Crest Accountants. We have received your enquiry and will respond shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 md:py-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              Thank you for your enquiry
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-4">
              Your message has been received. {businessDetails.responseTime}
            </p>
            <p className="text-[#AAB2BD] mb-10">
              If your matter is urgent, email{" "}
              <a
                href={`mailto:${businessDetails.email}`}
                className="text-[#C9A14A] underline break-all"
              >
                {businessDetails.email}
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta href="/">Return to homepage</ConsultationCta>
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border-2 border-[#C9A14A] text-[#C9A14A] hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
