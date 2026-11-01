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
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", dark && "!text-copper")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "display mt-3 max-w-3xl text-[clamp(1.85rem,3.8vw,2.85rem)]",
          dark && "text-white",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "prose-measure mt-4 text-[1.02rem] leading-relaxed",
            dark ? "text-white/78" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
