import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DragCursor } from "../components/ui/DragCursor";

// Hanken Grotesk (body) + Geist Mono, self-hosted at build time via
// next/font (preloaded, no render-blocking Google Fonts chain).
// Variable names match --arc-body / --arc-mono in globals.css.
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "The Arcanum Agency, Private practice building digital products that matter",
  description:
    "The Arcanum Agency is a private practice taking on a limited number of engagements at a time. We design digital products, services, and eCommerce experiences that turn cultural value into company value, by referral or direct enquiry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/assets/arcanum-mark.svg" />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <div className="wrap">
          <main id="main">{children}</main>
        </div>
        <Footer />
        <DragCursor />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
