import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Kevin Shroads about 1:1 coaching, mindfulness, or upcoming group experiences.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Start with a conversation."
      >
        <p>
          Tell Kevin a little about where you are and what you&apos;re hoping to
          explore.
        </p>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <aside className="space-y-8">
            <div className="rounded-[16px] border border-line bg-cream p-7">
              <h2 className="font-serif text-3xl text-forest">
                What happens next
              </h2>
              <ol className="mt-5 space-y-4 text-sm text-muted">
                <li>
                  <span className="font-semibold text-forest">01 —</span> Share
                  a short note about where you are.
                </li>
                <li>
                  <span className="font-semibold text-forest">02 —</span> Kevin
                  reviews your message and continues the conversation.
                </li>
                <li>
                  <span className="font-semibold text-forest">03 —</span> Together
                  you explore whether coaching or a group experience is the
                  right fit.
                </li>
              </ol>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                Also available
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <a
                    href={siteConfig.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-forest"
                  >
                    Connect on LinkedIn
                  </a>
                </li>
                <li>
                  <Link href="/coaching" className="transition-colors hover:text-forest">
                    Learn about 1:1 Coaching
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mindfulness"
                    className="transition-colors hover:text-forest"
                  >
                    Learn about Mindfulness
                  </Link>
                </li>
              </ul>
            </div>

            {/*
              PRODUCTION BOOKING HOOK:
              When Kevin provides a scheduling link, set NEXT_PUBLIC_BOOKING_URL
              and surface it here / in primary CTAs. Until then, the contact form
              remains the conversion path.
            */}
            {siteConfig.bookingUrl ? (
              <div className="rounded-[16px] border border-line-strong p-7">
                <p className="eyebrow">Schedule</p>
                <p className="mt-3 text-muted">
                  Prefer to book directly? Use the scheduling link below.
                </p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-5"
                >
                  Open scheduling
                </a>
              </div>
            ) : null}

            <p className="text-sm text-muted">
              Coaching is not therapy, medical treatment or crisis support.
            </p>
          </aside>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
