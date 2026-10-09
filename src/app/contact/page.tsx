"use client";

import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { siteConfig } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TransitionLink from "@/components/animations/TransitionLink";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 2500);
  };

  return (
    <main className="overflow-hidden">
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}

      <section className="relative border-b border-[var(--foreground)] px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-12">
        {/* Decorative circles */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            top-16
            h-36
            w-36
            rounded-full
            border
            border-[var(--foreground)]
            bg-[var(--yellow)]
            sm:h-52
            sm:w-52
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-12
            top-28
            h-12
            w-12
            rounded-full
            bg-[var(--pink)]
            sm:right-32
          "
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Top line */}
          <ScrollReveal direction="down" duration={0.7}>
            <div className="flex items-center justify-between border-b border-[var(--foreground)] pb-4">
              <span
                className="
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
              >
                05 / CONTACT
              </span>

              <span
                className="
                  hidden
                  font-[family-name:var(--font-handwritten)]
                  text-lg
                  text-[var(--muted)]
                  sm:block
                "
              >
                say hello ↘
              </span>

              <Mail
                size={18}
                strokeWidth={1.5}
                className="sm:hidden"
              />
            </div>
          </ScrollReveal>

          {/* Main heading */}
          <div className="relative pt-16 sm:pt-24">
            <ScrollReveal direction="left" duration={0.9}>
              <span
                className="
                  block
                  font-[family-name:var(--font-sans)]
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[var(--muted)]
                "
              >
                HAVE AN IDEA?
              </span>
            </ScrollReveal>

            <ScrollReveal
              direction="left"
              delay={0.08}
              duration={1}
            >
              <h1
                className="
                  mt-4
                  max-w-6xl
                  font-[family-name:var(--font-display)]
                  text-[clamp(4.5rem,13vw,11rem)]
                  font-bold
                  uppercase
                  leading-[0.78]
                  tracking-[-0.06em]
                "
              >
                LET&apos;S MAKE
                <br />
                SOMETHING.
              </h1>
            </ScrollReveal>

            {/* Handwritten note */}
            <ScrollReveal
              direction="right"
              delay={0.2}
              duration={0.8}
            >
              <div
                className="
                  mt-10
                  ml-auto
                  flex
                  w-fit
                  max-w-[260px]
                  rotate-[-3deg]
                  flex-col
                  items-center
                  sm:mr-20
                "
              >
                <span
                  className="
                    font-[family-name:var(--font-handwritten)]
                    text-xl
                    text-[var(--muted)]
                  "
                >
                  good things start
                </span>

                <span
                  className="
                    font-[family-name:var(--font-handwritten)]
                    text-2xl
                    text-[var(--pink)]
                  "
                >
                  with a hello ↗
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Intro */}
          <ScrollReveal
            direction="up"
            delay={0.15}
            duration={0.8}
          >
            <div className="mt-16 max-w-2xl sm:mt-20">
              <p
                className="
                  font-[family-name:var(--font-sans)]
                  text-base
                  leading-7
                  text-[var(--muted)]
                  sm:text-lg
                  sm:leading-8
                "
              >
                Have a project in mind, an interesting idea, or just want to
                talk about the web? Drop me a message. I&apos;d love to hear
                what you&apos;re working on.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CONTACT AREA
      ───────────────────────────────────────────── */}

      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* LEFT */}
          <div>
            <ScrollReveal direction="left" duration={0.9}>
              <div className="border-t border-[var(--foreground)] pt-5">
                <span
                  className="
                    font-[family-name:var(--font-sans)]
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[var(--muted)]
                  "
                >
                  DIRECT LINE
                </span>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="
                    group
                    mt-6
                    block
                  "
                >
                  <span
                    className="
                      block
                      break-all
                      font-[family-name:var(--font-display)]
                      text-[clamp(2.4rem,6vw,4.8rem)]
                      font-bold
                      uppercase
                      leading-[0.85]
                      tracking-[-0.04em]
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                    "
                  >
                    {siteConfig.email}
                  </span>

                  <span
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      font-[family-name:var(--font-sans)]
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[var(--muted)]
                    "
                  >
                    SEND AN EMAIL
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </span>
                </a>
              </div>
            </ScrollReveal>

            {/* Availability */}
            <ScrollReveal
              direction="left"
              delay={0.12}
              duration={0.8}
            >
              <div className="mt-16 border-y border-[var(--foreground)] py-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[var(--green)]
                        opacity-75
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-3
                        w-3
                        rounded-full
                        bg-[var(--green)]
                      "
                    />
                  </span>

                  <span
                    className="
                      font-[family-name:var(--font-sans)]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    "
                  >
                    {siteConfig.availability}
                  </span>
                </div>

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
                  Currently open to selected freelance work, collaborations,
                  and interesting digital projects.
                </p>
              </div>
            </ScrollReveal>

            {/* Socials */}
            <ScrollReveal
              direction="left"
              delay={0.18}
              duration={0.8}
            >
              <div className="mt-12">
                <span
                  className="
                    font-[family-name:var(--font-sans)]
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[var(--muted)]
                  "
                >
                  FIND ME AROUND
                </span>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[var(--foreground)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[var(--foreground)]
                      hover:text-[var(--background)]
                    "
                  >
                    <FaGithub size={17} />
                  </a>

                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[var(--foreground)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[var(--foreground)]
                      hover:text-[var(--background)]
                    "
                  >
                    <FaLinkedinIn size={16} />
                  </a>

                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[var(--foreground)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[var(--foreground)]
                      hover:text-[var(--background)]
                    "
                  >
                    <FaInstagram size={16} />
                  </a>

                  <a
                    href={siteConfig.socials.dribbble}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Dribbble"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[var(--foreground)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[var(--foreground)]
                      hover:text-[var(--background)]
                    "
                  >
                    <FaDribbble size={16} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — FORM */}
          <ScrollReveal
            direction="right"
            duration={0.9}
          >
            <div className="relative">
              {/* Yellow sticker */}
              <div
                className="
                  absolute
                  -right-3
                  -top-8
                  z-10
                  rotate-[6deg]
                  border
                  border-[var(--foreground)]
                  bg-[var(--yellow)]
                  px-4
                  py-2
                  font-[family-name:var(--font-handwritten)]
                  text-lg
                  shadow-[3px_3px_0_var(--foreground)]
                "
              >
                tell me everything ✦
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="
                  border
                  border-[var(--foreground)]
                  bg-[var(--background)]
                  p-6
                  sm:p-8
                  lg:p-10
                "
              >
                <div className="mb-10 flex items-center justify-between border-b border-[var(--foreground)] pb-5">
                  <span
                    className="
                      font-[family-name:var(--font-display)]
                      text-3xl
                      font-bold
                      uppercase
                      tracking-[-0.03em]
                    "
                  >
                    DROP A LINE
                  </span>

                  <Sparkles
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      font-[family-name:var(--font-sans)]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[var(--muted)]
                    "
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="
                      w-full
                      border-b
                      border-[var(--foreground)]
                      bg-transparent
                      py-3
                      font-[family-name:var(--font-sans)]
                      text-base
                      outline-none
                      placeholder:text-[var(--muted)]
                      focus:border-[var(--blue)]
                    "
                  />
                </div>

                {/* Email */}
                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      font-[family-name:var(--font-sans)]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[var(--muted)]
                    "
                  >
                    YOUR EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="hello@example.com"
                    className="
                      w-full
                      border-b
                      border-[var(--foreground)]
                      bg-transparent
                      py-3
                      font-[family-name:var(--font-sans)]
                      text-base
                      outline-none
                      placeholder:text-[var(--muted)]
                      focus:border-[var(--blue)]
                    "
                  />
                </div>

                {/* Project */}
                <div className="mt-8">
                  <label
                    htmlFor="project"
                    className="
                      mb-2
                      block
                      font-[family-name:var(--font-sans)]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[var(--muted)]
                    "
                  >
                    WHAT&apos;S THIS ABOUT?
                  </label>

                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                    className="
                      w-full
                      border-b
                      border-[var(--foreground)]
                      bg-[var(--background)]
                      py-3
                      font-[family-name:var(--font-sans)]
                      text-base
                      outline-none
                      focus:border-[var(--blue)]
                    "
                  >
                    <option value="" disabled>
                      Choose one...
                    </option>
                    <option value="website">
                      Website / Landing Page
                    </option>
                    <option value="web-app">
                      Web App
                    </option>
                    <option value="design">
                      UI / UX Design
                    </option>
                    <option value="collaboration">
                      Collaboration
                    </option>
                    <option value="other">
                      Something Else
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      font-[family-name:var(--font-sans)]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[var(--muted)]
                    "
                  >
                    TELL ME MORE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your idea..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-[var(--foreground)]
                      bg-transparent
                      py-3
                      font-[family-name:var(--font-sans)]
                      text-base
                      leading-7
                      outline-none
                      placeholder:text-[var(--muted)]
                      focus:border-[var(--blue)]
                    "
                  />
                </div>

                {/* Submit */}
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <span
                    className="
                      font-[family-name:var(--font-handwritten)]
                      text-lg
                      text-[var(--muted)]
                    "
                  >
                    no boring forms, promise.
                  </span>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="
                      group
                      inline-flex
                      w-fit
                      items-center
                      gap-3
                      border
                      border-[var(--foreground)]
                      bg-[var(--foreground)]
                      px-6
                      py-4
                      font-[family-name:var(--font-sans)]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[var(--background)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[4px_4px_0_var(--yellow)]
                      disabled:cursor-default
                    "
                  >
                    {submitted ? (
                      <>
                        SENT
                        <Check size={16} strokeWidth={2} />
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send
                          size={15}
                          strokeWidth={1.5}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FOOTER CTA
      ───────────────────────────────────────────── */}

      <section className="border-t border-[var(--foreground)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal direction="left">
            <div>
              <span
                className="
                  font-[family-name:var(--font-handwritten)]
                  text-xl
                  text-[var(--pink)]
                "
              >
                still scrolling?
              </span>

              <h2
                className="
                  mt-2
                  font-[family-name:var(--font-display)]
                  text-5xl
                  font-bold
                  uppercase
                  leading-none
                  tracking-[-0.04em]
                  sm:text-7xl
                "
              >
                KEEP
                <br />
                EXPLORING.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <TransitionLink
              href="/work"
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-[var(--foreground)]
                pb-2
                font-[family-name:var(--font-sans)]
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
              "
            >
              VIEW CASE STUDIES
              <ArrowDownRight
                size={17}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </TransitionLink>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
