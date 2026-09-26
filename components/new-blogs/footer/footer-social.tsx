import Link from "next/link";

import { FooterSocial } from "./types";

function FooterSocials({ socialLinks = [] }: { socialLinks: Array<FooterSocial> }) {
  return (
    <div className="flex gap-3">
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-slate-300 transition hover:bg-white hover:text-slate-950"
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}

export default FooterSocials;
