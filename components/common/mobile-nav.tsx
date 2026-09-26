import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({ items, children, onNavigate }: MobileNavProps) {
  useLockBody();

  return (
    <div className="fixed inset-x-0 top-20 z-50 h-[calc(100vh-5rem)] overflow-auto border-t border-slate-200 bg-white/95 p-6 backdrop-blur-2xl animate-in slide-in-from-top-10 md:hidden">
      <Link href="/" className="font-heading text-xl tracking-tight text-slate-900">
        {siteConfig.authorName}
      </Link>
      <nav className="mt-8 grid gap-2">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            onClick={(event) => onNavigate(event, item.disabled ? "#" : item.href)}
            className={cn(
              "rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:bg-slate-100 hover:text-slate-950",
              item.disabled && "pointer-events-none opacity-50"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children ? <div className="mt-8 border-t border-slate-200 pt-6">{children}</div> : null}
    </div>
  );
}
