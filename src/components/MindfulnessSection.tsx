import { images } from "@/data/site";
import { EditorialImage } from "@/components/EditorialImage";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/Button";

export function MindfulnessSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <EditorialImage
          src={images.meditationSpace.src}
          alt={images.meditationSpace.alt}
          aspect="aspect-[5/6] lg:aspect-[4/5]"
          className="order-2 lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <SectionIntro
            eyebrow="Mindfulness & Meditation"
            title="Presence changes the way we meet life."
          >
            <p>
              Mindfulness and meditation can create space, awareness and a
              steadier sense of presence — a different relationship with thoughts,
              rather than a demand that they disappear.
            </p>
            <p className="mt-4">
              Meditation isn&apos;t necessarily about eliminating thoughts. It&apos;s
              about developing a clearer relationship with what arises, so
              responses can come from awareness instead of automatic reaction.
            </p>
          </SectionIntro>

          <ul className="mt-8 space-y-4 text-charcoal">
            <li className="border-l-2 border-sage pl-4">
              Individual mindfulness integration within coaching
            </li>
            <li className="border-l-2 border-sage pl-4">
              Guided practices that support everyday presence
            </li>
            <li className="border-l-2 border-sage pl-4">
              Group journeys and shared experiences, offered periodically
            </li>
          </ul>

          <p className="mt-6 text-sm text-muted">
            Kevin periodically offers group mindfulness and meditation
            experiences. Ask to learn what&apos;s coming next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/mindfulness" showArrow>
              Explore Mindfulness
            </Button>
            <Button href="/contact" variant="secondary">
              Ask About Upcoming Groups
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
