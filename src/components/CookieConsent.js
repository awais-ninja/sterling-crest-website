"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  getStoredConsent,
  isAnalyticsConfigured,
  OPEN_COOKIE_SETTINGS_EVENT,
  storeConsent,
} from "@/lib/analytics";

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("sc-consent-updated", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("sc-consent-updated", callback);
  };
}

function getBannerSnapshot() {
  if (!isAnalyticsConfigured()) return false;
  return !getStoredConsent();
}

function getServerSnapshot() {
  return false;
}

/**
 * Cookie consent banner.
 * Shows automatically when analytics is configured and consent is missing,
 * or when opened from Cookie settings in the footer.
 */
export default function CookieConsent() {
  const needsConsent = useSyncExternalStore(
    subscribe,
    getBannerSnapshot,
    getServerSnapshot
  );
  const [forcedOpen, setForcedOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    function handleOpenSettings() {
      const existing = getStoredConsent();
      setAnalytics(Boolean(existing?.analytics));
      setManaging(true);
      setForcedOpen(true);
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
    };
  }, []);

  const visible = needsConsent || forcedOpen;
  if (!visible) return null;

  function closePanel() {
    setForcedOpen(false);
    setManaging(false);
  }

  function acceptAll() {
    storeConsent({ essential: true, analytics: true, marketing: false });
    closePanel();
  }

  function rejectNonEssential() {
    storeConsent({ essential: true, analytics: false, marketing: false });
    closePanel();
  }

  function savePreferences() {
    storeConsent({ essential: true, analytics, marketing: false });
    closePanel();
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-gold/30 bg-surface-elevated p-5 shadow-2xl">
        <h2 id="cookie-consent-title" className="text-lg font-semibold text-ink mb-2">
          Cookie settings
        </h2>
        <p id="cookie-consent-desc" className="text-sm text-ink-muted mb-4 leading-relaxed">
          We use essential cookies to make this website work. With your permission,
          we may also use analytics cookies to understand how the site is used.{" "}
          <Link href="/cookies" className="text-gold underline underline-offset-2">
            Read the cookie policy
          </Link>
          .
        </p>

        {(managing || forcedOpen) && (
          <fieldset className="mb-4 border border-gold/20 rounded-lg p-4">
            <legend className="px-1 text-sm text-ink">Preferences</legend>
            <label className="flex items-start gap-3 text-sm text-ink-muted mb-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <strong className="text-ink">Essential</strong> cookies are
                required for security and basic site functions.
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                disabled={!isAnalyticsConfigured()}
                className="mt-1"
              />
              <span>
                <strong className="text-ink">Analytics</strong> cookies help
                us understand site usage. Optional
                {!isAnalyticsConfigured() ? " (not currently enabled on this site)" : ""}.
              </span>
            </label>
          </fieldset>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 px-4 rounded-md bg-gold text-on-gold font-semibold hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-11 px-4 rounded-md border border-gold text-gold font-semibold hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Reject
          </button>
          {managing || forcedOpen ? (
            <button
              type="button"
              onClick={savePreferences}
              className="min-h-11 px-4 rounded-md border border-ink-muted text-ink font-semibold hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setManaging(true)}
              className="min-h-11 px-4 rounded-md border border-ink-muted text-ink font-semibold hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Manage preferences
            </button>
          )}
          {forcedOpen && (
            <button
              type="button"
              onClick={closePanel}
              className="min-h-11 px-4 rounded-md text-ink-muted font-semibold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
