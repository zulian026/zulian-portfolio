import { ArrowDownRight, Sparkles } from "lucide-react";
import PlaygroundCard from "@/components/PlaygroundCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { playgroundItems } from "@/data/playground";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--foreground)] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border border-[var(--foreground)] bg-[var(--yellow)] sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute bottom-[-70px] left-[42%] h-40 w-40 rounded-full border border-[var(--foreground)] bg-[var(--pink)]" />

        <div className="relative mx-auto max-w-[1400px]">
          {/* Section label */}
          <ScrollReveal direction="up" distance={30}>
            <div className="mb-10 flex items-center justify-between border-b border-[var(--foreground)] pb-4">
              <span className="font-[family-name:var(--font-sans)] text-xs font-bold uppercase tracking-[0.2em]">
                04 / PLAYGROUND
              </span>

              <span className="hidden font-[family-name:var(--font-sans)] text-xs text-[var(--muted)] sm:block">
                SMALL IDEAS / BIG CURIOSITY
              </span>
            </div>
          </ScrollReveal>

          {/* Main heading */}
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
            <ScrollReveal direction="left" distance={70}>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Sparkles
                    size={22}
                    strokeWidth={1.5}
                    className="animate-pulse"
                  />

                  <span className="font-[family-name:var(--font-handwritten)] text-xl">
                    welcome to the weird little corner
                  </span>
                </div>

                <h1 className="font-[family-name:var(--font-display)] text-[clamp(5rem,15vw,13rem)] font-bold uppercase leading-[0.72] tracking-[-0.06em]">
                  PLAY
                  <br />
                  GROUND
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={50} delay={0.15}>
              <div className="relative mb-2 max-w-sm lg:mb-5">
                <p className="font-[family-name:var(--font-sans)] text-base leading-7 text-[var(--muted)]">
                  A collection of tiny experiments, interaction studies, visual
                  ideas, and things I built simply because I wanted to see what
                  would happen.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <ArrowDownRight size={24} strokeWidth={1.5} />

                  <span className="font-[family-name:var(--font-handwritten)] text-xl">
                    scroll & explore
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal direction="up" distance={30}>
            <div className="mb-12 flex items-end justify-between border-b border-[var(--foreground)] pb-4">
              <div>
                <span className="font-[family-name:var(--font-sans)] text-xs font-bold uppercase tracking-[0.2em]">
                  EXPERIMENTS
                </span>

                <p className="mt-2 font-[family-name:var(--font-handwritten)] text-lg text-[var(--muted)]">
                  nothing too serious.
                </p>
              </div>

              <span className="font-[family-name:var(--font-sans)] text-xs text-[var(--muted)]">
                {String(playgroundItems.length).padStart(2, "0")} ITEMS
              </span>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {playgroundItems.map((item, index) => (
              <PlaygroundCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="border-t border-[var(--foreground)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <ScrollReveal direction="up" distance={50}>
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center text-center">
            <span className="mb-5 rotate-[-3deg] font-[family-name:var(--font-handwritten)] text-2xl text-[var(--muted)]">
              more experiments are cooking...
            </span>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(4rem,10vw,9rem)] font-bold uppercase leading-[0.8] tracking-[-0.05em]">
              KEEP
              <br />
              PLAYING.
            </h2>

            <div className="mt-8 h-3 w-40 rotate-[-2deg] bg-[var(--yellow)]" />
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
