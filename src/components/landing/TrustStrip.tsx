const platforms = [
  "Google Workspace",
  "Google Sheets",
  "Google Forms",
  "Apps Script",
  "Microsoft 365",
  "Power Automate",
  "Power Apps",
  "WhatsApp Business API",
  "Make",
  "Zapier",
  "Twilio",
  "Notion",
];

export function TrustStrip() {
  const row = [...platforms, ...platforms];
  return (
    <section className="relative border-y border-white/5 bg-background/40 py-8">
      <div className="mx-auto mb-5 max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Platforms we supercharge
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-10 animate-marquee">
          {row.map((p, i) => (
            <div key={`${p}-${i}`} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted-foreground/80 transition-colors hover:text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}