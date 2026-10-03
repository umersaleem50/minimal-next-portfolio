import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import { PortfolioHeaders } from "./portfolio-header";
import { RotatingImage } from "./rotating-image";
import { PortfolioCardProps } from "./types";

export function PortfolioCard({
  index,
  title,
  description,
  results,
  href,
  images,
  options = { reverse: index % 2 === 0 },
}: PortfolioCardProps) {
  // First image is the project logo shot, shown in the secondary (small) frame.
  // The rest rotate through the primary (large) frame.
  const [logoImage, ...primaryImages] = images;
  const secondaryImages = [logoImage];
  const indexedTitle = `${index}. ${title}`;

  return (
    <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-x-6 md:gap-x-4 items-end">
      <RotatingImage
        images={primaryImages}
        alt={`${title} screenshot`}
        sizes="(min-width: 1024px) 50vw, 42vw"
        variant="slide-down"
        className={cn(
          "lg:col-span-6 md:col-span-5 col-span-1 w-full lg:h-[34rem] md:h-[28rem] sm:block hidden border border-slate-200",
          options.reverse && "md:order-last"
        )}
      />
      <div
        className={cn(
          "lg:col-span-4 md:col-span-5 col-span-1",
          options.reverse && "md:order-2"
        )}
      >
        <PortfolioHeaders title={indexedTitle} subtitle={description} />
        <RotatingImage
          images={secondaryImages}
          alt={`${title} screenshot`}
          sizes="(min-width: 768px) 35vw, 100vw"
          startDelay={2500}
          className="w-full h-[20rem] border border-slate-200 object-center"
        />
      </div>
      <div
        className={cn(
          "md:col-span-2 col-span-1 flex flex-row md:block gap-x-8 md:gap-x-0 justify-between py-8 md:py-0 items-end",
          options.reverse && "md:order-first"
        )}
      >
        <div className="md:mb-10 md:-rotate-90 md:-translate-y-full whitespace-nowrap">
          <p className="md:text-3xl sm:text-2xl text-xl font-serif text-slate-500">
            {results.at(0)}
          </p>
          <p className="text-sm text-slate-500">{results.at(1)}</p>
        </div>
        <Link
          href={href}
          className="group inline-flex h-11 w-1/2 items-center justify-center gap-1 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-1/3 md:w-full"
        >
          Case Study
          <Icons.chevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
