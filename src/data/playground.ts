export type PlaygroundItem = {
  number: string;
  title: string;
  description: string;
  category: string;
  year: string;
  accent: "yellow" | "pink" | "green" | "blue";
  type: "animation" | "ui" | "visual" | "experiment";
};

export const playgroundItems: PlaygroundItem[] = [
  {
    number: "01",
    title: "MAGNETIC BUTTON",
    description:
      "A small interaction experiment exploring cursor movement and magnetic UI elements.",
    category: "INTERACTION",
    year: "2026",
    accent: "yellow",
    type: "animation",
  },
  {
    number: "02",
    title: "TEXT MOTION",
    description:
      "Playful typography experiments using movement, timing, and oversized type.",
    category: "TYPOGRAPHY",
    year: "2026",
    accent: "pink",
    type: "animation",
  },
  {
    number: "03",
    title: "COLOR STUDY",
    description:
      "Exploring relationships between colors, contrast, and visual rhythm.",
    category: "VISUAL",
    year: "2026",
    accent: "green",
    type: "visual",
  },
  {
    number: "04",
    title: "CUSTOM CURSOR",
    description:
      "A minimal custom cursor experiment designed to make ordinary interactions feel more tactile.",
    category: "INTERACTION",
    year: "2026",
    accent: "blue",
    type: "experiment",
  },
  {
    number: "05",
    title: "PAPER UI",
    description:
      "A collection of small interface ideas inspired by printed matter and physical objects.",
    category: "UI EXPERIMENT",
    year: "2026",
    accent: "yellow",
    type: "ui",
  },
  {
    number: "06",
    title: "LOADING THING",
    description:
      "An experimental loading sequence built around simple shapes and unexpected motion.",
    category: "MOTION",
    year: "2026",
    accent: "pink",
    type: "animation",
  },
];
