export const siteConfig = {
  name: "ZULIAN",
  firstName: "ZULIAN",
  title: "CREATIVE DEVELOPER",
  description:
    "I design and build digital experiences that feel simple, useful, and a little bit unexpected.",
  about:
    "I'm a creative developer who enjoys turning ideas into thoughtful digital experiences. I care about clean interfaces, expressive interactions, and code that doesn't get in the way.",
  location: "INDONESIA",
  email: "hello@zulian.dev",
  availability: "AVAILABLE FOR NEW PROJECTS",

  socials: {
    github: "#",
    linkedin: "#",
    instagram: "#",
    dribbble: "#",
  },

  navigation: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "CASE STUDY", href: "/work" },
    { label: "PLAYGROUND", href: "/playground" },
  ],
} as const;

export const skills = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "TAILWIND",
  "FIGMA",
] as const;

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  year: string;
  slug: string;
  accent: "yellow" | "pink" | "green";

  role: string;

  stack: string[];

  liveUrl?: string;
  githubUrl?: string;

  image?: string;

  caseStudy: {
    intro: string;
    challenge: string;
    approach: string;
    outcome: string;
    highlights: string[];
  };
};

export const projects: Project[] = [
  {
    number: "01",
    title: "COLOR PALLETT",
    category: "CREATIVE TOOL",
    description:
      "A playful color palette generator for exploring and building beautiful color combinations.",
    year: "2026",
    slug: "color-pallett",
    accent: "yellow",

    role: "DESIGN + DEVELOPMENT",

    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "CULORI"],

    liveUrl: undefined,
    githubUrl: undefined,

    image: "/images/projects/color-pallett.jpg",

    caseStudy: {
      intro:
        "A playful color exploration tool built to make creating palettes feel simple, visual, and a little more fun.",

      challenge:
        "Color tools can quickly become overwhelming when they expose too many controls at once. The goal was to create something that feels approachable while still giving enough control to experiment with color.",

      approach:
        "The interface was designed around direct manipulation and visual feedback. Colors remain the main focus, while supporting controls stay lightweight and easy to understand.",

      outcome:
        "The result is a small creative tool that makes palette exploration feel more like playing with colors than filling out a form.",

      highlights: [
        "Generate and explore color palettes",
        "Edit individual colors",
        "Explore color relationships",
        "Drag and rearrange palette colors",
      ],
    },
  },

  {
    number: "02",
    title: "RESUME BUILDER",
    category: "WEB APP",
    description:
      "A simple resume builder focused on making professional documents feel less boring.",
    year: "2026",
    slug: "resume-builder",
    accent: "pink",

    role: "PRODUCT DESIGN + DEVELOPMENT",

    stack: ["SVELTEKIT", "TYPESCRIPT", "TAILWIND", "PDF"],

    liveUrl: undefined,
    githubUrl: undefined,

    image: "/images/projects/resume-builder.jpg",

    caseStudy: {
      intro:
        "A lightweight resume builder focused on making professional documents easier to create and less boring to work with.",

      challenge:
        "Resume builders often feel like form-heavy productivity tools. The challenge was to create an editing experience that stays practical without losing personality.",

      approach:
        "The editor separates content input from the final document preview while keeping both visible during the creation process. The visual system stays restrained so the actual resume remains the focus.",

      outcome:
        "The project became an experiment in balancing utility and visual expression inside a document-focused interface.",

      highlights: [
        "Structured resume sections",
        "Live document preview",
        "Editable content",
        "Professional document layout",
      ],
    },
  },

  {
    number: "03",
    title: "ISLE SHELL",
    category: "DESKTOP UI",
    description:
      "An experimental desktop shell exploring expressive interfaces and lightweight interactions.",
    year: "2026",
    slug: "isle-shell",
    accent: "green",

    role: "UI + DESKTOP DEVELOPMENT",

    stack: ["QUICKSHELL", "QML", "HYPRLAND", "WAYLAND"],

    liveUrl: undefined,
    githubUrl: undefined,

    image: "/images/projects/isle-shell.jpg",

    caseStudy: {
      intro:
        "An experimental desktop shell exploring expressive interfaces, dynamic panels, and lightweight interactions on Linux.",

      challenge:
        "Desktop interfaces tend to prioritize function over expression. This project explores how a system shell can remain useful while feeling more intentional and personal.",

      approach:
        "The interface uses compact panels, dynamic states, and small animations to expose information without constantly demanding attention.",

      outcome:
        "The result is an ongoing exploration of a desktop environment that feels less like a collection of utilities and more like one coherent interface.",

      highlights: [
        "Dynamic desktop panels",
        "Wayland-native interface",
        "Animated system information",
        "Experimental interaction patterns",
      ],
    },
  },
];
