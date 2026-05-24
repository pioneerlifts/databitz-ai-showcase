import { useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
};

export function MagneticButton({ children, className = "", href, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setT({ x: x * 0.25, y: y * 0.35 });
  };
  const reset = () => setT({ x: 0, y: 0 });

  const inner = (
    <span
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
      className={`group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-primary to-[oklch(0.62_0.16_162)] px-6 py-3.5 font-semibold text-primary-foreground transition-transform duration-200 ease-out glow-emerald hover:scale-[1.02] ${className}`}
    >
      <span className="absolute inset-0 -z-10 rounded-xl bg-primary blur-xl opacity-60 transition-opacity group-hover:opacity-90" aria-hidden />
      {children}
    </span>
  );

  if (href) return <a href={href} {...(rest as never)}>{inner}</a>;
  return <button {...rest}>{inner}</button>;
}