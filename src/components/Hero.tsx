import Image from "next/image";
import { Button } from "@/components/Button";
import { images, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bone">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-pine lg:block"
        aria-hidden="true"
      >
        <Image
          src={images.trail.src}
          alt=""
          fill
          priority
          sizes="42vw"
          className="object-cover opacity-[0.3] saturate-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bone" />
      </div>

      <div className="container-site relative grid items-center gap-8 py-10 md:py-12 lg:min-h-[700px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-10">
        <div className="relative z-20 max-w-lg">
          <p className="eyebrow fade-up">{siteConfig.descriptor}</p>
          <span className="accent-line mt-4" aria-hidden="true" />
          <h1 className="display fade-up fade-up-delay-1 mt-5 text-[clamp(2.45rem,4.8vw,4rem)]">
            See where you are.
            <span className="mt-1 block">Choose what comes next.</span>
          </h1>
          <p className="fade-up fade-up-delay-2 mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted">
            1:1 coaching for people navigating change, uncertainty, or the
            feeling that their current direction no longer fits.
          </p>
          <div className="fade-up fade-up-delay-3 mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" showArrow>
              Start a Conversation
            </Button>
            <Button href="/coaching" variant="secondary">
              Explore Coaching
            </Button>
          </div>

          <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-olive">
            <span>1:1 Coaching</span>
            <span>Mindfulness</span>
            <span>Denver, Colorado</span>
          </div>
        </div>

        <div className="relative z-10 fade-up fade-up-delay-1">
          <p
            className="float-meta pointer-events-none absolute -left-2 top-8 hidden rotate-180 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-copper/80 [writing-mode:vertical-rl] lg:block xl:-left-4"
            aria-hidden="true"
          >
            Colorado · Coaching · Transformation
          </p>

          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px] lg:ml-auto lg:mr-2 lg:max-w-[340px]">
            <div
              className="absolute -bottom-3 -right-3 left-6 top-6 rounded-[10px] bg-stone/70 lg:bg-white/10"
              aria-hidden="true"
            />
            <figure className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_24px_60px_rgba(22,27,25,0.28)]">
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                fill
                priority
                sizes="340px"
                className="object-cover object-[center_10%] next-image"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine/45 via-transparent to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#e2b089]">
                  Kevin Shroads
                </p>
              </figcaption>
            </figure>
            <div
              className="absolute -left-2 -top-2 h-11 w-11 border-l border-t border-copper/55"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="scroll-cue">
          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-olive">
            Scroll to explore
          </span>
          <span className="scroll-cue-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
