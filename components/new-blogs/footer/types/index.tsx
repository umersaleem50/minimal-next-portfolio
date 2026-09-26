import { ComponentType } from "react";

export interface FooterRoute {
  url: string;
  title: string;
  external?: boolean;
}

export interface FooterRoutes {
  title: string;
  routes: Array<FooterRoute>;
}

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
  footerRoutes?: Array<FooterRoutes>;
  socialLinks?: Array<FooterSocial>;
}
