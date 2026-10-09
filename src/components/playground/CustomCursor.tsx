"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const areaRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const area = areaRef.current;
    const cursor = cursorRef.current;

    if (!area || !cursor) return;

    const moveCursor = (event: MouseEvent) => {
      const rect = area.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    area.addEventListener("mousemove", moveCursor);

    return () => {
      area.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleEnter = () => {
    setActive(true);

    const cursor = cursorRef.current;
    const text = textRef.current;

    if (!cursor || !text) return;

    gsap.killTweensOf([cursor, text]);

    gsap.to(cursor, {
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    setActive(false);

    const cursor = cursorRef.current;
    const text = textRef.current;

    if (!cursor || !text) return;

    gsap.to(cursor, {
      scale: 0,
      duration: 0.3,
      ease: "power3.in",
    });

    gsap.to(text, {
      opacity: 0,
      y: 8,
      duration: 0.2,
      ease: "power3.in",
    });
  };

  return (
    <div
      ref={areaRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
        relative
        flex
        h-[260px]
        w-full
        max-w-[400px]
        cursor-none
        items-center
        justify-center
        overflow-hidden
        border-2
        border-[var(--foreground)]
        bg-[var(--blue)]
      "
    >
      {/* Background typography */}
      <div
        className="
          pointer-events-none
          select-none
          text-center
          font-[family-name:var(--font-display)]
          text-[clamp(4rem,12vw,7rem)]
          font-bold
          uppercase
          leading-[0.72]
          tracking-[-0.06em]
          text-white
        "
      >
        LOOK
        <br />
        HERE
      </div>

      {/* Handwritten note */}
      <span
        className="
          absolute
          bottom-5
          left-5
          rotate-[-4deg]
          font-[family-name:var(--font-handwritten)]
          text-xl
          text-white
        "
      >
        move your mouse ↗
      </span>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          flex
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          scale-0
          items-center
          justify-center
          rounded-full
          border-2
          border-[var(--foreground)]
          bg-[var(--yellow)]
        "
      >
        <span
          ref={textRef}
          className="
            font-[family-name:var(--font-sans)]
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            opacity-0
          "
        >
          HI!
        </span>
      </div>

      {/* Small decorative circle */}
      <div
        className={`
          pointer-events-none
          absolute
          right-6
          top-6
          h-4
          w-4
          rounded-full
          bg-[var(--pink)]
          transition-transform
          duration-300
          ${active ? "scale-150" : "scale-100"}
        `}
      />
    </div>
  );
}
