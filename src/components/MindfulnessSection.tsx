import Image from "next/image";
import { Button } from "@/components/Button";
import { images } from "@/data/site";

export function MindfulnessSection() {
  return (
    <section className="section-pad bg-pine text-white">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="eyebrow !text-copper">Mindfulness & Meditation</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3rem)] text-white">
            Presence changes how we meet what&apos;s in front of us.
          </h2>
          <div className="mt-5 max-w-xl space-y-4 text-white/78">
            <p>
              Meditation isn&apos;t necessarily about eliminating thoughts.
              It&apos;s about developing a clearer relationship with what arises —
              so responses can come from awareness instead of automatic reaction.
            </p>
            <p>
              Kevin periodically offers group mindfulness and meditation
              experiences, and weaves these practices into 1:1 coaching where
              useful.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/mindfulness" variant="onDark" showArrow>
              Explore Mindfulness
            </Button>
            <Button href="/contact" variant="ghostOnDark">
              Ask About Upcoming Groups
            </Button>
          </div>
        </div>

        <figure className="image-reveal relative aspect-[5/4]">
          <Image
            src={images.water.src}
            alt={images.water.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover next-image"
          />
        </figure>
      </div>
    </section>
  );
}
