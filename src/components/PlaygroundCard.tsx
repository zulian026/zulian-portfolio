"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/playground/MagneticButton";
import TextMotion from "@/components/playground/TextMotion";
import ColorStudy from "@/components/playground/ColorStudy";
import CustomCursor from "@/components/playground/CustomCursor";
import PaperUI from "@/components/playground/PaperUI";
import LoadingThing from "@/components/playground/LoadingThing";
import type { PlaygroundItem } from "@/data/playground";

type PlaygroundCardProps = {
  item: PlaygroundItem;
  index: number;
};

const accentClasses = {
  yellow: {
    bg: "bg-[var(--yellow)]",
    text: "text-[var(--foreground)]",
  },
  pink: {
    bg: "bg-[var(--pink)]",
    text: "text-white",
  },
  green: {
    bg: "bg-[var(--green)]",
    text: "text-[var(--foreground)]",
  },
  blue: {
    bg: "bg-[var(--blue)]",
    text: "text-white",
  },
};

export default function PlaygroundCard({ item, index }: PlaygroundCardProps) {
  const accent = accentClasses[item.accent];

  return (
    <ScrollReveal
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 0.06}
      duration={0.8}
      distance={60}
      className="h-full"
    >
      <article className="group relative flex h-full min-h-[460px] sm:min-h-[420px] flex-col overflow-hidden border border-[var(--foreground)] bg-[var(--background)]">
        {/* Decorative circle */}
        <div
          className={`
            absolute
            -right-12
            -top-12
            h-36
            w-36
            rounded-full
            border
            border-[var(--foreground)]
            ${accent.bg}
            transition-transform
            duration-500
            ease-out
            group-hover:scale-125
            group-hover:rotate-12
          `}
        />

        {/* Small sparkle */}
        <Sparkles
          size={18}
          strokeWidth={1.5}
          className="
            absolute
            right-6
            top-7
            transition-transform
            duration-500
            group-hover:rotate-45
          "
        />

        {/* Number */}
        <div className="relative flex items-center justify-between border-b border-[var(--foreground)] px-5 py-4">
          <span
            className="
              font-[family-name:var(--font-sans)]
              text-xs
              font-bold
              tracking-[0.18em]
            "
          >
            EXPERIMENT {item.number}
          </span>

          <span
            className="
              font-[family-name:var(--font-sans)]
              text-xs
              text-[var(--muted)]
            "
          >
            {item.year}
          </span>
        </div>

        {/* Visual area */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-12">
          {item.title === "MAGNETIC BUTTON" ? (
            <div className="flex flex-col items-center gap-8">
              <MagneticButton>MOVE ME</MagneticButton>

              <span
                className="
                  font-[family-name:var(--font-handwritten)]
                  text-lg
                  text-[var(--muted)]
                "
              >
                go on, try it ↗
              </span>
            </div>
          ) : item.title === "TEXT MOTION" ? (
            <div className="flex flex-col items-center gap-6">
              <TextMotion />

              <span
                className="
                  font-[family-name:var(--font-handwritten)]
                  text-lg
                  text-[var(--muted)]
                "
              >
                hover the type ↗
              </span>
            </div>
          ) : item.title === "COLOR STUDY" ? (
            <ColorStudy />
          ) : item.title === "CUSTOM CURSOR" ? (
            <CustomCursor />
          ) : item.title === "PAPER UI" ? (
            <PaperUI />
          ) : item.title === "LOADING THING" ? (
            <LoadingThing />
          ) : (
            <div
              className={`
                relative
                flex
                h-48
                w-48
                items-center
                justify-center
                rounded-full
                border-2
                border-[var(--foreground)]
                ${accent.bg}
                transition-all
                duration-700
                ease-out
                group-hover:scale-110
                group-hover:rotate-6
              `}
            >
              <span
                className={`
                  font-[family-name:var(--font-display)]
                  text-5xl
                  font-bold
                  uppercase
                  leading-none
                  tracking-[-0.04em]
                  ${accent.text}
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  border
                  border-current
                  opacity-30
                "
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="border-t border-[var(--foreground)] p-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span
              className="
                font-[family-name:var(--font-sans)]
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[var(--muted)]
              "
            >
              {item.category}
            </span>

            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </div>

          <h2
            className="
              font-[family-name:var(--font-display)]
              text-4xl
              font-bold
              uppercase
              leading-[0.9]
              tracking-[-0.03em]
            "
          >
            {item.title}
          </h2>

          <p
            className="
              mt-4
              max-w-sm
              font-[family-name:var(--font-sans)]
              text-sm
              leading-6
              text-[var(--muted)]
            "
          >
            {item.description}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}
