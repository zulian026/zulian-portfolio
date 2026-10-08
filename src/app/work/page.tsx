import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/site";

const accentClasses = {
  yellow: "bg-[var(--yellow)]",
  pink: "bg-[var(--pink)]",
  green: "bg-[var(--green)]",
} as const;

export default function WorkPage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================
          HEADER
      ========================================= */}
      <section
        className="
          border-b-[1.5px]
          border-[var(--foreground)]
          px-5
          pb-20
          pt-24
          sm:px-8
          sm:pb-28
          sm:pt-32
          lg:px-12
          lg:pb-36
          lg:pt-40
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="
              mb-12
              inline-flex
              items-center
              gap-2
              font-[family-name:var(--font-sans)]
              text-[10px]
              font-black
              tracking-[0.14em]
              transition-transform
              hover:-translate-x-1
              sm:mb-16
            "
          >
            <ArrowDownRight size={15} />
            BACK HOME
          </Link>

          <div className="relative">
            <span
              className="
                absolute
                -top-8
                left-1
                rotate-[-4deg]
                font-[family-name:var(--font-handwritten)]
                text-xl
                text-[var(--muted)]
                sm:-top-10
                sm:text-2xl
              "
            >
              things I&apos;ve made →
            </span>

            <h1
              className="
                m-0
                max-w-[1100px]
                font-[family-name:var(--font-display)]
                text-[clamp(88px,15vw,220px)]
                font-medium
                uppercase
                leading-[0.75]
                tracking-[-0.03em]
              "
            >
              SELECTED
              <br />
              WORK
            </h1>

            <div
              className="
                absolute
                bottom-[-14px]
                left-[3%]
                h-[7px]
                w-[42%]
                rotate-[-1deg]
                bg-[var(--pink)]
                sm:bottom-[-20px]
              "
            />
          </div>

          <div
            className="
              mt-16
              max-w-[520px]
              font-[family-name:var(--font-sans)]
              text-base
              leading-[1.7]
              text-[var(--muted)]
              sm:mt-20
              sm:text-lg
            "
          >
            A collection of things I&apos;ve designed, built, experimented with,
            and occasionally broken before making them work.
          </div>
        </div>
      </section>

      {/* =========================================
          PROJECT ARCHIVE
      ========================================= */}
      <section
        className="
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-36
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="space-y-20 sm:space-y-32">
            {projects.map((project, index) => {
              const accent = accentClasses[project.accent];

              return (
                <article
                  key={project.slug}
                  className="
                    relative
                    border-t-[1.5px]
                    border-[var(--foreground)]
                    pt-7
                  "
                >
                  {/* Top metadata */}
                  <div
                    className="
                      mb-8
                      flex
                      items-center
                      justify-between
                      font-[family-name:var(--font-sans)]
                      text-[9px]
                      font-black
                      tracking-[0.14em]
                      sm:mb-10
                    "
                  >
                    <span>PROJECT {project.number}</span>

                    <span>{project.year}</span>
                  </div>

                  <div
                    className="
                      grid
                      gap-10
                      lg:grid-cols-[1.3fr_0.7fr]
                      lg:gap-20
                    "
                  >
                    {/* Visual */}
                    <Link
                      href={`/work/${project.slug}`}
                      className="group block"
                    >
                      <div
                        className="
                          relative
                          aspect-[16/10]
                          overflow-hidden
                          border-[1.5px]
                          border-[var(--foreground)]
                          bg-[#f7f4ea]
                          shadow-[7px_7px_0_var(--foreground)]
                          transition-all
                          duration-300
                          group-hover:-translate-y-2
                          group-hover:shadow-[11px_11px_0_var(--foreground)]
                        "
                      >
                        {/* grid */}
                        <div
                          className="
                            absolute
                            inset-0
                            opacity-50
                            [background-image:linear-gradient(rgba(23,22,20,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(23,22,20,0.11)_1px,transparent_1px)]
                            [background-size:40px_40px]
                          "
                        />

                        {/* accent shape */}
                        <div
                          className={`
                            absolute
                            right-[12%]
                            top-[12%]
                            h-[35%]
                            aspect-square
                            rounded-full
                            border-[1.5px]
                            border-[var(--foreground)]
                            ${accent}
                            transition-transform
                            duration-500
                            group-hover:scale-110
                            group-hover:rotate-6
                          `}
                        />

                        {/* project number */}
                        <span
                          className="
                            absolute
                            left-6
                            top-6
                            z-10
                            font-[family-name:var(--font-display)]
                            text-5xl
                            font-semibold
                            leading-none
                            sm:left-8
                            sm:top-8
                            sm:text-7xl
                          "
                        >
                          {project.number}
                        </span>

                        {/* title */}
                        <div
                          className="
                            absolute
                            bottom-6
                            left-6
                            right-6
                            z-10
                            sm:bottom-8
                            sm:left-8
                            sm:right-8
                          "
                        >
                          <span
                            className="
                              mb-2
                              block
                              font-[family-name:var(--font-sans)]
                              text-[9px]
                              font-black
                              tracking-[0.15em]
                            "
                          >
                            {project.category}
                          </span>

                          <h2
                            className="
                              m-0
                              max-w-[900px]
                              font-[family-name:var(--font-display)]
                              text-[clamp(52px,8vw,115px)]
                              font-semibold
                              uppercase
                              leading-[0.78]
                              tracking-[-0.025em]
                            "
                          >
                            {project.title}
                          </h2>
                        </div>

                        {/* arrow */}
                        <div
                          className="
                            absolute
                            right-5
                            top-5
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
                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </Link>

                    {/* Details */}
                    <div
                      className="
                        flex
                        flex-col
                        justify-between
                      "
                    >
                      <div>
                        <span
                          className="
                            font-[family-name:var(--font-handwritten)]
                            text-2xl
                            text-[var(--muted)]
                          "
                        >
                          a little note →
                        </span>

                        <p
                          className="
                            mt-6
                            max-w-[480px]
                            font-[family-name:var(--font-sans)]
                            text-base
                            leading-[1.75]
                            text-[var(--muted)]
                            sm:text-lg
                          "
                        >
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-10">
                        <Link
                          href={`/work/${project.slug}`}
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
                            shadow-[4px_4px_0_var(--yellow)]
                            transition-all
                            hover:-translate-y-1
                            hover:shadow-[6px_6px_0_var(--pink)]
                          "
                        >
                          <span className="!text-white">VIEW CASE STUDY</span>

                          <ArrowUpRight
                            size={16}
                            className="
                              !text-white
                              transition-transform
                              group-hover:translate-x-1
                              group-hover:-translate-y-1
                            "
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* handwritten side note */}
                  <div
                    className="
                      mt-8
                      text-right
                      font-[family-name:var(--font-handwritten)]
                      text-lg
                      text-[var(--muted)]
                      sm:text-xl
                    "
                  >
                    {index === 0 && "one of my favorites"}
                    {index === 1 && "still tweaking this one"}
                    {index === 2 && "a little experiment"}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          BOTTOM
      ========================================= */}
      <section
        className="
          border-t-[1.5px]
          border-[var(--foreground)]
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            gap-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div
            className="
              rotate-[-2deg]
              font-[family-name:var(--font-handwritten)]
              text-2xl
              text-[var(--muted)]
              sm:text-3xl
            "
          >
            that&apos;s the archive...
            <br />
            for now :)
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border-[1.5px]
              border-[var(--foreground)]
              bg-[var(--yellow)]
              px-5
              py-3
              font-[family-name:var(--font-sans)]
              text-[10px]
              font-black
              tracking-[0.13em]
              shadow-[4px_4px_0_var(--foreground)]
              transition-all
              hover:-translate-y-1
              hover:bg-[var(--pink)]
              hover:shadow-[6px_6px_0_var(--foreground)]
            "
          >
            LET&apos;S WORK TOGETHER
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
