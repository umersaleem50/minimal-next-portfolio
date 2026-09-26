export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  results: string[];
  href: string;
  images: string[];
}

export interface PortfolioCardProps extends PortfolioItem {
  index: number;
  options?: { reverse: boolean };
}

export interface PortfolioProps {
  projects: PortfolioItem[];
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
}
