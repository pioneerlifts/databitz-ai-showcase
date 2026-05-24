import { FileSpreadsheet, Settings2, Smartphone, UserPlus } from "lucide-react";

/**
 * Animated "Live Automation Blueprint":
 * Lead card → Google Sheets node → Automation gear → Mock phone notification.
 */
export function AutomationBlueprint() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 blur-2xl" aria-hidden />
      <div className="relative rounded-3xl glass-strong p-5 sm:p-7">
        <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Live blueprint
          </span>
          <span>flow_001.databitz</span>
        </div>

        <div className="relative h-[420px] w-full">
          <svg viewBox="0 0 400 420" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.74 0.18 162)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="oklch(0.74 0.18 162)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="oklch(0.58 0.22 264)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path id="flowPath" d="M 60 70 C 140 70, 160 200, 250 200 S 360 340, 320 380"
              stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle r="5" fill="oklch(0.74 0.18 162)">
              <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowPath" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="oklch(0.58 0.22 264)" opacity="0.8">
              <animateMotion dur="4.5s" begin="1.2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowPath" />
              </animateMotion>
            </circle>
          </svg>

          <Node className="absolute left-0 top-2 w-[180px]" tone="cobalt">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-secondary/20 text-secondary">
                <UserPlus className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">New Lead</div>
                <div className="text-sm font-semibold">Rohan Mehta</div>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-muted-foreground">Source: Meta Ads · Delhi</div>
          </Node>

          <Node className="absolute left-1/2 top-[158px] w-[170px] -translate-x-1/2" tone="emerald">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
                <FileSpreadsheet className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Sync</div>
                <div className="text-sm font-semibold">Google Sheets</div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1 text-[9px] text-muted-foreground">
              <div className="rounded bg-white/5 px-1 py-0.5">A·Name</div>
              <div className="rounded bg-white/5 px-1 py-0.5">B·Phone</div>
              <div className="rounded bg-primary/20 px-1 py-0.5 text-primary">✓ Row</div>
            </div>
          </Node>

          <div className="absolute right-3 top-[176px] grid h-14 w-14 place-items-center rounded-2xl glass animate-pulse-glow">
            <Settings2 className="h-6 w-6 text-primary [animation:spin_8s_linear_infinite]" />
          </div>

          <div className="absolute bottom-0 right-2 w-[180px]">
            <div className="relative rounded-[28px] border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 shadow-2xl animate-floaty">
              <div className="mx-auto mb-1 h-1 w-10 rounded-full bg-white/20" />
              <div className="rounded-[20px] bg-background/80 p-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Smartphone className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-primary">WhatsApp</div>
                </div>
                <div className="mt-2 rounded-lg bg-primary/10 p-2 text-[11px] leading-snug text-foreground">
                  Hi Rohan 👋 Thanks for your interest. Your callback is booked for <b>4:30 PM today</b>.
                </div>
                <div className="mt-1 text-right text-[9px] text-muted-foreground">delivered · just now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({
  children,
  className = "",
  tone,
}: {
  children: React.ReactNode;
  className?: string;
  tone: "emerald" | "cobalt";
}) {
  const glow = tone === "emerald" ? "glow-emerald" : "glow-cobalt";
  return <div className={`rounded-xl glass p-3 ${glow} ${className}`}>{children}</div>;
}