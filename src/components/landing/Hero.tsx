import { ArrowRight, Calendar } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { AutomationBlueprint } from "./AutomationBlueprint";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Automation studio for Indian SMBs
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Stop Fighting Chaos.{" "}
            <span className="text-gradient-hero">Start Automating Your Growth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We turn your everyday tools — like <span className="text-foreground">Google Workspace</span>,{" "}
            <span className="text-foreground">Microsoft Power Platform</span>, and{" "}
            <span className="text-foreground">WhatsApp</span> — into automated, revenue-driving machines for Indian SMBs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact" ariaLabel="Book a 15 minute automation audit">
              <Calendar className="h-4 w-4" />
              Book a 15-Minute Automation Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <a
              href="#offerings"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See what we automate →
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 text-left">
            <Stat k="120+" v="Workflows shipped" />
            <Stat k="40%" v="Avg. ops time saved" />
            <Stat k="< 2 wks" v="First pilot live" />
          </dl>
        </div>

        <AutomationBlueprint />
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-bold text-foreground">{k}</dt>
      <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
    </div>
  );
}