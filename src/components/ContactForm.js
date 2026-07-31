"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useRef, useState } from "react";
import {
  clientTypeOptions,
  contactMethodOptions,
  serviceOptions,
} from "@/config/business";
import { validateContactPayload } from "@/lib/contactValidation";
import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  clientType: "",
  serviceRequired: "",
  preferredContactMethod: "",
  message: "",
  privacyAccepted: false,
  website: "",
};

export default function ContactForm({ defaultService = "" }) {
  const router = useRouter();
  const formId = useId();
  const errorSummaryRef = useRef(null);
  const [form, setForm] = useState({
    ...initialForm,
    serviceRequired: defaultService || "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const submitting = status === "submitting";

  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;

    const validation = validateContactPayload(form);
    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    setStatusMessage("Submitting your enquiry…");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validation.data,
          sourcePage:
            typeof window !== "undefined" ? window.location.href : "/contact",
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result?.errors) {
          setErrors(result.errors);
        }
        setStatus("error");
        setStatusMessage(
          result?.message ||
            "We could not submit your enquiry. Please try again shortly."
        );
        requestAnimationFrame(() => errorSummaryRef.current?.focus());
        return;
      }

      trackEvent(AnalyticsEvents.CONTACT_FORM_SUBMIT, {
        service: validation.data.serviceRequired,
        client_type: validation.data.clientType,
      });

      setStatus("success");
      setStatusMessage("Your enquiry has been submitted.");
      setForm({ ...initialForm, serviceRequired: defaultService || "" });
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not submit your enquiry. Please try again shortly."
      );
    }
  }

  const errorEntries = Object.entries(errors).filter(([key]) => key !== "form");

  return (
    <form
      id="enquiry-form"
      noValidate
      onSubmit={handleSubmit}
      className="relative bg-gradient-to-br from-surface-elevated to-surface p-6 md:p-8 rounded-xl border border-gold/20 space-y-5"
      aria-describedby={`${formId}-status`}
    >
      <div
        id={`${formId}-status`}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {statusMessage}
      </div>

      {errorEntries.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-400/40 bg-red-950/30 p-4"
        >
          <p className="font-semibold text-ink mb-2">
            There {errorEntries.length === 1 ? "is" : "are"}{" "}
            {errorEntries.length}{" "}
            {errorEntries.length === 1 ? "problem" : "problems"} with your
            submission:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-ink-muted">
            {errorEntries.map(([key, message]) => (
              <li key={key}>
                <a href={`#${formId}-${key}`} className="text-gold underline">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "error" && errors.form && (
        <p role="alert" className="text-sm text-red-300">
          {errors.form}
        </p>
      )}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <Field
        id={`${formId}-fullName`}
        label="Full name"
        error={errors.fullName}
        required
      >
        <input
          id={`${formId}-fullName`}
          name="fullName"
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          className={inputClass(errors.fullName)}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          id={`${formId}-email`}
          label="Email address"
          error={errors.email}
          required
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          />
        </Field>

        <Field
          id={`${formId}-phone`}
          label="Phone number"
          error={errors.phone}
          required
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          id={`${formId}-clientType`}
          label="Client type"
          error={errors.clientType}
          required
        >
          <select
            id={`${formId}-clientType`}
            name="clientType"
            value={form.clientType}
            onChange={(e) => updateField("clientType", e.target.value)}
            className={inputClass(errors.clientType)}
            aria-invalid={Boolean(errors.clientType)}
          >
            <option value="">Select client type</option>
            {clientTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${formId}-serviceRequired`}
          label="Service required"
          error={errors.serviceRequired}
          required
        >
          <select
            id={`${formId}-serviceRequired`}
            name="serviceRequired"
            value={form.serviceRequired}
            onChange={(e) => updateField("serviceRequired", e.target.value)}
            className={inputClass(errors.serviceRequired)}
            aria-invalid={Boolean(errors.serviceRequired)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={`${formId}-preferredContactMethod`}
        label="Preferred contact method"
        error={errors.preferredContactMethod}
        required
      >
        <select
          id={`${formId}-preferredContactMethod`}
          name="preferredContactMethod"
          value={form.preferredContactMethod}
          onChange={(e) => updateField("preferredContactMethod", e.target.value)}
          className={inputClass(errors.preferredContactMethod)}
          aria-invalid={Boolean(errors.preferredContactMethod)}
        >
          <option value="">Select preferred method</option>
          {contactMethodOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={`${formId}-message`}
        label="Message"
        error={errors.message}
        required
        hint="Tell us briefly what support you need."
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass(errors.message)}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-muted">
          <input
            id={`${formId}-privacyAccepted`}
            name="privacyAccepted"
            type="checkbox"
            checked={form.privacyAccepted}
            onChange={(e) => updateField("privacyAccepted", e.target.checked)}
            className="mt-1 h-4 w-4"
            aria-invalid={Boolean(errors.privacyAccepted)}
          />
          <span>
            I have read and understand the{" "}
            <Link
              href="/privacy"
              className="text-gold underline underline-offset-2"
            >
              Privacy Policy
            </Link>{" "}
            and consent to Sterling Crest Accountants contacting me about this
            enquiry.
          </span>
        </label>
        {errors.privacyAccepted && (
          <p id={`${formId}-privacyAccepted-error`} className="mt-2 text-sm text-red-300">
            {errors.privacyAccepted}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full min-h-12 rounded-lg bg-gold text-on-gold font-semibold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {submitting ? "Submitting…" : "Send enquiry"}
      </button>

      {status === "error" && statusMessage && !errorEntries.length && (
        <p role="alert" className="text-sm text-red-300">
          {statusMessage}
        </p>
      )}
    </form>
  );
}

function Field({ id, label, error, required, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink mb-2">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      {hint ? <p className="text-xs text-ink-muted mb-2">{hint}</p> : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError) {
  return `w-full min-h-11 rounded-md border bg-surface px-3 py-2 text-ink placeholder:text-ink-muted/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
    hasError ? "border-red-400" : "border-gold/30"
  }`;
}
