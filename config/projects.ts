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
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-card",
    companyName: "Cayus AI",
    type: "Personal",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "AI console built for Managers, founders, and tech leaders to help improve their team and workflow.",
    websiteLink: "https://card.namanbarkiya.xyz/",
    githubLink: "https://github.com/namanbarkiya/3d-portfolio-card",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/card/logo.png",
    pagesInfoArr: [
      {
        title: "Card Views",
        description: "Front and back views of the interactive 3D card",
        imgArr: [
          "/projects/cayus/cayus-mockup.png",
          "/projects/cayus/cayus-mockup.png",
        ],
      },
      {
        title: "Interactive Elements",
        description:
          "Custom links embedded in the 3D model with interactive animations",
        imgArr: ["/projects/cayus/cayus-mockup.png"],
      },
      {
        title: "3D Model Development",
        description: "Blender project showcasing the model creation process",
        imgArr: ["/projects/cayus/cayus-mockup.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my personal, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
        "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
        "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
        "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
        "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
        "At its core, my personal epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
      ],
      bullets: [
        "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
        "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
        "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
        "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
        "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
        "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
        "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
      ],
    },
  },
  {
    id: "the-super-focus",
    companyName: "TheSuperFocus",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Pomodoro-inspired productivity web app with real-time sessions and recurring payments.",
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
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Realtime Focus Sessions",
        description:
          "Built real-time focus sessions using sockets to help people stay accountable and productive.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TheSuperFocus is a productivity web app inspired by the Pomodoro technique, built to help users stay focused and complete deep-work sessions.",
        "It includes real-time session support and a paid tier with recurring billing.",
      ],
      bullets: [
        "Built a Pomodoro-inspired productivity web app using real-time sockets.",
        "Integrated Razorpay for recurring payments, securing 10+ premium users.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

const isScreenshot = (src: string) => !/(logo|profile-img)\.png$/.test(src);

export const portfolioProjects = Projects.map((project) => ({
  project,
  images: Array.from(
    new Set(project.pagesInfoArr.flatMap((page) => page.imgArr))
  ).filter(isScreenshot),
})).map(({ project, images }) => ({
  id: project.id,
  title: project.companyName,
  description: project.shortDescription,
  results: [
    project.endDate.getFullYear().toString(),
    project.category.join(" · "),
  ],
  href: `/projects/${project.id}`,
  images,
}));
