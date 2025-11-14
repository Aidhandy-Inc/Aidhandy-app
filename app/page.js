"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cookie = document.getElementById("cookie");
    if (cookie && !localStorage.getItem("ah_cookie")) {
      cookie.style.display = "block";
    }
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>

      <section style={{ textAlign: "center", marginTop: 40 }}>
        <h1 style={{ fontSize: "clamp(28px,6vw,48px)", fontWeight: "700" }}>
          Together, every flight feels easier.
        </h1>

        <p style={{ marginTop: 12, fontSize: 18, color: "#555" }}>
          Airport + inflight companion support, simplified.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20 }}>
          <a href="#book" style={{
            background: "#1d9fd8",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600
          }}>
            Get Started
          </a>
          <Link href="/privacy" style={{
            border: "1px solid #1d9fd8",
            color: "#1d9fd8",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none"
          }}>
            Privacy-first
          </Link>
        </div>
      </section>

      <section id="book" style={{ marginTop: 40 }}>
        <div style={{
          border: "1px solid #e5e7eb",
          borderRadius: 14,
          padding: 20,
          background: "#fff"
        }}>
          <h2>Join as a Companion</h2>
          <p>Fill out the early interest form.</p>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfS955PSpGmBXbM7xUatap6uERhr8_rEs5Bj4TgJ-Fy-Pjd3w/viewform?embedded=true"
            width="100%"
            height="1550"
            style={{ border: 0, marginTop: 12 }}
          ></iframe>
        </div>
      </section>

      <div
        id="cookie"
        style={{
          display: "none",
          position: "fixed",
          bottom: 20,
          left: 16,
          right: 16,
          background: "#0b1220",
          color: "#eee",
          padding: 16,
          borderRadius: 10
        }}
      >
        AidHandy uses cookies. See{" "}
        <Link href="/privacy" style={{ color: "#60a5fa" }}>
          Privacy Policy
        </Link>.
        <div style={{ marginTop: 10, display: "flex", gap: 12 }}>
          <button
            onClick={() => {
              localStorage.setItem("ah_cookie", "1");
              document.getElementById("cookie").style.display = "none";
            }}
            style={{
              background: "#22c55e",
              border: "none",
              padding: "8px 14px",
              borderRadius: 8
            }}
          >
            Accept
          </button>
          <button
            onClick={() => {
              localStorage.setItem("ah_cookie", "0");
              document.getElementById("cookie").style.display = "none";
            }}
            style={{
              background: "#475569",
              border: "none",
              padding: "8px 14px",
              borderRadius: 8
            }}
          >
            Decline
          </button>
        </div>
      </div>

    </div>
  );
}
