import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

const partners = [
  { name: "Solinovation", logo: "/experience/keys-logo.png" },
  { name: "Muze AI", logo: "/experience/muzeai-logo.png" },
  { name: "Builtdesign", logo: "/experience/builtdesign-logo.png" },
];

export function EditorialHero() {
  return (
    <section
      aria-labelledby="editorial-hero-title"
      className="relative mb-24 min-h-[760px] border border-white/40 bg-white/45 shadow-[0_32px_100px_-50px_rgba(37,224,166,0.75)] backdrop-blur-2xl"
    >
      <div className="hero-aurora absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[46%] bg-white/50 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      <div className="grid min-h-[680px] grid-cols-1 lg:grid-cols-12">
        <div className="relative z-10 flex items-center px-6 pb-12 pt-16 sm:px-10 lg:col-span-7 lg:px-14 lg:pb-36 lg:pt-20">
          <div className="max-w-3xl rounded-[1.75rem] border border-white/60 bg-white/65 p-7 shadow-[0_24px_70px_-42px_rgba(45,20,75,0.55)] backdrop-blur-xl sm:p-10 lg:bg-white/72 lg:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-slate-600 sm:text-sm">
              SaaS · Web · Android
            </p>
            <h2
              id="editorial-hero-title"
              className="max-w-2xl text-balance text-4xl leading-[0.98] text-slate-800 sm:text-6xl lg:text-7xl"
            >
              Business logic behind{" "}
              <span className="font-serif font-normal italic">
                great software.
              </span>
            </h2>
          </div>
        </div>

        <div className="relative z-20 mx-6 -mt-4 min-h-[430px] overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/25 shadow-2xl backdrop-blur-md sm:mx-10 lg:absolute lg:bottom-20 lg:left-1/2 lg:m-0 lg:h-[68%] lg:w-[30%] lg:-translate-x-1/2">
          <Image
            src={profileImg}
            alt="Umar Saleem, software engineer"
            fill
            sizes="(max-width: 1024px) 90vw, 30vw"
            className="object-cover object-center grayscale-[15%] contrast-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent p-6 pt-28 text-white">
            <p className="font-heading text-2xl">Umar Saleem</p>
            <p className="mt-1 text-sm text-white/80">Software Engineer</p>
          </div>
        </div>

        <div className="relative z-10 flex items-end px-6 pb-12 pt-8 sm:px-10 lg:col-span-5 lg:px-12 lg:pb-36 lg:pl-32 lg:pt-64">
          <div className="w-full rounded-[1.75rem] border border-white/60 bg-white/65 p-7 shadow-[0_24px_70px_-42px_rgba(45,20,75,0.55)] backdrop-blur-xl sm:p-9">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-slate-900/5 px-4 py-2 text-sm font-medium text-slate-800">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Available for select projects
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-700">
              I build polished landing pages, scalable SaaS products, and
              Android experiences—turning a clear business idea into dependable
              software.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "hero-gradient-button mt-7 rounded-full border-0 px-6 text-slate-950 shadow-lg hover:opacity-90"
              )}
            >
              Start a project <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-30 grid gap-6 border-t border-white/55 bg-white/55 px-7 py-6 backdrop-blur-2xl sm:px-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-[1fr_2fr] lg:items-center lg:px-14">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Experience across
          </p>
          <p className="mt-1 font-serif text-xl italic text-slate-800">
            product-led teams
          </p>
        </div>
        <div className="grid grid-cols-3 items-center gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex min-w-0 items-center justify-center gap-2 text-center text-xs font-semibold text-slate-700 sm:text-sm"
            >
              <Image
                src={partner.logo}
                alt=""
                width={34}
                height={34}
                className="h-8 w-8 rounded-md object-contain grayscale"
              />
              <span className="hidden truncate sm:inline">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
