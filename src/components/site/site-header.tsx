import { Link } from "@tanstack/react-router";
import { Menu, MoveUpRight } from "lucide-react";
import { Logo } from "./logo";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="lg">
            <Link to="/contact">Let's Talk <MoveUpRight /></Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="w-[88%] p-0 sm:max-w-sm">
            <SheetHeader className="border-b p-6 text-left">
              <SheetTitle><Logo /></SheetTitle>
              <SheetDescription>Engineering software, AI automation, and cloud solutions.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="flex flex-col p-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link to={item.to} className="border-b border-border px-2 py-4 text-lg font-semibold text-foreground">{item.label}</Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-6"><Link to="/contact">Let's Talk <MoveUpRight /></Link></Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
