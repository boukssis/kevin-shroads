"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/Button";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  if (!open) {
    return null;
  }

  return (
    <div id="mobile-nav" className="border-t border-line bg-bone lg:hidden">
      <nav
        className="container-site flex flex-col gap-1 py-5"
        aria-label="Mobile"
      >
        {siteConfig.nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "rounded-md px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white hover:text-ink",
                active && "bg-white text-ink",
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="pt-3">
          <Button href="/contact" className="w-full" showArrow>
            Start a Conversation
          </Button>
        </div>
      </nav>
    </div>
  );
}
