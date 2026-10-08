import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceDiagram } from "@/components/site/visuals";
import { cloudOwnershipNote, processSteps, services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Software, AI & Cloud Services — ARTECHZO" },
    { name: "description", content: "Explore ARTECHZO software engineering, AI automation, and cloud deployment services." },
    { property: "og:title", content: "Engineering Services — ARTECHZO" },
    { property: "og:description", content: "Software, intelligent automation, and client-owned cloud deployment delivered with engineering precision." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicesPage,
});

function ServicesPage() {
  return <main><PageHero />
    <section className="section-space"><div className="site-container space-y-24 lg:space-y-32">{services.map((service,index)=><article id={service.slug} key={service.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><div className={index%2 ? "lg:order-2" : ""}><p className="eyebrow">SERVICE {service.number}</p><h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">{service.title}</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">{service.description}</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{service.capabilities.map(item=><li key={item} className="flex gap-2 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary"/>{item}</li>)}</ul>{service.slug==="cloud-deployment"&&<div className="mt-8 border-l-2 border-primary bg-accent-soft p-5"><p className="flex gap-2 text-sm font-semibold"><Info className="h-4 w-4 shrink-0 text-primary"/>Client-owned infrastructure</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{cloudOwnershipNote}</p></div>}<Button asChild className="mt-8"><Link to="/contact">Discuss this service <ArrowRight /></Link></Button></div><div className={index%2 ? "lg:order-1" : ""}><ServiceDiagram type={service.slug}/></div></article>)}</div></section>
    <section className="section-space border-y border-border bg-muted/40"><div className="site-container"><SectionHeading eyebrow="DELIVERY MODEL" title="A Clear Path from Requirement to Reliable Operation."/><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-5">{processSteps.map(([n,title,text])=><div key={n} className="bg-background p-6"><span className="font-mono text-xs font-bold text-primary">{n}</span><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section><CtaBand /></main>;
}

function PageHero(){return <section className="border-b border-border bg-surface-technical py-20 lg:py-28"><div className="site-container"><p className="eyebrow">OUR SERVICES</p><h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-tight sm:text-6xl">Engineering capability across the full technology lifecycle.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">From product architecture to intelligent workflows and production deployment, we build technology around real operational requirements.</p></div></section>}
