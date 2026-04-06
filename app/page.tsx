"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
const [pressed, setPressed] = useState(false);

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);

  return (
    <main
      style={{
        fontFamily: "Inter, sans-serif",
        background: "radial-gradient(circle at top, #1e293b, #0f172a)",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      {/* NAVBAR */}
      <div style={{ padding: "24px 40px" }}>
        <Image src="/logo.png" alt="VD Fokus" width={120} height={40} />
      </div>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 1s ease"
        }}
      >
        <h1 style={{ fontSize: "38px", fontWeight: 500 }}>
          Get Selected — Not Just Interviewed
        </h1>

        <p style={{ marginTop: "16px", color: "#94a3b8", fontSize: "18px" }}>
          We help professionals pass HR screening and interviews using real hiring insights.
        </p>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          width: "60%",
          margin: "0 auto 40px",
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "40px 20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "all 1s ease 0.2s"
        }}
      >
        {/* WHY FAIL */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
            Why You Keep Failing Interviews
          </h2>

          <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
            Most candidates don’t fail because they lack experience — they fail because they present it poorly.
          </p>

          <ul style={{ lineHeight: "2", color: "#e2e8f0" }}>
            <li>❌ No structured interview preparation</li>
            <li>❌ Lack of real feedback or practice</li>
            <li>❌ Weak communication & body language</li>
          </ul>
        </div>

       {/* PACKAGE */}
<div
  style={{
    padding: "32px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease"
  }}
>
  <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
    Our Package
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    Complete CV & Interview Preparation
  </p>

  {/* PRICE */}
  <div style={{ marginBottom: "20px" }}>
    <span
      style={{
        textDecoration: "line-through",
        color: "#64748b",
        marginRight: "10px",
        fontSize: "22px"
      }}
    >
      IDR 400K
    </span>

    <span
      style={{
        fontSize: "24px",
        fontWeight: 600
      }}
    >
      IDR 299K
    </span>
  </div>

  <p style={{ color: "#facc15", fontSize: "14px", marginBottom: "20px" }}>
    🚀 Launch Offer — Limited to 5 Clients
  </p>

  <div
    style={{
      borderTop: "1px solid rgba(255,255,255,0.1)",
      margin: "20px 0"
    }}
  />

  {/* FEATURES */}
  {[
    "CV Optimization",
    "Interview Preparation",
    "Mock Interview",
    "🎁 Free additional Interview Preparation after your first interview",
    "⏱ Optional extension: +IDR 100K / hour"
  ].map((item, i) => (
    <div
      key={i}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px"
      }}
    >
      <span style={{ color: "#22c55e" }}>✔</span>
      <span style={{ color: "#cbd5f5" }}>{item}</span>
    </div>
  ))}

  {/* BUTTON */}
  <a
    href="https://wa.me/6281212940797?text=Hi%20VD%20Fokus,%20I%20want%20to%20book%20the%20CV%20and%20Interview%20Package"
    style={{
      display: "inline-block",
      marginTop: "20px",
      padding: "14px 28px",
      borderRadius: "999px",
      background: "#22c55e",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 500
    }}
  >
    Book via WhatsApp
  </a>
</div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", margin: "80px 0" }}>
        <a
          href="https://wa.me/6281212940797"
          style={{
            padding: "16px 36px",
            borderRadius: "999px",
            background: "#ffffff",
            color: "#000",
            fontSize: "16px"
          }}
        >
          Get Started
        </a>
      </div>
    </main>
  );
}