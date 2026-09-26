"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  // Optional photo path (e.g. "/testimonials/alex.jpg"); falls back to initials.
  avatar?: string;
}

// Quotes longer than this get a full-width card so they don't get cramped.
const LONG_QUOTE_LENGTH = 180;

const avatarGradients = [
  "from-emerald-300 to-teal-500",
  "from-sky-300 to-indigo-500",
  "from-amber-200 to-orange-500",
  "from-fuchsia-300 to-rose-500",
];

const testimonials: Testimonial[] = [
  { quote: "Umar understood the business goal immediately and turned it into a product that feels considered, fast, and genuinely easy to use.", name: "Alex Morgan", role: "Founder, Northstar" },
  { quote: "The dashboard finally gives our team one clear view of the business. The craft and attention to detail were exceptional throughout.", name: "Sarah Chen", role: "Operations Lead, Flux" },
  { quote: "From strategy to launch, communication was direct and delivery was dependable. We shipped sooner and with a much stronger product. Umar pushed back on scope where it mattered, kept us focused on what our customers actually needed, and left us with a codebase our own team is comfortable building on.", name: "Daniel Reed", role: "Co-founder, Relay" },
  { quote: "Our new landing page is dramatically clearer and is converting better. Every choice feels intentional rather than decorative.", name: "Maya Patel", role: "Growth Director, Luma" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Avatar({ name, avatar, index }: { name: string; avatar?: string; index: number }) {
  if (avatar) {
    return <Image src={avatar} alt={name} width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white/15" />;
  }
  return (
    <span aria-hidden="true" className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-slate-950 ring-2 ring-white/15", avatarGradients[index % avatarGradients.length])}>
      {initials(name)}
    </span>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slide = (direction: number) => {
    trackRef.current?.scrollBy({ left: direction * Math.min(trackRef.current.clientWidth * 0.86, 520), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">Client stories</p>
            <h2 className="max-w-3xl font-heading text-4xl leading-[1.05] sm:text-6xl">Good work speaks through the people it helps.</h2>
          </div>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button onClick={() => slide(-1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-slate-950"><ArrowLeft className="h-5 w-5" /></button>
            <button onClick={() => slide(1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-emerald-200"><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>

        <div ref={trackRef} className="testimonial-track -mr-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:-mr-8 lg:-mr-12">
          {testimonials.map((testimonial, index) => {
            const isLong = testimonial.quote.length > LONG_QUOTE_LENGTH;
            return (
              <article
                key={`${testimonial.name}-${index}`}
                className={cn(
                  "flex min-h-[350px] w-[86vw] shrink-0 snap-start flex-col rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl sm:p-10",
                  // Long quotes span the visible track width (track width minus its negative right margin).
                  isLong ? "sm:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)]" : "max-w-[500px]",
                )}
              >
                <Quote className="h-9 w-9 text-emerald-300" aria-hidden="true" />
                <blockquote className={cn("mb-10 mt-12 font-serif text-2xl italic leading-[1.45] text-slate-100 sm:text-3xl", isLong && "max-w-5xl")}>“{testimonial.quote}”</blockquote>
                <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                  <Avatar name={testimonial.name} avatar={testimonial.avatar} index={index} />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex gap-3 sm:hidden">
          <button onClick={() => slide(-1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-white/20"><ArrowLeft className="h-5 w-5" /></button>
          <button onClick={() => slide(1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950"><ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}
