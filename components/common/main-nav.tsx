"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const [activeHash, setActiveHash] = React.useState<string>("");

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  // Highlight whichever homepage section is currently in view.
  React.useEffect(() => {
    if (pathname !== "/" || !items?.length) return;

    const sections = items
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => document.getElementById(item.href.slice(2)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveHash(`/#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname, items]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      const target = document.getElementById(href.slice(2));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
        setActiveHash(href);
      }
    }
    setShowMobileMenu(false);
  };

  return (
    <div className="flex w-full items-center justify-between gap-6 md:gap-10">
      <Link href="/" className="hidden items-center md:flex">
        <span className="font-heading text-xl tracking-tight text-slate-900">
          {siteConfig.authorName}
        </span>
      </Link>

      {items?.length ? (
        <nav className="hidden items-center gap-1 md:flex lg:gap-1.5">
          {items.map((item, index) => {
            const isActive = item.href.startsWith("/#")
              ? activeHash === item.href
              : pathname.startsWith(item.href);
            return (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  item.disabled && "pointer-events-none opacity-50"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      ) : null}

      <button
        className="flex items-center md:hidden"
        onClick={() => setShowMobileMenu((prev) => !prev)}
        aria-label={showMobileMenu ? "Close menu" : "Open menu"}
      >
        {showMobileMenu ? <Icons.close className="h-6 w-6" /> : <Icons.menu className="h-6 w-6" />}
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items} onNavigate={handleNavClick}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
