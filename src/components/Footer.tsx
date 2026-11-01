import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-site py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-ink">{siteConfig.name}</p>
            <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-olive">
              {siteConfig.descriptor}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              1:1 coaching and mindfulness for navigating change with greater
              awareness.
            </p>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink">
              Explore
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <hr className="rule mt-10" />

        <div className="mt-5 flex flex-col gap-2 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}.
          </p>
          <p>Coaching is not therapy, medical treatment or crisis support.</p>
        </div>
      </div>
    </footer>
  );
}
