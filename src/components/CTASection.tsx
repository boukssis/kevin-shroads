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
    <section className="relative overflow-hidden bg-pine text-white">
      <Image
        src={images.cta.src}
        alt={images.cta.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-pine/75" />
      <div className="container-site relative py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="display text-[clamp(1.9rem,4vw,3rem)] text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-[1.02rem] text-white/80">{copy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
