import { principles } from "@/data/site";
import { SectionIntro } from "@/components/SectionIntro";

export function CoachingPrinciples() {
  return (
    <section className="section-pad bg-forest text-warm-white">
      <div className="container-site">
        <SectionIntro
          dark
          title="Clarity rarely comes from pushing harder."
        >
          <p>
            Sometimes we need enough space to understand what we&apos;re actually
            responding to — fear, pressure, expectation, intuition, or something
            deeper.
          </p>
        </SectionIntro>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="border-t border-white/15 pt-6"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-gold-soft">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-warm-white">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-warm-white/72">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
