"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

import { HomeSection, ViewAllLink } from "@/components/home/home-section";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "./portfolio-card";
import { PortfolioProps } from "./types";

export function Portfolio({ projects, eyebrow, title, description }: PortfolioProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };

  const slide = (direction: number) =>
    goTo((active + direction + projects.length) % projects.length);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <HomeSection
      id="projects"
      eyebrow={eyebrow}
      title={title}
      description={description}
      actions={
        <>
          <button
            onClick={() => slide(-1)}
            aria-label="Previous project"
            className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 transition hover:bg-slate-950 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => slide(1)}
            aria-label="Next project"
            className="grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-emerald-700"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </>
      }
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="testimonial-track relative flex snap-x snap-mandatory overflow-x-auto"
      >
        {projects.map((project, index) => (
          <div key={project.id} className="w-full shrink-0 snap-start px-1">
            <PortfolioCard
              {...project}
              index={index + 1}
              options={{ reverse: index % 2 !== 0 }}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 border-t border-slate-200 pt-8">
        <div className="flex items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
              className={cn(
                "h-2 rounded-full bg-slate-950 transition-all duration-500",
                index === active ? "w-8" : "w-2 opacity-20 hover:opacity-40",
              )}
            />
          ))}
          <span className="ml-3 font-mono text-sm tabular-nums text-slate-400">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <ViewAllLink href="/projects" label="All projects" />
      </div>
    </HomeSection>
  );
}
