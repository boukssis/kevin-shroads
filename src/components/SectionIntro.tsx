import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  align = "left",
  className,
  dark = false,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", dark && "!text-gold-soft")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "display mt-4 max-w-3xl text-[clamp(2.1rem,4.5vw,3.6rem)]",
          dark && "text-warm-white",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "prose-measure mt-5 text-[1.02rem] leading-relaxed",
            dark ? "text-warm-white/78" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
