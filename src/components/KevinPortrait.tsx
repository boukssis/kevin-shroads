import Image from "next/image";
import { cn } from "@/lib/cn";
import { images } from "@/data/site";

type KevinPortraitProps = {
  className?: string;
  aspect?: string;
  priority?: boolean;
  objectPosition?: string;
  sizes?: string;
};

export function KevinPortrait({
  className,
  aspect = "aspect-[4/5]",
  priority = false,
  objectPosition = "object-[center_20%]",
  sizes = "(max-width: 768px) 100vw, 480px",
}: KevinPortraitProps) {
  return (
    <figure className={cn("image-reveal relative bg-stone", aspect, className)}>
      <Image
        src={images.portrait.src}
        alt={images.portrait.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover next-image", objectPosition)}
      />
    </figure>
  );
}
