"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const ctx = gsap.context(() => {
      let x = 0;
      let y = 0;

      if (direction === "up") {
        y = distance;
      }

      if (direction === "down") {
        y = -distance;
      }

      if (direction === "left") {
        x = distance;
      }

      if (direction === "right") {
        x = -distance;
      }

      gsap.fromTo(
        element,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once,
          },
        },
      );
    }, element);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
