import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contactValidation";
import { rateLimit } from "@/lib/rateLimit";
import { sanitizeText } from "@/lib/sanitize";

export const runtime = "nodejs";

const USER_ERROR =
  "We could not submit your enquiry. Please try again shortly.";

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const limited = rateLimit(`contact:${ip}`, {
      limit: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!limited.allowed) {
      return NextResponse.json(
        {
          message:
            "Too many enquiries have been sent from this connection. Please try again later.",
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid request payload." },
        { status: 400 }
      );
    }

    const validation = validateContactPayload(body);

    if (validation.honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!validation.ok) {
      return NextResponse.json(
        {
          message: "Please correct the highlighted fields and try again.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();

    if (!webhookUrl) {
      console.error(
        "Contact form configuration incomplete. Set GOOGLE_SHEETS_WEBHOOK_URL."
      );
      return NextResponse.json(
        {
          message: USER_ERROR,
          code: "CONFIG_MISSING",
        },
        { status: 503 }
      );
    }

    const sourcePage = sanitizeText(String(body.sourcePage || ""), 500);
    const userAgent = sanitizeText(
      request.headers.get("user-agent") || "",
      500
    );

    const payload = {
      ...validation.data,
      submittedAt: new Date().toISOString(),
      sourcePage,
      userAgent,
    };

    let sheetResponse;
    try {
      sheetResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });
    } catch (error) {
      console.error("Google Sheets webhook request failed.");
      return NextResponse.json({ message: USER_ERROR }, { status: 502 });
    }

    let sheetResult = null;
    try {
      sheetResult = await sheetResponse.json();
    } catch {
      sheetResult = null;
    }

    const confirmed =
      sheetResponse.ok &&
      sheetResult &&
      (sheetResult.success === true || sheetResult.ok === true);

    if (!confirmed) {
      console.error(
        "Google Sheets webhook did not confirm success.",
        sheetResponse.status
      );
      return NextResponse.json({ message: USER_ERROR }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API unexpected error.");
    return NextResponse.json({ message: USER_ERROR }, { status: 500 });
  }
}
