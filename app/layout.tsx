import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DragCursor } from "../components/ui/DragCursor";

export const metadata: Metadata = {
  title: "The Arcanum Agency, Private practice building digital products that matter",
  description:
    "The Arcanum Agency is a private practice taking on a limited number of engagements at a time. We design digital products, services, and eCommerce experiences that turn cultural value into company value, by referral or direct enquiry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/arcanum-mark.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400..600&family=Geist+Mono:wght@400..600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <div className="wrap">
          <main id="main">{children}</main>
          <Footer />
          <DragCursor />
          <div className="grain" aria-hidden="true" />
        </div>
        <Script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
