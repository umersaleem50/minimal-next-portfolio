import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import ProjectStory from "@/components/projects/project-description";
import { getTechIcon } from "@/components/projects/tech-icon";
import { ProjectInterface, Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

const formatRange = (start: Date, end: Date) => {
  const format = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return `${format(start)} — ${format(end)}`;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.companyName} | Case Study`,
    description: project.shortDescription,
    alternates: { canonical: `${siteConfig.url}/projects/${projectId}` },
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/#projects");
  }

  const index = Projects.indexOf(project);
  const previous = Projects[(index - 1 + Projects.length) % Projects.length];
  const next = Projects[(index + 1) % Projects.length];
  const TypeIcon = project.type === "Personal" ? Icons.userFill : Icons.work;

  return (
    <article className="bg-white text-slate-900">
      {/* Hero */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="mt-6 max-w-4xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {project.companyName}
            </h1>
            <p className="mt-4 max-w-2xl font-serif text-xl italic leading-8 text-slate-600 sm:text-2xl">
              {project.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.websiteLink && (
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Visit live site
                  <Icons.externalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="group inline-flex h-12 items-center gap-2 rounded-full border border-slate-300 px-6 text-sm font-semibold transition hover:bg-slate-950 hover:text-white"
                >
                  <Icons.gitHub className="h-4 w-4" />
                  View source
                </Link>
              )}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className="flex items-center gap-3 rounded-full border border-slate-200 py-1.5 pl-1.5 pr-4 transition hover:border-slate-300"
              >
                <Image
                  src={profileImg}
                  alt="Umar Saleem"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-left leading-tight">
                  <span className="block text-sm font-semibold">
                    Umar Saleem
                  </span>
                  <span className="block text-xs text-slate-500">
                    Built &amp; designed by
                  </span>
                </span>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.15}
            className="relative mt-14 flex h-[280px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-16 sm:h-[380px] sm:py-24 md:h-[480px] lg:h-[600px]"
          >
            <Image
              src={
                project.pageThumbnail ||
                project.pagesInfoArr.at(0)?.imgArr.at(0) ||
                project.companyLogoImg
              }
              alt={project.companyName}
              fill
              className="object-cover"
              priority
            />
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Fact
              label="Role"
              value={project.type}
              icon={<TypeIcon className="h-4 w-4" />}
            />
            <Fact
              label="Timeline"
              value={formatRange(project.startDate, project.endDate)}
              icon={<Calendar className="h-4 w-4" />}
            />
            <Fact
              label="Focus"
              value={project.category.slice(0, 2).join(" · ")}
            />
            <Fact
              label="Stack"
              value={`${project.techStack.length} technologies`}
            />
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
            Built with
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.techStack.map((tech) => {
              const TechIcon = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <TechIcon className="h-4 w-4 grayscale" aria-hidden="true" />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story: problem, approach, outcomes */}
      <section className="border-t border-slate-200 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <ProjectStory
            paragraphs={project.descriptionDetails.paragraphs}
            bullets={project.descriptionDetails.bullets}
          />
        </div>
      </section>

      {/* Walkthrough gallery */}
      {project.pagesInfoArr.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Inside the product
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl leading-[1.05] sm:text-5xl">
              A closer look.
            </h2>

            <div className="mt-16 space-y-20">
              {project.pagesInfoArr.map((page, i) => (
                <AnimatedSection
                  key={i}
                  className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16"
                >
                  <div
                    className={cn(
                      "lg:col-span-7",
                      i % 2 !== 0 && "lg:order-last"
                    )}
                  >
                    <PageVisual images={page.imgArr} alt={page.title} />
                  </div>
                  <div className="lg:col-span-5">
                    <span className="font-mono text-sm text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl sm:text-3xl">
                      {page.title}
                    </h3>
                    {page.description && (
                      <p className="mt-4 leading-7 text-slate-600">
                        {page.description}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next / previous case study */}
      <section className="border-t border-white/10 bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            Keep exploring
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ProjectNavCard label="Previous case study" project={previous} />
            <ProjectNavCard
              label="Next case study"
              project={next}
              align="right"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

function Fact({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-slate-400">
        {icon}
        <p className="text-xs uppercase tracking-[0.18em]">{label}</p>
      </div>
      <p className="mt-2 font-heading text-lg capitalize text-slate-900">
        {value}
      </p>
    </div>
  );
}

function PageVisual({ images, alt }: { images: string[]; alt: string }) {
  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-white">
        <Icons.star className="h-8 w-8 text-slate-300" />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
        <Image src={images[0]} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

function ProjectNavCard({
  label,
  project,
  align = "left",
}: {
  label: string;
  project: ProjectInterface;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "group flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 transition hover:bg-white/[0.08]",
        align === "right" && "lg:items-end lg:text-right"
      )}
    >
      <span className="text-sm text-slate-400">{label}</span>
      <span className="mt-4 font-heading text-3xl">{project.companyName}</span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
        {align === "right" ? (
          <>
            View case study
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </>
        ) : (
          <>
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            View case study
          </>
        )}
      </span>
    </Link>
  );
}
