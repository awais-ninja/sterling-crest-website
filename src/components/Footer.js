import Image from "next/image";
import Link from "next/link";
import { ConsultationCta } from "@/components/ConsultationCta";
import {
  businessDetails,
  footerServiceSlugs,
  getCompanyDisclosure,
  getEmailHref,
  getPhoneHref,
  hasValue,
} from "@/config/business";
import { legalLinks, navigation } from "@/config/site";
import { getServiceBySlug } from "@/data/services";

const footerServices = footerServiceSlugs
  .map((slug) => getServiceBySlug(slug))
  .filter(Boolean);

export default function Footer() {
  const emailHref = getEmailHref();
  const phoneHref = getPhoneHref();
  const creditIsLink = hasValue(businessDetails.creditUrl);

  return (
    <footer className="relative w-full bg-[#0B1C2D] border-t border-[#C9A14A]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center sm:text-left">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <Link
              href="/"
              className="inline-block mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
            >
              <Image
                src="/logo.svg"
                alt={businessDetails.legalName}
                width={260}
                height={90}
                className="w-[180px] sm:w-[200px] lg:w-[240px] h-auto mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-[#AAB2BD] leading-relaxed text-sm mb-5 max-w-sm mx-auto sm:mx-0">
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
            <h2 className="text-base font-semibold text-[#F5F7FA] mb-3 tracking-wide">
              Services
            </h2>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors text-sm leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-[#C9A14A] hover:text-[#B08B3E] transition-colors text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#F5F7FA] mb-3 tracking-wide">
              Company
            </h2>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#AAB2BD] hover:text-[#C9A14A] transition-colors text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#F5F7FA] mb-3 tracking-wide">
              Contact
            </h2>
            <div className="text-[#AAB2BD] space-y-3 text-sm">
              {phoneHref && (
                <p>
                  <span className="block text-[#F5F7FA] text-xs uppercase tracking-wider mb-1">
                    Phone
                  </span>
                  <a
                    href={phoneHref}
                    aria-label={`Call ${businessDetails.phone}`}
                    className="text-[#C9A14A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    {businessDetails.phone}
                  </a>
                </p>
              )}
              {hasValue(businessDetails.email) && (
                <p>
                  <span className="block text-[#F5F7FA] text-xs uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <a
                    href={emailHref || `mailto:${businessDetails.email}`}
                    aria-label={`Email ${businessDetails.email}`}
                    className="text-[#C9A14A] hover:underline break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    {businessDetails.email}
                  </a>
                </p>
              )}
              <p>
                <span className="block text-[#F5F7FA] text-xs uppercase tracking-wider mb-1">
                  Opening hours
                </span>
                Monday to Friday
                <br />
                8:00am to 5:00pm
              </p>
              {hasValue(businessDetails.weekendHours) && (
                <p>
                  <span className="block text-[#F5F7FA] text-xs uppercase tracking-wider mb-1">
                    Weekend
                  </span>
                  Saturday and Sunday
                  <br />
                  Appointments only
                  <br />
                  <a
                    href={businessDetails.consultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a weekend appointment on Picktime (opens in a new tab)"
                    className="inline-block mt-1.5 text-xs font-medium text-[#C9A14A] hover:text-[#B08B3E] underline underline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    Book appointment
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#C9A14A]/20 space-y-2 text-center sm:text-left">
          <p className="text-[#AAB2BD] text-sm leading-relaxed">
            {getCompanyDisclosure()}
          </p>
          {hasValue(businessDetails.registeredOffice) && (
            <p className="text-[#AAB2BD] text-sm leading-relaxed">
              Address: {businessDetails.registeredOffice}.
            </p>
          )}
        </div>
      </div>

      <div className="bg-[#081524] border-t border-[#C9A14A]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 text-center">
            <p className="text-[#AAB2BD] text-sm">
              © {new Date().getFullYear()} {businessDetails.legalName}. All
              rights reserved.
            </p>
            <p className="text-[#AAB2BD] text-sm">
              Website by{" "}
              {creditIsLink ? (
                <a
                  href={businessDetails.creditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A14A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
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
