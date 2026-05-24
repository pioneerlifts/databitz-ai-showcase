import { MapPin, Phone, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Footer() {
  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Let's automate
            </div>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
              Your next 40 hours/week back. <span className="text-gradient-emerald">In 2 weeks.</span>
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Book a free 15-minute audit. We'll map one workflow live and show you exactly where the chaos hides — and how to remove it.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <MagneticButton
                href="https://wa.me/918826688945?text=I%20want%20to%20book%20a%2015-minute%20automation%20audit"
                ariaLabel="WhatsApp Databitz AI"
              >
                Book the 15-min Audit
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href="tel:+918826688945"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.08]"
              >
                <Phone className="h-4 w-4" /> +91 88266 88945
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-background/40 p-6">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Databitz AI</div>
            <div className="mt-4 space-y-4 text-sm">
              <Row icon={<MapPin className="h-4 w-4 text-primary" />} label="Address">
                Uttam Nagar, New Delhi, India
              </Row>
              <Row icon={<Phone className="h-4 w-4 text-primary" />} label="Call">
                <a href="tel:+918826688945" className="hover:text-foreground">+91 88266 88945</a>
                <span className="text-muted-foreground/60"> · </span>
                <a href="tel:+919971590047" className="hover:text-foreground">+91 99715 90047</a>
              </Row>
              <Row icon={<Mail className="h-4 w-4 text-primary" />} label="WhatsApp">
                <a
                  href="https://wa.me/918826688945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Chat with our team
                </a>
              </Row>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-primary to-secondary">
              <Sparkles className="h-3 w-3 text-background" />
            </span>
            <span>© {new Date().getFullYear()} Databitz AI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#offerings" className="hover:text-foreground">Services</a>
            <a href="#proof" className="hover:text-foreground">Engineering</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-foreground/90">{children}</div>
      </div>
    </div>
  );
}