import { Check, Code2, LayoutDashboard, PanelsTopLeft, ShoppingBag } from "lucide-react";
import { JSX } from "react";

import { cn } from "@/lib/utils";

type ServiceVisual = "shopify" | "dashboard" | "landing" | "saas";

const services: {
  title: string;
  description: string;
  icon: typeof ShoppingBag;
  number: string;
  highlights: string[];
  visual: ServiceVisual;
}[] = [
  {
    title: "Shopify store setup",
    description: "Conversion-focused storefronts, theme customization, product setup, and smooth checkout experiences.",
    icon: ShoppingBag,
    number: "01",
    highlights: ["Theme customization", "Product & checkout setup", "Conversion-focused UX"],
    visual: "shopify",
  },
  {
    title: "Dashboard development",
    description: "Clear, responsive dashboards that turn complex business data into confident daily decisions.",
    icon: LayoutDashboard,
    number: "02",
    highlights: ["Real-time data views", "Custom charts & reports"],
    visual: "dashboard",
  },
  {
    title: "Landing page development",
    description: "Fast, polished landing pages designed to communicate value and convert the right visitors.",
    icon: PanelsTopLeft,
    number: "03",
    highlights: ["Fast load times", "SEO-ready structure"],
    visual: "landing",
  },
  {
    title: "SaaS development",
    description: "Scalable product builds from MVP to production, with thoughtful UX and dependable architecture.",
    icon: Code2,
    number: "04",
    highlights: ["MVP to production", "Scalable architecture", "API & auth setup"],
    visual: "saas",
  },
];

// Subtle fade so each mockup dissolves into the card instead of competing with the copy.
const fadeMask = {
  maskImage: "linear-gradient(to left, black 35%, transparent 95%)",
  WebkitMaskImage: "linear-gradient(to left, black 35%, transparent 95%)",
};

function ShopifyVisual() {
  return (
    <div className="pointer-events-none absolute -right-4 -top-4 grid w-[60%] grid-cols-2 gap-2.5 opacity-70" style={fadeMask} aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-slate-200 bg-white p-2.5">
          <div className="aspect-square w-full rounded-md bg-emerald-100" />
          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-slate-200" />
          <div className="mt-1 h-1.5 w-1/2 rounded-full bg-emerald-200" />
        </div>
      ))}
    </div>
  );
}

function DashboardVisual() {
  const bars = [35, 55, 40, 70, 50, 85, 45];
  return (
    <div className="pointer-events-none absolute -right-2 -top-2 flex h-32 w-[60%] items-end gap-2 opacity-70" style={fadeMask} aria-hidden="true">
      {bars.map((h, i) => (
        <div
          key={i}
          className={cn("w-full rounded-t-md", i === 3 ? "bg-emerald-300" : "bg-slate-200")}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function LandingVisual() {
  return (
    <div className="pointer-events-none absolute -right-4 -top-4 w-[60%] overflow-hidden rounded-lg border border-slate-200 bg-white opacity-70 shadow-sm" style={fadeMask} aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-slate-200" />
        <span className="h-2 w-2 rounded-full bg-slate-200" />
        <span className="h-2 w-2 rounded-full bg-slate-200" />
      </div>
      <div className="space-y-2 p-3.5">
        <div className="h-2.5 w-4/5 rounded-full bg-slate-800/80" />
        <div className="h-2 w-full rounded-full bg-slate-200" />
        <div className="h-2 w-2/3 rounded-full bg-slate-200" />
        <div className="mt-3 h-5 w-16 rounded-full bg-emerald-200" />
      </div>
    </div>
  );
}

function SaaSVisual() {
  return (
    <div
      className="pointer-events-none absolute -right-4 -top-4 w-[60%] overflow-hidden rounded-xl border border-slate-200 bg-white opacity-80 shadow-sm"
      style={fadeMask}
      aria-hidden="true"
    >
      <div className="flex">
        <div className="flex w-9 flex-col items-center gap-2 border-r border-slate-100 bg-slate-50 py-3.5">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="h-1.5 w-5 rounded-full bg-slate-200" />
          <span className="h-1.5 w-5 rounded-full bg-slate-200" />
          <span className="h-1.5 w-5 rounded-full bg-slate-200" />
        </div>
        <div className="flex-1 p-3">
          <div className="mb-2.5 h-2 w-1/2 rounded-full bg-slate-800/80" />
          <div className="mb-2.5 grid grid-cols-2 gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-md border border-slate-100 bg-slate-50 p-1.5">
                <div className="h-1.5 w-full rounded-full bg-slate-200" />
                <div className="mt-1 h-2 w-2/3 rounded-full bg-emerald-300" />
              </div>
            ))}
          </div>
          <div className="flex h-10 items-end gap-1.5">
            {[30, 55, 40, 70, 50, 65].map((h, i) => (
              <div key={i} className="w-full rounded-t-sm bg-slate-200" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<ServiceVisual, () => JSX.Element> = {
  shopify: ShopifyVisual,
  dashboard: DashboardVisual,
  landing: LandingVisual,
  saas: SaaSVisual,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white px-5 py-24 text-slate-900 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">Services</p>
            <h2 className="max-w-2xl font-heading text-4xl leading-[1.05] sm:text-6xl">From first idea to a product people use.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">Focused development for ambitious founders and teams who need a sharp, reliable digital product.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const Visual = visuals[service.visual];
            return (
              <article
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:border-emerald-200 hover:bg-emerald-50/60"
              >
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-start justify-between gap-8">
                    <div className="rounded-2xl border border-slate-200 bg-white p-3 transition group-hover:border-emerald-200 group-hover:bg-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm text-slate-400">{service.number}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Visual />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
