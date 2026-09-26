import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";

const partners = [
  { name: "Solinovation", logo: "/experience/keys-logo.png" },
  { name: "Muze AI", logo: "/experience/muzeai-logo.png" },
  { name: "Builtdesign", logo: "/experience/builtdesign-logo.png" },
];

const stats = [
  { value: "11+", label: "Projects shipped" },
  { value: "5+", label: "Years writing code" },
  { value: "3", label: "Teams built with" },
  { value: "100%", label: "Remote-friendly" },
];

export function EditorialHero() {
  return (
    <section
      aria-labelledby="editorial-hero-title"
      className="relative isolate overflow-hidden bg-white px-5 py-20 text-slate-900 sm:px-8 lg:px-12 lg:py-28"
    >
      <div
        className="hero-gradient-field absolute -right-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full opacity-70 blur-3xl sm:h-[520px] sm:w-[520px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            Available for new projects
          </div>

          <h1
            id="editorial-hero-title"
            className="mt-8 font-heading text-5xl leading-[1.05] tracking-tight text-slate-900 sm:text-7xl lg:text-[5.5rem]"
          >
            Umar Saleem
          </h1>
          <p className="mt-3 max-w-xl font-serif text-2xl italic leading-tight text-slate-600 sm:text-4xl">
            builds software people actually enjoy using.
          </p>

          <p className="mt-8 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            I build high-converting landing pages, dynamic dashboards, and
            scalable SaaS products that move your business forward.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="hero-gradient-button inline-flex h-12 items-center rounded-full px-6 font-semibold text-slate-950 shadow-[0_12px_35px_-14px_rgba(226,70,190,0.8)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Build your product
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              target="_blank"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-300 px-6 font-semibold text-slate-900 transition hover:bg-slate-950 hover:text-white"
            >
              <Icons.post className="h-4 w-4" />
              View resume
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              <div className="relative h-72 md:h-56 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 lg:h-auto lg:w-2/4">
                <Image
                  src="/profile-picture.jpg"
                  alt="Umar Saleem"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 200px"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-slate-50 p-4"
                    >
                      <p className="font-heading text-2xl text-slate-900 sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Trusted by
                  </p>
                  <div className="mt-4 flex items-center gap-6">
                    {partners.map((partner) => (
                      <Image
                        key={partner.name}
                        src={partner.logo}
                        alt={partner.name}
                        title={partner.name}
                        width={30}
                        height={30}
                        className="h-7 w-7 object-contain grayscale transition hover:grayscale-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
