import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { coachingFramework, images } from "@/data/site";

type CoachingFrameworkProps = {
  showCta?: boolean;
};

export function CoachingFramework({ showCta = true }: CoachingFrameworkProps) {
  return (
    <section className="section-pad bg-pine text-white">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <div className="relative">
            <figure className="image-reveal relative aspect-[4/5] max-w-md overflow-hidden rounded-[8px]">
              <Image
                src={images.journaling.src}
                alt={images.journaling.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover next-image"
              />
            </figure>
            <figure className="image-reveal absolute -bottom-6 -right-2 hidden aspect-square w-36 overflow-hidden rounded-[8px] border-4 border-pine shadow-lg md:block lg:-right-4">
              <Image
                src={images.detail.src}
                alt={images.detail.alt}
                fill
                sizes="160px"
                className="object-cover next-image"
              />
            </figure>
          </div>
        </Reveal>

        <Reveal delayMs={90}>
          <p className="eyebrow !text-[#e2b089]">1:1 Coaching</p>
          <h2 className="display mt-3 text-[clamp(1.95rem,3.8vw,3rem)] text-white">
            A space to see what matters.
          </h2>
          <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-white/75">
            Focused conversations that help you step outside the noise,
            understand what&apos;s asking for attention, and choose a next step
            you can stand behind.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6">
            {coachingFramework.map((step) => (
              <li key={step.title} className="process-word">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#e2b089]">
                  {step.number}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{step.description}</p>
              </li>
            ))}
          </ul>

          {showCta ? (
            <div className="mt-8">
              <Button href="/coaching" variant="onDark" showArrow>
                Explore 1:1 Coaching
              </Button>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
