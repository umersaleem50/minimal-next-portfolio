import { BlogMeta } from "@/lib/blogs";

export interface BlogAuthor {
  name: string;
  image?: string;
}

export interface BlogCardProps {
  blog: BlogMeta;
  author: BlogAuthor;
  className?: string;
}

export interface FeaturedBlogs {
  posts: BlogMeta[];
  author: BlogAuthor;
}
