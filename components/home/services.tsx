import { Code2, LayoutDashboard, PanelsTopLeft, ShoppingBag } from "lucide-react";

const services = [
  {
    title: "Shopify store setup",
    description: "Conversion-focused storefronts, theme customization, product setup, and smooth checkout experiences.",
    icon: ShoppingBag,
    number: "01",
  },
  {
    title: "Dashboard development",
    description: "Clear, responsive dashboards that turn complex business data into confident daily decisions.",
    icon: LayoutDashboard,
    number: "02",
  },
  {
    title: "Landing page development",
    description: "Fast, polished landing pages designed to communicate value and convert the right visitors.",
    icon: PanelsTopLeft,
    number: "03",
  },
  {
    title: "SaaS development",
    description: "Scalable product builds from MVP to production, with thoughtful UX and dependable architecture.",
    icon: Code2,
    number: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white px-5 py-24 text-slate-900 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">Services</p>
            <h2 className="max-w-2xl font-heading text-4xl leading-[1.05] sm:text-6xl">From first idea to a product people use.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">Focused development for ambitious founders and teams who need a sharp, reliable digital product.</p>
        </div>

        <div className="grid md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group relative border-b border-slate-200 py-10 md:px-8 md:odd:border-r lg:py-14">
                <div className="flex items-start justify-between gap-8">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition group-hover:border-emerald-200 group-hover:bg-emerald-50">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-sm text-slate-400">{service.number}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight sm:text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
