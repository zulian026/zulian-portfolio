import { ArrowUpRight, ArrowRight } from "lucide-react";

import { projects } from "@/data/site";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TransitionLink from "@/components/animations/TransitionLink";

const accentClasses = {
  yellow: {
    bg: "bg-[var(--yellow)]",
    shadow: "shadow-[7px_7px_0_var(--foreground)]",
  },
  pink: {
    bg: "bg-[var(--pink)]",
    shadow: "shadow-[7px_7px_0_var(--foreground)]",
  },
  green: {
    bg: "bg-[var(--green)]",
    shadow: "shadow-[7px_7px_0_var(--foreground)]",
  },
} as const;

export default function WorkPreview() {
  return (
    <section
      id="work"
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
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <ScrollReveal direction="up">
          <div
            className="
              mb-16
              flex
              flex-col
              gap-6
              sm:mb-20
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="
                    border-[1.5px]
                    border-[var(--foreground)]
                    bg-[var(--yellow)]
                    px-2
                    py-1
                    font-[family-name:var(--font-sans)]
                    text-[9px]
                    font-black
                    tracking-[0.14em]
                    shadow-[3px_3px_0_var(--foreground)]
                  "
                >
                  02
                </span>

                <span
                  className="
                    font-[family-name:var(--font-sans)]
                    text-[10px]
                    font-bold
                    tracking-[0.16em]
                  "
                >
                  SELECTED WORK
                </span>
              </div>

              <h2
                className="
                  m-0
                  font-[family-name:var(--font-display)]
                  text-[clamp(72px,12vw,170px)]
                  font-medium
                  uppercase
                  leading-[0.78]
                  tracking-[-0.025em]
                "
              >
                THINGS
                <br />
                I&apos;VE MADE
              </h2>
            </div>

            <div
              className="
                max-w-[260px]
                rotate-[2deg]
                font-[family-name:var(--font-handwritten)]
                text-xl
                leading-tight
                text-[var(--muted)]
                sm:text-2xl
              "
            >
              a few experiments,
              <br />
              tools &amp; things
              <br />
              I&apos;m proud of →
            </div>
          </div>
        </ScrollReveal>

        {/* Projects */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => {
            const accent = accentClasses[project.accent];

            const rotations = [
              "rotate-[-1deg]",
              "rotate-[1.5deg]",
              "rotate-[-0.75deg]",
            ];

            const directions = ["left", "right", "left"] as const;

            return (
              <ScrollReveal
                key={project.slug}
                direction={directions[index % directions.length]}
                delay={index * 0.08}
                duration={0.9}
                distance={70}
              >
                <article
                  className={`
                    relative
                    ${rotations[index % rotations.length]}
                  `}
                >
                  {/* Project number */}
                  <div
                    className="
                      absolute
                      -top-5
                      left-4
                      z-20
                      border-[1.5px]
                      border-[var(--foreground)]
                      bg-[var(--background)]
                      px-3
                      py-1.5
                      font-[family-name:var(--font-display)]
                      text-lg
                      font-bold
                      leading-none
                      shadow-[3px_3px_0_var(--foreground)]
                      sm:-left-4
                    "
                  >
                    {project.number}
                  </div>

                  {/* Tape */}
                  <div
                    className="
                      absolute
                      -top-4
                      right-12
                      z-20
                      h-8
                      w-20
                      rotate-[4deg]
                      bg-[rgba(245,201,74,0.7)]
                      sm:right-20
                    "
                  />

                  {/* Project Link */}
                  <TransitionLink
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div
                      className={`
                        relative
                        overflow-hidden
                        border-[1.5px]
                        border-[var(--foreground)]
                        ${accent.bg}
                        ${accent.shadow}
                        transition-transform
                        duration-300
                        group-hover:-translate-y-2
                        group-hover:shadow-[10px_10px_0_var(--foreground)]
                      `}
                    >
                      {/* Visual area */}
                      <div
                        className="
                          relative
                          min-h-[300px]
                          overflow-hidden
                          border-b-[1.5px]
                          border-[var(--foreground)]
                          bg-[#f7f4ea]
                          p-5
                          sm:min-h-[430px]
                          sm:p-8
                        "
                      >
                        {/* Background grid */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            opacity-40
                            [background-image:linear-gradient(rgba(23,22,20,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(23,22,20,0.12)_1px,transparent_1px)]
                            [background-size:32px_32px]
                          "
                        />

                        {/* Decorative circle */}
                        <div
                          className={`
                            absolute
                            right-[10%]
                            top-[15%]
                            h-32
                            w-32
                            rounded-full
                            border-[1.5px]
                            border-[var(--foreground)]
                            ${accent.bg}
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-110
                            group-hover:rotate-6
                            sm:h-52
                            sm:w-52
                          `}
                        />

                        {/* Main project typography */}
                        <div
                          className="
                            absolute
                            bottom-7
                            left-5
                            z-10
                            sm:bottom-10
                            sm:left-8
                          "
                        >
                          <span
                            className="
                              block
                              font-[family-name:var(--font-sans)]
                              text-[9px]
                              font-black
                              tracking-[0.18em]
                            "
                          >
                            {project.category}
                          </span>

                          <span
                            className="
                              mt-2
                              block
                              max-w-[90%]
                              font-[family-name:var(--font-display)]
                              text-[clamp(54px,9vw,120px)]
                              font-semibold
                              uppercase
                              leading-[0.78]
                              tracking-[-0.02em]
                              transition-transform
                              duration-500
                              ease-out
                              group-hover:-translate-y-1
                              sm:max-w-[850px]
                            "
                          >
                            {project.title}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div
                          className="
                            absolute
                            right-5
                            top-5
                            z-10
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-full
                            border-[1.5px]
                            border-[var(--foreground)]
                            bg-[var(--background)]
                            transition-transform
                            duration-300
                            group-hover:rotate-45
                            sm:right-8
                            sm:top-8
                            sm:h-16
                            sm:w-16
                          "
                        >
                          <ArrowUpRight size={24} strokeWidth={1.7} />
                        </div>

                        {/* Handwritten annotation */}
                        <span
                          className="
                            absolute
                            right-8
                            bottom-20
                            rotate-[-8deg]
                            font-[family-name:var(--font-handwritten)]
                            text-lg
                            text-[var(--muted)]
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1
                            sm:right-16
                            sm:bottom-24
                            sm:text-xl
                          "
                        >
                          click me!
                        </span>
                      </div>

                      {/* Info */}
                      <div
                        className="
                          grid
                          gap-6
                          bg-[var(--background)]
                          p-5
                          sm:grid-cols-[1fr_auto]
                          sm:items-center
                          sm:p-7
                        "
                      >
                        <p
                          className="
                            m-0
                            max-w-[680px]
                            font-[family-name:var(--font-sans)]
                            text-sm
                            leading-[1.6]
                            text-[var(--muted)]
                            sm:text-base
                          "
                        >
                          {project.description}
                        </p>

                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-6
                            sm:justify-end
                          "
                        >
                          <span
                            className="
                              font-[family-name:var(--font-sans)]
                              text-[10px]
                              font-black
                              tracking-[0.12em]
                            "
                          >
                            {project.year}
                          </span>

                          <span
                            className="
                              inline-flex
                              items-center
                              gap-2
                              font-[family-name:var(--font-sans)]
                              text-[10px]
                              font-black
                              tracking-[0.12em]
                            "
                          >
                            VIEW
                            <ArrowRight
                              size={15}
                              className="
                                transition-transform
                                duration-200
                                group-hover:translate-x-1
                              "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </TransitionLink>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.15}>
          <div
            className="
              mt-20
              flex
              flex-col
              items-start
              gap-6
              border-t-[1.5px]
              border-[var(--foreground)]
              pt-8
              sm:mt-28
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span
              className="
                rotate-[-2deg]
                font-[family-name:var(--font-handwritten)]
                text-xl
                text-[var(--muted)]
                sm:text-2xl
              "
            >
              want to see the whole archive?
            </span>

            <TransitionLink
              href="/work"
              className="
                group
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
                shadow-[4px_4px_0_var(--pink)]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-[6px_6px_0_var(--yellow)]
              "
            >
              <span className="!text-white">VIEW ALL WORK</span>

              <ArrowUpRight
                size={16}
                className="
                  !text-white
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </TransitionLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
