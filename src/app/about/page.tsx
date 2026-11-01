import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { KevinPortrait } from "@/components/KevinPortrait";
import { approachPillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevin Shroads — a Colorado-based coach whose work is shaped by lived experience, mindfulness and intentional change.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-site grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <KevinPortrait
            priority
            className="mx-auto w-full max-w-md lg:max-w-none"
            sizes="(max-width: 1024px) 90vw, 460px"
          />
          <div>
            <p className="eyebrow">About Kevin</p>
            <h1 className="display mt-4 text-[clamp(2.4rem,5vw,3.75rem)]">
              A life experience that changed the way Kevin saw everything.
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              Kevin Shroads is a Colorado-based coach whose work centers on
              awareness, mindfulness, transformation and intentional living.
            </p>
            <div className="mt-8">
              <Button href="/contact" showArrow>
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[10rem_1fr] lg:gap-16">
          <div>
            <p className="font-serif text-[5.5rem] leading-none tracking-[-0.04em] text-stone md:text-[6.5rem]">
              2016
            </p>
          </div>
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">
              The year everything changed.
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] text-muted">
              <p>
                In 2016, Kevin was diagnosed with brain, testicular and thyroid
                cancers.
              </p>
              <p>
                What followed included surgeries, chemotherapy and radiation —
                an experience that interrupted life as he knew it.
              </p>
              <p>
                At first, the question was the one many people would ask: Why
                me?
              </p>
              <p>
                As treatment and recovery unfolded, another question began to
                emerge: What might this experience be asking me to change?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-pine text-white">
        <div className="container-site max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-copper">
                From
              </p>
              <p className="display mt-4 text-[clamp(1.8rem,3.5vw,2.6rem)] text-white">
                &ldquo;Why is this happening to me?&rdquo;
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-copper">
                To
              </p>
              <p className="display mt-4 text-[clamp(1.8rem,3.5vw,2.6rem)] text-white">
                &ldquo;How is this happening for me?&rdquo;
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-2xl text-[1.05rem] text-white/78">
            The shift didn&apos;t erase what happened. It changed Kevin&apos;s
            relationship with it — and with how he thinks about awareness,
            choice, presence and the way we respond to life.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">
            What followed
          </h2>
          <div className="mt-5 space-y-4 text-[1.02rem] text-muted">
            <p>
              After treatment, Kevin began exploring a different relationship
              with life — one shaped less by autopilot and more by curiosity,
              awareness and alignment.
            </p>
            <p>
              That exploration eventually included mindfulness, meditation,
              personal development and coaching. Those practices continue to
              inform the grounded, reflective quality of the space he holds
              today.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">
              Today, that perspective shapes the space he holds for others.
            </h2>
            <p className="mt-5 text-muted">
              Kevin&apos;s coaching is not about giving someone the perfect
              answer. It is about creating enough room to notice, question,
              understand, choose and act.
            </p>
          </div>

          <div className="mt-10">
            <p className="eyebrow">How Kevin approaches the work</p>
            <div className="mt-6 grid gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-0">
              {approachPillars.map((item, index) => (
                <article
                  key={item.title}
                  className={
                    index === 0
                      ? "md:pr-8"
                      : "border-t border-line pt-8 md:border-l md:border-t-0 md:px-8 md:pt-0"
                  }
                >
                  <h3 className="font-serif text-[1.55rem] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Button href="/coaching" showArrow>
              Explore 1:1 Coaching
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Curious whether this work is a fit?"
        copy="Start with a conversation. Share where you are and what you're hoping to explore."
        secondaryHref="/coaching"
        secondaryLabel="Explore Coaching"
      />
    </>
  );
}
