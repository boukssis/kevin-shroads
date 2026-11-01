type QuoteSectionProps = {
  text?: string;
  note?: string;
};

export function QuoteSection({
  text = "Not every moment needs a perfect answer. Sometimes you need enough space to see the next honest step.",
  note = "A reflection inspired by the themes Kevin returns to in his coaching and mindfulness work.",
}: QuoteSectionProps) {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="display text-[clamp(2rem,5vw,3.8rem)] text-forest">
            {text}
          </p>
          <footer className="mt-8 text-sm text-muted">{note}</footer>
        </blockquote>
      </div>
    </section>
  );
}
