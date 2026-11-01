import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Mindfulness & Meditation",
  description:
    "Mindfulness and meditation with Kevin Shroads — presence, awareness and a clearer relationship with everyday life.",
  alternates: { canonical: "/mindfulness" },
};

export default function MindfulnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Mindfulness & Meditation"
        title="Create more space between what happens and how you respond."
      >
        <p>
          Practices that support awareness and presence — so you can meet life
          with a little more steadiness and a little less automatic reaction.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" showArrow>
            Ask About the Next Group
          </Button>
          <Button href="/coaching" variant="secondary">
            Explore 1:1 Coaching
          </Button>
        </div>
      </PageHero>

      <section className="pb-4">
        <div className="container-site">
          <figure className="image-reveal relative aspect-[16/8] md:aspect-[21/8]">
            <Image
              src={images.water.src}
              alt={images.water.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover next-image"
            />
          </figure>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <article className="border-t border-line pt-6">
            <h2 className="font-serif text-[1.8rem] text-ink md:text-[2rem]">
              What mindfulness means here
            </h2>
            <p className="mt-4 text-muted">
              Meeting the present moment with attention and honesty. Noticing
              thoughts, emotions and patterns without immediately being carried
              away by them.
            </p>
          </article>
          <article className="border-t border-line pt-6">
            <h2 className="font-serif text-[1.8rem] text-ink md:text-[2rem]">
              Meditation without perfection
            </h2>
            <p className="mt-4 text-muted">
              Meditation isn&apos;t necessarily about eliminating thoughts.
              It&apos;s about developing a different relationship with what
              arises — returning to presence rather than demanding a blank mind.
            </p>
          </article>
          <article className="border-t border-line pt-6">
            <h2 className="font-serif text-[1.8rem] text-ink md:text-[2rem]">
              Connected to coaching
            </h2>
            <p className="mt-4 text-muted">
              When mindfulness informs coaching, the work becomes less about
              forcing outcomes and more about seeing clearly enough to choose the
              next honest step.
            </p>
          </article>
          <article className="border-t border-line pt-6">
            <h2 className="font-serif text-[1.8rem] text-ink md:text-[2rem]">
              Group experiences
            </h2>
            <p className="mt-4 text-muted">
              Kevin periodically offers group mindfulness and meditation
              experiences. Timing and format vary — ask about what&apos;s coming
              next.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Interested in mindfulness with Kevin?"
        copy="Ask about upcoming group experiences, or explore how mindfulness can be part of 1:1 coaching."
        primaryLabel="Ask About the Next Group"
        secondaryHref="/coaching"
        secondaryLabel="Explore 1:1 Coaching"
      />
    </>
  );
}
