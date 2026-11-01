"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/Button";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-400",
        scrolled || open
          ? "border-line bg-white/90 backdrop-blur-md"
          : "border-transparent bg-bone/75 backdrop-blur-sm",
      )}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group focus-ring rounded-sm">
          <span className="block font-serif text-[1.4rem] leading-none tracking-[-0.03em] text-ink md:text-[1.5rem]">
            {siteConfig.name}
          </span>
          <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-olive">
            {siteConfig.descriptor}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative pb-1 text-[0.9rem] font-medium text-muted transition-colors duration-300 hover:text-ink",
                  active && "text-ink",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-copper transition-transform duration-400",
                    active && "scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" showArrow>
            Start a Conversation
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-400",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-px w-full bg-ink transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[14px] h-px w-full bg-ink transition-transform duration-400",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
