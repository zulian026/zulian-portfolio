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
    metadataBase: new URL("https://www.zyandev.my.id"),
  
    verification: {
      google: "G1br3_uP32MVvqWwcDTJEfHIU4xExKa3tmVsb0odVYU",
    },
  
    title: {
      default: "ZULIAN — Creative Developer",
      template: "%s — ZULIAN",
    },
  
    description:
      "Portfolio of Zulian, a creative developer building thoughtful digital experiences, creative tools, and expressive web interfaces.",
  
    applicationName: "ZULIAN Portfolio",
  
    alternates: {
      canonical: "/",
    },
  
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.zyandev.my.id",
      siteName: "ZULIAN",
      title: "ZULIAN — Creative Developer",
      description:
        "A creative developer portfolio exploring thoughtful digital experiences, creative tools, and expressive interfaces.",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "ZULIAN — Creative Developer Portfolio",
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: "ZULIAN — Creative Developer",
      description:
        "A creative developer portfolio exploring thoughtful digital experiences and creative tools.",
      images: ["/images/og-image.png"],
    },
  
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
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
