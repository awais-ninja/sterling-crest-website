import Reveal from "@/components/Reveal";
import { napDetails } from "@/config/business";

/**
 * Short local relevance note — registered in Leeds, UK-wide remote support.
 * Does not imply a walk-in office or Leeds-only service.
 */
export default function LocalRelevance() {
  return (
    <section
      id="local-relevance"
      className="relative w-full bg-surface-elevated py-14 md:py-16 border-y border-gold/20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">
            Registered in Leeds, supporting clients across the UK
          </h2>
          <p className="text-ink-muted leading-relaxed text-base md:text-lg">
            {napDetails.name} is registered in Leeds, West Yorkshire, and
            provides remote accounting and tax support to clients across the
            United Kingdom. The address below is the registered office.
            Consultations are by prior appointment by phone or online video
            call—not a walk-in office.
          </p>
          <p className="text-sm text-ink-muted">
            Registered office: {napDetails.address}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
