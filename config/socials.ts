import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@umersaleem50",
    icon: Icons.gitHub,
    link: "https://github.com/umersaleem50",
  },
  {
    name: "LinkedIn",
    username: "umartech",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/umartech/",
  },
  {
    name: "Twitter",
    username: "@pookiejs1",
    icon: Icons.twitter,
    link: "https://x.com/pookiejs1",
  },
  {
    name: "Mail",
    username: "hey@helloumer.com",
    icon: Icons.gmail,
    link: "mailto:hey@helloumer.com",
  },
];
