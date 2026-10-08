import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

import { siteConfig } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactPreview() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t-[1.5px]
        border-[var(--foreground)]
        px-5
        py-24
        sm:px-8
        sm:py-32
        lg:px-12
        lg:py-40
      "
    >
      {/* Decorative circles */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-16
          h-40
          w-40
          rounded-full
          border-[1.5px]
          border-[var(--foreground)]
          bg-[var(--yellow)]
          transition-transform
          duration-700
          sm:h-64
          sm:w-64
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-16
          bottom-20
          h-32
          w-32
          rounded-full
          border-[1.5px]
          border-[var(--foreground)]
          bg-[var(--pink)]
          transition-transform
          duration-700
          sm:h-48
          sm:w-48
        "
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Top label */}
        <ScrollReveal direction="up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--green)]
                  px-2
                  py-1
                  font-[family-name:var(--font-sans)]
                  text-[9px]
                  font-black
                  tracking-[0.14em]
                  shadow-[3px_3px_0_var(--foreground)]
                "
              >
                03
              </span>

              <span
                className="
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-bold
                  tracking-[0.16em]
                "
              >
                CONTACT
              </span>
            </div>

            <div
              className="
                hidden
                rotate-[3deg]
                items-center
                gap-2
                font-[family-name:var(--font-handwritten)]
                text-lg
                text-[var(--muted)]
                sm:flex
              "
            >
              <Sparkles size={17} strokeWidth={1.5} />
              let&apos;s make something
            </div>
          </div>
        </ScrollReveal>

        {/* Main content */}
        <div
          className="
            relative
            mt-20
            sm:mt-28
          "
        >
          {/* Handwritten note */}
          <ScrollReveal direction="left">
            <div
              className="
                mb-5
                ml-2
                rotate-[-4deg]
                font-[family-name:var(--font-handwritten)]
                text-2xl
                text-[var(--muted)]
                sm:ml-8
                sm:text-3xl
              "
            >
              got an idea?
            </div>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal direction="up" distance={80} duration={1}>
            <h2
              className="
                relative
                z-10
                m-0
                max-w-[1200px]
                font-[family-name:var(--font-display)]
                text-[clamp(76px,14vw,200px)]
                font-medium
                uppercase
                leading-[0.76]
                tracking-[-0.025em]
              "
            >
              HAVE
              <br />
              <span className="relative inline-block">
                AN IDEA?
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-[-10px]
                    left-[2%]
                    h-[7px]
                    w-[92%]
                    origin-left
                    rotate-[-2deg]
                    bg-[var(--pink)]
                    sm:bottom-[-16px]
                    sm:h-[9px]
                  "
                />
              </span>
            </h2>
          </ScrollReveal>

          {/* Description + Email CTA */}
          <div
            className="
              mt-14
              grid
              gap-10
              sm:mt-20
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <ScrollReveal direction="left" delay={0.1}>
              <div className="max-w-[560px]">
                <p
                  className="
                    m-0
                    font-[family-name:var(--font-sans)]
                    text-base
                    leading-[1.7]
                    text-[var(--muted)]
                    sm:text-lg
                  "
                >
                  Whether it&apos;s a new product, a fun experiment, or just an
                  idea you&apos;ve been thinking about — I&apos;d love to hear
                  about it.
                </p>

                <div
                  className="
                    mt-6
                    rotate-[-2deg]
                    font-[family-name:var(--font-handwritten)]
                    text-xl
                    text-[var(--foreground)]
                    sm:text-2xl
                  "
                >
                  no fancy brief required :)
                </div>
              </div>
            </ScrollReveal>

            {/* Email CTA */}
            <ScrollReveal direction="right" delay={0.2}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="
                  group
                  relative
                  inline-flex
                  w-fit
                  items-center
                  gap-4
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--foreground)]
                  px-5
                  py-4
                  !text-white
                  shadow-[6px_6px_0_var(--blue)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-[8px_8px_0_var(--pink)]
                  sm:px-6
                  sm:py-5
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    bg-[var(--yellow)]
                    text-[var(--foreground)]
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                  "
                >
                  <Mail size={19} strokeWidth={1.8} />
                </span>

                <span>
                  <span
                    className="
                      block
                      font-[family-name:var(--font-sans)]
                      text-[9px]
                      font-bold
                      tracking-[0.12em]
                      !text-white
                      opacity-60
                    "
                  >
                    DROP ME A LINE
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      font-[family-name:var(--font-sans)]
                      text-sm
                      font-black
                      !text-white
                      sm:text-base
                    "
                  >
                    {siteConfig.email}
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  className="
                    !text-white
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </ScrollReveal>
          </div>

          {/* Availability */}
          <ScrollReveal direction="up" delay={0.15}>
            <div
              className="
                mt-16
                flex
                flex-wrap
                items-center
                gap-3
                border-t-[1.5px]
                border-[var(--foreground)]
                pt-6
                sm:mt-24
                sm:pt-8
              "
            >
              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--green)]
                  animate-pulse
                "
              />

              <span
                className="
                  font-[family-name:var(--font-sans)]
                  text-[9px]
                  font-black
                  tracking-[0.13em]
                "
              >
                {siteConfig.availability}
              </span>

              <span
                className="
                  ml-auto
                  font-[family-name:var(--font-handwritten)]
                  text-lg
                  text-[var(--muted)]
                "
              >
                {siteConfig.location}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom handwritten signature */}
        <ScrollReveal direction="right" delay={0.1}>
          <div
            className="
              mt-20
              flex
              justify-end
              sm:mt-28
            "
          >
            <div
              className="
                rotate-[-4deg]
                font-[family-name:var(--font-handwritten)]
                text-2xl
                text-[var(--muted)]
                sm:text-3xl
              "
            >
              talk soon! ↗
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
