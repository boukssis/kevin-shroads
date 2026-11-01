import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Start a conversation with Kevin Shroads about 1:1 coaching, mindfulness, or upcoming group experiences.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <aside>
          <p className="eyebrow">Connect</p>
          <h1 className="display mt-4 text-[clamp(2.4rem,5vw,3.6rem)]">
            Start with a conversation.
          </h1>
          <p className="mt-5 max-w-md text-[1.05rem] text-muted">
            Tell Kevin a little about where you are and what you&apos;re hoping
            to explore.
          </p>

          <div className="mt-8 space-y-2 text-sm text-muted">
            <p>Based in {siteConfig.location}</p>
            <p>Coaching conversations can be held remotely where applicable.</p>
          </div>

          <ol className="mt-8 space-y-2 text-sm text-muted">
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

          <div className="mt-8 space-y-2 text-sm">
            <a
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-stone underline-offset-4 transition-colors hover:decoration-copper"
            >
              Connect on LinkedIn
            </a>
            <div className="flex flex-wrap gap-4 pt-2 text-muted">
              <Link href="/coaching" className="hover:text-ink">
                1:1 Coaching
              </Link>
              <Link href="/mindfulness" className="hover:text-ink">
                Mindfulness
              </Link>
            </div>
          </div>

          {siteConfig.bookingUrl ? (
            <div className="mt-8 rounded-lg border border-line-strong bg-white p-5">
              <p className="eyebrow">Schedule</p>
              <p className="mt-2 text-sm text-muted">
                Prefer to book directly? Use the scheduling link below.
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4"
              >
                Open scheduling
              </a>
            </div>
          ) : null}

          <p className="mt-8 text-xs text-muted">
            Coaching is not therapy, medical treatment or crisis support.
          </p>
        </aside>

        <div className="rounded-[10px] border border-line bg-white p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
