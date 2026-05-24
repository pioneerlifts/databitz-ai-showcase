import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const href =
    "https://wa.me/918826688945?text=Can%20you%20share%20more%20info%20on%20business%20process%20automation";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Databitz AI on WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" aria-hidden />
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/60 blur-xl" aria-hidden />
      <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-br from-[oklch(0.78_0.17_162)] to-[oklch(0.62_0.16_162)] p-4 text-background shadow-2xl ring-1 ring-white/30 transition-transform duration-200 group-hover:scale-105">
        <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
        <span className="hidden pr-1 text-sm font-semibold sm:inline">Chat on WhatsApp</span>
      </span>
    </a>
  );
}