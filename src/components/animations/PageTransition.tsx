"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

type PageTransitionContextType = {
  navigate: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextType | null>(
  null,
);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error("usePageTransition must be used inside PageTransition");
  }

  return context;
}

type PageTransitionProps = {
  children?: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();

  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (isAnimating.current) return;

      isAnimating.current = true;

      const overlay = overlayRef.current;

      if (!overlay) {
        router.push(href);
        isAnimating.current = false;
        return;
      }

      const timeline = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      timeline
        // Prepare overlay below the viewport
        .set(overlay, {
          display: "flex",
          yPercent: 100,
        })

        // Cover current page
        .to(overlay, {
          yPercent: 0,
          duration: 0.55,
          ease: "power4.inOut",
        })

        // Change route while screen is covered
        .add(() => {
          router.push(href);
        })

        // Give Next.js a moment to render the new route
        .to(
          overlay,
          {
            yPercent: -100,
            duration: 0.65,
            ease: "power4.inOut",
          },
          "+=0.12",
        )

        // Reset
        .set(overlay, {
          display: "none",
        });
    },
    [router],
  );

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}

      <div
        ref={overlayRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-[9999]
          hidden
          items-center
          justify-center
          bg-[var(--foreground)]
        "
      >
        <div className="text-center">
          <span
            className="
              block
              font-[family-name:var(--font-display)]
              text-6xl
              font-medium
              uppercase
              leading-none
              tracking-[-0.04em]
              text-[var(--background)]
              sm:text-8xl
            "
          >
            ZULIAN
          </span>

          <span
            className="
              mt-3
              block
              font-[family-name:var(--font-handwritten)]
              text-xl
              text-[var(--yellow)]
              sm:text-2xl
            "
          >
            loading something...
          </span>
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}
