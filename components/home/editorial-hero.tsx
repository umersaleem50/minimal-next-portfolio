import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";

const partners = [
  { name: "Solinovation", logo: "/experience/keys-logo.png" },
  { name: "Muze AI", logo: "/experience/muzeai-logo.png" },
  { name: "Builtdesign", logo: "/experience/builtdesign-logo.png" },
];

export function EditorialHero() {
  return (
    <section
      aria-labelledby="editorial-hero-title"
      className="relative isolate min-h-[760px] overflow-hidden bg-white text-slate-900 lg:min-h-[calc(100vh-5rem)]"
    >
      {/* The two colour fields mirror the editorial composition in the reference. */}
      <div
        className="hero-gradient-field absolute right-0 top-0 -z-20 h-[34%] w-[52%] sm:h-[43%] lg:w-[54%]"
        aria-hidden="true"
      />
      <div
        className="hero-gradient-field absolute bottom-20 left-0 -z-20 h-[34%] w-[56%] rotate-180 sm:h-[40%] lg:w-[49%]"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[680px] max-w-[1600px] grid-cols-1 px-5 pb-32 pt-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pb-28 lg:pt-0">
        <div className="relative z-10 flex items-start lg:col-span-7 lg:items-center">
          <div className="max-w-[760px] lg:-translate-y-16">
            <p className="text-xl font-medium tracking-tight text-slate-600 sm:text-3xl lg:text-5xl">
              Your Business Logic
            </p>
            <h1
              id="editorial-hero-title"
              className="relative z-0 mt-3 font-serif text-5xl font-normal italic leading-[0.95] tracking-[-0.04em] text-slate-800 sm:text-7xl lg:text-[6.25rem]"
            >
              behind Great Software
            </h1>
          </div>
        </div>

        <div className="relative z-20 col-span-full row-start-2 -mt-10 flex justify-center lg:pointer-events-none lg:absolute lg:inset-y-0 lg:left-1/2 lg:mt-0 lg:w-[35%] lg:-translate-x-1/2 lg:items-end">
          <Image
            src="/umar-standing.png"
            alt="Umar Saleem, software engineer"
            width={355}
            height={535}
            priority
            sizes="(max-width: 1024px) 70vw, 35vw"
            className="h-auto max-h-[570px] w-auto max-w-[78vw] object-contain drop-shadow-[0_28px_24px_rgba(15,23,42,0.14)] lg:max-h-[72vh]"
          />
        </div>

        <div className="relative z-30 flex items-end pt-8 lg:col-span-5 lg:pl-28 lg:pb-32 lg:pt-64">
          <div className="ml-auto max-w-sm bg-white/85 p-5 backdrop-blur-sm sm:p-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Available now
            </div>
            <p className="text-base leading-7 text-slate-700 sm:text-lg">
              I build high-converting landing pages, dynamic dashboards, and
              scalable SaaS products that move your business forward.
            </p>
            <Link
              href="/contact"
              className="hero-gradient-button mt-7 inline-flex h-12 items-center rounded-full px-6 font-semibold text-slate-950 shadow-[0_12px_35px_-14px_rgba(226,70,190,0.8)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Build your product
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 border-y border-slate-200/80 bg-white/80 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="shrink-0">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Trusted by
            </p>
            <p className="font-serif text-lg italic text-slate-800">
              product-led teams
            </p>
          </div>
          <div className="flex items-center justify-between gap-8 sm:justify-end lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <Image
                  src={partner.logo}
                  alt=""
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain grayscale"
                />
                <span className="hidden sm:inline">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
