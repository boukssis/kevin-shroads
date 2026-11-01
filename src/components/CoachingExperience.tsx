import { coachingExperience, workCreatesSpaceFor } from "@/data/site";
import { SectionIntro } from "@/components/SectionIntro";

export function CoachingExperience() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionIntro title="What the work can look like">
          <p>
            Coaching is a practical, reflective partnership — space to notice,
            understand and move with more intention.
          </p>
        </SectionIntro>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coachingExperience.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-line bg-warm-white p-6"
            >
              <h3 className="font-serif text-2xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <SectionIntro title="What the work creates space for" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workCreatesSpaceFor.map((item) => (
              <article key={item.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
