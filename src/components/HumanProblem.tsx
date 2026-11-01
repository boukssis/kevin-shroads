import { humanSituations } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function HumanProblem() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-start">
        <Reveal>
          <h2 className="display max-w-md text-[clamp(1.9rem,3.6vw,2.85rem)]">
            Sometimes the problem isn&apos;t that you don&apos;t know enough.
            It&apos;s that everything is too loud to hear yourself.
          </h2>
        </Reveal>

        <Reveal delayMs={80}>
          <ul>
            {humanSituations.map((item) => (
              <li
                key={item.number}
                className="interactive-row border-t border-line py-5 last:border-b"
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-copper">
                  {item.number}
                </p>
                <h3 className="mt-2 font-serif text-[1.45rem] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
