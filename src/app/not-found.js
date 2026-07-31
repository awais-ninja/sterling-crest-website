import Link from "next/link";
import PageShell from "@/components/PageShell";
import { ConsultationCta } from "@/components/ConsultationCta";

export const metadata = {
  title: "Page not found | Sterling Crest Accountants",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-24 md:py-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#C9A14A] font-semibold mb-3">404</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              Page not found
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed mb-10">
              The page you requested is unavailable or may have moved. Use one
              of the options below to continue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta href="/">Return to homepage</ConsultationCta>
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border-2 border-[#C9A14A] text-[#C9A14A] hover:bg-[#C9A14A] hover:text-[#0B1C2D] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border border-[#AAB2BD] text-[#F5F7FA] hover:border-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
