"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { PortfolioCard } from "./portfolio-card";
import { PortfolioProps } from "./types";

export function Portfolio({ projects }: PortfolioProps) {
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

  const controls = (
    <div className="flex items-center gap-3">
      <button
        onClick={() => slide(-1)}
        aria-label="Previous project"
        className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition hover:bg-foreground hover:text-background"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => slide(1)}
        aria-label="Next project"
        className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background transition hover:opacity-80"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[85rem]">
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

      <div className="mt-8 flex items-center justify-between gap-6 border-t border-border pt-6">
        <div className="flex items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
              className={cn(
                "h-2 rounded-full bg-foreground transition-all duration-500",
                index === active ? "w-8" : "w-2 opacity-25 hover:opacity-50",
              )}
            />
          ))}
          <span className="ml-3 text-sm tabular-nums text-muted-foreground">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        {controls}
      </div>
    </div>
  );
}
