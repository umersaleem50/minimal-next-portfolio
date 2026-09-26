import Image from "next/image";
import Link from "next/link";

import { Author } from "./author";
import { BlogCardProps } from "./types";

export function LargeBlogCard({ blog, author }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group flex w-full flex-col">
      <div className="relative h-[12rem] overflow-hidden rounded-[2rem] bg-slate-900 sm:h-[20rem] md:h-[32rem]">
        {blog.coverImage && (
          <Image
            src={blog.coverImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="my-5 lg:my-6">
        <h3 className="font-serif text-xl text-white transition-colors group-hover:text-emerald-200 md:text-2xl lg:text-3xl">
          {blog.title}
        </h3>
        <p className="mt-4 line-clamp-3 text-slate-400">{blog.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pb-5">
        {blog.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <Author author={author} postedAt={blog.date} />
    </Link>
  );
}
