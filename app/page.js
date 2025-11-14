"use client";

import { useEffect } from "react";

export default function Home() {
  // Cookie banner logic
  useEffect(() => {
    if (localStorage.getItem("ah_cookie") === null) {
      document.getElementById("cookie").style.display = "block";
    }
  }, []);

  // Meta Pixel
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", "1195389679143314");
    window.fbq("track", "PageView");
  }, []);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AidHandy Inc.",
            url: "https://www.aidhandy.com",
            logo: "https://www.aidhandy.com/logo.png",
            sameAs: [],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@aidhandy.com",
                areaServed: "US",
                availableLanguage: ["en"],
              },
            ],
          }),
        }}
      />

      {/* Pixel NoScript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1195389679143314&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* HEADER */}
      <header style={headerStyle}>
        <div className="wrap nav" style={navWrap}>
          <a href="/" className="brand" style={brandStyle}>
            AidHandy
          </a>

          <nav style={navStyle}>
            <a href="/#how-it-works">How it works</a>
            <a href="/contact.html">Contact</a>
            <a href="/terms.html">Terms</a>
            <a href="/privacy-policy.html">Privacy</a>
            <a href="#book" className="btn-primary">
              Book a Companion
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" style={heroStyle}>
        <div className="wrap" style={{ maxWidth: 1120, margin: "0 auto" }}>
          <span className="badge" style={badgeStyle}>
            U.S. launch · ATL · JFK · LAX
          </span>

          <h1 style={h1Style}>Together, every flight feels easier.</h1>

          <p style={pStyle}>
            AidHandy connects travelers with vetted companions for airport
            navigation, check-in support, and in-flight reassurance.
          </p>

          <div className="cta" style={ctaStyle}>
            <a href="#book" className="btn-primary">
              Get started
            </a>
            <a href="/privacy-policy.html" className="btn-ghost">
              Privacy-first operations
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section" style={{ padding: 36 }}>
        <div className="wrap" style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div className="card shadow" style={card}>
            <h2 style={h2Style}>For Travelers</h2>
            <p>
              Book on-demand support for airport check-in, gate changes,
              boarding, and in-flight reassurance.
            </p>
            <ul>
              <li>Booking confirmations and updates via SMS/email</li>
              <li>Companion profile transparency with ratings</li>
              <li>Secure payments and receipts</li>
            </ul>
          </div>

          <div className="card shadow" style={card}>
            <h2 style={h2Style}>For Companions</h2>
            <p>
              Offer support on your schedule. AidHandy handles payments and
              notifications so you can focus on travelers.
            </p>
            <ul>
              <li>Clear job details and flight timelines</li>
              <li>Fast payouts with Stripe Connect</li>
              <li>Support for schedule changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* JOIN AS COMPANION */}
      <section id="book" className="section" style={{ padding: 36 }}>
        <div className="wrap" style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div className="card shadow" style={{ ...card, gridColumn: "span 7" }}>
            <h2>Join as a Companion</h2>
            <p>
              Become part of the AidHandy companion network. Fill out the
              early signup form below.
            </p>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfS955PSpGmBXbM7xUatap6uERhr8_rEs5Bj4TgJ-Fy-Pjd3w/viewform?embedded=true"
              width="100%"
              height="2000"
              style={{ border: 0, marginTop: 12 }}
            />
          </div>

          <div className="card" style={{ ...card, gridColumn: "span 5" }}>
            <h3>What you’ll get</h3>
            <ul>
              <li>Launch notifications</li>
              <li>Early access</li>
              <li>SMS + email updates</li>
            </ul>

            <h3>Questions?</h3>
            <p>
              Email:{" "}
              <a href="mailto:support@aidhandy.com">support@aidhandy.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 24, borderTop: "1px solid #e5e7eb" }}>
        <div className="wrap" style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div>
            <a href="/privacy-policy.html">Privacy</a> ·{" "}
            <a href="/terms.html">Terms</a> ·{" "}
            <a href="/contact.html">Contact</a>
          </div>
          <div style={{ fontSize: 12, color: "#667085", marginTop: 8 }}>
            © {new Date().getFullYear()} AidHandy Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      <div
        id="cookie"
        style={{
          position: "fixed",
          bottom: 16,
          left: 16,
          right: 16,
          background: "#0b1220",
          color: "#e5e7eb",
          borderRadius: 14,
          padding: 14,
          display: "none",
          zIndex: 50,
        }}
      >
        We use cookies. See our{" "}
        <a href="/privacy-policy.html" style={{ color: "#93c5fd" }}>
          Privacy Policy
        </a>
        .
        <div style={{ marginTop: 10, display: "flex", gap: 12 }}>
          <button
            className="ok"
            onClick={() => {
              localStorage.setItem("ah_cookie", "1");
              document.getElementById("cookie").style.display = "none";
            }}
            style={okBtn}
          >
            Accept
          </button>
          <button
            className="decline"
            onClick={() => {
              localStorage.setItem("ah_cookie", "0");
              document.getElementById("cookie").style.display = "none";
            }}
            style={declineBtn}
          >
            Decline
          </button>
        </div>
      </div>
    </>
  );
}

/* --- INLINE STYLES (for simplicity; can move to globals.css) --- */

const headerStyle = {
  borderBottom: "1px solid #e5e7eb",
  background: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 10,
  height: 72,
  display: "flex",
  alignItems: "center",
};

const navWrap = {
  maxWidth: 1120,
  margin: "0 auto",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const brandStyle = { fontWeight: 700, fontSize: 22, color: "#1D9FD8", textDecoration: "none" };

const navStyle = {
  display: "flex",
  gap: 18,
  alignItems: "center",
};

const heroStyle = {
  padding: "56px 0 36px",
  background: "linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 60%)",
  borderBottom: "1px solid #e5e7eb",
};

const badgeStyle = {
  background: "#ECFEFF",
  padding: "4px 10px",
  borderRadius: 999,
  fontSize: 12,
  color: "#0369a1",
  border: "1px solid #bae6fd",
};

const h1Style = { fontSize: "clamp(28px,5vw,44px)", marginTop: 12, marginBottom: 14 };

const pStyle = { fontSize: 18, color: "#667085" };

const ctaStyle = { display: "flex", gap: 12, flexWrap: "wrap" };

const h2Style = { color: "#1D9FD8" };

const card = {
  border: "1px solid #e5e7eb",
  borderRadius: 16,
  padding: 18,
  background: "#fff",
  marginBottom: 24,
};

const okBtn = {
  background: "#22c55e",
  border: "none",
  padding: "10px 14px",
  fontWeight: 600,
  borderRadius: 10,
};

const declineBtn = {
  background: "#334155",
  border: "none",
  padding: "10px 14px",
  fontWeight: 600,
  borderRadius: 10,
};
