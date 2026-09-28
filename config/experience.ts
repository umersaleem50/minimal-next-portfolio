import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "entegrators",
    position: "Software Engineer",
    company: "Entegrators",
    location: "Faisalabad, Punjab, Pakistan",
    startDate: new Date("2026-06-01"),
    endDate: "Present",
    description: [
      "Working on multiple Android native apps using Kotlin and Jetpack Compose. ",
      "Implementing new features and fixing performance bottlenecks.",
      "Make code maintainable, shareable, and scalable across mutliple apps.",
      "Maintaining architecture of MVVM and turning featuring into injecable modules using DI (Hilt Dagger).",
    ],
    achievements: [
      "Migrated all of their applications under a multi-project repo.",
      "Mentoring newbie developers to learn kotlin and contribute in development.",
    ],
    skills: ["Java", "Kotlin", "Jetpack Compose"],
    companyUrl: "https://entegrators.com/",
    logo: "/experience/entegrators.jpg",
  },
  {
    id: "stridon-group",
    position: "Web Developer",
    company: "Stridon Group",
    location: "Belgrade, Serbia",
    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-05-01"),
    description: [
      "Worked as a Frontend developer for SG Tools, an e-commerce store based in Serbia.",
      "Contributed to their project under the supervision of their senior developer. I resolved multiple issues in their GitHub repository.",
      "Migrated ML inference from Replicate to AWS SageMaker to reduce cold-start latency.",
    ],
    achievements: [
      "Helped increase organic traffic by optimizing their website for search engines.",
      "Enhanced their conversions and retention rate by enhancing user-experience.",
      "Resolved multiple issues on github that got merged into main branch.",
      "Redesigned vectors to enhance the quality of digital assets across website, i.e. client logos and OG-images.",
    ],
    skills: ["Figma", "Next.js", "React", "Typescript"],
    companyUrl: "https://www.sgtools.rs/",
    logo: "/experience/stridon-group.jpg",
  },
  {
    id: "cayus-ai",
    position: "Web Developer",
    company: "Cayus AI",
    location: "Paris, France",
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-12-01"),
    description: [
      "Worked on a Frontend project for Copped AI, a startup based in France.",
      "Contributed to their project under the supervision of their senior developer. I resolved multiple issues in their GitHub repo.",
      "Provided a few design improvements and developed them, enhancing the user experience and conversion rate.",
    ],
    achievements: [
      "Helped increase organic traffic by optimizing their website for search engines.",
      "Enhanced their conversions and retention rate by enhancing user-experience.",
      "Helped raise funds for their AI startups",
    ],
    skills: ["Figma", "Next.js", "React", "Typescript"],
    companyUrl: "https://cayus.ai/",
    logo: "/experience/cayus-ai.png",
  },
  {
    id: "copped-ai",
    position: "Backend Developer | Node.js Developer",
    company: "Copped AI",
    location: "Melbourne, Victoria, Australia",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Worked on a Supabase project as a backend developer for Copped AI",
      "Created tables, joins, and configured a storage bucket for users' data, and secured routes using RLS (Row-Level Security).",
      "Integrated the SERP API and Wrote serverless functions for custom business logic.",
    ],
    achievements: [
      "Resulting in 400+ new users within the 1st month of launch.",
      "Helped secure and maintain 4.5⭐ rating on Apple store.",
    ],
    skills: ["Supabase", "Node.js"],
    companyUrl: "https://www.coppedit.app/",
    logo: "/experience/copped-ai.jpg",
  },
  {
    id: "solinovation",
    position: "Web Developer",
    company: "Solinovation",
    location: "Faisalabad, Punjab, Pakistan",
    startDate: new Date("2022-08-01"),
    endDate: new Date("2023-06-01"),
    description: [
      "Worked on a web app project for an Egyptian client.",
      "Designed and developed the features of the application using Next.js and React.js.",
      "Shipped the app to production using Nginx and Digital Ocean.",
    ],
    achievements: [
      "Unfortunately, this project was a big failure, a lesson, and a chance to improve myself.",
    ],
    skills: ["Figma", "Next.js", "React", "Typescript"],
    companyUrl: "https://solinovation.com/",
    logo: "/experience/solinovation.jpg",
  },
  {
    id: "bitbrick",
    position: "Internship",
    company: "Bitbrick Technologies",
    location: "Faisalabad, Punjab, Pakistan",
    startDate: new Date("2022-03-01"),
    endDate: new Date("2023-07-01"),
    description: [
      "Developed dashboard for a Crypto project.",
      "Developed smart contracts and a broker terminal for real-time token analytics using Web3.js and Ethereum",
    ],
    achievements: [
      "Learned React.js fundamentals, including Class Components, state management, and API integration.",
      "Applied what I've learned through an online course and gained valuable experience in Frontend development.",
    ],
    skills: ["React", "Javascript"],
    companyUrl: "https://bitbricktech.com/",
    logo: "/experience/bitbrick.jpg",
  },
];
