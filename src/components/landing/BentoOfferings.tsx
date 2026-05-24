import { useEffect, useState } from "react";
import { Cpu, MessageCircle, Smartphone, Workflow, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function BentoOfferings() {
  return (
    <section id="offerings" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="What we ship"
        title={<>Three offerings. <span className="text-gradient-emerald">Zero patchwork.</span></>}
        subtitle="Whether your stack is Google, Microsoft, or somewhere in between — we design the system, build it cleanly, and hand it back fully documented."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
        <ProcessAutomationCard />
        <WhatsAppCard />
        <CustomDevCard />
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-4 inline-flex items-center rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
    </div>
  );
}

function ProcessAutomationCard() {
  return (
    <article className="relative col-span-1 overflow-hidden rounded-3xl glass-strong p-7 md:col-span-4 md:row-span-2">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <Tag icon={<Workflow className="h-3.5 w-3.5" />} label="Process Automation" tone="emerald" />
      <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">SMB Process Automation</h3>
      <p className="mt-3 max-w-md text-muted-foreground">
        Google Apps Script, Power Automate flows, and data sync that eliminate manual entry — across Sheets, SharePoint, CRMs and your finance stack.
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        {[
          "Lead → CRM → Email/Sheet sync, end-to-end",
          "Power Automate workflows for approvals & ops",
          "Apps Script automations on Drive, Gmail, Sheets",
          "Daily reports & dashboards on autopilot",
        ].map((f) => (
          <li key={f} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-background/40 p-3">
        <MiniNode label="Forms" />
        <MiniNode label="Apps Script" highlighted />
        <MiniNode label="Sheets + CRM" />
      </div>
    </article>
  );
}

function WhatsAppCard() {
  const messages = [
    "New lead from Meta Ads — Rohan, Delhi",
    "Auto-reply sent on WhatsApp ✓",
    "Sales team notified in group chat",
    "Callback booked for 4:30 PM",
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 2600);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <article className="relative col-span-1 overflow-hidden rounded-3xl glass-strong p-7 md:col-span-2 md:row-span-2">
      <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <Tag icon={<MessageCircle className="h-3.5 w-3.5" />} label="WhatsApp" tone="emerald" />
      <h3 className="mt-5 font-display text-2xl font-bold">Smart WhatsApp Integrations</h3>
      <p className="mt-3 text-sm text-muted-foreground">
        Automated lead notifications, instant customer alerts, and follow-ups that convert — on the WhatsApp Business API.
      </p>
      <div className="mt-6 rounded-2xl border border-primary/30 bg-background/60 p-3">
        <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Live event stream
        </div>
        <div className="space-y-1.5">
          {messages.map((m, i) => (
            <div
              key={m}
              className={`rounded-lg px-2.5 py-1.5 text-[11px] transition-all duration-500 ${
                i === idx ? "bg-primary/15 text-foreground glow-emerald" : "bg-white/[0.03] text-muted-foreground"
              }`}
            >
              {i === idx ? <span className="animate-typing">{m}</span> : m}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function CustomDevCard() {
  return (
    <article className="relative col-span-1 overflow-hidden rounded-3xl glass-strong p-7 md:col-span-6">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" aria-hidden />
      <div className="grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
        <div>
          <Tag icon={<Cpu className="h-3.5 w-3.5" />} label="Custom Build" tone="cobalt" />
          <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Custom Web & Mobile Development</h3>
          <p className="mt-3 max-w-xl text-muted-foreground">
            When low-code reaches its limits, we build high-performance custom internal tools, CRM dashboards, and field apps — engineered to scale.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {["React + Vite", "Next.js", "Node / Edge", "PWA & Field Apps", "Type-safe APIs", "Realtime Sync"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
          <a href="#contact" className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-foreground">
            Discuss your build <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <TiltCard>
          <MockDashboard />
        </TiltCard>
      </div>
    </article>
  );
}

function MockDashboard() {
  return (
    <div className="relative w-full rounded-2xl border border-white/15 bg-gradient-to-br from-background/80 to-charcoal/60 p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <LayoutDashboard className="h-4 w-4 text-secondary" />
          Operations · Live
        </div>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[10px] text-muted-foreground">syncing</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { k: "Leads", v: "1,284", d: "+12%" },
          { k: "Replies", v: "97%", d: "auto" },
          { k: "Pipeline", v: "₹48L", d: "+8%" },
        ].map((m) => (
          <div key={m.k} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
            <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
            <div className="mt-1 font-display text-lg font-bold">{m.v}</div>
            <div className="text-[10px] text-primary">{m.d}</div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 280 80" className="mt-3 h-20 w-full">
        <defs>
          <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.74 0.18 162)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.74 0.18 162)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,60 L30,50 L60,55 L90,38 L120,42 L150,28 L180,32 L210,18 L240,22 L280,8 L280,80 L0,80 Z" fill="url(#spark)" />
        <path d="M0,60 L30,50 L60,55 L90,38 L120,42 L150,28 L180,32 L210,18 L240,22 L280,8" stroke="oklch(0.74 0.18 162)" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="mt-2 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2">
        <div className="flex items-center gap-2">
          <Smartphone className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] text-muted-foreground">Field app · 14 reps online</span>
        </div>
        <span className="text-[10px] text-primary">●</span>
      </div>
    </div>
  );
}

function Tag({ icon, label, tone }: { icon: React.ReactNode; label: string; tone: "emerald" | "cobalt" }) {
  const color = tone === "emerald"
    ? "text-primary border-primary/30 bg-primary/10"
    : "text-secondary border-secondary/30 bg-secondary/10";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wider ${color}`}>
      {icon} {label}
    </span>
  );
}

function MiniNode({ label, highlighted = false }: { label: string; highlighted?: boolean }) {
  return (
    <div
      className={`rounded-xl border px-3 py-3 text-center text-xs font-medium ${
        highlighted
          ? "border-primary/40 bg-primary/10 text-foreground glow-emerald"
          : "border-white/10 bg-white/[0.03] text-muted-foreground"
      }`}
    >
      {label}
    </div>
  );
}