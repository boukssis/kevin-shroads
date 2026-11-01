import { whoThisIsFor } from "@/data/site";
import { SectionIntro } from "@/components/SectionIntro";

export function WhoThisIsFor() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <SectionIntro title="You may be here because..." />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {whoThisIsFor.map((item) => (
            <li
              key={item}
              className="border-t border-line pt-5 text-[1.05rem] leading-snug text-charcoal md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
