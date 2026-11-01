import { Button } from "@/components/Button";
import { KevinPortrait } from "@/components/KevinPortrait";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-line bg-bone">
      <div className="container-site grid items-center gap-8 py-10 md:gap-12 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
        <div className="max-w-xl">
          <p className="eyebrow fade-up">{siteConfig.descriptor}</p>
          <h1 className="display fade-up fade-up-delay-1 mt-3 text-[clamp(2.4rem,5vw,4.25rem)]">
            Move through change with more clarity and intention.
          </h1>
          <p className="fade-up fade-up-delay-2 mt-4 text-[1.02rem] leading-relaxed text-muted md:text-[1.06rem]">
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

        <KevinPortrait
          priority
          className="mx-auto w-full max-w-md lg:max-w-none"
          sizes="(max-width: 1024px) 90vw, 480px"
        />
      </div>
    </section>
  );
}
