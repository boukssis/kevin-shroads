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
    <section className={cn("pb-10 pt-12 md:pb-12 md:pt-16", className)}>
      <div className="container-site">
        {eyebrow ? <p className="eyebrow fade-up">{eyebrow}</p> : null}
        <h1 className="display fade-up fade-up-delay-1 mt-4 max-w-3xl text-[clamp(2.35rem,5vw,3.75rem)]">
          {title}
        </h1>
        {children ? (
          <div className="prose-measure fade-up fade-up-delay-2 mt-5 text-[1.05rem] text-muted">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
