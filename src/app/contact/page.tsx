import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Start a conversation with Kevin Shroads about 1:1 coaching or mindfulness.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <aside>
          <p className="eyebrow">Connect</p>
          <h1 className="display mt-3 text-[clamp(2.3rem,4.5vw,3.3rem)]">
            Start with a conversation.
          </h1>
          <p className="mt-4 max-w-sm text-muted">
            Tell Kevin a little about where you are and what you&apos;re hoping
            to explore.
          </p>

          <ol className="mt-7 space-y-2 text-sm text-muted">
            <li>
              <span className="font-medium text-ink">1.</span> Send a note
            </li>
            <li>
              <span className="font-medium text-ink">2.</span> Kevin responds
            </li>
            <li>
              <span className="font-medium text-ink">3.</span> Explore fit
            </li>
          </ol>

          <p className="mt-6 text-sm text-muted">
            Based in {siteConfig.location}. Conversations can be held remotely
            where applicable.
          </p>

          <a
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm text-ink underline decoration-stone underline-offset-4 hover:decoration-copper"
          >
            LinkedIn
          </a>

          {siteConfig.bookingUrl ? (
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6"
            >
              Open scheduling
            </a>
          ) : null}

          <p className="mt-8 text-xs text-muted">
            Coaching is not therapy, medical treatment or crisis support.
          </p>
          <div className="mt-3 flex gap-4 text-sm text-muted">
            <Link href="/coaching" className="hover:text-ink">
              Coaching
            </Link>
            <Link href="/mindfulness" className="hover:text-ink">
              Mindfulness
            </Link>
          </div>
        </aside>

        <div className="rounded-[8px] border border-line bg-white p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
