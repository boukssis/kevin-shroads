import Image from "next/image";
import { cn } from "@/lib/cn";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
};

export function EditorialImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 60vw",
  aspect = "aspect-[4/5]",
}: EditorialImageProps) {
  return (
    <figure className={cn("image-reveal relative", aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover next-image", imageClassName)}
      />
    </figure>
  );
}
