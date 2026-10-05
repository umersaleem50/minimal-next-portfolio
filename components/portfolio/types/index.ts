export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  results?: { title: string; subtitle: string };
  href: string;
  /** Project screenshot(s) shown in the large, primary frame of the card. */
  thumbnail: string | string[];
  /** Project logo shown in the small, secondary frame of the card. */
  logo: string;
}

export interface PortfolioCardProps extends PortfolioItem {
  index: number;
  options?: { reverse: boolean };
}

export interface PortfolioProps {
  projects: PortfolioItem[];
  eyebrow: string;
  title: string;
  description?: string;
}

export interface PortfolioHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export interface RotatingImageProps {
  images: string[];
  alt: string;
  sizes: string;
  interval?: number;
  startDelay?: number;
  className?: string;
  variant?: "fade" | "slide-down";
}
