import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/site";

const principles = [
  {
    title: "Notice",
    description: "Meet thoughts and feelings without immediately being carried away.",
  },
  {
    title: "Allow",
    description: "Make room for what arises instead of forcing a blank mind.",
  },
  {
    title: "Respond",
    description: "Create space between what happens and how you choose to meet it.",
  },
] as const;

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
          Practices that support presence — so responses can come from awareness
          instead of automatic reaction.
        </p>
        <div className="mt-6">
          <Button href="/contact" showArrow>
            Ask About the Next Group
          </Button>
        </div>
      </PageHero>

      <section className="pb-2">
        <div className="container-site">
          <Reveal>
            <figure className="image-reveal relative aspect-[16/8] overflow-hidden rounded-[8px] md:aspect-[21/8]">
              <Image
                src={images.water.src}
                alt={images.water.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover next-image"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site max-w-2xl">
          <Reveal>
            <h2 className="display text-[clamp(1.85rem,3.5vw,2.6rem)]">
              Meditation without perfection
            </h2>
            <p className="mt-4 text-muted">
              Meditation isn&apos;t about having no thoughts. It&apos;s about
              developing a different relationship with what arises — and bringing
              that quality of attention into coaching and everyday life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad-sm bg-white">
        <div className="container-site grid gap-0 border-t border-line md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <article
                className={`py-7 md:px-6 ${
                  index > 0
                    ? "border-t border-line md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <h3 className="font-serif text-[1.7rem] text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <h2 className="display text-[clamp(1.85rem,3.5vw,2.6rem)]">
              Group experiences
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Kevin periodically offers group mindfulness and meditation
              experiences. Timing and format vary — ask about what&apos;s next.
            </p>
            <div className="mt-6">
              <Button href="/contact" showArrow>
                Ask About the Next Group
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <figure className="image-reveal relative aspect-[5/4] overflow-hidden rounded-[8px]">
              <Image
                src={images.trail.src}
                alt={images.trail.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover next-image"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Interested in mindfulness with Kevin?"
        copy="Ask about upcoming groups, or explore 1:1 coaching."
        primaryLabel="Ask About the Next Group"
        secondaryHref="/coaching"
        secondaryLabel="Explore 1:1 Coaching"
      />
    </>
  );
}
