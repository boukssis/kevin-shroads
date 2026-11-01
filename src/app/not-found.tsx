import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-site max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,3.4rem)]">
          This page couldn&apos;t be found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          The link may be outdated, or the page may have moved. You can return
          home or start a conversation from here.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" showArrow>
            Back Home
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
