import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  location?: string;
  interest?: string;
  message?: string;
};

/**
 * Demo contact endpoint.
 *
 * PRODUCTION:
 * - Point NEXT_PUBLIC_CONTACT_ENDPOINT at your preferred provider, or
 * - Extend this route to forward payloads to email/CRM services using
 *   server-only environment variables (never invent or hardcode Kevin's email).
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // Development / demo: simulate a successful submission without sending email.
  if (process.env.NODE_ENV !== "production") {
    console.info("[contact:demo]", {
      name,
      email,
      location: payload.location ?? "",
      interest: payload.interest ?? "",
      messagePreview: message.slice(0, 120),
    });

    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Demo success. Configure a production contact endpoint before launch.",
    });
  }

  /**
   * PRODUCTION PLACEHOLDER:
   * Wire this to Resend, Formspree, Basin, a custom SMTP handler, or CRM webhook.
   * Example env vars (do not invent values):
   * - CONTACT_PROVIDER_URL
   * - CONTACT_API_KEY
   */
  const productionEndpoint = process.env.CONTACT_PROVIDER_URL;

  if (!productionEndpoint) {
    return NextResponse.json(
      {
        error:
          "Contact delivery is not configured yet. Set CONTACT_PROVIDER_URL or NEXT_PUBLIC_CONTACT_ENDPOINT.",
      },
      { status: 503 },
    );
  }

  try {
    const upstream = await fetch(productionEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_API_KEY
          ? { Authorization: `Bearer ${process.env.CONTACT_API_KEY}` }
          : {}),
      },
      body: JSON.stringify({
        name,
        email,
        location: payload.location ?? "",
        interest: payload.interest ?? "",
        message,
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Upstream contact provider rejected the request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the contact provider." },
      { status: 502 },
    );
  }
}
