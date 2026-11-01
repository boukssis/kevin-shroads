import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("pb-8 pt-10 md:pb-10 md:pt-14", className)}>
      <div className="container-site">
        {eyebrow ? <p className="eyebrow fade-up">{eyebrow}</p> : null}
        <h1 className="display fade-up fade-up-delay-1 mt-3 max-w-3xl text-[clamp(2.25rem,4.5vw,3.5rem)]">
          {title}
        </h1>
        {children ? (
          <div className="prose-narrow fade-up fade-up-delay-2 mt-4 text-[1.02rem] text-muted">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
