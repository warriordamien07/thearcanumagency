import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DragCursor } from "../components/ui/DragCursor";

// Self-hosted (preloaded, no render-blocking Google Fonts chain).
// Variable names match --arc-body / --arc-mono in globals.css.
const geistSans = GeistSans;
const geistMono = GeistMono;

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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
      </body>
    </html>
  );
}
