"use client";

import "../globals.css";        // <-- THIS WAS YOUR BUG
import { useState } from "react";
import Link from "next/link";
import Navbar from "./navbar.jsx";

export const metadata = {
  title: "AidHandy",
  description: "Airport & inflight companion service made simple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ height: "72px" }}></div>
        {children}
      </body>
    </html>
  );
}
