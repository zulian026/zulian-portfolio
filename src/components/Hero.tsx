"use client";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        // Top note
        .from(".hero-top-note", {
          opacity: 0,
          y: -16,
          rotate: 8,
          duration: 0.32,
        })
        // Main intro
        .from(
          ".hero-intro",
          {
            opacity: 0,
            y: 14,
            duration: 0.28,
          },
          "-=0.18",
        )
        // ZULIAN
        .from(
          ".hero-name",
          {
            opacity: 0,
            y: 60,
            rotate: -1.5,
            duration: 0.48,
          },
          "-=0.12",
        )
        // Yellow offset behind ZULIAN
        .from(
          ".hero-name-offset",
          {
            opacity: 0,
            x: -22,
            duration: 0.35,
          },
          "-=0.42",
        )
        // DEV
        .from(
          ".hero-dev",
          {
            opacity: 0,
            x: 50,
            rotate: 4,
            duration: 0.42,
          },
          "-=0.32",
        )
        // DEV yellow offset
        .from(
          ".hero-dev-offset",
          {
            opacity: 0,
            x: -14,
            duration: 0.28,
          },
          "-=0.36",
        )
        // Handwritten "that's me"
        .from(
          ".hero-note",
          {
            opacity: 0,
            scale: 0.7,
            rotate: -10,
            duration: 0.28,
          },
          "-=0.18",
        )
        // Underlines
        .from(
          ".hero-underline",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.32,
          },
          "-=0.12",
        )
        // Role
        .from(
          ".hero-role",
          {
            opacity: 0,
            y: 18,
            rotate: -4,
            duration: 0.32,
          },
          "-=0.12",
        )
        // Description
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 18,
            duration: 0.32,
          },
          "-=0.18",
        )
        // Decorative elements
        .from(
          ".hero-decoration",
          {
            opacity: 0,
            scale: 0.75,
            rotate: -8,
            duration: 0.3,
            stagger: 0.05,
          },
          "-=0.18",
        )
        // Profile
        .from(
          ".hero-profile",
          {
            opacity: 0,
            scale: 0.7,
            rotate: 10,
            duration: 0.38,
          },
          "-=0.25",
        )
        // Status + scroll
        .from(
          ".hero-bottom",
          {
            opacity: 0,
            y: 12,
            duration: 0.28,
          },
          "-=0.15",
        );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        flex
        min-h-[calc(100svh-57px)]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-32
        sm:px-8
        lg:px-16
      "
    >
      {/* =========================================
          TOP NOTE
      ========================================= */}
      <div
        className="
          hero-top-note
          absolute
          right-[7%]
          top-[7%]
          z-10
          flex
          rotate-[5deg]
          items-center
          gap-2
          border-[1.5px]
          border-[var(--foreground)]
          bg-[var(--pink)]
          px-3
          py-2
          text-[var(--foreground)]
          shadow-[4px_4px_0_var(--foreground)]
        "
      >
        <span
          className="
            font-[family-name:var(--font-handwritten)]
            text-[19px]
            leading-none
            sm:text-[24px]
          "
        >
          hello, internet!
        </span>
        <Sparkles size={18} strokeWidth={2.2} />
        {/* tape */}
        <span
          className="
            absolute
            -top-2
            left-1/2
            h-[14px]
            w-[42px]
            -translate-x-1/2
            -rotate-3
            border
            border-black/20
            bg-[#ffefb4]/80
          "
        />
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div
        className="
          relative
          z-[2]
          flex
          w-full
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* intro */}
        <p
          className="
            hero-intro
            mb-4
            font-[family-name:var(--font-sans)]
            text-[10px]
            font-extrabold
            tracking-[0.18em]
            sm:text-xs
            sm:tracking-[0.22em]
          "
        >
          HELLO, I&apos;M
        </p>

        {/* =====================================
            NAME
        ===================================== */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
          "
        >
          {/* PAPER PRINT OFFSET */}
          <span
            aria-hidden="true"
            className="
              hero-name-offset
              pointer-events-none
              absolute
              -right-3
              top-2
              -z-10
              font-[family-name:var(--font-display)]
              text-[clamp(96px,21vw,300px)]
              font-medium
              uppercase
              leading-[0.8]
              tracking-[0.005em]
              text-[var(--yellow)]
              opacity-60
              sm:-right-5
              sm:top-3
            "
          >
            ZULIAN
          </span>

          {/* ZULIAN */}
          <h1
            className="
              hero-name
              relative
              z-[2]
              m-0
              font-[family-name:var(--font-display)]
              text-[clamp(96px,21vw,300px)]
              font-medium
              uppercase
              leading-[0.8]
              tracking-[0.005em]
              text-[var(--foreground)]
            "
          >
            ZULIAN
          </h1>

          {/* =================================
              DEV
          ================================= */}
          <div
            className="
              hero-dev
              relative
              z-[3]
              mt-1
              translate-x-[22px]
              rotate-[1.5deg]
              sm:mt-2
              sm:translate-x-[42px]
            "
          >
            {/* yellow paper shadow */}
            <span
              aria-hidden="true"
              className="
                hero-dev-offset
                pointer-events-none
                absolute
                left-[8px]
                top-[7px]
                font-[family-name:var(--font-display)]
                text-[clamp(64px,12vw,155px)]
                font-medium
                uppercase
                leading-[0.78]
                tracking-[0.035em]
                text-[var(--yellow)]
                opacity-90
                sm:left-[11px]
                sm:top-[9px]
                sm:text-[clamp(72px,11vw,155px)]
              "
            >
              DEV
            </span>

            {/* main DEV */}
            <span
              className="
                relative
                block
                font-[family-name:var(--font-display)]
                text-[clamp(64px,12vw,155px)]
                font-medium
                uppercase
                leading-[0.78]
                tracking-[0.035em]
                text-[var(--background)]
                [-webkit-text-stroke:2px_var(--foreground)]
                sm:text-[clamp(72px,11vw,155px)]
                sm:[-webkit-text-stroke:2.5px_var(--foreground)]
              "
            >
              DEV
            </span>

            {/* little handwritten mark */}
            <span
              className="
                hero-note
                absolute
                -bottom-4
                -right-8
                rotate-[-7deg]
                font-[family-name:var(--font-handwritten)]
                text-[18px]
                text-[var(--foreground)]
                sm:-bottom-5
                sm:-right-11
                sm:text-[21px]
              "
            >
              that&apos;s me
            </span>
          </div>

          {/* =================================
              HAND-DRAWN UNDERLINE
          ================================= */}
          <div
            className="
              hero-underline
              absolute
              bottom-[-12px]
              left-[8%]
              z-[1]
              h-[5px]
              w-[76%]
              rotate-[-1.5deg]
              rounded-full
              bg-[var(--pink)]
              opacity-80
              sm:bottom-[-15px]
            "
          />
          <div
            className="
              hero-underline
              absolute
              bottom-[-17px]
              left-[15%]
              z-[1]
              h-[2px]
              w-[58%]
              rotate-[1deg]
              bg-[var(--foreground)]
              opacity-50
            "
          />
        </div>

        {/* =====================================
            ROLE
        ===================================== */}
        <div
          className="
            hero-role
            relative
            mt-12
            flex
            items-center
            justify-center
            gap-2
            rotate-[-2deg]
            border-[1.5px]
            border-[var(--foreground)]
            bg-[var(--yellow)]
            px-3
            py-2
            font-[family-name:var(--font-sans)]
            text-[10px]
            font-extrabold
            tracking-[0.1em]
            shadow-[4px_4px_0_var(--foreground)]
            sm:mt-14
            sm:px-4
            sm:py-[9px]
            sm:text-xs
          "
        >
          <span
            className="
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[var(--foreground)]
            "
          />
          <span>CREATIVE DEVELOPER</span>
          {/* second border */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              translate-x-[5px]
              translate-y-[5px]
              rotate-2
              border
              border-[var(--foreground)]
            "
          />
        </div>

        {/* =====================================
            DESCRIPTION
        ===================================== */}
        <p
          className="
            hero-description
            mt-7
            max-w-[320px]
            font-[family-name:var(--font-sans)]
            text-[15px]
            leading-[1.45]
            text-[var(--muted)]
            sm:mt-8
            sm:max-w-[500px]
            sm:text-[18px]
            lg:text-xl
          "
        >
          I design and build digital experiences that feel simple, useful, and a
          little bit unexpected.
        </p>
      </div>

      {/* =========================================
          STICKER
      ========================================= */}
      <div
        className="
          hero-decoration
          absolute
          left-[5%]
          top-[25%]
          z-[4]
          flex
          h-[72px]
          w-[72px]
          rotate-[-8deg]
          items-center
          justify-center
          border-[1.5px]
          border-[var(--foreground)]
          bg-[var(--yellow)]
          p-2
          text-center
          shadow-[5px_5px_0_var(--foreground)]
          [clip-path:polygon(0%_5%,8%_0%,16%_4%,25%_0%,35%_3%,45%_0%,56%_4%,66%_0%,76%_4%,88%_0%,100%_5%,97%_16%,100%_27%,96%_39%,100%_51%,96%_63%,100%_75%,96%_88%,100%_100%,87%_96%,76%_100%,65%_96%,54%_100%,43%_96%,32%_100%,21%_96%,10%_100%,0%_100%,4%_88%,0%_76%,4%_64%,0%_52%,4%_40%,0%_28%,4%_16%)]
          sm:h-[90px]
          sm:w-[90px]
          lg:left-[11%]
          lg:top-[29%]
          lg:h-[104px]
          lg:w-[104px]
        "
      >
        <span
          className="
            font-[family-name:var(--font-handwritten)]
            text-[18px]
            leading-[0.85]
            sm:text-[21px]
            lg:text-[25px]
          "
        >
          pixels
          <br />
          &amp; ideas
        </span>
      </div>

      {/* =========================================
          LEFT ANNOTATION
      ========================================= */}
      <div
        className="
          hero-decoration
          absolute
          bottom-[18%]
          left-[4%]
          z-[4]
          hidden
          rotate-[-8deg]
          flex-col
          items-center
          md:flex
          lg:left-[6%]
        "
      >
        <ArrowUpRight size={42} strokeWidth={1.8} />
        <span
          className="
            text-center
            font-[family-name:var(--font-handwritten)]
            text-[22px]
            leading-[0.9]
            lg:text-[26px]
          "
        >
          making things
          <br />
          for the web
        </span>
        <span
          className="
            mt-1
            h-px
            w-20
            rotate-[-4deg]
            bg-[var(--foreground)]
          "
        />
      </div>

      {/* =========================================
          PROFILE
      ========================================= */}
      <div
        className="
          hero-profile
          absolute
          bottom-[17%]
          right-[5%]
          z-[4]
          sm:right-[8%]
          sm:bottom-[12%]
        "
      >
        {/* tape */}
        <span
          className="
            absolute
            -top-2
            left-1/2
            z-[5]
            h-[18px]
            w-12
            -translate-x-1/2
            -rotate-2
            border
            border-black/20
            bg-[#ffefb4]/85
          "
        />

        {/* image */}
        <div
          className="
            relative
            aspect-square
            w-[100px]
            rotate-[6deg]
            overflow-hidden
            rounded-full
            border-2
            border-[var(--foreground)]
            bg-[var(--green)]
            shadow-[4px_5px_0_var(--foreground)]
            sm:w-[140px]
            sm:shadow-[6px_7px_0_var(--foreground)]
            lg:w-[190px]
          "
        >
          <Image
            src="/images/profile/profile.jpg"
            alt="Profile photo"
            fill
            priority
            className="
              object-cover
              saturate-[0.9]
            "
            sizes="
              (max-width: 600px) 100px,
              (max-width: 900px) 140px,
              190px
            "
          />
        </div>

        {/* label */}
        <span
          className="
            absolute
            -bottom-6
            right-[-15px]
            rotate-[-8deg]
            whitespace-nowrap
            font-[family-name:var(--font-handwritten)]
            text-[18px]
            sm:right-[-25px]
            sm:text-[22px]
          "
        >
          that&apos;s me →
        </span>
      </div>

      {/* =========================================
          STATUS
      ========================================= */}
      <div
        className="
          hero-bottom
          absolute
          bottom-6
          left-5
          z-[5]
          flex
          items-center
          gap-2
          font-[family-name:var(--font-sans)]
          text-[8px]
          font-bold
          tracking-[0.07em]
          text-[var(--muted)]
          sm:left-8
          sm:text-[10px]
          sm:tracking-[0.12em]
          lg:left-16
        "
      >
        <span
          className="
            h-2
            w-2
            shrink-0
            rounded-full
            bg-[#4caf50]
            shadow-[0_0_0_4px_rgba(76,175,80,0.12)]
          "
        />
        <span>AVAILABLE FOR NEW PROJECTS</span>
      </div>

      {/* =========================================
          SCROLL
      ========================================= */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="
          hero-bottom
          absolute
          bottom-5
          right-5
          z-[5]
          flex
          rotate-[-3deg]
          items-center
          gap-2
          opacity-75
          transition-transform
          duration-200
          hover:translate-y-1
          sm:right-8
          lg:right-16
        "
      >
        <span
          className="
            font-[family-name:var(--font-handwritten)]
            text-[18px]
            sm:text-[22px]
          "
        >
          scroll
        </span>
        <ArrowDownRight size={20} strokeWidth={1.8} />
      </a>
    </section>
  );
}
