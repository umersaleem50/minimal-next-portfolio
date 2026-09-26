import { AnimatedText } from "@/components/common/animated-text";
import { cn } from "@/lib/utils";
import { PortfolioHeaderProps } from "./types";

export function PortfolioHeaders({
  title,
  subtitle,
  className,
}: PortfolioHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:space-y-4 md:space-y-2 max-w-md lg:mb-8 md:mb-6 mb-4",
        className,
      )}
    >
      <AnimatedText
        as="h3"
        className="lg:text-3xl md:text-2xl text-xl leading-snug font-heading text-foreground"
      >
        {title}
      </AnimatedText>
      <AnimatedText
        as="p"
        delay={0.1}
        className="sm:text-base text-sm text-muted-foreground line-clamp-3"
      >
        {subtitle}
      </AnimatedText>
    </div>
  );
}
