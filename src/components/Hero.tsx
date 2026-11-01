import Image from "next/image";
import { Button } from "@/components/Button";
import { images, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bone">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-pine" />
        <Image
          src={images.trail.src}
          alt=""
          fill
          priority
          sizes="60vw"
          className="object-cover object-center opacity-[0.34] saturate-[0.6] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-pine/10 via-pine/25 to-bone" />
        <div className="absolute inset-0 bg-gradient-to-b from-pine/25 via-transparent to-pine/45" />
      </div>

      <div className="container-site relative grid items-center gap-8 py-10 md:py-12 lg:min-h-[620px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-12">
        <div className="relative z-20 max-w-xl">
          <p className="eyebrow fade-up">{siteConfig.descriptor}</p>
          <h1 className="display fade-up fade-up-delay-1 mt-3 text-[clamp(2.45rem,5vw,4.2rem)]">
            Move through change with more clarity and intention.
          </h1>
          <p className="fade-up fade-up-delay-2 mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted md:text-[1.06rem]">
            1:1 coaching and mindfulness-based support for people navigating
            change, questioning what comes next, or wanting to live with greater
            awareness.
          </p>
          <div className="fade-up fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" showArrow>
              Start a Conversation
            </Button>
            <Button href="/coaching" variant="secondary">
              Explore Coaching
            </Button>
          </div>
          <p className="fade-up fade-up-delay-3 mt-7 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-olive">
            Denver, Colorado · 1:1 Coaching · Mindfulness & Meditation
          </p>
        </div>

        <div className="relative z-10 fade-up fade-up-delay-1">
          <div className="absolute inset-3 -z-10 overflow-hidden rounded-[12px] lg:hidden" aria-hidden="true">
            <Image
              src={images.trail.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-45 saturate-[0.65]"
            />
            <div className="absolute inset-0 bg-pine/50" />
          </div>

          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px] lg:ml-auto lg:mr-4 lg:max-w-[340px] xl:max-w-[360px]">
            <div
              className="absolute left-[7%] right-[-5%] top-[6%] bottom-[-4%] rounded-[12px] bg-stone/80 lg:bg-white/[0.08]"
              aria-hidden="true"
            />

            <figure className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_22px_50px_rgba(23,28,26,0.28)]">
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 360px"
                className="object-cover object-[center_10%] next-image"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine/50 via-pine/5 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-copper/10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
                aria-hidden="true"
              />

              <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#e2b089]">
                  Kevin Shroads
                </p>
                <p className="mt-1 text-xs text-white/90">
                  Coaching & Transformation · Colorado
                </p>
              </figcaption>
            </figure>

            <div
              className="absolute -left-1 -top-1 h-12 w-12 border-l border-t border-copper/60"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-1 -right-1 h-12 w-12 border-b border-r border-copper/35"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
