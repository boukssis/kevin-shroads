import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CoachingFramework } from "@/components/CoachingFramework";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { coachingFaq, coachingFor, coachingThemes } from "@/data/site";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description:
    "1:1 coaching with Kevin Shroads for people navigating transitions, decisions, or a direction that no longer fits.",
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
          Focused conversations for people navigating transitions, decisions, or
          the feeling that their current direction no longer fits.
        </p>
        <div className="mt-6">
          <Button href="/contact" showArrow>
            Start a Conversation
          </Button>
        </div>
      </PageHero>

      <section className="section-pad-sm bg-white">
        <div className="container-site">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.5rem)]">
              When coaching might help
            </h2>
          </Reveal>
          <ul className="mt-6 max-w-2xl">
            {coachingFor.map((item) => (
              <li
                key={item}
                className="interactive-row border-t border-line py-4 text-[1.02rem] text-ink last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CoachingFramework showCta={false} />

      <section className="section-pad-sm">
        <div className="container-site">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.5rem)]">
              Topics you may explore
            </h2>
          </Reveal>
          <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-0 sm:grid-cols-3 md:grid-cols-5">
            {coachingThemes.map((theme) => (
              <li
                key={theme}
                className="border-t border-line py-3 text-sm text-muted"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.5rem)]">
              Practical questions
            </h2>
          </Reveal>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {coachingFaq.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      className="text-copper transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-sm text-muted">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-[8px] bg-pine px-5 py-6 text-white">
            <h3 className="font-serif text-2xl">What coaching isn&apos;t</h3>
            <p className="mt-2 text-sm text-white/75">
              Coaching is not therapy, medical treatment or crisis support. If
              you need clinical care, please seek appropriate professional help.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to explore 1:1 coaching?"
        copy="Start with a conversation."
        secondaryHref="/mindfulness"
        secondaryLabel="Explore Mindfulness"
      />
    </>
  );
}
