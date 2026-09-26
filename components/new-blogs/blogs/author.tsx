import Image from "next/image";

import { BlogAuthor } from "./types";

export function Author({ author, postedAt }: { author: BlogAuthor; postedAt: string }) {
  const date = new Date(postedAt);
  return (
    <div className="flex items-center gap-3">
      {author.image ? (
        <Image
          src={author.image}
          alt={author.name}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full bg-slate-100 object-cover object-top ring-2 ring-white/15"
        />
      ) : (
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-300 to-teal-500 text-sm font-bold text-slate-950">
          {author.name.charAt(0)}
        </span>
      )}
      <div className="text-sm">
        <p className="font-semibold text-white">{author.name}</p>
        <time dateTime={date.toISOString()} className="text-slate-400">
          {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </time>
      </div>
    </div>
  );
}
