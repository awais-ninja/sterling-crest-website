"use client";

import { openCookieSettings } from "@/lib/analytics";

export default function CookieSettingsButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className}
    >
      Cookie settings
    </button>
  );
}
