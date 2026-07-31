"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  getStoredConsent,
  isAnalyticsConfigured,
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
 * Only shown when analytics is configured (non essential cookies may be used).
 */
export default function CookieConsent() {
  const visible = useSyncExternalStore(
    subscribe,
    getBannerSnapshot,
    getServerSnapshot
  );
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  if (!visible) return null;

  function acceptAll() {
    storeConsent({ essential: true, analytics: true, marketing: false });
  }

  function rejectNonEssential() {
    storeConsent({ essential: true, analytics: false, marketing: false });
  }

  function savePreferences() {
    storeConsent({ essential: true, analytics, marketing: false });
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-[#C9A14A]/30 bg-[#081524] p-5 shadow-2xl">
        <h2 id="cookie-consent-title" className="text-lg font-semibold text-[#F5F7FA] mb-2">
          Cookies
        </h2>
        <p id="cookie-consent-desc" className="text-sm text-[#AAB2BD] mb-4 leading-relaxed">
          We use essential cookies to make this website work. With your permission,
          we may also use analytics cookies to understand how the site is used.{" "}
          <Link href="/cookies" className="text-[#C9A14A] underline underline-offset-2">
            Read the cookie policy
          </Link>
          .
        </p>

        {managing && (
          <fieldset className="mb-4 border border-[#C9A14A]/20 rounded-lg p-4">
            <legend className="px-1 text-sm text-[#F5F7FA]">Preferences</legend>
            <label className="flex items-start gap-3 text-sm text-[#AAB2BD] mb-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <strong className="text-[#F5F7FA]">Essential</strong> cookies are
                required for security and basic site functions.
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-[#AAB2BD]">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1"
              />
              <span>
                <strong className="text-[#F5F7FA]">Analytics</strong> cookies help
                us understand site usage. Optional.
              </span>
            </label>
          </fieldset>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-11 px-4 rounded-md bg-[#C9A14A] text-[#0B1C2D] font-semibold hover:bg-[#B08B3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-11 px-4 rounded-md border border-[#C9A14A] text-[#C9A14A] font-semibold hover:bg-[#C9A14A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
          >
            Reject
          </button>
          {managing ? (
            <button
              type="button"
              onClick={savePreferences}
              className="min-h-11 px-4 rounded-md border border-[#AAB2BD] text-[#F5F7FA] font-semibold hover:border-[#C9A14A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setManaging(true)}
              className="min-h-11 px-4 rounded-md border border-[#AAB2BD] text-[#F5F7FA] font-semibold hover:border-[#C9A14A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A14A]"
            >
              Manage preferences
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
