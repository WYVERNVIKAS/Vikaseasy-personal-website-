import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikas Banotra — Full Stack Developer & Cybersecurity Engineer",
  description:
    "Vikas Banotra — Full Stack Developer, Cybersecurity Enthusiast, Blockchain Developer, AI Builder, and Cloud Engineer. Security isn't a feature, it's a promise.",
  keywords: [
    "Vikas Banotra",
    "Full Stack Developer",
    "Cybersecurity",
    "Blockchain Developer",
    "AI Engineer",
    "Cloud Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Vikas Banotra" }],
  openGraph: {
    title: "Vikas Banotra — Full Stack Developer & Cybersecurity Engineer",
    description: "Security isn't a feature — it's our promise.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base text-white antialiased">
        <div className="noise" aria-hidden="true" />
        <Loader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
