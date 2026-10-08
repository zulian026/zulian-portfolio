import type { Metadata } from "next";

import { Barlow_Condensed, DM_Sans, Caveat } from "next/font/google";

import SmoothScroll from "@/components/animations/SmoothScroll";
import PageTransition from "@/components/animations/PageTransition";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const handwritten = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zulian — Creative Developer",
  description:
    "Portfolio of Zulian, a creative developer building thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${display.variable}
          ${sans.variable}
          ${handwritten.variable}
        `}
      >
        <SmoothScroll />

        <PageTransition>
          <Navbar />

          {children}

          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
