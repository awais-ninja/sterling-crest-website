import Link from "next/link";
import PageShell from "@/components/PageShell";
import {
  businessDetails,
  getCompanyDisclosure,
  hasValue,
} from "@/config/business";
import { legalConfig } from "@/config/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Sterling Crest Accountants",
  description:
    "Privacy Policy for Sterling Crest Accountants Ltd explaining how personal data is collected, used and protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  // MANAGEMENT/LEGAL REVIEW REQUIRED before public launch.
  // Confirm: retention periods, processors, AML supervisor, ICO number, international transfers.
  return (
    <PageShell>
      <LegalHero
        title="Privacy Policy"
        intro="This policy explains how Sterling Crest Accountants Ltd collects, uses and looks after personal information."
      />

      <LegalBody>
        <LegalSection title="1. Who we are">
          <p>
            The data controller is {businessDetails.legalName}, registered in{" "}
            {businessDetails.registrationCountry} under company number{" "}
            {businessDetails.companyNumber}.
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${businessDetails.email}`}
              className="text-gold underline break-all"
            >
              {businessDetails.email}
            </a>
          </p>
          {hasValue(businessDetails.registeredOffice) && (
            <p>Registered office: {businessDetails.registeredOffice}</p>
          )}
          {hasValue(businessDetails.icoRegistrationNumber) && (
            <p>
              ICO registration number: {businessDetails.icoRegistrationNumber}
            </p>
          )}
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <p>Depending on how you contact us or engage our services, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identity and contact details (name, email, telephone)</li>
            <li>Business details and client type</li>
            <li>Enquiry information and correspondence</li>
            <li>Financial and accounting information required to deliver services</li>
            <li>Technical information such as IP address for security and form protection</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How information is collected">
          <p>We collect information when you:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Submit the website enquiry form</li>
            <li>Email, call or message us</li>
            <li>Become a client and provide documents for an engagement</li>
            <li>Use the website (limited technical data for security and performance)</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Why we process information">
          <p>We process personal data to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to enquiries and arrange consultations</li>
            <li>Provide accountancy, tax and related services</li>
            <li>Meet legal and regulatory obligations</li>
            <li>Manage our business relationship with you</li>
            <li>Protect the security of our systems and prevent abuse</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Lawful bases">
          <p>Depending on the activity, we rely on one or more of the following:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-ink">Contract</strong>, where processing is
              necessary to provide agreed services
            </li>
            <li>
              <strong className="text-ink">Legal obligation</strong>, including tax,
              accounting and anti money laundering requirements where applicable
            </li>
            <li>
              <strong className="text-ink">Legitimate interests</strong>, such as
              responding to enquiries, improving service delivery and securing our website,
              balanced against your rights
            </li>
            <li>
              <strong className="text-ink">Consent</strong>, where required, for
              example optional analytics cookies
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Who we may share information with">
          <p>
            We do not sell personal data. We may share information with trusted
            parties where necessary, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>HMRC and Companies House where required for filings or legal duties</li>
            <li>Accountancy, payroll or cloud software providers used to deliver services</li>
            <li>Email and hosting providers that support our communications and website</li>
            <li>Professional advisers such as legal counsel where needed</li>
            <li>Regulators or law enforcement where legally required</li>
          </ul>
          <p>
            Specific provider names will be confirmed in engagement documentation
            where relevant.
          </p>
        </LegalSection>

        <LegalSection title="7. International transfers">
          <p>
            Some service providers may process data outside the United Kingdom.
            Where this occurs, we take appropriate steps to ensure suitable
            safeguards are in place in line with UK data protection law.
          </p>
        </LegalSection>

        <LegalSection title="8. Security">
          <p>
            We use appropriate technical and organisational measures to protect
            personal information against unauthorised access, loss or misuse.
            No method of transmission or storage is completely secure, and we
            continually review our practices.
          </p>
        </LegalSection>

        <LegalSection title="9. Retention">
          <p>{legalConfig.retentionWording}</p>
        </LegalSection>

        <LegalSection title="10. Your rights">
          <p>Under UK data protection law, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure in certain circumstances</li>
            <li>Restrict or object to certain processing</li>
            <li>Request data portability where applicable</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p>
            Some rights may be limited where we must retain information for legal
            or professional reasons. Contact us to exercise your rights.
          </p>
        </LegalSection>

        <LegalSection title="11. Complaints">
          <p>
            If you are unhappy with how we handle your data, please contact us
            first so we can try to resolve the matter. You also have the right to
            complain to the Information Commissioner’s Office (ICO):{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              ico.org.uk
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="12. Cookies and analytics">
          <p>
            Essential cookies may be used for basic site operation and security.
            Non essential analytics cookies are only used if configured and
            consented to. See our{" "}
            <Link href="/cookies" className="text-gold underline">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </LegalSection>

        <LegalSection title="13. Policy updates">
          <p>
            We may update this policy from time to time. The “Last updated” date
            below shows when it was last revised.
          </p>
        </LegalSection>

        <p className="text-sm text-ink-muted">
          Last updated: {legalConfig.privacyLastUpdated}.{" "}
          {getCompanyDisclosure()}
        </p>
      </LegalBody>
    </PageShell>
  );
}

function LegalHero({ title, intro }) {
  return (
    <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
            {title}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">{intro}</p>
        </div>
      </div>
    </section>
  );
}

function LegalBody({ children }) {
  return (
    <section className="relative w-full bg-surface py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">{children}</div>
      </div>
    </section>
  );
}

function LegalSection({ title, children }) {
  return (
    <div className="bg-gradient-to-br from-surface-elevated to-surface p-6 md:p-8 rounded-xl border border-gold/20 space-y-3 text-ink-muted leading-relaxed">
      <h2 className="text-xl md:text-2xl font-bold text-ink">{title}</h2>
      {children}
    </div>
  );
}
