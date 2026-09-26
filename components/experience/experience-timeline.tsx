"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import ExperienceCard from "@/components/experience/experience-card";
import { ExperienceInterface } from "@/config/experience";
import { cn } from "@/lib/utils";

const formatRange = (start: Date, end: Date | "Present") => {
  const format = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return `${format(start)} — ${end === "Present" ? "Present" : format(end)}`;
};

interface ExperienceTimelineProps {
  experiences: ExperienceInterface[];
}

// Vertical timeline for the home page dark section. The rail fills in as you scroll
// and each original ExperienceCard rises into place, alternating sides on desktop.
export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2"
      >
        <motion.div
          style={{ scaleY: progress }}
          className="h-full w-full origin-top bg-gradient-to-b from-emerald-300 to-emerald-500"
        />
      </div>

      <ol className="space-y-12 md:space-y-20">
        {experiences.map((experience, index) => {
          const onRight = index % 2 === 1;
          return (
            <li
              key={experience.id}
              className="relative grid gap-4 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-emerald-300 ring-1 ring-emerald-300/40 md:left-1/2"
              />

              <AnimatedSection
                direction="up"
                delay={0.1}
                className={cn(
                  "pt-6 md:pt-7",
                  onRight ? "md:order-1 md:text-right" : "md:order-2"
                )}
              >
                <p className="font-mono text-sm text-emerald-300">
                  {formatRange(experience.startDate, experience.endDate)}
                </p>
                <p className="mt-2 text-xl font-semibold">
                  {experience.company}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {experience.location}
                </p>
              </AnimatedSection>

              <AnimatedSection
                direction="up"
                delay={0.2}
                className={cn(onRight ? "md:order-2" : "md:order-1")}
              >
                <ExperienceCard experience={experience} />
              </AnimatedSection>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
