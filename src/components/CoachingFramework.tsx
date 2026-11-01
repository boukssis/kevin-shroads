import { coachingFramework } from "@/data/site";
import { Button } from "@/components/Button";

type CoachingFrameworkProps = {
  showCta?: boolean;
  compact?: boolean;
};

export function CoachingFramework({
  showCta = true,
  compact = false,
}: CoachingFrameworkProps) {
  return (
    <section className={compact ? "section-pad-sm" : "section-pad"}>
      <div className="container-site">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">1:1 Coaching</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3rem)]">
              A simple way to think about the work
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Focused conversations that help you step outside the noise, see
              your situation more clearly, and choose a next step you can stand
              behind.
            </p>
          </div>
          {showCta ? (
            <Button href="/coaching" showArrow className="shrink-0 self-start md:self-auto">
              Explore 1:1 Coaching
            </Button>
          ) : null}
        </div>

        <ol className="mt-10 divide-y divide-line border-y border-line">
          {coachingFramework.map((step) => (
            <li
              key={step.number}
              className="grid gap-3 py-6 md:grid-cols-[5rem_10rem_1fr] md:items-baseline md:gap-8"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-copper">
                {step.number}
              </p>
              <h3 className="font-serif text-2xl text-ink md:text-[1.7rem]">
                {step.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
