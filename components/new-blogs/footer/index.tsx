import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SocialLinks } from "@/config/socials";
import FooterSocials from "./footer-social";
import { FooterProps } from "./types";

function FooterModule({ metaData, socialLinks }: FooterProps) {
  const year = new Date().getFullYear();
  const title = metaData?.title ?? "Keep your vision alive and online.";
  const subtitle = metaData?.subtitle ?? "Arfa Developers";
  const socials =
    socialLinks ?? SocialLinks.map((social) => ({ name: social.name, url: social.link, icon: social.icon }));

  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 px-5 pt-24 text-white sm:px-8 lg:px-12 lg:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-6 md:items-end lg:pb-16">
          <div className="space-y-4 md:col-span-4">
            <h2 className="max-w-3xl font-serif text-4xl italic leading-[1.05] sm:text-6xl">{title}</h2>
            <p className="text-sm text-emerald-300">
              {subtitle}, {year}
            </p>
          </div>
          <div className="md:col-span-2 md:text-right">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-7 font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Start a project
              <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <FooterSocials socialLinks={socials} />
          <p className="text-sm text-slate-500">
            © All rights reserved. {subtitle} {year}.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterModule;
