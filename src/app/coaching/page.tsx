import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CoachingFramework } from "@/components/CoachingFramework";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { coachingFaq, coachingFor, coachingThemes } from "@/data/site";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description:
    "1:1 coaching with Kevin Shroads for people navigating transitions, decisions, uncertainty or a direction that no longer fits.",
  alternates: { canonical: "/coaching" },
};

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="1:1 Coaching"
        title="Coaching for the moments when something needs to change."
      >
        <p>
          Focused 1:1 conversations for people navigating transitions,
          decisions, uncertainty or the feeling that their current direction no
          longer fits.
        </p>
        <div className="mt-7">
          <Button href="/contact" showArrow>
            Start a Conversation
          </Button>
        </div>
      </PageHero>

      <section className="section-pad-sm bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="display text-[clamp(1.8rem,3.5vw,2.6rem)]">
              Who coaching is for
            </h2>
            <ul className="mt-6 space-y-4">
              {coachingFor.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-[1.02rem] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-[clamp(1.8rem,3.5vw,2.6rem)]">
              What you may explore
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {coachingThemes.map((theme) => (
                <li
                  key={theme}
                  className="border-b border-line pb-3 text-sm text-muted"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CoachingFramework showCta={false} compact />

      <section className="section-pad bg-white">
        <div className="container-site">
          <h2 className="display text-[clamp(1.8rem,3.5vw,2.6rem)]">
            Practical questions
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {coachingFaq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      className="mt-1 text-copper transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-pine text-white">
        <div className="container-site max-w-2xl">
          <p className="eyebrow !text-copper">Important</p>
          <h2 className="display mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] text-white">
            What coaching isn&apos;t
          </h2>
          <p className="mt-4 text-white/78">
            Coaching is not therapy, medical treatment or crisis support. It is
            a personal-development partnership focused on awareness and
            intentional forward movement. If you are in crisis or need clinical
            care, please seek appropriate professional support.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to explore 1:1 coaching?"
        copy="Start with a conversation. Share a little about where you are and what you're hoping to explore."
        secondaryHref="/mindfulness"
        secondaryLabel="Explore Mindfulness"
      />
    </>
  );
}
