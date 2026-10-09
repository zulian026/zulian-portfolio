"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

type Note = {
  id: number;
  title: string;
  text: string;
  rotate: number;
};

const notes: Note[] = [
  {
    id: 1,
    title: "IDEA",
    text: "make it simple.",
    rotate: -4,
  },
  {
    id: 2,
    title: "NOTE",
    text: "details matter.",
    rotate: 3,
  },
  {
    id: 3,
    title: "REMINDER",
    text: "ship the thing.",
    rotate: -2,
  },
];

export default function PaperUI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
    id: number,
  ) => {
    const card = event.currentTarget;

    setActiveId(id);
    card.setPointerCapture(event.pointerId);

    gsap.to(card, {
      scale: 1.05,
      rotate: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const card = event.currentTarget;

    if (!card.hasPointerCapture(event.pointerId)) return;

    const parent = containerRef.current;

    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const x = event.clientX - parentRect.left - cardRect.width / 2;

    const y = event.clientY - parentRect.top - cardRect.height / 2;

    gsap.set(card, {
      x: x - card.offsetLeft,
      y: y - card.offsetTop,
    });
  };

  const resetCard = (event: React.PointerEvent<HTMLDivElement>) => {
    const card = event.currentTarget;

    if (card.hasPointerCapture(event.pointerId)) {
      card.releasePointerCapture(event.pointerId);
    }

    setActiveId(null);

    gsap.to(card, {
      scale: 1,
      x: 0,
      y: 0,
      rotate: Number(card.dataset.rotate ?? 0),
      duration: 0.6,
      ease: "elastic.out(1, 0.45)",
    });
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[280px]
        w-full
        max-w-[380px]
        touch-none
        sm:h-[300px]
      "
    >
      {notes.map((note, index) => {
        const isActive = activeId === note.id;

        return (
          <div
            key={note.id}
            data-rotate={note.rotate}
            onPointerDown={(event) => handlePointerDown(event, note.id)}
            onPointerMove={handlePointerMove}
            onPointerUp={resetCard}
            onPointerCancel={resetCard}
            className={`
              absolute
              left-1/2
              top-1/2
              flex
              h-32
              w-44
              -translate-x-1/2
              -translate-y-1/2
              cursor-grab
              flex-col
              justify-between
              border
              border-[var(--foreground)]
              bg-[var(--background)]
              p-4
              shadow-[4px_4px_0_var(--foreground)]
              active:cursor-grabbing
              sm:h-36
              sm:w-52
              sm:p-5
              ${
                isActive
                  ? "z-30"
                  : index === 0
                    ? "z-20"
                    : index === 1
                      ? "z-10"
                      : "z-0"
              }
            `}
            style={{
              marginLeft: index === 0 ? "-55px" : index === 1 ? "35px" : "-5px",
              marginTop: index === 0 ? "-40px" : index === 1 ? "10px" : "45px",
              rotate: `${note.rotate}deg`,
            }}
          >
            <span
              className="
                font-[family-name:var(--font-sans)]
                text-[8px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[var(--muted)]
              "
            >
              {note.title}
            </span>

            <span
              className="
                font-[family-name:var(--font-handwritten)]
                text-xl
                text-[var(--foreground)]
                sm:text-2xl
              "
            >
              {note.text}
            </span>

            <span
              className="
                self-end
                font-[family-name:var(--font-sans)]
                text-[8px]
                text-[var(--muted)]
              "
            >
              0{note.id}
            </span>
          </div>
        );
      })}

      <span
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          font-[family-name:var(--font-handwritten)]
          text-base
          text-[var(--muted)]
          sm:text-lg
        "
      >
        drag the notes ↗
      </span>
    </div>
  );
}
