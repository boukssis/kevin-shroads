import Image from "next/image";
import { cn } from "@/lib/cn";
import { images } from "@/data/site";

type PortraitPlaceholderProps = {
  className?: string;
  aspect?: string;
  priority?: boolean;
};

/**
 * Replaceable portrait component.
 * When images.portrait.hasVerifiedPhoto is true and a verified Kevin Shroads
 * photograph is available at images.portrait.src, that image is shown.
 * Until then, an atmospheric editorial image with a clear replacement cue is used.
 */
export function PortraitPlaceholder({
  className,
  aspect = "aspect-[4/5]",
  priority = false,
}: PortraitPlaceholderProps) {
  if (images.portrait.hasVerifiedPhoto) {
    return (
      <figure className={cn("image-reveal relative", aspect, className)}>
        <Image
          src={images.portrait.src}
          alt={images.portrait.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover next-image"
        />
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "image-reveal relative overflow-hidden bg-forest",
        aspect,
        className,
      )}
    >
      <Image
        src={images.reflection.src}
        alt="Atmospheric landscape reserved for Kevin Shroads portrait"
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 420px"
        className="object-cover next-image opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/25 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6 text-warm-white md:p-8">
        <p className="eyebrow !text-gold-soft">Portrait placeholder</p>
        <p className="mt-2 font-serif text-2xl leading-tight md:text-3xl">
          Kevin Shroads
        </p>
        <p className="mt-2 max-w-xs text-sm text-warm-white/75">
          Replace with a verified professional photograph from Kevin&apos;s LinkedIn
          or approved media.
        </p>
      </figcaption>
    </figure>
  );
}
