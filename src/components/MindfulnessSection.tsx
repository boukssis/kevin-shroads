import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/site";

const principles = [
  "Notice more",
  "React less automatically",
  "Create more space before choosing",
] as const;

export function MindfulnessSection() {
  return (
    <section className="section-pad bg-bone">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <figure className="image-reveal relative aspect-[16/11] overflow-hidden rounded-[8px]">
            <Image
              src={images.water.src}
              alt={images.water.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover next-image"
            />
          </figure>
        </Reveal>

        <Reveal delayMs={80}>
          <p className="eyebrow">Mindfulness</p>
          <h2 className="display mt-3 text-[clamp(1.95rem,3.8vw,2.9rem)]">
            Presence changes the way we respond.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Meditation isn&apos;t about having no thoughts. It&apos;s about
            developing a different relationship with what arises.
          </p>
          <ul className="mt-6 space-y-3 border-t border-line pt-5">
            {principles.map((item) => (
              <li
                key={item}
                className="interactive-row border-b border-line pb-3 text-[1.02rem] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button href="/mindfulness" showArrow>
              Explore Mindfulness
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
