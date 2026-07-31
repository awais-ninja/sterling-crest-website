"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { businessDetails, getPhoneHref } from "@/config/business";
import { navigation } from "@/config/site";
import { getAudienceCategoriesWithAudiences } from "@/data/audiences";
import { getServiceCategoriesWithServices } from "@/data/services";
import HomeLogoLink from "@/components/HomeLogoLink";
import ThemeToggle from "@/components/ThemeToggle";
import TopBar from "@/components/TopBar";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const phoneHref = getPhoneHref();
  const serviceCategories = getServiceCategoriesWithServices();
  const audienceCategories = getAudienceCategoriesWithAudiences();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsOpen(false);
        setMobileExpanded(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function goToTop(event) {
    if (pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }

  const linkClass = (href, activeExtra = false) =>
    `min-h-11 inline-flex items-center px-1 text-[0.95rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
      isActive(href) || activeExtra
        ? "text-gold"
        : "text-ink hover:text-gold"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-surface border-b border-gold/50 transition-shadow ${
          isScrolled ? "shadow-lg shadow-black/25" : ""
        }`}
      >
        <TopBar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 lg:gap-6 h-[4.75rem] lg:h-[5.25rem]">
            <HomeLogoLink
              className="theme-logo flex items-center shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              imageClassName="w-[150px] sm:w-[170px] lg:w-[200px] xl:w-[210px] h-auto"
              width={220}
              height={75}
              priority
              onNavigate={() => setIsOpen(false)}
            />

            <nav
              className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1"
              aria-label="Primary"
            >
              {navigation.map((item) => {
                if (item.href === "/services") {
                  return (
                    <MegaMenu
                      key={item.href}
                      id="services"
                      href="/services"
                      label="Services"
                      open={openMenu === "services"}
                      setOpenMenu={setOpenMenu}
                      isActive={isActive("/services")}
                      linkClass={linkClass}
                      viewAllLabel="All services"
                      columns={serviceCategories.map((category) => ({
                        title: category.title,
                        items: category.services.map((service) => ({
                          href: `/services/${service.slug}`,
                          label: service.navLabel,
                        })),
                      }))}
                    />
                  );
                }

                if (item.href === "/who-we-serve") {
                  return (
                    <MegaMenu
                      key={item.href}
                      id="audiences"
                      href="/who-we-serve"
                      label="Who We Serve"
                      open={openMenu === "audiences"}
                      setOpenMenu={setOpenMenu}
                      isActive={isActive("/who-we-serve")}
                      linkClass={linkClass}
                      viewAllLabel="All audiences"
                      columns={audienceCategories.map((category) => ({
                        title: category.title,
                        items: category.audiences.map((audience) => ({
                          href: `/who-we-serve/${audience.slug}`,
                          label: audience.navLabel,
                        })),
                      }))}
                    />
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={item.href === "/" ? goToTop : undefined}
                    className={linkClass(item.href)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <ThemeToggle />
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
                className="inline-flex items-center justify-center min-h-11 px-5 rounded-md bg-gold text-on-gold text-sm font-semibold shadow-md shadow-black/20 hover:bg-gold-dark hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Book a Consultation
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="text-gold min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
            className="fixed top-0 right-0 h-full w-[min(100%,22rem)] bg-surface z-50 shadow-2xl lg:hidden overflow-y-auto border-l border-gold/35"
          >
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-center mb-8 gap-3">
                <HomeLogoLink
                  className="theme-logo"
                  width={180}
                  height={60}
                  imageClassName="w-[160px] h-auto"
                  onNavigate={() => setIsOpen(false)}
                />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gold min-h-11 min-w-11 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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
                {navigation.map((item) => {
                  if (item.href === "/services") {
                    return (
                      <MobileAccordion
                        key={item.href}
                        id="services"
                        href="/services"
                        label="Services"
                        isActive={isActive("/services")}
                        expanded={mobileExpanded === "services"}
                        setExpanded={setMobileExpanded}
                        onNavigate={() => setIsOpen(false)}
                        viewAllLabel="View all services"
                        columns={serviceCategories.map((category) => ({
                          title: category.title,
                          items: category.services.map((service) => ({
                            href: `/services/${service.slug}`,
                            label: service.navLabel,
                          })),
                        }))}
                      />
                    );
                  }

                  if (item.href === "/who-we-serve") {
                    return (
                      <MobileAccordion
                        key={item.href}
                        id="audiences"
                        href="/who-we-serve"
                        label="Who We Serve"
                        isActive={isActive("/who-we-serve")}
                        expanded={mobileExpanded === "audiences"}
                        setExpanded={setMobileExpanded}
                        onNavigate={() => setIsOpen(false)}
                        viewAllLabel="View all audiences"
                        columns={audienceCategories.map((category) => ({
                          title: category.title,
                          items: category.audiences.map((audience) => ({
                            href: `/who-we-serve/${audience.slug}`,
                            label: audience.navLabel,
                          })),
                        }))}
                      />
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-ink hover:text-gold transition-colors py-3 font-medium min-h-12 border-b border-gold/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      onClick={(event) => {
                        if (item.href === "/") goToTop(event);
                        setIsOpen(false);
                      }}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
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
                    className="flex items-center justify-center min-h-12 rounded-md border border-gold/40 text-ink font-medium hover:border-gold hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    Call Us
                  </a>
                )}
                <a
                  href={businessDetails.consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a consultation on Picktime (opens in a new tab)"
                  className="flex items-center justify-center w-full min-h-12 rounded-md bg-gold text-on-gold font-semibold hover:bg-gold-dark transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
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

function MegaMenu({
  id,
  href,
  label,
  open,
  setOpenMenu,
  isActive,
  linkClass,
  viewAllLabel,
  columns,
}) {
  const buttonId = useId();
  const panelId = useId();
  const rootRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [panelTop, setPanelTop] = useState(0);

  function openMenu() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(id);
  }

  function scheduleClose() {
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu((current) => (current === id ? null : current));
    }, 140);
  }

  useEffect(() => {
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        const panel = document.getElementById(panelId);
        if (panel && panel.contains(event.target)) return;
        setOpenMenu((current) => (current === id ? null : current));
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [id, panelId, setOpenMenu]);

  useEffect(() => {
    if (!open || !rootRef.current) return undefined;

    function updatePosition() {
      if (!rootRef.current) return;
      setPanelTop(rootRef.current.getBoundingClientRect().bottom);
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className="flex items-center gap-0.5">
        <Link
          id={buttonId}
          href={href}
          className={`${linkClass(href, open)} gap-1`}
          aria-current={isActive ? "page" : undefined}
          aria-expanded={open}
          aria-controls={panelId}
          aria-haspopup="true"
          onFocus={openMenu}
          onClick={() => setOpenMenu(null)}
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={open ? `Close ${label} menu` : `Open ${label} menu`}
          aria-expanded={open}
          aria-controls={panelId}
          className={`min-h-11 min-w-7 inline-flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
            open || isActive ? "text-gold" : "text-ink hover:text-gold"
          }`}
          onClick={() => setOpenMenu(open ? null : id)}
          onFocus={openMenu}
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              open ? "rotate-180" : ""
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
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        style={{ top: panelTop }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[min(96vw,72rem)] pt-2 ${
          open ? "block" : "hidden"
        }`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className="rounded-xl border border-gold/30 bg-surface-elevated shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] overflow-hidden">
          <div
            className="h-0.5 bg-gradient-to-r from-gold via-gold/70 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-6 p-5 sm:p-6 lg:p-7">
            {columns.map((column) => (
              <div key={column.title} className="min-w-0">
                <p className="mb-3 pb-2 border-b border-gold/20 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  {column.title}
                </p>
                <ul className="space-y-0.5">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-2.5 py-2 text-[0.9rem] leading-snug text-ink hover:bg-surface hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gold/20 px-5 sm:px-6 lg:px-7 py-3.5 bg-surface/70">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold link-gold"
              onClick={() => setOpenMenu(null)}
            >
              {viewAllLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  id,
  href,
  label,
  isActive,
  expanded,
  setExpanded,
  onNavigate,
  viewAllLabel,
  columns,
}) {
  const buttonId = useId();
  const panelId = useId();

  return (
    <div className="border-b border-gold/15 pb-2 mb-1">
      <div className="flex items-center gap-1">
        <Link
          href={href}
          className="flex-1 text-ink hover:text-gold transition-colors py-3 font-medium min-h-12 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          onClick={onNavigate}
          aria-current={isActive ? "page" : undefined}
        >
          {label}
        </Link>
        <button
          id={buttonId}
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={expanded ? `Collapse ${label}` : `Expand ${label}`}
          className="min-h-12 min-w-12 inline-flex items-center justify-center text-ink hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          onClick={() => setExpanded(expanded ? null : id)}
        >
          <svg
            className={`w-5 h-5 transition-transform ${
              expanded ? "rotate-180" : ""
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

      {expanded && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-2 pl-1">
          {columns.map((column) => (
            <div key={column.title} className="mb-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold py-1.5">
                {column.title}
              </p>
              {column.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-ink-muted hover:text-gold transition-colors py-1.5 text-sm min-h-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href={href}
            className="block link-gold font-semibold py-2 text-sm"
            onClick={onNavigate}
          >
            {viewAllLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
