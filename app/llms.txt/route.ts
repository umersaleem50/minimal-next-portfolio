import { portfolioProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

// Plain-text site summary for LLM crawlers (https://llmstxt.org).
export function GET() {
  const projects = portfolioProjects
    .map(
      (p) => `- [${p.title}](${siteConfig.url}${p.href}): ${p.description}`
    )
    .join("\n");

  const body = `# ${siteConfig.shortName}

> ${siteConfig.description}

${siteConfig.shortName} is a ${siteConfig.jobTitle}. Contact: ${siteConfig.email}

## Pages

- [Home](${siteConfig.url}): Services, experience, selected work, testimonials and contact

## Projects

${projects}

## Contact

- Email: ${siteConfig.email}
- Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
