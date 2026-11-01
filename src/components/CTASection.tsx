import Image from "next/image";
import { images } from "@/data/site";
import { Button } from "@/components/Button";

type CTASectionProps = {
  title?: string;
  copy?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "You don't need to have everything figured out before you begin.",
  copy = "If you're curious whether coaching with Kevin might be the right fit, start with a conversation.",
  primaryHref = "/contact",
  primaryLabel = "Start a Conversation",
  secondaryHref = "/coaching",
  secondaryLabel = "Explore 1:1 Coaching",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-warm-white">
      <Image
        src={images.cta.src}
        alt={images.cta.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="container-site relative section-pad">
        <div className="max-w-3xl">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] text-warm-white">
            {title}
          </h2>
          <p className="prose-measure mt-5 text-base text-warm-white/80 md:text-lg">
            {copy}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="onDark" showArrow>
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="ghostOnDark">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
