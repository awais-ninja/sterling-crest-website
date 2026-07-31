import PageShell from "@/components/PageShell";
import {
  businessDetails,
  getCompanyDisclosure,
  hasValue,
} from "@/config/business";
import { legalConfig } from "@/config/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions | Sterling Crest Accountants",
  description:
    "Website terms and conditions for Sterling Crest Accountants Ltd covering use of this site and engagement information.",
  path: "/terms",
});

export default function TermsPage() {
  // MANAGEMENT/LEGAL REVIEW REQUIRED before public launch.
  // Confirm liability wording, engagement terms and any indemnity statements.
  return (
    <PageShell>
      <section className="relative w-full bg-gradient-to-br from-surface via-surface-elevated to-surface-deep py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-5">
              Terms and Conditions
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed">
              These terms govern use of the {businessDetails.tradingName}{" "}
              website. Separate engagement terms apply once a client
              relationship is formally accepted.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-surface py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <Term
              title="1. Website ownership"
              body={`${getCompanyDisclosure()} This website is operated by ${businessDetails.legalName}.`}
            />
            <Term
              title="2. General information only"
              body="Content on this website is provided for general information. It is not personalised tax, accounting or legal advice and should not be relied on as such."
            />
            <Term
              title="3. No professional relationship until engagement"
              body="Submitting an enquiry or using this website does not create an accountant, client relationship. A professional relationship begins only when we issue an engagement letter (or equivalent written agreement) and you accept it."
            />
            <Term
              title="4. Engagement letters"
              body="Where we agree to provide services, the scope, fees, responsibilities and limitations will be set out in an engagement letter or written confirmation. Those terms take precedence for the services concerned."
            />
            <Term
              title="5. Client responsibilities"
              body="Clients are responsible for providing complete, accurate and timely information. Delays or inaccuracies in information provided may affect our ability to meet deadlines or deliver agreed services."
            />
            <Term
              title="6. Deadlines"
              body="We support clients with relevant filing and payment dates as part of an agreed engagement. Ultimate responsibility for meeting statutory deadlines remains subject to the engagement terms and the timely provision of required information."
            />
            <Term
              title="7. Intellectual property"
              body="Website content, branding and materials are owned by or licensed to Sterling Crest Accountants Ltd. You may not copy or reuse content for commercial purposes without permission."
            />
            <Term
              title="8. Website availability"
              body="We aim to keep the website available, but we do not guarantee uninterrupted access. We may update, suspend or withdraw content without notice."
            />
            <Term
              title="9. External links"
              body="This website may link to third party sites such as GOV.UK. We are not responsible for the content or privacy practices of external websites."
            />
            <Term
              title="10. Liability"
              body="To the fullest extent permitted by law, we are not liable for loss arising from reliance on general website content alone. Nothing in these terms excludes or limits liability that cannot be excluded under applicable law."
            />
            {/* Professional indemnity wording intentionally omitted until confirmed. */}
            <Term
              title="11. Governing law"
              body="These terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction, subject to any mandatory consumer protections that apply."
            />
            <Term
              title="12. Contact"
              body={`Questions about these terms can be sent to ${businessDetails.email}.${
                hasValue(businessDetails.registeredOffice)
                  ? ` Registered office: ${businessDetails.registeredOffice}.`
                  : ""
              }`}
            />
            <p className="text-sm text-ink-muted">
              Last updated: {legalConfig.termsLastUpdated}.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Term({ title, body }) {
  return (
    <div className="bg-gradient-to-br from-surface-elevated to-surface p-6 md:p-8 rounded-xl border border-gold/20">
      <h2 className="text-xl md:text-2xl font-bold text-ink mb-3">{title}</h2>
      <p className="text-ink-muted leading-relaxed">{body}</p>
    </div>
  );
}
