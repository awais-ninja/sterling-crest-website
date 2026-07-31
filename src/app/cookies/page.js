import Link from "next/link";
import PageShell from "@/components/PageShell";
import { businessDetails } from "@/config/business";
import { legalConfig } from "@/config/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cookie Policy | Sterling Crest Accountants",
  description:
    "Cookie Policy for Sterling Crest Accountants explaining essential cookies, optional analytics and how to manage consent.",
  path: "/cookies",
});

export default function CookiesPage() {
  // MANAGEMENT/LEGAL REVIEW REQUIRED before public launch.
  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-[#0B1C2D] via-[#081524] to-[#050E18] py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-5">
              Cookie Policy
            </h1>
            <p className="text-lg text-[#AAB2BD] leading-relaxed">
              This policy explains how {businessDetails.tradingName} uses
              cookies and similar technologies on this website.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#0B1C2D] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-[#AAB2BD] leading-relaxed">
            <Card title="What are cookies?">
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help sites function, remember preferences
                and, where permitted, understand how pages are used.
              </p>
            </Card>

            <Card title="Essential cookies">
              <p>
                Essential cookies are required for basic website operation and
                security. Examples include storing cookie consent choices and
                protecting forms against abuse. These cookies do not require
                consent.
              </p>
            </Card>

            <Card title="Analytics cookies">
              <p>
                Analytics cookies help us understand how visitors use the site,
                such as which pages are viewed. Analytics tools are only loaded
                if a measurement ID is configured and you have given consent.
                They remain disabled by default.
              </p>
            </Card>

            <Card title="Marketing cookies">
              <p>
                We do not currently use marketing or advertising cookies. If
                this changes, we will update this policy and request consent
                before loading them.
              </p>
            </Card>

            <Card title="Cookie duration">
              <p>
                Session cookies expire when you close your browser. Persistent
                cookies, such as consent preferences, may remain for a longer
                period so we can remember your choices.
              </p>
            </Card>

            <Card title="Managing cookies">
              <p>
                You can change or withdraw analytics consent at any time by
                clearing site data for this domain in your browser settings, or
                by contacting us. You can also control cookies through your
                browser preferences.
              </p>
              <p>
                For more about how we handle personal data, see our{" "}
                <Link href="/privacy" className="text-[#C9A14A] underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </Card>

            <Card title="Contact">
              <p>
                Questions about cookies can be sent to{" "}
                <a
                  href={`mailto:${businessDetails.email}`}
                  className="text-[#C9A14A] underline break-all"
                >
                  {businessDetails.email}
                </a>
                .
              </p>
            </Card>

            <p className="text-sm">
              Last updated: {legalConfig.cookiesLastUpdated}.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-gradient-to-br from-[#081524] to-[#0B1C2D] p-6 md:p-8 rounded-xl border border-[#C9A14A]/20 space-y-3">
      <h2 className="text-xl md:text-2xl font-bold text-[#F5F7FA]">{title}</h2>
      {children}
    </div>
  );
}
