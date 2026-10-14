"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

export default function SpinDial() {
  const needleRef = useRef<HTMLDivElement>(null);
  const rotation = useRef(0);
  const [degrees, setDegrees] = useState(0);

  const handleSpin = () => {
    const needle = needleRef.current;

    if (!needle) return;

    const spin = 360 + Math.random() * 720;
    rotation.current += spin;
    setDegrees(Math.round(((rotation.current % 360) + 360) % 360));

    gsap.to(needle, {
      rotation: rotation.current,
      duration: 1.4,
      ease: "elastic.out(1, 0.35)",
    });
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <button
        type="button"
        onClick={handleSpin}
        aria-label="Spin the dial"
        className="
          relative
          h-48
          w-48
          cursor-pointer
          rounded-full
          border-2
          border-[var(--foreground)]
          bg-[var(--background)]
          shadow-[4px_4px_0_var(--foreground)]
          transition-shadow
          duration-300
          hover:shadow-[7px_7px_0_var(--foreground)]
          active:shadow-[1px_1px_0_var(--foreground)]
        "
      >
        {/* Tick marks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute left-1/2 top-1/2 h-3 w-[2px] bg-[var(--foreground)]"
            style={{ transform: `rotate(${i * 30}deg) translateY(-80px)` }}
          />
        ))}

        {/* Needle */}
        <div ref={needleRef} className="absolute inset-0" aria-hidden>
          <span className="absolute left-1/2 top-5 h-14 w-2 -translate-x-1/2 rounded-full bg-[var(--pink)]" />
        </div>

        {/* Center hub */}
        <span
          aria-hidden
          className="
            absolute
            left-1/2
            top-1/2
            h-10
            w-10
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-2
            border-[var(--foreground)]
            bg-[var(--yellow)]
          "
        />
      </button>

      <div className="flex items-center gap-3">
        <span className="font-[family-name:var(--font-display)] text-4xl font-bold tabular-nums">
          {String(degrees).padStart(3, "0")}°
        </span>

        <span className="font-[family-name:var(--font-handwritten)] text-lg text-[var(--muted)]">
          click to spin ↗
        </span>
      </div>
    </div>
  );
}
