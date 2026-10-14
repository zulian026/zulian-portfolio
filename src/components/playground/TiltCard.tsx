"use client";

import { useRef, useState } from "react";

export default function TiltCard() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;

    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setTilt({ x: (0.5 - py) * 22, y: (px - 0.5) * 22 });
    setGlare({ x: px * 100, y: py * 100 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  };

  return (
    <div
      className="flex flex-col items-center gap-8"
      style={{ perspective: "900px" }}
    >
      <div
        ref={frameRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="
          relative
          flex
          h-52
          w-72
          cursor-pointer
          items-center
          justify-center
          border-2
          border-[var(--foreground)]
          bg-[var(--yellow)]
          shadow-[4px_4px_0_var(--foreground)]
          transition-transform
          duration-150
          ease-out
        "
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glare */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.6), transparent 60%)`,
          }}
        />

        {/* Face, popped out in 3D */}
        <span
          aria-hidden
          className="font-[family-name:var(--font-display)] text-7xl font-bold"
          style={{ transform: "translateZ(50px)" }}
        >
          :)
        </span>

        {/* Corner ticks */}
        <span
          aria-hidden
          className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-[var(--foreground)]"
        />
        <span
          aria-hidden
          className="absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-[var(--foreground)]"
        />
        <span
          aria-hidden
          className="absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-[var(--foreground)]"
        />
        <span
          aria-hidden
          className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-[var(--foreground)]"
        />
      </div>

      <span className="font-[family-name:var(--font-handwritten)] text-lg text-[var(--muted)]">
        move your cursor over it ↗
      </span>
    </div>
  );
}
