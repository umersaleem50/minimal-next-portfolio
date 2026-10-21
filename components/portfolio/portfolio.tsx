"use client";

import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { HomeSection } from "@/components/home/home-section";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "./portfolio-card";
import { PortfolioProps } from "./types";

const AUTOPLAY_MS = 5000;
const DRAG_CLICK_THRESHOLD = 5;

export function Portfolio({ projects, eyebrow, title, description }: PortfolioProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ startX: 0, startScroll: 0, moved: 0, down: false });

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };

  const slide = (direction: number) =>
    goTo((active + direction + projects.length) % projects.length);

  // Advance automatically after a brief moment, unless the user is interacting.
  useEffect(() => {
    if (paused || dragging || projects.length < 2) return;
    const timer = setTimeout(() => slide(1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = { startX: event.clientX, startScroll: track.scrollLeft, moved: 0, down: true };
    setDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const cursor = cursorRef.current;
    const track = trackRef.current;
    if (cursor && track) {
      const rect = track.getBoundingClientRect();
      cursor.style.transform = `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px) translate(-50%, -50%)`;
    }
    if (!drag.current.down || !track) return;
    const delta = event.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(delta));
    track.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    const track = trackRef.current;
    if (!drag.current.down || !track) return;
    drag.current.down = false;
    setDragging(false);
    goTo(Math.min(projects.length - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth))));
  };

  // A drag shouldn't count as a click on the case study link underneath.
  const onClickCapture = (event: React.MouseEvent) => {
    if (drag.current.moved > DRAG_CLICK_THRESHOLD) {
      event.preventDefault();
      event.stopPropagation();
      drag.current.moved = 0;
    }
  };

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
        className="group/slider relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          endDrag();
        }}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
      <div
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(event) => event.preventDefault()}
        className={cn(
          "testimonial-track relative flex overflow-x-auto md:cursor-grab",
          dragging ? "cursor-grabbing select-none" : "snap-x snap-mandatory",
        )}
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
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
      >
        <div
          className={cn(
            "grid h-16 w-16 place-items-center rounded-full bg-slate-950/85 text-white opacity-0 shadow-lg backdrop-blur transition-[opacity,scale] duration-200 group-hover/slider:opacity-100",
            dragging && "scale-90",
          )}
        >
          <MoveHorizontal className="h-6 w-6" />
        </div>
      </div>
      </div>

      <div className="mt-10 flex items-center gap-2 border-t border-slate-200 pt-8">
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
    </HomeSection>
  );
}
