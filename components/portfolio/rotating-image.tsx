"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
}: RotatingImageProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length < 2) return;
    let timer: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      timer = setInterval(
        () => setIndex((current) => (current + 1) % images.length),
        interval,
      );
    }, startDelay);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, [images.length, interval, startDelay]);

  const src = images[index];

  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-slate-100", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeOut" }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
