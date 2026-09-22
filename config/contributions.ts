export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Cayus AI",
    contibutionDescription:
      "AI console built for Managers, founders, and tech leaders to help improve their team and workflow.",
    repoOwner: "Renaud Vandewalle",
    link: "https://github.com/renaudcayus/cayus-ai-website",
  },
  {
    repo: "Stridon Group",
    contibutionDescription:
      "An ecommerce store in Serbia. That provide power and hand tools, protective equipment for professionals and craftsmen, machines and accessories.",
    repoOwner: "Filip Trivan",
    link: "https://github.com/filiptrivan/sg-tools",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
