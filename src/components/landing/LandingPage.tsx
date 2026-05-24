import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { TrustStrip } from "./TrustStrip";
import { BentoOfferings } from "./BentoOfferings";
import { TechnicalProof } from "./TechnicalProof";
import { Footer } from "./Footer";
import { WhatsAppWidget } from "./WhatsAppWidget";

export function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden />
      <Nav />
      <Hero />
      <TrustStrip />
      <BentoOfferings />
      <TechnicalProof />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}