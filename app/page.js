"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    if (localStorage.getItem("ah_cookie") === null) {
      const c = document.getElementById("cookie");
      if (c) c.style.display = "block";
    }
  }, []);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
      
      <section style={{ marginTop: 40, textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 46px)", fontWeight: 700 }}>
          Together, every flight feels easier.
        </h1>

        <p style={{ marginTop: 12, fontSize: 18, color: "#555" }}>
          Airport + in-flight companion support, simplified.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 20 }}>
          <a href="#book" style={{
            background: "#1D9FD8",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600
          }}>
            Get started
          </a>

          <Link href="/privacy" style={{
            border: "1px solid #1D9FD8",
            color: "#1D9FD8",
            padding: "10px 16px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600
          }}>
            Privacy Policy
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
          <p>Fill the interest form to join the early list.</p>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfS955PSpGmBXbM7xUatap6uERhr8_rEs5Bj4TgJ-Fy-Pjd3w/viewform?embedded=true"
            width="100%"
            height="1600"
            style={{ border: 0, marginTop: 16 }}
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
