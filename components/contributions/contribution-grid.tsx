import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";
import { cn } from "@/lib/utils";

interface ContributionGridProps {
  contributions: contributionsInterface[];
}

const WEEKS = 26;
const DAYS = 7;
const levels = ["bg-slate-100", "bg-emerald-100", "bg-emerald-300", "bg-emerald-500", "bg-emerald-700"];

// Decorative GitHub-style activity pattern, seeded from the repo name so it is stable
// between renders (server and client) and differs per card. It is not real commit data.
function activityPattern(seed: string) {
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  return Array.from({ length: WEEKS * DAYS }, (_, i) => {
    hash = (hash * 1103515245 + 12345) | 0;
    const noise = ((hash >>> 16) & 0xff) / 255;
    // Busier towards the most recent weeks, like an active contribution streak.
    const recency = Math.floor(i / DAYS) / WEEKS;
    return Math.min(4, Math.floor(noise * 3 + recency * 2.2));
  });
}

export function ContributionGrid({ contributions }: ContributionGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {contributions.map((contribution, index) => (
        <AnimatedSection key={contribution.link} direction="up" delay={0.1 * (index + 1)} className="flex">
          <Link
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4">
              <p className="flex min-w-0 items-center gap-2 font-mono text-sm">
                <Icons.gitRepoIcon className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                <span className="truncate text-slate-500">{contribution.repoOwner}</span>
                <span className="text-slate-300">/</span>
                <span className="truncate font-semibold text-slate-900">{contribution.repo}</span>
              </p>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                <GitMerge className="h-3.5 w-3.5" aria-hidden="true" />
                Merged
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{contribution.repo}</h3>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-700" />
              </div>
              <p className="mt-4 leading-7 text-slate-600">{contribution.contibutionDescription}</p>

              <div
                aria-hidden="true"
                className="mt-8 grid grid-flow-col gap-[3px]"
                style={{ gridTemplateRows: `repeat(${DAYS}, minmax(0, 1fr))` }}
              >
                {activityPattern(contribution.repo).map((level, i) => (
                  <span
                    key={i}
                    className={cn(
                      "aspect-square rounded-[3px] transition-colors duration-500",
                      levels[level],
                      level > 0 && "group-hover:brightness-95",
                    )}
                  />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5 text-sm text-slate-500 sm:mt-auto">
                <span className="inline-flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4" aria-hidden="true" />
                  Open-source contribution
                </span>
                <span className="font-medium text-slate-900 transition group-hover:text-emerald-700">View on GitHub</span>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  );
}
