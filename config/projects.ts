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
        "Most of my time went into the frontend — turning design discussions into working sections, including the homepage and hero area, and making sure the site felt considered rather than templated. I also contributed a few design suggestions along the way, mostly small layout and copy tweaks that made the page easier to scan.",
        "One piece I owned outright was multi-language support. I set it up using i18n in Next.js so the whole site could be served in multiple languages without duplicating pages or routes.",
        "I also handled the SEO groundwork that's easy to skip under deadline pressure: a proper robots.txt, an auto-generated sitemap, metadata for every page, and Open Graph images for clean link previews on social and in search. The site was live and doing its job while the team was out raising funding for the startup.",
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
    companyName: "Stridon Group",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Developed the Stridon Group website under a senior engineer — built to turn visitors into new customers.",
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
      title: "Helped convert",
      subtitle: "new customers",
    },
    pagesInfoArr: [
      {
        title: "Homepage",
        description:
          "The homepage I built for Stridon Group, structured to explain their offering quickly and move visitors toward getting in touch.",
        imgArr: [
          "/projects/stridon-group/mockup.jpg",
          "/projects/stridon-group/mockup2.jpg",
        ],
      },
      {
        title: "Built to Convert",
        description:
          "Working under senior engineer Filip Trivan, I shipped the pages and components that helped turn visitors into new customers.",
        imgArr: ["/logo.png"],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Stridon Group brought me on to build their website, working under senior engineer Filip Trivan — the same setup I'd had on the Cayus AI project. He set the direction and reviewed the work; I built the pages.",
        "The brief was straightforward: a site that looked credible and made it easy for visitors to become customers. I focused on clear page structure, fast load times, and calls-to-action that didn't get lost in the design.",
        "It worked — the site went on to help convert new customers for the business, which was the real goal all along, not just a good-looking page.",
      ],
      bullets: [
        "Built the Stridon Group website end-to-end under senior engineer Filip Trivan.",
        "Focused on clear structure and strong calls-to-action to drive conversions.",
        "Shipped a site that went on to help convert new customers for the business.",
      ],
    },
  },

  {
    id: "copped-ai",
    companyName: "Copped AI",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.thesuperlife",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/copped/thumbnail.jpg",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description:
          "Elegantly designed quotes display with customizable themes and sharing options",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
      {
        title: "Quotes Download Component",
        description:
          "Feature allowing users to download quotes as beautiful images for social media sharing",
        imgArr: ["/projects/copped/mockup3.png"],
      },
      {
        title: "Account Management",
        description:
          "User profile management with favorites, history, and personalization settings",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
      {
        title: "Interest Selection and Update Page",
        description:
          "Interactive interface for users to select and update their quote preferences and interests",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
      {
        title: "Responsiveness",
        description:
          "Adaptive design ensuring optimal user experience across various device sizes and orientations",
        imgArr: ["/projects/copped/CoppedAi.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Entegrators",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
    githubLink: "https://github.com/namanbarkiya/apex-shopping-app",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/entegrators/logo.jpg",
    pagesInfoArr: [
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system with Firebase",
        imgArr: ["/projects/entegrators/mockup.png"],
      },
      {
        title: "All Products Explore Screen",
        description: "Interactive product browsing with categories and filters",
        imgArr: ["/projects/entegrators/mockup2.png"],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin dashboard for product and order management",
        imgArr: [],
      },
      {
        title: "Sidenav Navigation",
        description: "Intuitive side navigation for easy app navigation",
        imgArr: [],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
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
})).filter((project) => project.thumbnail.length > 0);
