import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-accent-soft py-20 lg:py-28">
      <div className="site-container relative overflow-hidden border-y border-primary/15 py-12 text-center lg:py-16">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">Have an Idea? Let’s Engineer It Together.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-8 text-muted-foreground">Whether you’re building a product, automating complex workflows, or planning cloud infrastructure, we’re ready to explore the possibilities.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg"><Link to="/contact">Start a Project <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/contact"><MessageSquare /> Contact Our Team</Link></Button>
        </div>
      </div>
    </section>
  );
}