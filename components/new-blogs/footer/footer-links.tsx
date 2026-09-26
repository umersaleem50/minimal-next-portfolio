import Link from "next/link";

import { FooterRoute, FooterRoutes } from "./types";

function FooterLinks({ title, routes = [] }: FooterRoutes) {
  return (
    <div className="lg:py-4 md:py-3">
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
        {title}
      </h3>
      <ul className="space-y-3">
        {routes.map(({ url, title, external }: FooterRoute) => (
          <li key={title}>
            <Link
              href={url}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="text-sm text-slate-300 transition hover:text-white md:text-base"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
