import { approachPillars } from "@/data/site";

export function WorkingTogether() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Working together</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3rem)]">
            What the work looks like in practice
          </h2>
          <p className="mt-4 text-muted">
            Not advice as performance. Not pressure to have everything figured
            out. A thoughtful partnership for noticing, understanding and moving.
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-0">
          {approachPillars.map((item, index) => (
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
