import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "../common/animated-text";
import { Icons } from "../common/icons";
import { buttonVariants } from "../ui/button";

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
        <Image
          src={profileImg}
          height={100}
          width={100}
          sizes="100vw"
          className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary"
          alt="Naman Barkiya - Applied AI Engineer Portfolio"
          priority
        />
        <AnimatedText
          as="h1"
          delay={0.2}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Umar Saleem
        </AnimatedText>
        <AnimatedText
          as="h3"
          delay={0.4}
          className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
        >
          SaaS Developer Software Engineer
        </AnimatedText>
        <div className="mt-4 max-w-[42rem] text-center">
          <p className="leading-normal text-muted-foreground text-sm sm:text-base">
            Software engineer working as web developer and Android application
            developer on contracts.
          </p>
        </div>

        <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
          <AnimatedText delay={0.6}>
            <Link
              href={"/resume"}
              target="_blank"
              className={cn(buttonVariants({ size: "lg" }))}
              aria-label="View resume"
            >
              <Icons.post className="w-4 h-4 mr-2" /> Resume
            </Link>
          </AnimatedText>
          <AnimatedText delay={0.8}>
            <Link
              href={"/contact"}
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                })
              )}
              aria-label="Contact Naman Barkiya"
            >
              <Icons.contact className="w-4 h-4 mr-2" /> Contact
            </Link>
          </AnimatedText>
        </div>
        <AnimatedText delay={1.2}>
          <Icons.chevronDown className="h-6 w-6 mt-10" />
        </AnimatedText>
      </div>
    </section>
  );
}
