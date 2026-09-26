import { ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionGridProps {
  contributions: contributionsInterface[];
}

// Home page variant of the contributions list, laid out like the Services grid.
export function ContributionGrid({ contributions }: ContributionGridProps) {
  return (
    <div className="grid md:grid-cols-2">
      {contributions.map((contribution, index) => (
        <Link
          key={contribution.link}
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative border-b border-slate-200 py-10 md:px-8 md:odd:border-r lg:py-14"
        >
          <div className="flex items-start justify-between gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition group-hover:border-emerald-200 group-hover:bg-emerald-50">
              <Icons.gitRepoIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <span className="font-mono text-sm text-slate-400">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-10 flex items-center gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {contribution.repo}
            <ArrowUpRight className="h-6 w-6 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-700" />
          </h3>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">{contribution.contibutionDescription}</p>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            {contribution.repoOwner}
          </p>
        </Link>
      ))}
    </div>
  );
}
