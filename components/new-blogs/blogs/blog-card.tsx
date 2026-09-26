import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Author } from "./author";
import { BlogCardProps } from "./types";

function BlogCard({ blog, author, className }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={cn(
        "group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:flex",
        className,
      )}
    >
      <div className="relative h-[260px] w-full shrink-0 overflow-hidden bg-slate-900 sm:h-auto sm:min-h-[420px] sm:w-[42%]">
        {blog.coverImage ? (
          <Image
            src={blog.coverImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-2xl leading-snug text-white transition group-hover:text-emerald-200 sm:text-3xl">
          {blog.title}
        </h3>
        <p className="mt-4 line-clamp-4 leading-7 text-slate-400">{blog.description}</p>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6 sm:mt-auto">
          <Author author={author} postedAt={blog.date} />
          {blog.readingTime && (
            <span className="shrink-0 font-mono text-xs text-slate-400">{blog.readingTime} min read</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
