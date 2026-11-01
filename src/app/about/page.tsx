import type { Metadata } from "next";
import { images } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { EditorialImage } from "@/components/EditorialImage";
import { QuoteSection } from "@/components/QuoteSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kevin Shroads — a Colorado-based coach focused on personal transformation, mindfulness, clarity and intentional growth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kevin"
        title="A different way of moving through change."
      >
        <p>
          Kevin Shroads is a Colorado-based coach focused on personal
          transformation, mindfulness and creating space for greater clarity and
          alignment.
        </p>
      </PageHero>

      <section className="pb-20 md:pb-28">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <PortraitPlaceholder priority />
          <div className="space-y-6 text-muted">
            <p>
              His work centers on slowing down enough to see what&apos;s happening
              beneath the noise — and using that awareness to take more
              intentional steps forward.
            </p>
            <p>
              Rather than pushing for premature answers, Kevin holds a thoughtful,
              grounded space where people can reconnect with themselves,
              understand their current chapter more clearly, and move with greater
              intention.
            </p>
            <p>
              Based in the Denver area, he works with people who are seeking
              clarity, presence and a more honest relationship with the next
              chapter of their lives.
            </p>
            <div className="pt-2">
              <Button href="/contact" showArrow>
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.3rem)]">
              Kevin&apos;s philosophy
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Transformation rarely begins with more force. It often begins with
                enough space to notice what is already true — what feels aligned,
                what feels pressured, and what has been waiting for attention.
              </p>
              <p>
                Kevin approaches coaching as a partnership in awareness: a place
                to look carefully, speak honestly, and choose the next step from
                clarity rather than overwhelm.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <article className="border-t border-line pt-6">
              <h3 className="font-serif text-3xl text-forest">
                Why awareness matters
              </h3>
              <p className="mt-4 text-muted">
                When we can see the patterns, expectations and internal pressures
                shaping our choices, those choices become freer. Awareness does
                not solve everything on its own — but it creates the conditions
                for more intentional action.
              </p>
            </article>
            <article className="border-t border-line pt-6">
              <h3 className="font-serif text-3xl text-forest">
                How mindfulness influences his coaching
              </h3>
              <p className="mt-4 text-muted">
                Mindfulness and meditation inform the quality of the space Kevin
                holds: attentive, unhurried and curious. The aim is not perfection
                or stillness at all costs, but a more conscious relationship with
                what arises.
              </p>
            </article>
            <article className="border-t border-line pt-6">
              <h3 className="font-serif text-3xl text-forest">
                How he thinks about transformation
              </h3>
              <p className="mt-4 text-muted">
                Transformation is less a dramatic reinvention and more a series of
                honest adjustments — clarifying what matters, aligning decisions
                with that clarity, and learning from what unfolds along the way.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <EditorialImage
            src={images.morning.src}
            alt={images.morning.alt}
            aspect="aspect-[5/4]"
          />
          <div>
            <p className="eyebrow">Origin</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.3rem)]">
              Shaped by lived experience
            </h2>
            <p className="mt-6 text-muted">
              Kevin&apos;s own life experiences shaped a deeper exploration of
              awareness, perspective, presence and transformation. That
              exploration continues to inform the grounded, reflective quality of
              his coaching.
            </p>

            {/*
              // OPTIONAL OWNER-APPROVED PERSONAL STORY
              // ---------------------------------------------------------------
              // Kevin has publicly shared a more personal health and recovery
              // journey in older public materials. Do NOT automatically place
              // diagnoses, treatment details, or other sensitive medical
              // information on this website.
              //
              // If Kevin explicitly approves a personal origin story for this
              // site, replace the paragraph below (or extend this section)
              // with owner-approved copy. Keep the tone calm, human and
              // non-clinical. Avoid medical claims or promises of outcomes.
              //
              // Example structure only — do not publish until approved:
              // <p>...</p>
              // ---------------------------------------------------------------
            */}
            <div className="mt-8 rounded-[14px] border border-dashed border-line-strong bg-cream/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                Optional owner-approved personal story
              </p>
              <p className="mt-3 text-sm text-muted">
                A more detailed personal origin story can be added here later if
                Kevin chooses. The architecture is ready; the content waits for
                his explicit approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection text="We are often closer to a meaningful next step than we realize — once we create enough quiet to notice it." />

      <CTASection
        title="Curious whether this work is a fit?"
        copy="Start with a conversation. Share where you are and what you're hoping to explore."
        secondaryHref="/coaching"
        secondaryLabel="Explore Coaching"
      />
    </>
  );
}
