import Image from "next/image";
import { images, siteConfig } from "@/data/site";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-forest text-warm-white">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-forest/20" />

      <div className="container-site relative flex min-h-[88vh] items-end pb-16 pt-28 md:items-center md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow fade-up !text-gold-soft">
            {siteConfig.descriptor}
          </p>
          <h1 className="display fade-up fade-up-delay-1 mt-5 text-[clamp(2.8rem,7.5vw,5.4rem)] text-warm-white">
            Find clarity in where you are.
            <span className="mt-2 block font-normal italic text-cream/95">
              Move intentionally toward what&apos;s next.
            </span>
          </h1>
          <p className="prose-measure fade-up fade-up-delay-2 mt-6 text-base text-warm-white/80 md:text-lg">
            1:1 coaching and mindfulness-based support for people looking to
            reconnect with themselves, gain clarity, and move through life with
            greater intention.
          </p>
          <div className="fade-up fade-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/coaching" variant="onDark" showArrow>
              Explore Coaching
            </Button>
            <Button href="/contact" variant="ghostOnDark">
              Start a Conversation
            </Button>
          </div>
          <p className="fade-up fade-up-delay-3 mt-8 text-xs font-medium uppercase tracking-[0.18em] text-warm-white/55">
            Clarity · Presence · Alignment · Growth
          </p>
        </div>
      </div>
    </section>
  );
}
