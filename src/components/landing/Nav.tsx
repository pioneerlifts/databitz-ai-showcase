import { Sparkles } from "lucide-react";

export function Nav() {
  const links = [
    { href: "#offerings", label: "Services" },
    { href: "#proof", label: "How we build" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary glow-emerald">
            <Sparkles className="h-4 w-4 text-background" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Databitz<span className="text-primary">.AI</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:glow-emerald"
        >
          Book Audit
        </a>
      </div>
    </header>
  );
}