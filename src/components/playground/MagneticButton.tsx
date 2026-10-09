"use client";

import { useRef } from "react";
import gsap from "gsap";

type MagneticButtonProps = {
  children: React.ReactNode;
};

export default function MagneticButton({ children }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);

    const y = event.clientY - (rect.top + rect.height / 2);

    gsap.to(button, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        inline-flex
        cursor-pointer
        items-center
        justify-center
        border-2
        border-[var(--foreground)]
        bg-[var(--yellow)]
        px-7
        py-4
        font-[family-name:var(--font-sans)]
        text-xs
        font-bold
        uppercase
        tracking-[0.16em]
        shadow-[4px_4px_0_var(--foreground)]
        transition-shadow
        duration-300
        hover:shadow-[7px_7px_0_var(--foreground)]
      "
    >
      {children}
    </div>
  );
}
