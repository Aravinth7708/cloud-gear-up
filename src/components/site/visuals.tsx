import { Bot, Box, Cloud, Code2, Database, Globe2, ScanSearch, ServerCog, Shirt, Workflow } from "lucide-react";
import type { Product } from "@/data/site";

export function HeroSystemVisual() {
  const nodes = [
    { label: "Software", icon: Code2, className: "left-[4%] top-[40%]" },
    { label: "AI Automation", icon: Bot, className: "right-[3%] top-[15%]" },
    { label: "Cloud", icon: Cloud, className: "right-[5%] bottom-[10%]" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden border border-border bg-surface-technical p-6 shadow-technical sm:p-10">
      <div className="tech-grid absolute inset-0 opacity-70" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600" aria-hidden="true">
        <path d="M120 300 C220 300 205 215 300 260 S400 170 480 170" className="tech-line" />
        <path d="M120 300 C230 300 205 390 300 345 S400 440 480 440" className="tech-line tech-line-delay" />
        <circle cx="300" cy="300" r="108" className="fill-none stroke-primary/15" />
        <circle cx="300" cy="300" r="154" className="fill-none stroke-primary/10 stroke-dashed" />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-primary/20 bg-background shadow-technical sm:h-44 sm:w-44">
        <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground"><Workflow /></div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.15em]">ARTECHZO</p>
        <p className="mt-1 text-[10px] text-muted-foreground">Engineering core</p>
      </div>
      {nodes.map(({ label, icon: Icon, className }) => (
        <div key={label} className={`absolute ${className} flex min-w-28 items-center gap-2 border border-border bg-background p-3 shadow-sm sm:min-w-36`}>
          <span className="flex h-8 w-8 items-center justify-center bg-accent-soft text-primary"><Icon className="h-4 w-4" /></span>
          <span className="text-xs font-semibold">{label}</span>
        </div>
      ))}
      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"><span className="h-2 w-2 animate-pulse rounded-full bg-status" /> Systems connected</div>
    </div>
  );
}

export function ServiceDiagram({ type }: { type: string }) {
  const configs = {
    "software-engineering": { icon: Code2, nodes: ["Interface", "API", "Data"], side: [Globe2, Database] },
    "ai-automation": { icon: Bot, nodes: ["Input", "Reason", "Action"], side: [ScanSearch, Workflow] },
    "cloud-deployment": { icon: Cloud, nodes: ["Build", "Deploy", "Observe"], side: [ServerCog, Box] },
  };
  const config = configs[type as keyof typeof configs] ?? configs["software-engineering"];
  const MainIcon = config.icon;
  return (
    <div className="tech-grid relative min-h-64 overflow-hidden border border-border bg-surface-technical p-6">
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-2 border border-primary/20 bg-background px-4 py-3 text-primary shadow-sm"><MainIcon /><span className="text-xs font-semibold">ENGINEERING SYSTEM</span></div>
      <div className="absolute left-8 right-8 top-1/2 h-px bg-primary/20" />
      <div className="absolute bottom-8 left-6 right-6 grid grid-cols-3 gap-2">
        {config.nodes.map((node, index) => {
          const SideIcon = config.side[index % config.side.length];
          return <div key={node} className="flex flex-col items-center border border-border bg-background p-3 text-center shadow-sm"><SideIcon className="h-4 w-4 text-primary" /><span className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em]">{node}</span></div>;
        })}
      </div>
    </div>
  );
}

export function ProductVisual({ product, compact = false }: { product: Product; compact?: boolean }) {
  if (product.slug === "ar-tech-industries") return <InventoryVisual compact={compact} />;
  if (product.slug === "ai-data-extraction-engine") return <AgentVisual compact={compact} />;
  return <ConferenceVisual compact={compact} />;
}

function BrowserShell({ children, compact }: { children: React.ReactNode; compact: boolean }) {
  return <div className={`overflow-hidden border border-border bg-background shadow-technical ${compact ? "min-h-64" : "min-h-96"}`}><div className="flex h-9 items-center gap-1.5 border-b border-border bg-muted/50 px-4"><i className="h-2 w-2 rounded-full bg-border" /><i className="h-2 w-2 rounded-full bg-border" /><i className="h-2 w-2 rounded-full bg-primary/40" /></div>{children}</div>;
}

function ConferenceVisual({ compact }: { compact: boolean }) {
  return <BrowserShell compact={compact}><div className="grid grid-cols-[64px_1fr]"><div className="border-r border-border bg-brand-ink p-3"><div className="h-7 w-7 bg-primary" />{[1,2,3,4].map(i => <div key={i} className="mt-4 h-2 w-8 bg-brand-ink-border" />)}</div><div className="p-5"><p className="text-[9px] font-bold uppercase tracking-[.14em] text-primary">Conference 126</p><div className="mt-2 h-5 w-2/3 bg-foreground/85" /><div className="mt-2 h-2 w-1/2 bg-border" /><div className="mt-6 grid grid-cols-3 gap-2">{["Agenda","Overview","Updates"].map(x => <div key={x} className="border border-border p-3"><div className="h-12 bg-accent-soft" /><p className="mt-2 text-[9px] font-semibold">{x}</p></div>)}</div><div className="mt-4 h-12 border border-border bg-muted/40" /></div></div></BrowserShell>;
}

function InventoryVisual({ compact }: { compact: boolean }) {
  return <BrowserShell compact={compact}><div className="p-5"><div className="flex items-center justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.14em] text-primary">Inventory</p><div className="mt-2 h-4 w-32 bg-foreground/85" /></div><Shirt className="text-primary" /></div><div className="mt-5 grid grid-cols-3 gap-2">{["1,284","38","92%"].map((x,i) => <div key={x} className="border border-border p-3"><p className="text-lg font-semibold">{x}</p><div className={`mt-2 h-1 ${i === 2 ? "w-full bg-status" : "w-1/2 bg-primary/30"}`} /></div>)}</div><div className="mt-4 overflow-hidden border border-border">{["Cotton shirts","Denim collection","Seasonal stock"].map((x,i) => <div key={x} className="flex items-center gap-3 border-b border-border p-3 last:border-0"><div className="h-7 w-7 bg-accent-soft" /><p className="flex-1 text-[10px] font-medium">{x}</p><div className="h-1.5 w-12 bg-primary/20" /><span className="text-[9px] text-muted-foreground">{82-i*13}</span></div>)}</div></div></BrowserShell>;
}

function AgentVisual({ compact }: { compact: boolean }) {
  const steps = [[Globe2,"Sources"],[Bot,"Agent"],[ScanSearch,"Extract"],[Database,"Records"]] as const;
  return <BrowserShell compact={compact}><div className="tech-grid p-5"><div className="flex items-center justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.14em] text-primary">Agent Workflow</p><div className="mt-2 h-4 w-36 bg-foreground/85" /></div><span className="h-2 w-2 animate-pulse rounded-full bg-status" /></div><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{steps.map(([Icon,label],i)=><div key={label} className="relative border border-border bg-background p-3 text-center shadow-sm"><Icon className="mx-auto h-5 w-5 text-primary"/><p className="mt-2 text-[9px] font-semibold">{label}</p>{i<3&&<span className="absolute -right-3 top-1/2 z-10 h-px w-3 bg-primary/40"/>}</div>)}</div><div className="mt-6 border border-border bg-background p-4"><div className="flex justify-between text-[9px] text-muted-foreground"><span>Extraction progress</span><span>Active</span></div><div className="mt-2 h-1 overflow-hidden bg-muted"><div className="h-full w-3/4 bg-primary" /></div></div></div></BrowserShell>;
}

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return <div className="tech-grid overflow-hidden border border-border bg-surface-technical p-5 sm:p-8"><div className="grid gap-3 md:grid-cols-[repeat(var(--flow-cols),minmax(0,1fr))]" style={{ "--flow-cols": steps.length } as React.CSSProperties}>{steps.map((step,index)=><div key={step} className="relative flex min-h-24 items-center justify-center border border-border bg-background p-4 text-center shadow-sm"><span className="absolute left-3 top-3 text-[9px] font-bold text-primary">0{index+1}</span><span className="text-xs font-semibold">{step}</span>{index<steps.length-1&&<span className="absolute -bottom-3 left-1/2 h-3 w-px bg-primary/40 md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:h-px md:w-3"/>}</div>)}</div></div>;
}