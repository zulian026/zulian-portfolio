import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { projects, siteConfig } from "@/data/site";

const accentClasses = {
  yellow: {
    background: "bg-[var(--yellow)]",
  },
  pink: {
    background: "bg-[var(--pink)]",
  },
  green: {
    background: "bg-[var(--green)]",
  },
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const accent = accentClasses[project.accent];

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="overflow-hidden">
      {/* HEADER */}

      <section className="px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-12 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/work"
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
            back to work
          </Link>

          <div className="mt-20 sm:mt-28">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--foreground)]
                  px-3
                  py-1.5
                  font-[family-name:var(--font-sans)]
                  text-[9px]
                  font-black
                  tracking-[0.15em]
                  text-[var(--background)]
                "
              >
                {project.number}
              </span>

              <span
                className={`
                  rotate-[-2deg]
                  border-[1.5px]
                  border-[var(--foreground)]
                  ${accent.background}
                  px-3
                  py-1.5
                  font-[family-name:var(--font-sans)]
                  text-[9px]
                  font-black
                  tracking-[0.15em]
                  shadow-[3px_3px_0_var(--foreground)]
                `}
              >
                {project.category}
              </span>
            </div>

            <div className="relative mt-8">
              <h1
                className="
                  m-0
                  max-w-[1250px]
                  font-[family-name:var(--font-display)]
                  text-[clamp(72px,13vw,190px)]
                  font-medium
                  uppercase
                  leading-[0.76]
                  tracking-[-0.035em]
                "
              >
                {project.title}
              </h1>

              <span
                className="
                  absolute
                  -bottom-8
                  right-[4%]
                  rotate-[4deg]
                  font-[family-name:var(--font-handwritten)]
                  text-2xl
                  text-[var(--muted)]
                  sm:text-3xl
                "
              >
                case study ↘
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL */}

      <section
        className="
          border-y-[1.5px]
          border-[var(--foreground)]
          px-5
          py-10
          sm:px-8
          sm:py-14
          lg:px-12
          lg:py-20
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <div
            className={`
              relative
              min-h-[420px]
              overflow-hidden
              border-[1.5px]
              border-[var(--foreground)]
              ${accent.background}
              p-6
              shadow-[8px_8px_0_var(--foreground)]
              sm:min-h-[560px]
              sm:p-10
              lg:min-h-[680px]
            `}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-30
                [background-image:linear-gradient(rgba(23,22,20,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(23,22,20,0.16)_1px,transparent_1px)]
                [background-size:36px_36px]
              "
            />

            <div
              className="
                absolute
                left-4
                top-2
                font-[family-name:var(--font-display)]
                text-[clamp(180px,35vw,520px)]
                font-bold
                leading-none
                tracking-[-0.08em]
                opacity-10
                sm:left-8
              "
            >
              {project.number}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[80%] max-w-[900px]">
                <div
                  className="
                    relative
                    aspect-[16/9]
                    rotate-[-2deg]
                    border-[1.5px]
                    border-[var(--foreground)]
                    bg-[#fffdf7]
                    p-4
                    shadow-[10px_10px_0_var(--foreground)]
                    sm:p-6
                  "
                >
                  <div
                    className="
                      flex
                      h-full
                      flex-col
                      justify-between
                      border-[1.5px]
                      border-[var(--foreground)]
                      bg-[var(--background)]
                      p-5
                      sm:p-8
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em]">
                        {project.category}
                      </span>

                      <span className="font-[family-name:var(--font-handwritten)] text-xl">
                        {project.year}
                      </span>
                    </div>

                    <div>
                      <div className="font-[family-name:var(--font-display)] text-[clamp(42px,8vw,110px)] font-semibold uppercase leading-[0.75] tracking-[-0.03em]">
                        {project.title}
                      </div>

                      <div className="mt-5 h-2 w-1/3 bg-[var(--foreground)] sm:h-3" />
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <span className="max-w-[300px] font-[family-name:var(--font-sans)] text-[10px] leading-[1.5] text-[var(--muted)] sm:text-xs">
                        {project.description}
                      </span>

                      <ArrowUpRight
                        size={28}
                        strokeWidth={1.5}
                        className="shrink-0"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="
                    absolute
                    -right-5
                    -top-8
                    flex
                    h-20
                    w-20
                    rotate-[9deg]
                    items-center
                    justify-center
                    rounded-full
                    border-[1.5px]
                    border-[var(--foreground)]
                    bg-[var(--pink)]
                    font-[family-name:var(--font-handwritten)]
                    text-lg
                    shadow-[4px_4px_0_var(--foreground)]
                    sm:-right-10
                    sm:-top-10
                    sm:h-28
                    sm:w-28
                    sm:text-xl
                  "
                >
                  made
                  <br />
                  with care
                </div>
              </div>
            </div>

            <span className="absolute bottom-5 left-5 rotate-[-5deg] font-[family-name:var(--font-handwritten)] text-xl sm:bottom-8 sm:left-8 sm:text-2xl">
              selected work ↗
            </span>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            {/* SIDEBAR */}

            <aside>
              <div className="border-t-[1.5px] border-[var(--foreground)] pt-5">
                <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em] text-[var(--muted)]">
                  PROJECT INFO
                </span>

                <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-1">
                  <div>
                    <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.12em] text-[var(--muted)]">
                      ROLE
                    </span>

                    <p className="mt-2 font-[family-name:var(--font-handwritten)] text-xl">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.12em] text-[var(--muted)]">
                      YEAR
                    </span>

                    <p className="mt-2 font-[family-name:var(--font-handwritten)] text-xl">
                      {project.year}
                    </p>
                  </div>

                  <div>
                    <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.12em] text-[var(--muted)]">
                      STACK
                    </span>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="
                            border
                            border-[var(--foreground)]
                            px-2
                            py-1
                            font-[family-name:var(--font-sans)]
                            text-[8px]
                            font-bold
                            tracking-[0.08em]
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PROJECT LINKS */}

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-10 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          border-[1.5px]
                          border-[var(--foreground)]
                          bg-[var(--foreground)]
                          px-4
                          py-3
                          font-[family-name:var(--font-sans)]
                          text-[9px]
                          font-black
                          tracking-[0.12em]
                          text-[var(--background)]
                          transition-transform
                          hover:-translate-y-1
                        "
                      >
                        <ExternalLink size={14} />
                        LIVE
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          border-[1.5px]
                          border-[var(--foreground)]
                          px-4
                          py-3
                          font-[family-name:var(--font-sans)]
                          text-[9px]
                          font-black
                          tracking-[0.12em]
                          transition-transform
                          hover:-translate-y-1
                        "
                      >
                        <SiGithub size={14} />
                        CODE
                      </a>
                    )}
                  </div>
                )}
              </div>
            </aside>

            {/* CONTENT */}

            <article>
              <p
                className="
                  max-w-[900px]
                  font-[family-name:var(--font-handwritten)]
                  text-[32px]
                  leading-[1.2]
                  sm:text-[44px]
                  lg:text-[52px]
                "
              >
                {project.caseStudy.intro}
              </p>

              <div className="mt-20 grid gap-16 sm:mt-28">
                <div>
                  <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em] text-[var(--muted)]">
                    01 / THE CHALLENGE
                  </span>

                  <p className="mt-5 max-w-[800px] font-[family-name:var(--font-sans)] text-base leading-[1.8] sm:text-lg">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em] text-[var(--muted)]">
                    02 / THE APPROACH
                  </span>

                  <p className="mt-5 max-w-[800px] font-[family-name:var(--font-sans)] text-base leading-[1.8] sm:text-lg">
                    {project.caseStudy.approach}
                  </p>
                </div>

                <div>
                  <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em] text-[var(--muted)]">
                    03 / THE RESULT
                  </span>

                  <p className="mt-5 max-w-[800px] font-[family-name:var(--font-sans)] text-base leading-[1.8] sm:text-lg">
                    {project.caseStudy.outcome}
                  </p>
                </div>
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-20 border-t-[1.5px] border-[var(--foreground)] pt-8 sm:mt-28">
                <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em] text-[var(--muted)]">
                  HIGHLIGHTS
                </span>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {project.caseStudy.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="
                        flex
                        items-start
                        gap-3
                        border-b
                        border-[var(--line)]
                        pb-4
                        font-[family-name:var(--font-sans)]
                        text-sm
                      "
                    >
                      <Check
                        size={17}
                        strokeWidth={1.8}
                        className="mt-0.5 shrink-0"
                      />

                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}

      <section className="border-t-[1.5px] border-[var(--foreground)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-[family-name:var(--font-sans)] text-[9px] font-black tracking-[0.15em] text-[var(--muted)]">
            NEXT PROJECT
          </span>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="font-[family-name:var(--font-handwritten)] text-xl text-[var(--muted)]">
                {nextProject.number} / {nextProject.category}
              </span>

              <h2
                className="
                  mt-3
                  font-[family-name:var(--font-display)]
                  text-[clamp(64px,11vw,150px)]
                  font-medium
                  uppercase
                  leading-[0.75]
                  tracking-[-0.035em]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              >
                {nextProject.title}
              </h2>
            </div>

            <ArrowUpRight
              size={42}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
