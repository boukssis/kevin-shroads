import { coachingFramework } from "@/data/site";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/Button";

type CoachingFrameworkProps = {
  showCta?: boolean;
};

export function CoachingFramework({ showCta = true }: CoachingFrameworkProps) {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionIntro
            eyebrow="1:1 Coaching"
            title="A space to see more clearly."
          >
            <p>
              1:1 coaching creates dedicated space to step outside the noise of
              everyday life and look honestly at where you are, what is asking
              for your attention, and where you want to go next.
            </p>
            <p className="mt-4">
              The work centers on awareness, clarity, perspective, alignment and
              intentional action — not pressure, performance or quick fixes.
            </p>
          </SectionIntro>
          <div className="lg:pb-2">
            <p className="text-sm text-muted">
              A simple way to think about the work.
            </p>
          </div>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {coachingFramework.map((step) => (
            <li
              key={step.number}
              className="border-t border-line-strong pt-5"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                {step.number}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-forest">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {showCta ? (
          <div className="mt-12">
            <Button href="/coaching" showArrow>
              Explore 1:1 Coaching
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
