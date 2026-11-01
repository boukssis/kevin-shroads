import type { Metadata } from "next";
import { images } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Mindfulness & Meditation",
  description:
    "Mindfulness and meditation support with Kevin Shroads — creating space, awareness and a clearer relationship with everyday life.",
  alternates: { canonical: "/mindfulness" },
};

const sections = [
  {
    title: "Understanding mindfulness",
    body: "Mindfulness is the practice of meeting the present moment with attention and honesty. It can create space to notice thoughts, emotions and patterns without immediately being carried away by them.",
  },
  {
    title: "Meditation without perfection",
    body: "Meditation isn't necessarily about eliminating thoughts. It's about developing a different relationship with what arises — returning, again and again, to presence rather than demanding a blank mind.",
  },
  {
    title: "Creating a sustainable practice",
    body: "A useful practice is one you can return to. Short, consistent moments of attention often matter more than infrequent intensity. The aim is integration, not performance.",
  },
  {
    title: "Mindfulness in everyday life",
    body: "Presence can show up in walking, conversation, work and decision-making. The formal practice supports an informal one: meeting life with a little more awareness and a little less automatic reaction.",
  },
] as const;

export default function MindfulnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Mindfulness & Meditation"
        title="Create more space between what happens and how you respond."
      >
        <p>
          Practices that support awareness, presence and clarity — so you can
          meet life with more intention.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" showArrow>
            Ask About the Next Group
          </Button>
          <Button href="/coaching" variant="secondary">
            Explore 1:1 Coaching
          </Button>
        </div>
      </PageHero>

      <section className="pb-8">
        <div className="container-site">
          <EditorialImage
            src={images.water.src}
            alt={images.water.alt}
            aspect="aspect-[16/9] md:aspect-[21/9]"
            className="w-full"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="border-t border-line pt-6"
            >
              <h2 className="font-serif text-3xl text-forest md:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Group experiences</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.3rem)]">
              Shared practice, held with care
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Kevin periodically offers group mindfulness and meditation
                experiences — supportive containers for practice, reflection and
                connection.
              </p>
              <p>
                Details such as timing, format and availability vary. If you are
                interested in the next group journey, share a note and ask about
                what&apos;s upcoming.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact" showArrow>
                Ask About the Next Group
              </Button>
            </div>
          </div>
          <EditorialImage
            src={images.meditationSpace.src}
            alt={images.meditationSpace.alt}
            aspect="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="section-pad bg-forest text-warm-white">
        <div className="container-site max-w-3xl">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-warm-white">
            Presence as a foundation for change
          </h2>
          <p className="mt-5 text-warm-white/78">
            When mindfulness is woven into coaching, the work becomes less about
            forcing outcomes and more about seeing clearly enough to choose the
            next honest step. That clarity can reshape how we relate to
            pressure, uncertainty and growth.
          </p>
        </div>
      </section>

      <CTASection
        title="Interested in mindfulness with Kevin?"
        copy="Ask about upcoming group experiences, or explore how mindfulness can be integrated into 1:1 coaching."
        primaryLabel="Ask About the Next Group"
        secondaryHref="/coaching"
        secondaryLabel="Explore 1:1 Coaching"
      />
    </>
  );
}
