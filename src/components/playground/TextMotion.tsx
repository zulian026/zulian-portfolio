"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function TextMotion() {
  const containerRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const shadowRef = useRef<HTMLSpanElement>(null);
  const noteRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    const text = textRef.current;
    const shadow = shadowRef.current;
    const note = noteRef.current;

    if (!text || !shadow || !note) return;

    gsap.killTweensOf([text, shadow, note]);

    gsap.to(text, {
      y: -12,
      rotate: -4,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(shadow, {
      x: 8,
      y: 8,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(note, {
      y: 0,
      opacity: 1,
      rotate: -4,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const text = textRef.current;
    const shadow = shadowRef.current;
    const note = noteRef.current;

    if (!text || !shadow || !note) return;

    gsap.to(text, {
      y: 0,
      rotate: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(shadow, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(note, {
      y: -8,
      opacity: 0,
      rotate: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <button
      ref={containerRef}
      type="button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
        relative
        cursor-pointer
        select-none
        px-8
        py-10
        outline-none
      "
      aria-label="Text motion experiment"
    >
      {/* Offset shadow */}
      <span
        ref={shadowRef}
        aria-hidden="true"
        className="
          absolute
          left-8
          top-10
          font-[family-name:var(--font-display)]
          text-6xl
          font-bold
          uppercase
          leading-[0.8]
          tracking-[-0.05em]
          text-[var(--pink)]
        "
      >
        MOVE
      </span>

      {/* Main text */}
      <span
        ref={textRef}
        className="
          relative
          z-10
          block
          font-[family-name:var(--font-display)]
          text-6xl
          font-bold
          uppercase
          leading-[0.8]
          tracking-[-0.05em]
          text-[var(--foreground)]
        "
      >
        MOVE
      </span>

      {/* Handwritten annotation */}
      <span
        ref={noteRef}
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          translate-y-[-8px]
          whitespace-nowrap
          font-[family-name:var(--font-handwritten)]
          text-lg
          text-[var(--muted)]
          opacity-0
        "
      >
        typography ↗
      </span>
    </button>
  );
}
