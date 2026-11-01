import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/site";

type CTASectionProps = {
  title?: string;
  copy?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "You don't need everything figured out before you begin.",
  copy = "Start with a conversation.",
  primaryHref = "/contact",
  primaryLabel = "Start a Conversation",
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-pine text-white">
      <Image
        src={images.cta.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-pine/70" />
      <div className="container-site relative py-16 md:py-20">
        <Reveal>
          <div className="max-w-xl">
            <h2 className="display text-[clamp(1.95rem,4vw,3rem)] text-white">
              {title}
            </h2>
            <p className="mt-4 text-[1.05rem] text-white/80">{copy}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} variant="onDark" showArrow>
                {primaryLabel}
              </Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="ghostOnDark">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
            <p className="mt-5 text-sm text-white/55">
              No pressure. Just a place to begin.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
