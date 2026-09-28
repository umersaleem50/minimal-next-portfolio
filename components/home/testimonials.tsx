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

const avatarGradients = [
  "from-emerald-300 to-teal-500",
  "from-sky-300 to-indigo-500",
  "from-amber-200 to-orange-500",
  "from-fuchsia-300 to-rose-500",
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Umar is responsible and finishes tasks when he says he will. Even though he did not work under pressure or strict deadlines while collaborating with me on open source projects, he always delivered what he promised on time. He has a good understanding of React and Next.js.",
    name: "Filip Trivan",
    role: "CTO @ Stridon Groups",
    avatar: "/clients/filip-trivan.jpg",
  },
  {
    quote:
      "Umar Saleem y Samar Rian trabajaron juntos para crear un sitio web robusto y escalables, utilizando las mejores practica. Crearon un diseño para mejorar las conversaciones e integraron un CMS sin interfaz (Sanity.io) en mi sitio web. Me encantó trabajar con ellos, la comunicación fue clara. Muy recomendable",
    name: "Antonio Moreno",
    role: "Software Architech & AI Specialist",
    avatar: "/clients/antonio-moreno.jpg",
  },
  {
    quote:
      "Had a great experience working with Umer on setting up our app’s backend using Supabase. He came in with a strong grasp of the stack, got things running smoothly, and made sure everything was well-documented and reliable. Communication was clear and fast.",
    name: "Saamir Shamsie",
    role: "Founder @ Copped AI",
    avatar: "/clients/saamir-shamsie.jpg",
  },
  {
    quote:
      "I had the pleasure of working with Umer on an app project where he handled the backend development, and I’d gladly recommend him to others and will also work with him in the future. He built a solid and efficient backend while also tackling tricky technical challenges that kept everything running smoothly.",
    name: "Nisa Fatima",
    role: "iOS Developer",
    avatar: "/clients/nisa-fatima.jpg",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Avatar({
  name,
  avatar,
  index,
}: {
  name: string;
  avatar?: string;
  index: number;
}) {
  if (avatar) {
    return (
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white/15"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-slate-950 ring-2 ring-white/15",
        avatarGradients[index % avatarGradients.length]
      )}
    >
      {initials(name)}
    </span>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slide = (direction: number) => {
    trackRef.current?.scrollBy({
      left: direction * Math.min(trackRef.current.clientWidth * 0.86, 520),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              Client stories
            </p>
            <h2 className="max-w-3xl font-heading text-4xl leading-[1.05] sm:text-6xl">
              Kind words from the people I've built alongside.
            </h2>
          </div>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              onClick={() => slide(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-slate-950"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => slide(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-emerald-200"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="testimonial-track -mr-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:-mr-8 lg:-mr-12"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="flex min-h-[380px] w-[86vw] shrink-0 snap-start flex-col rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl sm:w-[440px] sm:p-10"
            >
              <Quote
                className="h-9 w-9 shrink-0 text-emerald-300"
                aria-hidden="true"
              />
              <blockquote className="mb-10 mt-12 line-clamp-8 font-serif text-md italic leading-[1.45] text-slate-100 sm:text-2xl">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <Avatar
                  name={testimonial.name}
                  avatar={testimonial.avatar}
                  index={index}
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex gap-3 sm:hidden">
          <button
            onClick={() => slide(-1)}
            aria-label="Previous testimonial"
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => slide(1)}
            aria-label="Next testimonial"
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
