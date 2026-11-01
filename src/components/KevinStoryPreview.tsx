import { Button } from "@/components/Button";

export function KevinStoryPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site grid gap-10 lg:grid-cols-[12rem_1fr] lg:gap-16">
        <div className="hidden lg:block">
          <p className="font-serif text-[6.5rem] leading-none tracking-[-0.04em] text-stone">
            2016
          </p>
        </div>
        <div>
          <p className="eyebrow">Kevin&apos;s story</p>
          <p className="mt-2 font-serif text-4xl text-stone lg:hidden">2016</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3rem)]">
            Some experiences change the questions we ask.
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[1.02rem] text-muted">
            <p>
              In 2016, Kevin&apos;s life changed dramatically when he was
              diagnosed with three cancers at once. What followed was an intense
              period of treatment — and eventually a deeper questioning of how he
              wanted to live.
            </p>
            <p>
              Over time, the question shifted from &ldquo;Why is this happening
              to me?&rdquo; toward a different perspective: &ldquo;How is this
              happening for me?&rdquo;
            </p>
            <p>
              That experience became part of the foundation for Kevin&apos;s
              interest in awareness, mindfulness and intentional change.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/about" showArrow>
              Read Kevin&apos;s Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
