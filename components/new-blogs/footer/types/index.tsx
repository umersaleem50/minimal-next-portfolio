import { ComponentType } from "react";

export interface FooterSocial {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

export interface FooterProps {
  metaData?: {
    title?: string;
    subtitle?: string;
  };
  socialLinks?: Array<FooterSocial>;
}
