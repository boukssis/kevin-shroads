import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { KevinPortrait } from "@/components/KevinPortrait";
import { Reveal } from "@/components/Reveal";
import { approachPillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevin Shroads — a Colorado-based coach whose work grew from a personal exploration of change and awareness.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-bone">
        <div className="container-site grid items-center gap-8 py-10 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <KevinPortrait
            priority
            className="mx-auto w-full max-w-[320px] lg:max-w-[360px]"
            sizes="360px"
          />
          <div>
            <p className="eyebrow">About Kevin</p>
            <h1 className="display mt-3 text-[clamp(2.3rem,4.6vw,3.5rem)]">
              A life experience that changed the questions.
            </h1>
            <p className="mt-4 max-w-md text-[1.02rem] text-muted">
              Kevin Shroads is a Colorado-based coach whose work grew from a
              deeply personal exploration of change, awareness and how we
              respond when life doesn&apos;t go according to plan.
            </p>
            <div className="mt-7">
              <Button href="/contact" showArrow>
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-[8rem_1fr] lg:gap-12">
          <Reveal>
            <p className="font-serif text-[5rem] leading-none text-stone md:text-[5.5rem]">
              2016
            </p>
          </Reveal>
          <Reveal delayMs={70}>
            <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)]">
              The year everything changed.
            </h2>
            <div className="mt-5 max-w-xl space-y-4 text-muted">
              <p>
                In 2016, Kevin was diagnosed with brain, testicular and thyroid
                cancers. What followed included treatment that interrupted life
                as he knew it.
              </p>
              <p>
                At first, the question was the one many people would ask: Why
                me? As recovery unfolded, another question emerged: What might
                this experience be asking me to change?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-pine text-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#e2b089]">
                  From
                </p>
                <p className="display mt-3 text-[clamp(1.6rem,3vw,2.2rem)] text-white/50 line-through decoration-white/20">
                  Why is this happening to me?
                </p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#e2b089]">
                  To
                </p>
                <p className="display mt-3 text-[clamp(1.7rem,3.2vw,2.4rem)] text-white">
                  How is this happening for me?
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-xl text-white/75">
              The shift didn&apos;t erase what happened. It changed Kevin&apos;s
              relationship with it — and with how he thinks about choice,
              presence and response.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <h2 className="display max-w-xl text-[clamp(1.9rem,3.6vw,2.8rem)]">
              How it shapes his work
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              After treatment, Kevin explored a different relationship with life
              through mindfulness, meditation and coaching. Today, that
              perspective shapes the space he holds for others.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-0 border-t border-line md:grid-cols-3">
            {approachPillars.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 60}>
                <article
                  className={`py-6 md:px-5 ${
                    index > 0
                      ? "border-t border-line md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <h3 className="font-serif text-[1.5rem] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/coaching" showArrow>
              Explore 1:1 Coaching
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Curious whether this work is a fit?"
        copy="Start with a conversation."
        secondaryHref="/coaching"
        secondaryLabel="Explore Coaching"
      />
    </>
  );
}
