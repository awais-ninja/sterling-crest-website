"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  businessDetails,
  getPhoneHref,
  megaMenuColumns,
} from "@/config/business";
import { navigation } from "@/config/site";
import { getServiceBySlug } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import TopBar from "@/components/TopBar";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesButtonId = useId();
  const servicesPanelId = useId();
  const mobileServicesButtonId = useId();
  const mobileServicesPanelId = useId();
  const desktopServicesRef = useRef(null);
  const closeTimerRef = useRef(null);

  const phoneHref = getPhoneHref();
  const columnOne = megaMenuColumns[0]
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
  const columnTwo = megaMenuColumns[1]
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setIsOpen(false);
        setMobileServicesOpen(false);
      }
    }

    function onPointerDown(event) {
      if (
        desktopServicesRef.current &&
        !desktopServicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function openServices() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 160);
  }

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const linkClass = (href) =>
    `min-h-11 inline-flex items-center px-1 text-[0.95rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A] ${
      isActive(href)
        ? "text-[#C9A14A]"
        : "text-[#F5F7FA] hover:text-[#C9A14A]"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#0B1C2D] border-b border-[#C9A14A]/50 transition-shadow ${
          isScrolled ? "shadow-lg shadow-black/25" : ""
        }`}
      >
        <TopBar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 lg:gap-6 h-[4.75rem] lg:h-[5.25rem]">
            <Link
              href="/"
              className="flex items-center shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              aria-label={`${businessDetails.legalName} home`}
            >
              <Image
                src="/logo.svg"
                alt={businessDetails.legalName}
                width={220}
                height={75}
                className="w-[150px] sm:w-[170px] lg:w-[200px] xl:w-[210px] h-auto"
                priority
              />
            </Link>

            <nav
              className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 flex-1"
              aria-label="Primary"
            >
              {navigation.map((item) =>
                item.href === "/services" ? (
                  <div
                    key={item.href}
                    ref={desktopServicesRef}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <div className="flex items-center gap-0.5">
                      <Link
                        id={servicesButtonId}
                        href="/services"
                        className={`${linkClass("/services")} gap-1.5 ${
                          servicesOpen ? "text-[#C9A14A]" : ""
                        }`}
                        aria-current={isActive("/services") ? "page" : undefined}
                        aria-expanded={servicesOpen}
                        aria-controls={servicesPanelId}
                        aria-haspopup="true"
                        onFocus={openServices}
                        onClick={() => setServicesOpen(false)}
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        aria-label={
                          servicesOpen
                            ? "Close services menu"
                            : "Open services menu"
                        }
                        aria-expanded={servicesOpen}
                        aria-controls={servicesPanelId}
                        className={`min-h-11 min-w-8 inline-flex items-center justify-center text-[#F5F7FA] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A] ${
                          servicesOpen ? "text-[#C9A14A]" : ""
                        }`}
                        onClick={() => setServicesOpen((open) => !open)}
                        onFocus={openServices}
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      id={servicesPanelId}
                      role="region"
                      aria-labelledby={servicesButtonId}
                      hidden={!servicesOpen}
                      className={`absolute top-full left-0 pt-3 w-[min(92vw,42rem)] z-50 ${
                        servicesOpen ? "block" : "hidden"
                      }`}
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                    >
                      <div className="rounded-2xl border border-[#C9A14A]/35 bg-[#081524] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)] overflow-hidden">
                        <div
                          className="h-1 bg-gradient-to-r from-[#C9A14A] via-[#B08B3E] to-[#C9A14A]/30"
                          aria-hidden="true"
                        />

                        <div className="px-5 pt-4 pb-2">
                          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#C9A14A]">
                            Our services
                          </p>
                          <p className="text-xs text-[#AAB2BD] mt-1 max-w-md">
                            Practical accounting and tax support for individuals
                            and businesses.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-1 px-3 pb-3">
                          <ul className="space-y-0.5">
                            {columnOne.map((service) => (
                              <li key={service.slug}>
                                <ServiceMenuLink
                                  service={service}
                                  onNavigate={() => setServicesOpen(false)}
                                />
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-0.5 border-l border-[#C9A14A]/15 pl-1">
                            {columnTwo.map((service) => (
                              <li key={service.slug}>
                                <ServiceMenuLink
                                  service={service}
                                  onNavigate={() => setServicesOpen(false)}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#C9A14A]/25 bg-[#0B1C2D]/85 px-5 py-3.5">
                          <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#C9A14A] hover:text-[#B08B3E] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                            onClick={() => setServicesOpen(false)}
                          >
                            View all services
                            <span aria-hidden="true">→</span>
                          </Link>
                          <a
                            href={businessDetails.consultationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Book a consultation on Picktime (opens in a new tab)"
                            className="inline-flex items-center justify-center min-h-10 px-4 rounded-md bg-[#C9A14A] text-[#0B1C2D] text-sm font-semibold hover:bg-[#B08B3E] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                            onClick={() => {
                              trackEvent(AnalyticsEvents.CONSULTATION_CLICK, {
                                location: "services_dropdown",
                              });
                              setServicesOpen(false);
                            }}
                          >
                            Book a Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={linkClass(item.href)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
              <a
                href={businessDetails.consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consultation on Picktime (opens in a new tab)"
                onClick={() =>
                  trackEvent(AnalyticsEvents.CONSULTATION_CLICK, {
                    location: "navbar",
                  })
                }
                className="inline-flex items-center justify-center min-h-11 px-5 rounded-md bg-[#C9A14A] text-[#0B1C2D] text-sm font-semibold shadow-md shadow-black/20 hover:bg-[#B08B3E] hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              >
                Book a Consultation
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden text-[#C9A14A] min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/55 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 h-full w-[min(100%,22rem)] bg-[#0B1C2D] z-50 shadow-2xl lg:hidden overflow-y-auto border-l border-[#C9A14A]/35"
          >
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-center mb-8 gap-3">
                <Image
                  src="/logo.svg"
                  alt={businessDetails.legalName}
                  width={180}
                  height={60}
                  className="w-[160px] h-auto"
                />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-[#C9A14A] min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {navigation.map((item) =>
                  item.href === "/services" ? (
                    <div key={item.href} className="border-b border-[#C9A14A]/15 pb-2 mb-1">
                      <div className="flex items-center gap-1">
                        <Link
                          href="/services"
                          className="flex-1 text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-3 font-medium min-h-12 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive("/services") ? "page" : undefined}
                        >
                          Services
                        </Link>
                        <button
                          id={mobileServicesButtonId}
                          type="button"
                          aria-expanded={mobileServicesOpen}
                          aria-controls={mobileServicesPanelId}
                          aria-label={
                            mobileServicesOpen
                              ? "Collapse services list"
                              : "Expand services list"
                          }
                          className="min-h-12 min-w-12 inline-flex items-center justify-center text-[#F5F7FA] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                          onClick={() =>
                            setMobileServicesOpen((open) => !open)
                          }
                        >
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      <div
                        id={mobileServicesPanelId}
                        role="region"
                        aria-labelledby={mobileServicesButtonId}
                        hidden={!mobileServicesOpen}
                        className={mobileServicesOpen ? "pb-2 pl-2" : undefined}
                      >
                        {mobileServicesOpen &&
                          [...columnOne, ...columnTwo].map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block text-[#AAB2BD] hover:text-[#C9A14A] transition-colors py-2.5 text-sm min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.navLabel}
                            </Link>
                          ))}
                        <Link
                          href="/services"
                          className="block text-[#C9A14A] font-semibold py-2.5 text-sm min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                          onClick={() => setIsOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[#F5F7FA] hover:text-[#C9A14A] transition-colors py-3 font-medium min-h-12 border-b border-[#C9A14A]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-6 space-y-3">
                {phoneHref && (
                  <a
                    href={phoneHref}
                    aria-label={`Call us on ${businessDetails.phone}`}
                    onClick={() => {
                      trackEvent(AnalyticsEvents.PHONE_CLICK, {
                        location: "mobile_nav",
                      });
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center min-h-12 rounded-md border border-[#C9A14A]/40 text-[#F5F7FA] font-medium hover:border-[#C9A14A] hover:text-[#C9A14A] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  >
                    Call Us
                  </a>
                )}
                <a
                  href={businessDetails.consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a consultation on Picktime (opens in a new tab)"
                  className="flex items-center justify-center w-full min-h-12 rounded-md bg-[#C9A14A] text-[#0B1C2D] font-semibold hover:bg-[#B08B3E] transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
                  onClick={() => {
                    trackEvent(AnalyticsEvents.CONSULTATION_CLICK, {
                      location: "mobile_nav",
                    });
                    setIsOpen(false);
                  }}
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function ServiceMenuLink({ service, onNavigate }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#0B1C2D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
      onClick={onNavigate}
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A14A]/10 text-[#C9A14A] group-hover:bg-[#C9A14A]/20 transition-colors">
        <ServiceIcon slug={service.slug} className="w-[1.125rem] h-[1.125rem]" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-[#F5F7FA] group-hover:text-[#C9A14A] transition-colors">
          {service.navLabel}
        </span>
        <span className="block text-xs text-[#AAB2BD] leading-snug mt-0.5 line-clamp-2">
          {service.summary}
        </span>
      </span>
    </Link>
  );
}
