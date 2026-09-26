import { MainNav } from "@/components/common/main-nav";
import FooterModule from "@/components/new-blogs/footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative z-50 w-full border-b border-white/60 bg-white/55 px-5 backdrop-blur-2xl sm:px-8 lg:px-12">
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center">
          <MainNav items={routesConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <FooterModule />
    </div>
  );
}
