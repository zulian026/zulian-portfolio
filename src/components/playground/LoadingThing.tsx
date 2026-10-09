"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingThing() {
  const [loading, setLoading] = useState(false);

  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  const startLoading = () => {
    if (loading) return;

    setLoading(true);

    const bars = barsRef.current.filter((bar): bar is HTMLDivElement =>
      Boolean(bar),
    );

    if (!bars.length) {
      setLoading(false);
      return;
    }

    gsap.killTweensOf(bars);

    gsap.fromTo(
      bars,
      {
        scaleY: 0.25,
        opacity: 0.4,
      },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.45,
        stagger: {
          each: 0.08,
          repeat: 3,
          yoyo: true,
        },
        ease: "power2.inOut",
        onComplete: () => {
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className="flex w-full max-w-[340px] flex-col items-center gap-8">
      <div className="flex h-32 items-end gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((bar, index) => (
          <div
            key={bar}
            ref={(element) => {
              barsRef.current[index] = element;
            }}
            className="
              h-24
              w-2
              origin-bottom
              bg-[var(--pink)]
              sm:w-3
            "
            style={{
              height: `${45 + (bar % 3) * 18}px`,
            }}
          />
        ))}
      </div>

      <div className="text-center">
        <span
          className="
            block
            font-[family-name:var(--font-display)]
            text-3xl
            font-bold
            uppercase
            leading-none
          "
        >
          {loading ? "LOADING..." : "DONE."}
        </span>

        <span
          className="
            mt-2
            block
            font-[family-name:var(--font-handwritten)]
            text-lg
            text-[var(--muted)]
          "
        >
          {loading ? "something is happening" : "that was quick ↗"}
        </span>
      </div>

      <button
        type="button"
        onClick={startLoading}
        disabled={loading}
        className="
          border
          border-[var(--foreground)]
          bg-[var(--yellow)]
          px-5
          py-3
          font-[family-name:var(--font-sans)]
          text-[10px]
          font-bold
          uppercase
          tracking-[0.14em]
          shadow-[3px_3px_0_var(--foreground)]
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-[4px_4px_0_var(--foreground)]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "WAIT..." : "RUN AGAIN"}
      </button>
    </div>
  );
}
