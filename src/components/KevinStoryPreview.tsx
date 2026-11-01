import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/site";

export function KevinStoryPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:mx-0">
            <figure className="image-reveal relative aspect-[4/5] overflow-hidden rounded-[8px]">
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_18%] next-image grayscale-[0.35] contrast-[1.05]"
              />
            </figure>
            <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-olive">
              2016 · The turning point
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={90}>
          <p className="eyebrow">Kevin&apos;s story</p>
          <h2 className="display mt-3 text-[clamp(1.95rem,3.8vw,3rem)]">
            The year everything changed.
          </h2>
          <div className="mt-5 max-w-md space-y-4 text-[1.02rem] text-muted">
            <p>
              In 2016, Kevin was diagnosed with three cancers at once. What
              followed was a period of treatment that changed not only his
              circumstances, but the questions he was asking about life.
            </p>
            <p>
              Over time, one question began to shift.
            </p>
          </div>

          <div className="mt-8 max-w-sm border-l-2 border-copper pl-5">
            <p className="font-serif text-[1.55rem] leading-snug text-ink/45 line-through decoration-stone">
              Why is this happening to me?
            </p>
            <p className="mt-3 text-copper" aria-hidden="true">
              ↓
            </p>
            <p className="mt-1 font-serif text-[1.7rem] leading-snug text-ink">
              How is this happening for me?
            </p>
          </div>

          <p className="mt-6 max-w-md text-[1.02rem] text-muted">
            That change in perspective became part of the foundation for the
            work he does today.
          </p>

          <div className="mt-7">
            <Button href="/about" showArrow>
              Read Kevin&apos;s Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
