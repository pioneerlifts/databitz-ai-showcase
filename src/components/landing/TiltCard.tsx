import { useRef, useState, type ReactNode } from "react";

export function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * 8, ry: px * 10 });
  };
  const reset = () => setT({ rx: 0, ry: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(1000px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: "transform 200ms ease-out",
      }}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}