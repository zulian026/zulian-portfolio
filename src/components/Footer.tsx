import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = [
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "WORK",
    href: "/work",
  },
  {
    label: "PLAYGROUND",
    href: "/playground",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        border-t-2
        border-[var(--foreground)]
        px-5
        py-8
        sm:px-8
        sm:py-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
        "
      >
        {/* =====================================
            TOP
        ===================================== */}

        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-start
            md:justify-between
          "
        >
          {/* BRAND */}

          <div>
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-[1.5px]
                  border-[var(--foreground)]
                  bg-[var(--yellow)]
                  font-[family-name:var(--font-display)]
                  text-sm
                  font-bold
                  shadow-[3px_3px_0_var(--foreground)]
                  transition-transform
                  duration-200
                  group-hover:rotate-[-8deg]
                "
              >
                :)
              </span>

              <span
                className="
                  font-[family-name:var(--font-display)]
                  text-2xl
                  font-bold
                  uppercase
                  tracking-[-0.03em]
                "
              >
                ZULIAN
              </span>
            </Link>

            <p
              className="
                mt-4
                max-w-[320px]
                font-[family-name:var(--font-handwritten)]
                text-xl
                leading-[1.2]
                text-[var(--muted)]
              "
            >
              Creative developer making things for the web, one weird idea at a
              time.
            </p>
          </div>

          {/* LINKS */}

          <div>
            <p
              className="
                mb-4
                font-[family-name:var(--font-sans)]
                text-[9px]
                font-extrabold
                tracking-[0.18em]
                text-[var(--muted)]
              "
            >
              EXPLORE
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-1
                    font-[family-name:var(--font-sans)]
                    text-[11px]
                    font-bold
                    tracking-[0.08em]
                    transition-transform
                    duration-200
                    hover:translate-x-1
                  "
                >
                  {link.label}

                  <ArrowUpRight
                    size={11}
                    strokeWidth={2}
                    className="
                      opacity-0
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* SOCIAL */}

          <div>
            <p
              className="
                mb-4
                font-[family-name:var(--font-sans)]
                text-[9px]
                font-extrabold
                tracking-[0.18em]
                text-[var(--muted)]
              "
            >
              SAY HELLO
            </p>

            <div className="flex gap-2">
              <a
                href="#"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--foreground)]
                  bg-[var(--foreground)]
                  text-[var(--background)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:rotate-[-5deg]
                "
              >
                <FaGithub size={14} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--foreground)]
                  bg-[var(--yellow)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:rotate-[5deg]
                "
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--foreground)]
                  bg-[var(--pink)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:rotate-[-5deg]
                "
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="#"
                aria-label="Dribbble"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--foreground)]
                  bg-[var(--green)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:rotate-[5deg]
                "
              >
                <FaDribbble size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-[var(--foreground)]/20
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              m-0
              font-[family-name:var(--font-sans)]
              text-[9px]
              font-medium
              tracking-[0.08em]
              text-[var(--muted)]
            "
          >
            © 2026 ZULIAN. ALL RIGHTS RESERVED.
          </p>

          <p
            className="
              m-0
              flex
              items-center
              gap-1
              font-[family-name:var(--font-handwritten)]
              text-lg
              text-[var(--muted)]
            "
          >
            made with
            <Heart size={13} fill="currentColor" />
            and too much coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
