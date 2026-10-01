"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type TargetAndTransition,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { RotatingImageProps } from "./types";

export function RotatingImage({
  images,
  alt,
  sizes,
  interval = 5000,
  startDelay = 0,
  className,
  variant = "fade",
}: RotatingImageProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length < 2) return;
    let timer: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      timer = setInterval(
        () => setIndex((current) => (current + 1) % images.length),
        interval
      );
    }, startDelay);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, [images.length, interval, startDelay]);

  const src = images[index];

  const slideTransition: Transition = {
    duration: reduceMotion ? 0 : 0.8,
    ease: "easeInOut",
  };
  const fadeTransition: Transition = {
    duration: reduceMotion ? 0 : 1.2,
    ease: "easeOut",
  };

  const motionProps: {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    exit: TargetAndTransition;
    transition: Transition;
  } =
    variant === "slide-down"
      ? {
          initial: { opacity: 0, y: reduceMotion ? 0 : "-100%" },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: reduceMotion ? 0 : "100%" },
          transition: slideTransition,
        }
      : {
          initial: { opacity: 0, scale: reduceMotion ? 1 : 1.05 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          transition: fadeTransition,
        };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-slate-100",
        className
      )}
    >
      <AnimatePresence initial={false}>
        <motion.div key={src} className="absolute inset-0" {...motionProps}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
