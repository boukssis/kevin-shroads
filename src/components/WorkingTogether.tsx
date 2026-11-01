import { Reveal } from "@/components/Reveal";
import { getStartedSteps } from "@/data/site";

export function WorkingTogether() {
  return (
    <section className="section-pad-sm bg-white">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow">Working together</p>
          <h2 className="display mt-3 text-[clamp(1.85rem,3.5vw,2.7rem)]">
            How to begin
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-0 border-t border-line md:grid-cols-3">
          {getStartedSteps.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 70}>
              <article
                className={`py-6 md:px-6 md:py-8 ${
                  index > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
                }`}
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-copper">
                  {step.number}
                </p>
                <h3 className="mt-3 font-serif text-[1.7rem] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
