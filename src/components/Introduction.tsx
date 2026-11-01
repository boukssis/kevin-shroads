import { images } from "@/data/site";
import { EditorialImage } from "@/components/EditorialImage";

export function Introduction() {
  return (
    <section className="section-pad">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Introduction</p>
          <h2 className="display mt-4 text-[clamp(2.1rem,4.8vw,3.7rem)]">
            Sometimes the next step becomes clearer when we stop forcing it.
          </h2>
          <div className="prose-measure mt-6 space-y-4 text-muted">
            <p>
              Life can become noisy. Decisions, expectations, pressure and
              uncertainty can make it difficult to understand what we actually
              want — or what direction feels right.
            </p>
            <p>
              Kevin&apos;s coaching creates space to slow down, notice what&apos;s
              happening beneath the surface, and move forward from a place of
              greater awareness and clarity.
            </p>
          </div>
        </div>
        <EditorialImage
          src={images.forest.src}
          alt={images.forest.alt}
          aspect="aspect-[5/4] lg:aspect-[4/5]"
        />
      </div>
    </section>
  );
}
