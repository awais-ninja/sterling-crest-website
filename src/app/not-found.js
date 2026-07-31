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
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-24 md:py-32 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold font-semibold mb-3">404</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
              Page not found
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed mb-10">
              The page you requested is unavailable or may have moved. Use one
              of the options below to continue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationCta href="/">Return to homepage</ConsultationCta>
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-on-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg font-semibold border border-ink-muted text-ink hover:border-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
