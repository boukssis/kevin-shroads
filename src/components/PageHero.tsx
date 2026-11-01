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
    <section className={cn("section-pad !pb-12 !pt-16 md:!pt-24", className)}>
      <div className="container-site">
        {eyebrow ? <p className="eyebrow fade-up">{eyebrow}</p> : null}
        <h1 className="display fade-up fade-up-delay-1 mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5rem)]">
          {title}
        </h1>
        {children ? (
          <div className="prose-measure fade-up fade-up-delay-2 mt-6 text-lg text-muted">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
