import { AnimatedSection } from "@/components/common/animated-section";
import { cn } from "@/lib/utils";
import BlogCard from "./blog-card";
import { FeaturedBlogs } from "./types";

function BlogsModule({ posts, author }: FeaturedBlogs) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {posts.map((post, index) => {
        // With an odd number of posts, the last one spans the full row instead of sitting alone.
        const spansRow = posts.length % 2 === 1 && index === posts.length - 1;
        return (
          <AnimatedSection
            key={post.slug}
            delay={0.1 * (index + 1)}
            direction="up"
            className={cn("flex", spansRow && "lg:col-span-2")}
          >
            <BlogCard blog={post} author={author} className="w-full" />
          </AnimatedSection>
        );
      })}
    </div>
  );
}

export default BlogsModule;
