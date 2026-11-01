import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/Button";

export function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <PortraitPlaceholder className="max-w-md lg:max-w-none" />
        <div>
          <SectionIntro eyebrow="About" title="Meet Kevin.">
            <p>
              Kevin Shroads is a Colorado-based coach focused on personal
              transformation, mindfulness and creating space for greater clarity
              and alignment.
            </p>
            <p className="mt-4">
              His work centers on slowing down enough to see what&apos;s happening
              beneath the noise — and using that awareness to take more
              intentional steps forward.
            </p>
          </SectionIntro>
          <div className="mt-8">
            <Button href="/about" showArrow>
              More About Kevin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
