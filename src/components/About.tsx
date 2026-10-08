import Image from "next/image";
import TransitionLink from "@/components/animations/TransitionLink";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { skills } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
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
      {/* Decorative handwritten note */}
      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-8
          rotate-[4deg]
          font-[family-name:var(--font-handwritten)]
          text-lg
          text-[var(--muted)]
          sm:right-10
          sm:top-12
          sm:text-xl
        "
      >
        a little bit about me ↘
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <ScrollReveal direction="up">
          <div
            className="
              mb-14
              flex
              items-start
              justify-between
              gap-6
              sm:mb-20
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--pink)]
                  px-2
                  py-1
                  font-[family-name:var(--font-sans)]
                  text-[9px]
                  font-black
                  tracking-[0.14em]
                  shadow-[3px_3px_0_var(--foreground)]
                "
              >
                01
              </span>

              <span
                className="
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-bold
                  tracking-[0.16em]
                "
              >
                ABOUT ME
              </span>
            </div>

            <span
              className="
                hidden
                font-[family-name:var(--font-handwritten)]
                text-lg
                text-[var(--muted)]
                sm:block
              "
            >
              who is zulian?
            </span>
          </div>
        </ScrollReveal>

        {/* Main editorial layout */}
        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-start
            lg:gap-20
          "
        >
          {/* Left */}
          <div className="relative">
            <ScrollReveal direction="left">
              <h2
                className="
                  m-0
                  max-w-[850px]
                  font-[family-name:var(--font-display)]
                  text-[clamp(76px,13vw,190px)]
                  font-medium
                  uppercase
                  leading-[0.78]
                  tracking-[-0.025em]
                "
              >
                ABOUT
              </h2>
            </ScrollReveal>

            {/* underline */}
            <ScrollReveal direction="left" delay={0.08}>
              <div
                className="
                  mt-5
                  h-[5px]
                  w-[68%]
                  rotate-[-1deg]
                  bg-[var(--blue)]
                  sm:mt-7
                "
              />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.14}>
              <p
                className="
                  mt-10
                  max-w-[680px]
                  font-[family-name:var(--font-sans)]
                  text-lg
                  leading-[1.65]
                  text-[var(--foreground)]
                  sm:mt-14
                  sm:text-xl
                "
              >
                I&apos;m a creative developer who enjoys turning ideas into
                thoughtful digital experiences. I care about clean interfaces,
                expressive interactions, and code that doesn&apos;t get in the
                way.
              </p>
            </ScrollReveal>

            {/* handwritten annotation */}
            <ScrollReveal direction="right" delay={0.2}>
              <div
                className="
                  mt-7
                  ml-4
                  flex
                  items-center
                  gap-2
                  rotate-[-3deg]
                  font-[family-name:var(--font-handwritten)]
                  text-xl
                  text-[var(--muted)]
                  sm:ml-10
                  sm:text-2xl
                "
              >
                <ArrowUpRight size={22} strokeWidth={1.5} />
                less noise, more intention
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.26}>
              <TransitionLink
                href="/about"
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--foreground)]
                  px-5
                  py-3
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-black
                  tracking-[0.13em]
                  !text-white
                  shadow-[4px_4px_0_var(--yellow)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-[6px_6px_0_var(--pink)]
                "
              >
                <span className="!text-white">MORE ABOUT ME</span>

                <ArrowDownRight
                  size={16}
                  strokeWidth={2}
                  className="
                    !text-white
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />
              </TransitionLink>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className="relative">
            <ScrollReveal direction="right" delay={0.1}>
              {/* Polaroid / photo */}
              <div
                className="
                  relative
                  mx-auto
                  w-[min(100%,390px)]
                  rotate-[3deg]
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[#fffdf7]
                  p-3
                  shadow-[7px_7px_0_var(--foreground)]
                "
              >
                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-[var(--green)]
                  "
                >
                  <Image
                    src="/images/profile/profile.jpg"
                    alt="Zulian"
                    fill
                    sizes="(max-width: 640px) 90vw, 390px"
                    className="
                      object-cover
                      object-center
                      grayscale-[15%]
                    "
                    priority={false}
                  />

                  {/* subtle paper texture overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[rgba(245,241,232,0.08)]
                      mix-blend-multiply
                    "
                  />
                </div>

                <div
                  className="
                    px-2
                    pb-1
                    pt-4
                    font-[family-name:var(--font-handwritten)]
                    text-xl
                  "
                >
                  somewhere between code &amp; design.
                </div>

                {/* tape */}
                <div
                  className="
                    absolute
                    -top-5
                    left-1/2
                    h-9
                    w-24
                    -translate-x-1/2
                    rotate-[-4deg]
                    bg-[rgba(245,201,74,0.72)]
                  "
                />
              </div>
            </ScrollReveal>

            {/* Small note */}
            <ScrollReveal direction="up" delay={0.3}>
              <div
                className="
                  absolute
                  -bottom-8
                  -left-2
                  rotate-[-7deg]
                  font-[family-name:var(--font-handwritten)]
                  text-xl
                  text-[var(--muted)]
                  sm:-left-10
                  sm:text-2xl
                "
              >
                <ArrowUpRight
                  size={22}
                  className="mb-1 ml-auto"
                  strokeWidth={1.5}
                />
                still figuring
                <br />
                things out :)
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Skills */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="
              mt-28
              border-t-[1.5px]
              border-[var(--foreground)]
              pt-8
              sm:mt-36
              sm:pt-10
            "
          >
            <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr]">
              <div>
                <span
                  className="
                    font-[family-name:var(--font-sans)]
                    text-[10px]
                    font-black
                    tracking-[0.15em]
                  "
                >
                  THINGS I USE
                </span>

                <p
                  className="
                    mt-3
                    font-[family-name:var(--font-handwritten)]
                    text-lg
                    text-[var(--muted)]
                  "
                >
                  tools of the trade →
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  const rotations = [
                    "rotate-[-2deg]",
                    "rotate-[1deg]",
                    "rotate-[-1deg]",
                    "rotate-[2deg]",
                    "rotate-[-2deg]",
                    "rotate-[1deg]",
                  ];

                  return (
                    <span
                      key={skill}
                      className={`
                        border-[1.5px]
                        border-[var(--foreground)]
                        px-4
                        py-2.5
                        font-[family-name:var(--font-sans)]
                        text-[10px]
                        font-black
                        tracking-[0.1em]
                        shadow-[3px_3px_0_var(--foreground)]
                        ${rotations[index % rotations.length]}
                      `}
                      style={{
                        background:
                          index % 3 === 0
                            ? "var(--yellow)"
                            : index % 3 === 1
                              ? "var(--pink)"
                              : "var(--green)",
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
