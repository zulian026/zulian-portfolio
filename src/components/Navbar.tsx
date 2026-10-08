"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CircleUserRound, Grid2X2, Diamond, Star, Menu, X } from "lucide-react";
import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "@/data/site";
import TransitionLink from "@/components/animations/TransitionLink";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isNavActive = (href: string) => {
    // HOME hanya aktif tepat di "/"
    if (href === "/") {
      return pathname === "/";
    }

    // Parent route tetap aktif untuk nested route.
    // Contoh:
    // /work
    // /work/color-pallett
    // /work/resume-builder
    // semuanya membuat CASE STUDY aktif.
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const getNavIcon = (label: string) => {
    if (label === "ABOUT") {
      return CircleUserRound;
    }

    if (label === "CASE STUDY") {
      return Grid2X2;
    }

    if (label === "PLAYGROUND") {
      return Diamond;
    }

    return Star;
  };

  return (
    <header
      className="
        sticky
        top-0
        z-[1000]
        w-full
        border-b
        border-[#171614]/15
        bg-[#f5f3ed]/95
        backdrop-blur-md
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-[57px]
          w-full
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-16
        "
      >
        {/* =========================================
            LOGO
        ========================================= */}

        <TransitionLink
          href="/"
          onClick={closeMenu}
          aria-label="Go to homepage"
          className="
            group
            relative
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border-[1.5px]
            border-[#171614]
            bg-[#f5c94a]
            font-[family-name:var(--font-display)]
            text-sm
            font-bold
            tracking-[-0.05em]
            text-[#171614]
            shadow-[3px_3px_0_#171614]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:rotate-[-6deg]
            active:translate-y-0
            active:shadow-[1px_1px_0_#171614]
          "
        >
          :)
          {/* decorative dot */}
          <span
            className="
              absolute
              -right-1
              -top-1
              h-2
              w-2
              rounded-full
              border
              border-[#171614]
              bg-[#ff4f87]
            "
          />
        </TransitionLink>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <div
          className="
            hidden
            items-center
            gap-1
            md:flex
          "
        >
          {siteConfig.navigation.map((item) => {
            const Icon = getNavIcon(item.label);
            const isActive = isNavActive(item.href);

            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-1.5
                  px-3
                  py-2
                  font-[family-name:var(--font-sans)]
                  text-[10px]
                  font-extrabold
                  tracking-[0.08em]
                  text-[#171614]
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? `
                        rotate-[-1deg]
                        border
                        border-[#171614]
                        bg-[#f5c94a]
                        shadow-[2px_2px_0_#171614]
                      `
                      : `
                        border
                        border-transparent
                        hover:-translate-y-0.5
                        hover:rotate-[-1deg]
                        hover:border-[#171614]/20
                        hover:bg-white/60
                      `
                  }
                `}
              >
                <Icon
                  size={13}
                  strokeWidth={2.2}
                  className="
                    text-[#171614]
                    transition-transform
                    duration-200
                    group-hover:rotate-6
                  "
                />

                <span>{item.label}</span>

                {/* underline hanya untuk inactive item */}
                {!isActive && (
                  <span
                    className="
                      absolute
                      bottom-0.5
                      left-3
                      right-3
                      h-px
                      origin-left
                      scale-x-0
                      bg-[#171614]
                      transition-transform
                      duration-200
                      group-hover:scale-x-100
                    "
                  />
                )}
              </TransitionLink>
            );
          })}
        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {/* =======================================
              SOCIALS
          ======================================= */}

          <div
            className="
              hidden
              items-center
              gap-1.5
              sm:flex
            "
          >
            {/* LinkedIn */}

            <a
              href={siteConfig.socials.linkedin}
              aria-label="LinkedIn"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#171614]
                bg-[#f5c94a]
                text-[#171614]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:rotate-[-6deg]
                hover:shadow-[2px_2px_0_#171614]
              "
            >
              <FaLinkedinIn size={13} />
            </a>

            {/* Instagram */}

            <a
              href={siteConfig.socials.instagram}
              aria-label="Instagram"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#171614]
                bg-[#ff4f87]
                text-[#171614]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:rotate-[6deg]
                hover:shadow-[2px_2px_0_#171614]
              "
            >
              <FaInstagram size={13} />
            </a>

            {/* Dribbble */}

            <a
              href={siteConfig.socials.dribbble}
              aria-label="Dribbble"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#171614]
                bg-[#9bdcc5]
                text-[#171614]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:rotate-[-5deg]
                hover:shadow-[2px_2px_0_#171614]
              "
            >
              <FaDribbble size={13} />
            </a>
          </div>

          {/* =======================================
              CONTACT
          ======================================= */}

          <TransitionLink
            href="/contact"
            aria-current={isNavActive("/contact") ? "page" : undefined}
            className={`
              hidden
              items-center
              justify-center
              border-[1.5px]
              border-[#171614]
              px-4
              py-2
              font-[family-name:var(--font-sans)]
              text-[10px]
              font-black
              tracking-[0.1em]
              text-[#171614]
              opacity-100
              shadow-[3px_3px_0_#171614]
              transition-all
              duration-200
              sm:flex
              ${
                isNavActive("/contact")
                  ? "bg-[#ff4f87]"
                  : "bg-[#f5c94a] hover:-translate-y-0.5 hover:bg-[#ff4f87] hover:shadow-[4px_4px_0_#171614]"
              }
            `}
          >
            LET&apos;S TALK
          </TransitionLink>

          {/* =======================================
              MOBILE BUTTON
          ======================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border-[1.5px]
              border-[#171614]
              bg-[#f5c94a]
              text-[#171614]
              shadow-[2px_2px_0_#171614]
              transition-all
              duration-200
              hover:rotate-[-4deg]
              md:hidden
            "
          >
            {menuOpen ? (
              <X size={18} strokeWidth={2.2} />
            ) : (
              <Menu size={18} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <div
        className={`
          absolute
          left-0
          right-0
          top-[57px]
          border-b
          border-[#171614]/20
          bg-[#f5f3ed]
          px-5
          py-5
          shadow-[0_8px_20px_rgba(23,22,20,0.08)]
          transition-all
          duration-300
          md:hidden
          ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }
        `}
      >
        <div
          className="
            flex
            flex-col
            gap-2
          "
        >
          {/* =====================================
              MOBILE NAVIGATION
          ===================================== */}

          {siteConfig.navigation.map((item) => {
            const Icon = getNavIcon(item.label);
            const isActive = isNavActive(item.href);

            return (
              <TransitionLink
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`
                  flex
                  items-center
                  justify-between
                  border
                  border-[#171614]/20
                  px-4
                  py-3
                  font-[family-name:var(--font-sans)]
                  text-xs
                  font-extrabold
                  tracking-[0.1em]
                  text-[#171614]
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? `
                        bg-[#f5c94a]
                        shadow-[3px_3px_0_#171614]
                      `
                      : `
                        bg-white/30
                        hover:bg-white/70
                      `
                  }
                `}
              >
                <span
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Icon size={16} strokeWidth={2} />

                  {item.label}
                </span>

                <span
                  className="
                    font-[family-name:var(--font-handwritten)]
                    text-lg
                  "
                >
                  →
                </span>
              </TransitionLink>
            );
          })}

          {/* =====================================
              MOBILE CONTACT
          ===================================== */}

          <TransitionLink
            href="/contact"
            onClick={closeMenu}
            aria-current={isNavActive("/contact") ? "page" : undefined}
            className={`
              mt-2
              flex
              items-center
              justify-center
              border-[1.5px]
              border-[#171614]
              px-4
              py-3
              font-[family-name:var(--font-sans)]
              text-xs
              font-black
              tracking-[0.1em]
              text-[#171614]
              shadow-[3px_3px_0_#171614]
              transition-all
              duration-200
              ${
                isNavActive("/contact")
                  ? "bg-[#ff4f87]"
                  : "bg-[#f5c94a] hover:bg-[#ff4f87]"
              }
            `}
          >
            LET&apos;S TALK
          </TransitionLink>
        </div>
      </div>
    </header>
  );
}
