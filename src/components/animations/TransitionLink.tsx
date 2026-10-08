"use client";

import Link, { type LinkProps } from "next/link";
import { usePageTransition } from "./PageTransition";

type TransitionLinkProps = LinkProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof LinkProps>;

export default function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const target = typeof href === "string" ? href : (href.pathname ?? "/");

    navigate(target);
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
