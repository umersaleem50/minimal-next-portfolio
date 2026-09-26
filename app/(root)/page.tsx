import { Metadata } from "next";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { ContributionGrid } from "@/components/contributions/contribution-grid";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { EditorialHero } from "@/components/home/editorial-hero";
import { HomeSection, ViewAllLink } from "@/components/home/home-section";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import BlogsModule from "@/components/new-blogs/blogs";
import { Portfolio } from "@/components/portfolio/portfolio";
import SkillsCard from "@/components/skills/skills-card";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { portfolioProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { getFeaturedBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Naman Barkiya - Applied AI Engineer working at the intersection of AI, data, and scalable software systems. Explore my projects, experience, and contributions.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();
  const blogAuthor = { name: "Umar Saleem", image: "/umar-standing.png" };
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Applied AI Engineer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <EditorialHero />
      <Services />
      <Testimonials />
      <Portfolio
        projects={portfolioProjects}
        eyebrow="Selected work"
        title="Anyone can make promises. Here's the proof."
        description={pagesConfig.projects.description}
      />
      <HomeSection
        id="experience"
        tone="dark"
        eyebrow={pagesConfig.experience.title}
        title="Where the craft was shaped."
        description={pagesConfig.experience.description}
        actions={<ViewAllLink href="/experience" tone="dark" />}
      >
        <ExperienceTimeline experiences={experiences.slice(0, 3)} />
      </HomeSection>
      <HomeSection
        id="contributions"
        eyebrow={pagesConfig.contributions.title}
        title="Giving back to the tools I build with."
        description={pagesConfig.contributions.description}
        actions={<ViewAllLink href="/contributions" />}
      >
        <ContributionGrid contributions={featuredContributions} />
      </HomeSection>
      <HomeSection
        id="blogs"
        tone="dark"
        eyebrow={pagesConfig.blogs.title}
        title="Notes from building in public."
        description={pagesConfig.blogs.description}
        actions={<ViewAllLink href="/blogs" tone="dark" />}
      >
        <BlogsModule posts={featuredBlogs} author={blogAuthor} />
      </HomeSection>
      <HomeSection
        id="skills"
        eyebrow={pagesConfig.skills.title}
        title="The toolkit behind the work."
        description={pagesConfig.skills.description}
        actions={<ViewAllLink href="/skills" />}
      >
        <SkillsCard skills={featuredSkills} />
      </HomeSection>
    </ClientPageWrapper>
  );
}
