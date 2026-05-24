import { Database, Lock, ShieldCheck, Zap, GitBranch } from "lucide-react";

export function TechnicalProof() {
  return (
    <section id="proof" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          The engineering
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Built for <span className="text-gradient-cobalt">Scalability</span>, Not Patchwork.
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Every automation we ship is versioned, observable, and secure by default — so it works on day 1, day 100, and day 1000.
        </p>
      </div>

      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
        <CodeWindow />
        <ArchitectureFlow />
      </div>
    </section>
  );
}

function CodeWindow() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass-strong p-1">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" aria-hidden />
      <div className="flex items-center justify-between rounded-t-xl bg-background/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>
        <div className="font-mono text-[11px] text-muted-foreground">leadSync.gs</div>
        <span className="text-[10px] uppercase tracking-wider text-primary">Apps Script</span>
      </div>
      <pre className="overflow-x-auto rounded-b-xl bg-background/80 p-5 font-mono text-[12.5px] leading-relaxed">
        <code>
          <Ln n={1}><K>function</K> <F>onNewLead</F>(e) {"{"}</Ln>
          <Ln n={2}>{"  "}<K>const</K> lead = parseForm(e.values);</Ln>
          <Ln n={3}>{"  "}<K>const</K> sheet = SpreadsheetApp</Ln>
          <Ln n={4}>{"    "}.openById(<S>SHEET_ID</S>).getSheetByName(<S>"Leads"</S>);</Ln>
          <Ln n={5}>{" "}</Ln>
          <Ln n={6}>{"  "}<C>{"// 1. Persist + dedupe by phone"}</C></Ln>
          <Ln n={7}>{"  "}upsertRow(sheet, lead, <S>"phone"</S>);</Ln>
          <Ln n={8}>{" "}</Ln>
          <Ln n={9}>{"  "}<C>{"// 2. Fire WhatsApp via Business API"}</C></Ln>
          <Ln n={10}>{"  "}<K>const</K> res = sendWhatsApp({"{"}</Ln>
          <Ln n={11}>{"    "}to: lead.phone,</Ln>
          <Ln n={12}>{"    "}template: <S>"lead_welcome_v3"</S>,</Ln>
          <Ln n={13}>{"    "}vars: [lead.name, slotFor(lead)],</Ln>
          <Ln n={14}>{"  "}{"}"});</Ln>
          <Ln n={15}>{" "}</Ln>
          <Ln n={16}>{"  "}<C>{"// 3. Notify sales · log · done"}</C></Ln>
          <Ln n={17}>{"  "}notifySalesChat(lead, res.id);</Ln>
          <Ln n={18}>{"  "}<K>return</K> {"{"} ok: <K>true</K> {"}"};</Ln>
          <Ln n={19}>{"}"}</Ln>
        </code>
      </pre>
    </div>
  );
}

function Ln({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[2ch_1fr] gap-4">
      <span className="text-right text-muted-foreground/40">{n}</span>
      <span className="text-foreground/90">{children}</span>
    </div>
  );
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-secondary">{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span className="text-primary">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-[oklch(0.85_0.12_85)]">{children}</span>;
const C = ({ children }: { children: React.ReactNode }) => <span className="text-muted-foreground/70 italic">{children}</span>;

function ArchitectureFlow() {
  const items = [
    { icon: <GitBranch className="h-4 w-4" />, title: "Versioned workflows", body: "Every automation lives in Git. Rollback in seconds, audit in minutes.", tone: "cobalt" as const },
    { icon: <Lock className="h-4 w-4" />, title: "Scoped credentials", body: "Service accounts, secret vaults, least-privilege OAuth — no shared logins.", tone: "emerald" as const },
    { icon: <Database className="h-4 w-4" />, title: "Single source of truth", body: "Idempotent syncs prevent dupes across Sheets, CRMs, and WhatsApp logs.", tone: "cobalt" as const },
    { icon: <Zap className="h-4 w-4" />, title: "Observability built-in", body: "Health checks, retries, and alerts — you hear about failures before customers do.", tone: "emerald" as const },
    { icon: <ShieldCheck className="h-4 w-4" />, title: "Compliance-ready", body: "Data residency, encryption-in-transit, and clean audit trails for finance & ops.", tone: "cobalt" as const },
  ];
  return (
    <div className="relative rounded-2xl glass-strong p-6 sm:p-7">
      <ol className="relative space-y-4 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-secondary/40 before:to-transparent">
        {items.map((it) => (
          <li key={it.title} className="relative flex gap-4">
            <div className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl glass ${it.tone === "emerald" ? "text-primary" : "text-secondary"}`}>
              {it.icon}
            </div>
            <div className="pt-1">
              <div className="font-semibold text-foreground">{it.title}</div>
              <p className="mt-0.5 text-sm text-muted-foreground">{it.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}