import { businessDetails, hasValue } from "@/config/business";

/**
 * Renders genuine reviews only. Empty by default — never invent testimonials.
 */
export default function ReviewsSection() {
  const reviews = Array.isArray(businessDetails.reviews)
    ? businessDetails.reviews.filter(
        (review) => hasValue(review?.text) && hasValue(review?.name)
      )
    : [];

  if (!reviews.length) return null;

  return (
    <section id="reviews" className="relative w-full bg-surface py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Client feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            What clients say
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.date || review.text.slice(0, 24)}`}
              className="p-6 border border-gold/20"
            >
              <p className="text-ink-muted leading-relaxed mb-4">
                “{review.text}”
              </p>
              <p className="text-ink font-semibold">{review.name}</p>
              {hasValue(review.platform) && (
                <p className="text-sm text-ink-muted">{review.platform}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
