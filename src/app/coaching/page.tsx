import type { Metadata } from "next";
import { coachingThemes, images } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { CoachingFramework } from "@/components/CoachingFramework";
import { CoachingExperience } from "@/components/CoachingExperience";
import { EditorialImage } from "@/components/EditorialImage";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description:
    "1:1 coaching with Kevin Shroads — space for clarity, perspective and intentional movement through personal transformation.",
  alternates: { canonical: "/coaching" },
};

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="1:1 Coaching"
        title="Space for clarity, perspective and intentional movement."
      >
        <p>
          Dedicated conversations that help you step outside the noise, see your
          situation more clearly, and move forward with greater intention.
        </p>
        <div className="mt-8">
          <Button href="/contact" showArrow>
            Start a Conversation
          </Button>
        </div>
      </PageHero>

      <section className="pb-8 md:pb-12">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <EditorialImage
            src={images.trail.src}
            alt={images.trail.alt}
            aspect="aspect-[5/4]"
            priority
          />
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
              What coaching is
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Coaching is a collaborative space for reflection, awareness and
                intentional action. It is designed to help you understand where
                you are, what is asking for your attention, and what direction
                feels honest.
              </p>
              <p>
                Sessions create room for focused conversation — not advice as a
                performance, and not pressure to have everything figured out
                before you begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
              Who it may suit
            </h2>
            <p className="mt-5 text-muted">
              This work may be a fit if you are navigating transition, seeking
              clarity, or noticing that the way you&apos;ve been moving no longer
              feels aligned. It is especially useful for people who want support
              that is reflective and practical at the same time.
            </p>
          </div>
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
              What conversations may explore
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {coachingThemes.map((theme) => (
                <li
                  key={theme}
                  className="rounded-full border border-line-strong bg-warm-white px-4 py-2 text-sm text-charcoal"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
              How Kevin approaches the work
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Kevin&apos;s approach emphasizes awareness before action, presence
                over pressure, and progress through learning. The aim is to help
                you see more clearly — then take practical next steps that feel
                intentional rather than forced.
              </p>
              <p>
                Mindfulness informs the quality of attention in the work:
                noticing what is happening internally, creating space between
                stimulus and response, and returning to what matters.
              </p>
            </div>
          </div>
          <EditorialImage
            src={images.journaling.src}
            alt={images.journaling.alt}
            aspect="aspect-[4/5]"
          />
        </div>
      </section>

      <CoachingFramework showCta={false} />
      <CoachingExperience />

      <section className="section-pad bg-forest text-warm-white">
        <div className="container-site max-w-3xl">
          <p className="eyebrow !text-gold-soft">Important</p>
          <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] text-warm-white">
            What coaching isn&apos;t
          </h2>
          <p className="mt-5 text-warm-white/78">
            Coaching is not therapy, medical treatment or crisis support. It is
            a personal-development partnership focused on clarity, awareness and
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
