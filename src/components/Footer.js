import Link from "next/link";
import { ConsultationCta } from "@/components/ConsultationCta";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import HomeLogoLink from "@/components/HomeLogoLink";
import {
  businessDetails,
  footerServiceSlugs,
  getCompanyDisclosure,
  getEmailHref,
  getPhoneHref,
  hasValue,
} from "@/config/business";
import { footerLegalLinks, navigation } from "@/config/site";
import { getServiceBySlug } from "@/data/services";

const footerServices = footerServiceSlugs
  .map((slug) => getServiceBySlug(slug))
  .filter(Boolean);

const footerLinkClass = "link-muted text-sm";

export default function Footer() {
  const emailHref = getEmailHref();
  const phoneHref = getPhoneHref();
  const creditIsLink = hasValue(businessDetails.creditUrl);

  return (
    <footer className="relative w-full bg-surface border-t border-gold/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center sm:text-left">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <HomeLogoLink
              className="theme-logo inline-block mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              width={260}
              height={90}
              imageClassName="w-[180px] sm:w-[200px] lg:w-[240px] h-auto mx-auto sm:mx-0"
            />
            <p className="text-ink-muted leading-relaxed text-sm mb-5 max-w-sm mx-auto sm:mx-0">
              {businessDetails.brandDescription}
            </p>
            <ConsultationCta
              location="footer"
              className="min-h-11 px-5 text-sm"
            >
              Book a Consultation
            </ConsultationCta>
          </div>

          <div>
            <h2 className="text-base font-semibold text-ink mb-3 tracking-wide">
              Services
            </h2>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-muted text-sm leading-snug"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="link-gold text-sm font-semibold">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-ink mb-3 tracking-wide">
              Company
            </h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-muted text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-ink mb-3 tracking-wide">
              Contact
            </h2>
            <div className="text-ink-muted space-y-3 text-sm">
              {phoneHref && (
                <p>
                  <span className="block text-ink text-xs uppercase tracking-wider mb-1">
                    Phone
                  </span>
                  <a
                    href={phoneHref}
                    aria-label={`Call ${businessDetails.phone}`}
                    className="link-gold"
                  >
                    {businessDetails.phone}
                  </a>
                </p>
              )}
              {hasValue(businessDetails.email) && (
                <p>
                  <span className="block text-ink text-xs uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <a
                    href={emailHref || `mailto:${businessDetails.email}`}
                    aria-label={`Email ${businessDetails.email}`}
                    className="link-gold break-all"
                  >
                    {businessDetails.email}
                  </a>
                </p>
              )}
              <p>
                <span className="block text-ink text-xs uppercase tracking-wider mb-1">
                  Opening hours
                </span>
                Monday to Friday
                <br />
                8:00am to 5:00pm
              </p>
              {hasValue(businessDetails.weekendHours) && (
                <p>
                  <span className="block text-ink text-xs uppercase tracking-wider mb-1">
                    Weekend
                  </span>
                  Saturday and Sunday
                  <br />
                  Appointments only
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/20 space-y-2 text-center sm:text-left">
          <p className="text-ink-muted text-sm leading-relaxed">
            {getCompanyDisclosure()}
          </p>
          {hasValue(businessDetails.registeredOffice) && (
            <p className="text-ink-muted text-sm leading-relaxed">
              Address: {businessDetails.registeredOffice}.
            </p>
          )}
        </div>
      </div>

      <div className="bg-surface-elevated border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 space-y-3">
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2"
          >
            {footerLegalLinks.map((item, index) => (
              <span key={item.href} className="inline-flex items-center">
                {index > 0 && (
                  <span className="mx-3 text-gold/30" aria-hidden="true">
                    |
                  </span>
                )}
                <Link href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </span>
            ))}
            <span className="inline-flex items-center">
              <span className="mx-3 text-gold/30" aria-hidden="true">
                |
              </span>
              <CookieSettingsButton className={footerLinkClass} />
            </span>
          </nav>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 text-center">
            <p className="text-ink-muted text-sm">
              © {new Date().getFullYear()} {businessDetails.legalName}. All
              rights reserved.
            </p>
            <p className="text-ink-muted text-sm">
              Made with ❤️ by{" "}
              {creditIsLink ? (
                <a
                  href={businessDetails.creditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold"
                >
                  {businessDetails.creditName}
                </a>
              ) : (
                <span>{businessDetails.creditName}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
