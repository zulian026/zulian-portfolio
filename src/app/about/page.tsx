import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Heart,
  Sparkles,
} from "lucide-react";

import { siteConfig, skills } from "@/data/site";

const thingsIDo = [
  {
    number: "01",
    title: "FRONTEND",
    text: "Building responsive interfaces with modern web technologies.",
    color: "bg-[var(--yellow)]",
    rotate: "rotate-[-1deg]",
  },
  {
    number: "02",
    title: "INTERACTION",
    text: "Adding motion and interaction that make interfaces feel alive.",
    color: "bg-[var(--pink)]",
    rotate: "rotate-[1deg]",
  },
  {
    number: "03",
    title: "UI / DESIGN",
    text: "Thinking through layout, typography, hierarchy, and visual systems.",
    color: "bg-[var(--green)]",
    rotate: "rotate-[-1deg]",
  },
  {
    number: "04",
    title: "EXPERIMENTS",
    text: "Trying weird ideas just to see if they can become something useful.",
    color: "bg-[#d7d0ff]",
    rotate: "rotate-[1deg]",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================
          HEADER
      ========================================= */}

      <section
        className="
          px-5
          pb-20
          pt-10
          sm:px-8
          sm:pb-28
          sm:pt-14
          lg:px-12
          lg:pb-36
          lg:pt-16
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-2
              font-[family-name:var(--font-handwritten)]
              text-xl
              transition-transform
              duration-200
              hover:-translate-x-1
            "
          >
            <ArrowLeft size={18} strokeWidth={1.7} />
            back home
          </Link>

          <div
            className="
              relative
              mt-20
              sm:mt-28
            "
          >
            <span
              className="
                mb-5
                inline-block
                rotate-[-2deg]
                border-[1.5px]
                border-[var(--foreground)]
                bg-[var(--pink)]
                px-3
                py-1.5
                font-[family-name:var(--font-sans)]
                text-[9px]
                font-black
                tracking-[0.15em]
                shadow-[3px_3px_0_var(--foreground)]
              "
            >
              01 / ABOUT ME
            </span>

            <h1
              className="
                m-0
                font-[family-name:var(--font-display)]
                text-[clamp(90px,17vw,240px)]
                font-medium
                uppercase
                leading-[0.73]
                tracking-[-0.03em]
              "
            >
              ABOUT
            </h1>

            <div
              className="
                absolute
                bottom-[-15px]
                left-[4%]
                h-[6px]
                w-[38%]
                rotate-[-1.5deg]
                bg-[var(--blue)]
                sm:bottom-[-20px]
              "
            />

            <div
              className="
                absolute
                right-0
                top-8
                hidden
                rotate-[4deg]
                items-center
                gap-2
                font-[family-name:var(--font-handwritten)]
                text-2xl
                text-[var(--muted)]
                sm:flex
              "
            >
              a little more context
              <ArrowDownRight size={23} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO + PHOTO
      ========================================= */}

      <section
        className="
          border-y-[1.5px]
          border-[var(--foreground)]
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-36
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1400px]
            gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-start
            lg:gap-24
          "
        >
          {/* PHOTO */}

          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div
              className="
                relative
                rotate-[-3deg]
                border-[1.5px]
                border-[var(--foreground)]
                bg-[#fffdf7]
                p-3
                shadow-[8px_8px_0_var(--foreground)]
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
                  src="/images//profile.jpg"
                  alt="Zulian"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="
                    object-cover
                    object-center
                  "
                />

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
                  sm:text-2xl
                "
              >
                somewhere between code &amp; design.
              </div>

              {/* Tape */}

              <div
                className="
                  absolute
                  -top-5
                  left-1/2
                  h-9
                  w-28
                  -translate-x-1/2
                  rotate-[3deg]
                  bg-[rgba(245,201,74,0.72)]
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-12
                -right-2
                rotate-[4deg]
                font-[family-name:var(--font-handwritten)]
                text-xl
                text-[var(--muted)]
                sm:-right-8
                sm:text-2xl
              "
            >
              that&apos;s me ↗
            </div>
          </div>

          {/* INTRO TEXT */}

          <div className="relative pt-2 lg:pt-8">
            <div
              className="
                mb-8
                inline-flex
                rotate-[-2deg]
                items-center
                gap-2
                border-[1.5px]
                border-[var(--foreground)]
                bg-[var(--yellow)]
                px-3
                py-1.5
                font-[family-name:var(--font-sans)]
                text-[9px]
                font-black
                tracking-[0.14em]
                shadow-[3px_3px_0_var(--foreground)]
              "
            >
              HELLO!
            </div>

            <p
              className="
                m-0
                max-w-[850px]
                font-[family-name:var(--font-handwritten)]
                text-[34px]
                leading-[1.18]
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              I&apos;m {siteConfig.name}, a creative developer who enjoys making
              things for the web.
            </p>

            <p
              className="
                mt-10
                max-w-[760px]
                font-[family-name:var(--font-sans)]
                text-base
                leading-[1.8]
                text-[var(--muted)]
                sm:text-lg
              "
            >
              {siteConfig.about}
            </p>

            <p
              className="
                mt-6
                max-w-[760px]
                font-[family-name:var(--font-sans)]
                text-base
                leading-[1.8]
                text-[var(--muted)]
                sm:text-lg
              "
            >
              I enjoy working at the intersection of design and development —
              thinking about how something looks, how it feels, and how it
              actually works underneath.
            </p>

            <div
              className="
                mt-10
                flex
                rotate-[-2deg]
                items-center
                gap-2
              "
            >
              <Sparkles size={22} strokeWidth={1.5} />

              <span
                className="
                  font-[family-name:var(--font-handwritten)]
                  text-2xl
                  sm:text-3xl
                "
              >
                basically, I like making useful things feel nice.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT I DO
      ========================================= */}

      <section
        className="
          px-5
          py-24
          sm:px-8
          sm:py-32
          lg:px-12
          lg:py-40
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <div
            className="
              mb-12
              flex
              flex-col
              gap-5
              border-b-[1.5px]
              border-[var(--foreground)]
              pb-6
              sm:mb-16
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-2
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-black
                  tracking-[0.18em]
                  text-[var(--muted)]
                "
              >
                WHAT I DO
              </p>

              <h2
                className="
                  m-0
                  font-[family-name:var(--font-display)]
                  text-[clamp(58px,9vw,110px)]
                  font-medium
                  uppercase
                  leading-[0.8]
                  tracking-[-0.025em]
                "
              >
                THINGS I LIKE
              </h2>
            </div>

            <Code2 size={30} strokeWidth={1.5} className="hidden sm:block" />
          </div>

          <div
            className="
              grid
              gap-8
              sm:grid-cols-2
            "
          >
            {thingsIDo.map((item) => (
              <div
                key={item.number}
                className={`
                  relative
                  min-h-[250px]
                  border-[1.5px]
                  border-[var(--foreground)]
                  ${item.color}
                  ${item.rotate}
                  p-7
                  shadow-[6px_6px_0_var(--foreground)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  sm:p-9
                `}
              >
                <span
                  className="
                    font-[family-name:var(--font-handwritten)]
                    text-xl
                  "
                >
                  {item.number}
                </span>

                <h3
                  className="
                    mt-12
                    font-[family-name:var(--font-display)]
                    text-4xl
                    font-semibold
                    uppercase
                    leading-none
                    tracking-[-0.02em]
                    sm:text-5xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[420px]
                    font-[family-name:var(--font-sans)]
                    text-sm
                    leading-[1.65]
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-10
              text-right
              font-[family-name:var(--font-handwritten)]
              text-xl
              text-[var(--muted)]
              sm:text-2xl
            "
          >
            the short version →
          </div>
        </div>
      </section>

      {/* =========================================
          TOOLBOX
      ========================================= */}

      <section
        className="
          border-y-[1.5px]
          border-[var(--foreground)]
          px-5
          py-24
          sm:px-8
          sm:py-32
          lg:px-12
          lg:py-36
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-2
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-black
                  tracking-[0.18em]
                  text-[var(--muted)]
                "
              >
                TOOLS &amp; SKILLS
              </p>

              <h2
                className="
                  m-0
                  font-[family-name:var(--font-display)]
                  text-[clamp(64px,10vw,130px)]
                  font-medium
                  uppercase
                  leading-[0.78]
                  tracking-[-0.03em]
                "
              >
                MY TOOLBOX
              </h2>
            </div>

            <span
              className="
                font-[family-name:var(--font-handwritten)]
                text-2xl
                sm:text-3xl
              "
            >
              things I use a lot →
            </span>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`
                  border-[1.5px]
                  border-[var(--foreground)]
                  px-5
                  py-3
                  font-[family-name:var(--font-sans)]
                  text-sm
                  font-black
                  tracking-[0.08em]
                  shadow-[4px_4px_0_var(--foreground)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  ${
                    index % 3 === 0
                      ? "rotate-[-1deg] bg-[var(--yellow)]"
                      : index % 3 === 1
                        ? "rotate-[1deg] bg-[var(--pink)]"
                        : "rotate-[-1deg] bg-[var(--green)]"
                  }
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CURRENTLY
      ========================================= */}

      <section
        className="
          px-5
          py-24
          sm:px-8
          sm:py-32
          lg:px-12
          lg:py-36
        "
      >
        <div
          className="
            relative
            mx-auto
            max-w-[1400px]
            border-[1.5px]
            border-[var(--foreground)]
            bg-[var(--yellow)]
            p-7
            shadow-[8px_8px_0_var(--foreground)]
            sm:p-10
            lg:p-12
          "
        >
          {/* Tape */}

          <div
            className="
              absolute
              -top-5
              right-[12%]
              h-9
              w-28
              rotate-[3deg]
              bg-[rgba(245,201,74,0.72)]
            "
          />

          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  mb-4
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-black
                  tracking-[0.16em]
                "
              >
                CURRENTLY
              </p>

              <h2
                className="
                  m-0
                  max-w-[850px]
                  font-[family-name:var(--font-display)]
                  text-[clamp(48px,7vw,92px)]
                  font-semibold
                  uppercase
                  leading-[0.8]
                  tracking-[-0.025em]
                "
              >
                BUILDING THINGS,
                <br />
                LEARNING THINGS,
                <br />
                BREAKING THINGS.
              </h2>
            </div>

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
                font-[family-name:var(--font-handwritten)]
                text-2xl
              "
            >
              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[#4caf50]
                "
              />

              {siteConfig.availability}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <section
        className="
          px-5
          pb-28
          sm:px-8
          sm:pb-36
          lg:px-12
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/work"
            className="
              group
              flex
              flex-col
              gap-5
              border-t-[1.5px]
              border-[var(--foreground)]
              py-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  block
                  font-[family-name:var(--font-sans)]
                  text-[9px]
                  font-black
                  tracking-[0.14em]
                  text-[var(--muted)]
                "
              >
                NEXT
              </span>

              <span
                className="
                  mt-2
                  block
                  font-[family-name:var(--font-handwritten)]
                  text-3xl
                  sm:text-4xl
                "
              >
                want to see what I&apos;ve made?
              </span>
            </div>

            <ArrowUpRight
              size={32}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-2
                group-hover:-translate-y-2
              "
            />
          </Link>

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              font-[family-name:var(--font-handwritten)]
              text-xl
              text-[var(--muted)]
            "
          >
            <Heart size={15} fill="currentColor" />
            still figuring it all out.
          </div>
        </div>
      </section>
    </main>
  );
}
