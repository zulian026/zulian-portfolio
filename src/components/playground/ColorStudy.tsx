"use client";

import { useState } from "react";

const palettes = [
  {
    name: "WARM",
    colors: ["#F5C94A", "#FF7043", "#FF4F87", "#171614"],
  },
  {
    name: "MINT",
    colors: ["#9BDCC5", "#DDF3EA", "#3E5EE8", "#171614"],
  },
  {
    name: "INK",
    colors: ["#171614", "#F5F3ED", "#68645D", "#3E5EE8"],
  },
  {
    name: "CANDY",
    colors: ["#FF4F87", "#F5C94A", "#9BDCC5", "#F5F3ED"],
  },
];

export default function ColorStudy() {
  const [activePalette, setActivePalette] = useState(0);

  const palette = palettes[activePalette];

  return (
    <div className="flex w-full max-w-[360px] flex-col items-center gap-7">
      {/* Color composition */}
      <div className="grid w-full grid-cols-2 gap-2">
        {palette.colors.map((color, index) => (
          <button
            key={color}
            type="button"
            onClick={() =>
              setActivePalette((activePalette + 1) % palettes.length)
            }
            className="
              group
              relative
              h-24
              cursor-pointer
              border
              border-[var(--foreground)]
              transition-transform
              duration-300
              hover:-translate-y-1
            "
            style={{ backgroundColor: color }}
            aria-label={`Color ${index + 1}: ${color}`}
          >
            <span
              className="
                absolute
                bottom-2
                left-2
                font-[family-name:var(--font-sans)]
                text-[9px]
                font-bold
                uppercase
                tracking-[0.1em]
                opacity-0
                transition-opacity
                group-hover:opacity-100
              "
              style={{
                color:
                  color === "#171614" || color === "#3E5EE8"
                    ? "#ffffff"
                    : "#171614",
              }}
            >
              {color}
            </span>
          </button>
        ))}
      </div>

      {/* Palette label */}
      <div className="flex w-full items-center justify-between">
        <span className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-[-0.03em]">
          {palette.name}
        </span>

        <span className="font-[family-name:var(--font-sans)] text-xs text-[var(--muted)]">
          0{activePalette + 1} / 04
        </span>
      </div>

      {/* Controls */}
      <div className="flex w-full items-center justify-between border-t border-[var(--foreground)] pt-4">
        <span className="font-[family-name:var(--font-handwritten)] text-lg text-[var(--muted)]">
          click a color
        </span>

        <button
          type="button"
          onClick={() =>
            setActivePalette((activePalette + 1) % palettes.length)
          }
          className="
            border
            border-[var(--foreground)]
            bg-[var(--foreground)]
            px-4
            py-2
            font-[family-name:var(--font-sans)]
            text-[10px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[var(--background)]
            transition-transform
            duration-200
            hover:-translate-y-1
          "
        >
          NEXT PALETTE
        </button>
      </div>
    </div>
  );
}
