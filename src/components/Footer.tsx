import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream">
      <div className="container-site section-pad !py-16 md:!py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl text-forest">{siteConfig.name}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              {siteConfig.descriptor}
            </p>
            <p className="prose-narrow mt-5 text-sm text-muted">
              Creating space for clarity, presence and intentional movement —
              through 1:1 coaching and mindfulness-based support.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-forest"
                >
                  Start a Conversation
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-forest"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-sm text-muted">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <hr className="rule mt-14" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Coaching is not therapy, medical treatment or crisis support.
          </p>
        </div>
      </div>
    </footer>
  );
}
