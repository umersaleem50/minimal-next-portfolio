import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type SectionTone = "light" | "dark";

interface HomeSectionProps {
  id: string;
  tone?: SectionTone;
  eyebrow: string;
  title: string;
  description?: string;
  // Rendered on the right of the heading, e.g. carousel controls or a "View all" link.
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

// Shared shell for home page sections, matching the Services / Testimonials look.
export function HomeSection({ id, tone = "light", eyebrow, title, description, actions, children, className }: HomeSectionProps) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32",
        dark ? "bg-slate-950 text-white" : "border-t border-slate-200 bg-white text-slate-900",
        className,
      )}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className={cn("mb-12 flex flex-col gap-8 border-b pb-12 sm:flex-row sm:items-end sm:justify-between", dark ? "border-white/10" : "border-slate-200")}>
          <div>
            <p className={cn("mb-4 text-xs font-bold uppercase tracking-[0.24em]", dark ? "text-emerald-300" : "text-emerald-700")}>{eyebrow}</p>
            <h2 className="max-w-3xl font-heading text-4xl leading-[1.05] sm:text-6xl">{title}</h2>
            {description && <p className={cn("mt-6 max-w-xl text-lg leading-8", dark ? "text-slate-400" : "text-slate-600")}>{description}</p>}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-3">{actions}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function ViewAllLink({ href, label = "View all", tone = "light" }: { href: string; label?: string; tone?: SectionTone }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center gap-2 rounded-full border px-6 text-sm font-semibold transition",
        tone === "dark" ? "border-white/20 hover:bg-white hover:text-slate-950" : "border-slate-300 hover:bg-slate-950 hover:text-white",
      )}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
