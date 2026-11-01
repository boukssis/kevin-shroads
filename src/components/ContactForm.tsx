"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-[12px] border border-line-strong bg-warm-white px-4 py-3 text-[0.98rem] text-charcoal outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted/60 focus:border-forest focus:shadow-[0_0_0_3px_rgba(23,53,45,0.08)]";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      location: String(data.get("location") ?? ""),
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      /**
       * PRODUCTION CONFIGURATION:
       * Set NEXT_PUBLIC_CONTACT_ENDPOINT to your form provider, serverless
       * function, or CRM webhook. Until then, /api/contact simulates success
       * in development and returns a clear configuration message in production.
       */
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setError(
        "Something went wrong sending your message. Please try again, or reach out via LinkedIn.",
      );
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-[16px] border border-line bg-cream p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="eyebrow">Message received</p>
        <h2 className="display mt-4 text-4xl">Thank you for reaching out.</h2>
        <p className="prose-measure mt-4 text-muted">
          Your note has been captured. Kevin will review it and continue the
          conversation from there.
        </p>
        <div className="mt-8">
          <Button type="button" variant="secondary" onClick={() => setState("idle")}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-medium text-forest">
          Name
          <input
            className={fieldClass}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-forest">
          Email
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-forest">
        Where are you located?
        <input
          className={fieldClass}
          name="location"
          type="text"
          autoComplete="address-level2"
          placeholder="City / region"
        />
      </label>

      <label className="block text-sm font-medium text-forest">
        What are you interested in?
        <select
          className={cn(fieldClass, "appearance-none")}
          name="interest"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {siteConfig.interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-forest">
        What would you like support with?
        <textarea
          className={cn(fieldClass, "min-h-40 resize-y")}
          name="message"
          required
          placeholder="Share a little about where you are and what you're hoping to explore."
        />
      </label>

      {state === "error" ? (
        <p className="text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={state === "submitting"} showArrow>
        {state === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
