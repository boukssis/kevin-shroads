import { humanSituations } from "@/data/site";

export function HumanProblem() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="max-w-3xl">
          <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">
            You don&apos;t always need another answer. Sometimes you need space
            to hear your own.
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[1.02rem] text-muted">
            <p>
              There are moments when the way you&apos;ve been moving no longer
              feels right — a transition, a decision, a sense that something
              needs to change even if you can&apos;t yet name it.
            </p>
            <p>
              Coaching creates room to slow the noise down, understand what&apos;s
              actually happening, and move forward with more intention.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-0">
          {humanSituations.map((item, index) => (
            <article
              key={item.title}
              className={
                index === 0
                  ? "md:pr-8"
                  : "border-t border-line pt-8 md:border-l md:border-t-0 md:px-8 md:pt-0"
              }
            >
              <h3 className="font-serif text-[1.55rem] text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
