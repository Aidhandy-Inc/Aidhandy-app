"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AidHandy",
  description: "Airport & inflight companion service made simple.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen((v) => !v);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
        <title>{metadata.title}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}
      >
        <AuthProvider>
          {/* TOP NAVBAR */}
          <nav className="top-nav">
            <div className="top-nav-inner">
              {/* Logo */}
              <Link href="/" className="nav-logo">
                AidHandy
              </Link>

              {/* Desktop links */}
              <div className="nav-desktop-links">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/auth/login" className="nav-cta">
                  Login
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                className="nav-mobile-btn"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                ☰
              </button>
            </div>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
              <div className="nav-mobile-menu">
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
                <Link href="/terms" onClick={toggleMenu}>
                  Terms
                </Link>
                <Link href="/privacy" onClick={toggleMenu}>
                  Privacy
                </Link>
                <Link
                  href="/auth/login"
                  onClick={toggleMenu}
                  className="nav-cta"
                >
                  Login
                </Link>
              </div>
            )}
          </nav>

          {/* spacer so content isn't hidden under fixed nav */}
          <div style={{ height: 72 }} />

          <main>{children}</main>

          <footer className="site-footer">
            © {new Date().getFullYear()} AidHandy — All Rights Reserved
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
