import { PortfolioItem } from "@/components/portfolio/types";

import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  results?: {
    title: string;
    subtitle: string;
  };
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-card",
    companyName: "Cayus AI",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Built the Cayus AI website under a senior engineer — from UI and multi-language support to the SEO foundations that helped it get found.",
    websiteLink: "https://cayus.ai/",
    githubLink: "https://github.com/renaudcayus/cayus-ai-website",
    techStack: ["React", "Javascript", "Next.js"],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2022-12-01"),
    companyLogoImg: "/projects/cayus/cayus.jpg",
    results: {
      title: "Helped raised",
      subtitle: "funds for their startup",
    },
    pagesInfoArr: [
      {
        title: "Homepage",
        description:
          "Cayus AI is a console built for managers, founders, and tech leaders who want a clearer read on their team's workflow — this is the homepage I helped build to introduce it.",
        imgArr: ["/projects/cayus/cayus-mockup.png"],
      },
      {
        title: "Hero Section",
        description:
          "I built this section from our design discussions, tuning layout and motion so the product's pitch lands in the first few seconds.",
        imgArr: ["/projects/cayus/hero.png"],
      },
      {
        title: "Multi-Language Support",
        description:
          "I implemented multi-language support with i18n in Next.js, so the same message reads naturally across languages without duplicating pages.",
        imgArr: ["/projects/cayus/multi-lang.png"],
      },
      {
        title: "SEO & Launch",
        description:
          "I set up robots.txt, a sitemap, per-page metadata, and Open Graph images — the quiet SEO work behind a site that went on to help the team raise funding.",
        imgArr: ["/projects/cayus/footer.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Cayus AI is a console built for managers, founders, and tech leaders who want a clearer read on how their teams are actually doing. I joined the team to help build their public website, working under a senior engineer, Filip Trivan, who set the direction while I handled a good share of the implementation.",
        "Most of my work was on the frontend — building out sections like the homepage and hero, and chipping in a few design tweaks to keep the page clean and easy to scan.",
        "I also added multi-language support, using i18n in Next.js so the site could serve the same content in different languages without duplicating pages.",
        "On top of that, I set up the SEO basics: robots.txt, a sitemap, metadata for each page, and Open Graph images for better link previews. Small things, but they matter once a site actually goes live.",
      ],
      bullets: [
        "Built core sections of the Cayus AI website, including the homepage and hero, under senior engineer Filip Trivan.",
        "Implemented multi-language support using i18n across the entire Next.js site.",
        "Contributed design suggestions that shaped layout and content decisions.",
        "Set up robots.txt, sitemap, and per-page metadata for SEO.",
        "Generated Open Graph images for consistent social and search link previews.",
        "Shipped a site that supported the startup's fundraising efforts.",
      ],
    },
  },
  {
    id: "sg-tools",
    companyName: "SGTools",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Improved landing page conversion for SGTools, an e-commerce store based in Serbia, through design, copy, and new features.",
    websiteLink: "https://www.sgtools.rs/",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Socket.io",
      "Typescript",
      "MongoDB",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/stridon-group/thumbnail.jpg",
    results: {
      title: "Improved conversion",
      subtitle: "on their landing page",
    },
    pagesInfoArr: [
      {
        title: "Homepage",
        description:
          "The landing page I worked on for SGTools, redesigning sections and rewriting copy to turn more visitors into buyers.",
        imgArr: ["/projects/stridon-group/mockup.jpg"],
      },
      {
        title: "Logo & Visual Design",
        description:
          "I retraced SGTools' logos and designed a few new sections for a cleaner, sharper look across the site.",
        imgArr: ["/projects/stridon-group/mockup2.jpg"],
      },
      {
        title: "Feature Development",
        description:
          "I built out new features and picked up open GitHub issues, fixing bugs the team had flagged.",
        imgArr: ["/projects/stridon-group/sg-tools.png"],
      },
      {
        title: "SEO & Launch",
        description:
          "I set up metadata and Open Graph images across the site, so links looked right wherever they were shared.",
        imgArr: ["/projects/stridon-group/mockup2.jpg"],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "SGTools is an e-commerce store based in Serbia. I joined to help improve their landing page, since conversion was the main thing that needed fixing.",
        "I redesigned a few sections and retraced their logos for a cleaner look, and rewrote some of the page copy that wasn't pulling its weight.",
        "On the development side, I built out new features and picked up open GitHub issues, fixing bugs as I found them.",
        "I also set up metadata and Open Graph images across the site, so links looked right wherever they were shared.",
      ],
      bullets: [
        "Redesigned landing page sections and retraced SGTools' logos.",
        "Rewrote page copy to improve clarity and conversion.",
        "Developed new features and resolved open GitHub issues.",
        "Set up metadata and Open Graph images across the site.",
        "Helped improve the landing page's conversion rate.",
      ],
    },
  },

  {
    id: "copped-ai",
    companyName: "Copped AI",
    type: "Professional",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Built the backend for Copped AI's iOS app — Supabase database and storage, and edge functions that integrate SERP API to find matching products.",
    techStack: ["Supabase", "Typescript", "PostgreSQL", "Node.js"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/copped/thumbnail.jpg",
    pagesInfoArr: [
      {
        title: "Database & Storage Setup",
        description:
          "I configured Supabase as the backend for the client's iOS app, setting up the database schema and storage buckets to save user data and uploaded images.",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
      {
        title: "Product Search via SERP API",
        description:
          "I wrote edge functions that call the SERP API to search for products matching an image or query, giving the app a way to surface similar items to users.",
        imgArr: ["/projects/copped/mockup3.png"],
      },
      {
        title: "Storage Buckets",
        description:
          "I set up and secured storage buckets for user-uploaded files, with access rules scoped so each user could only read and write their own data.",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
      {
        title: "Edge Functions",
        description:
          "I built and deployed the Supabase edge functions that handled the SERP API integration and other backend logic the app relied on.",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
      {
        title: "iOS Integration",
        description:
          "I worked closely with the iOS developer to wire up the app against the Supabase backend, making sure data, storage, and the search feature worked end-to-end.",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Copped AI's client needed a backend for his iOS app so it could save user data and uploaded images instead of keeping everything on-device. I came on as the backend developer to build that out.",
        "I configured Supabase as the backend, setting up the database to store user data and storage buckets to hold uploaded files, with access rules scoped per user.",
        "The app also needed to help users find similar products from an image or query, so I wrote edge functions that integrated the SERP API to search for matching products and return results the app could display.",
        "Once the backend was in place, I worked directly with the iOS developer to integrate it into the app, making sure the database, storage, and search feature all worked together smoothly.",
      ],
      bullets: [
        "Configured Supabase as the backend for the client's iOS app.",
        "Designed the database schema to store user data.",
        "Set up and secured storage buckets for user-uploaded files.",
        "Wrote Supabase edge functions integrating the SERP API to search for similar products.",
        "Worked with the iOS developer to integrate the backend into the app.",
      ],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Entegrators",
    type: "Professional",
    category: ["Android Dev", "Mobile Dev", "Backend"],
    shortDescription:
      "Built and tested multiple Android apps at Entegrators, then moved them all into a Gradle multi-module monorepo with a GitHub Actions pipeline that built only the affected apps and reported builds to Discord.",
    techStack: ["Kotlin", "Git", "CI/CD"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/entegrators/logo.jpg",
    pagesInfoArr: [
      {
        title: "Android App Development",
        description:
          "I developed and tested several of Entegrators' Android apps in Kotlin, working across multiple codebases for the team.",
        imgArr: ["/projects/entegrators/mockup.png"],
      },
      {
        title: "Multi-Repo to Monorepo Migration",
        description:
          "I migrated all of Entegrators' Android apps out of separate repos into a single monorepo, restructuring and configuring each app along the way.",
        imgArr: ["/projects/entegrators/mockup2.png"],
      },
      {
        title: "Gradle Multi-Module Setup",
        description:
          "I set up the monorepo as a Gradle multi-module project, pushed it to GitHub, and got every app building cleanly from the shared structure.",
        imgArr: [],
      },
      {
        title: "GitHub Actions CI Pipeline",
        description:
          "I built a CI pipeline in GitHub Actions that detected which apps were affected by a change and only built those, instead of rebuilding the whole monorepo every time.",
        imgArr: [],
      },
      {
        title: "Discord Build Notifications",
        description:
          "With help from my senior, I integrated the pipeline with Discord bots so the team got notified about new app builds as soon as they went out.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Entegrators, I worked on multiple Android apps using Kotlin — building features and writing tests across several of the team's codebases.",
        "As the number of apps grew, each living in its own repo, I took on migrating all of them into a single monorepo. I restructured and configured every app and set the whole thing up as a Gradle multi-module project, then pushed it to GitHub.",
        "With everything in one place, rebuilding every app on every change didn't make sense, so I built a CI pipeline in GitHub Actions that detected which apps were actually affected by a given change and built only those.",
        "My senior then helped me take it a step further by integrating the pipeline with Discord bots, so the team automatically got notified whenever a new app build went out.",
      ],
      bullets: [
        "Developed and tested multiple Android apps in Kotlin.",
        "Migrated all of Entegrators' Android apps from separate repos into a single monorepo.",
        "Set up and configured the monorepo as a Gradle multi-module project.",
        "Built a GitHub Actions pipeline that built only the apps affected by a given change.",
        "Integrated the build pipeline with Discord bots to notify the team of new app builds.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

const isScreenshot = (src: string) => !/(logo|profile-img)\.png$/.test(src);

const getThumbnails = (project: ProjectInterface) =>
  Array.from(
    new Set(project.pagesInfoArr.flatMap((page) => page.imgArr))
  ).filter(isScreenshot);

export const portfolioProjects: PortfolioItem[] = Projects.map((project) => ({
  id: project.id,
  title: project.companyName,
  description: project.shortDescription,
  results: project.results,
  href: `/projects/${project.id}`,
  thumbnail: getThumbnails(project),
  logo: project.companyLogoImg,
}));
