import { AnimatedSection } from "@/components/common/animated-section";
import BlogCard from "./blog-card";
import { FeaturedBlogs } from "./types";

function BlogsModule({ posts, author }: FeaturedBlogs) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {posts.map((post, index) => (
        <AnimatedSection key={post.slug} delay={0.1 * (index + 1)} direction="up" className="flex">
          <BlogCard blog={post} author={author} className="w-full" />
        </AnimatedSection>
      ))}
    </div>
  );
}

export default BlogsModule;
