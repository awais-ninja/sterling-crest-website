import { hasValue } from "@/config/business";

/**
 * Optional trust blocks, render nothing until real data is configured.
 * Do not invent team members, memberships, reviews or ratings.
 */

export function TeamProfilesSection({ profiles = [] }) {
  const valid = profiles.filter(
    (profile) => hasValue(profile?.name) && hasValue(profile?.role)
  );
  if (!valid.length) return null;

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-ink mb-8 text-center">
          Our team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valid.map((profile) => (
            <article
              key={profile.name}
              className="p-6 rounded-xl border border-gold/20 bg-surface-elevated"
            >
              <h3 className="text-xl font-semibold text-ink">
                {profile.name}
              </h3>
              <p className="text-gold text-sm mb-3">{profile.role}</p>
              {hasValue(profile.bio) && (
                <p className="text-ink-muted text-sm leading-relaxed">
                  {profile.bio}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegulatoryDetailsSection({
  amlSupervisor = "",
  professionalBody = "",
  icoRegistrationNumber = "",
  professionalIndemnityDetails = "",
}) {
  const items = [
    { label: "AML supervisory body", value: amlSupervisor },
    { label: "Professional body", value: professionalBody },
    { label: "ICO registration", value: icoRegistrationNumber },
    { label: "Professional indemnity", value: professionalIndemnityDetails },
  ].filter((item) => hasValue(item.value));

  if (!items.length) return null;

  return (
    <section className="py-12 bg-surface-elevated">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-2xl font-bold text-ink mb-4">
          Regulatory information
        </h2>
        <ul className="space-y-2 text-ink-muted">
          {items.map((item) => (
            <li key={item.label}>
              <strong className="text-ink">{item.label}:</strong>{" "}
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClientReviewsSection({ reviews = [] }) {
  const valid = reviews.filter(
    (review) => hasValue(review?.quote) && hasValue(review?.attribution)
  );
  if (!valid.length) return null;

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-ink mb-8 text-center">
          Client feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valid.map((review) => (
            <blockquote
              key={`${review.attribution}-${review.quote.slice(0, 24)}`}
              className="p-6 rounded-xl border border-gold/20 bg-surface-elevated"
            >
              <p className="text-ink leading-relaxed mb-4">
                “{review.quote}”
              </p>
              <footer className="text-sm text-ink-muted">
                {review.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
