import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { HeroSystemVisual, ProductVisual, ServiceDiagram } from "@/components/site/visuals";
import { SectionHeading } from "@/components/site/section-heading";
import { principles, processSteps, products, services, technologyGroups } from "@/data/site";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "ARTECHZO — Software Engineering, AI Automation & Cloud Solutions" },
    { name: "description", content: "ARTECHZO engineers scalable software, intelligent automation, and reliable cloud deployments for ambitious organizations." },
    { property: "og:title", content: "ARTECHZO — Engineering Technology That Moves Business Forward" },
    { property: "og:description", content: "Software engineering, AI automation, and cloud solutions built with precision." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-background py-14 sm:py-20 lg:py-24">
        <div className="site-container grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr]">
          <div>
            <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">SOFTWARE · INTELLIGENCE · INFRASTRUCTURE</p>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">We Engineer Digital Experiences That <span className="text-primary">Move Businesses Forward.</span></h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">ARTECHZO transforms ambitious ideas into scalable software, intelligent AI-powered workflows, and secure cloud solutions built for the future.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/services">Explore Our Services <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/products">Discover Our Products <MoveUpRight /></Link></Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-foreground"><Check className="h-4 w-4 text-status" /> Built with engineering precision. Designed for real-world impact.</p>
          </div>
          <HeroSystemVisual />
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading eyebrow="WHAT WE DO" title="Three Core Capabilities. Endless Possibilities." description="From software architecture to autonomous workflows and cloud-native deployment, our expertise covers the technology foundation modern businesses depend on." />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
            {services.map((service) => <article key={service.slug} className="group bg-background p-6 sm:p-8"><div className="flex items-center justify-between"><span className="text-xs font-bold text-primary">{service.number}</span><service.icon className="h-5 w-5 text-primary" /></div><h3 className="mt-7 text-2xl font-semibold leading-tight">{service.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{service.description}</p><ul className="mt-6 space-y-2">{service.capabilities.slice(0,4).map(item=><li key={item} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}</ul><Link to="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore capability <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-muted/35">
        <div className="site-container">
          <SectionHeading eyebrow="OUR PRODUCTS" title="Products Built to Solve Real-World Problems." description="We don’t just build software for clients. We also engineer our own solutions to address practical challenges through technology." />
          <div className="mt-14 space-y-16 lg:space-y-24">{products.map((product,index)=><article key={product.slug} className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16"><div className={index%2 ? "lg:order-2" : ""}><p className="eyebrow">{product.category}</p><h3 className="mt-4 text-3xl font-semibold sm:text-4xl">{product.name}</h3><p className="mt-5 text-lg leading-8 text-muted-foreground">{product.description}</p><Button asChild variant="outline" className="mt-7"><Link to="/products/$slug" params={{slug:product.slug}}>Explore Product <ArrowRight /></Link></Button></div><div className={index%2 ? "lg:order-1" : ""}><ProductVisual product={product} compact /></div></article>)}</div>
        </div>
      </section>

      <section className="section-space"><div className="site-container"><SectionHeading eyebrow="WHY ARTECHZO" title="Built by Engineers. Driven by Innovation." /><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{principles.map(item=><article key={item.title} className="bg-background p-7"><item.icon className="h-6 w-6 text-primary"/><h3 className="mt-8 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></article>)}</div></div></section>

      <section className="section-space bg-brand-ink text-brand-ink-foreground"><div className="site-container"><SectionHeading eyebrow="HOW WE WORK" title="From First Conversation to Production." className="[&_h2]:text-brand-ink-foreground [&_p:last-child]:text-brand-ink-muted"/><div className="mt-14 grid gap-8 md:grid-cols-5">{processSteps.map(([n,title,text])=><div key={n} className="relative border-t border-brand-ink-border pt-5"><span className="font-mono text-xs text-primary-light">{n}</span><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-brand-ink-muted">{text}</p></div>)}</div></div></section>

      <section className="section-space"><div className="site-container"><SectionHeading eyebrow="TECHNOLOGY EXPERTISE" title="Modern Tools. Practical Engineering." description="Technical capability areas selected to fit each product and operational requirement."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{technologyGroups.map(group=><div key={group.label} className="border border-border p-5"><group.icon className="h-5 w-5 text-primary"/><h3 className="mt-5 text-sm font-semibold">{group.label}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="bg-muted px-2 py-1 text-[11px] text-muted-foreground">{item}</span>)}</div></div>)}</div></div></section>
      <CtaBand />
    </main>
  );
}
