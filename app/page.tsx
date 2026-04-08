"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

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
    ><style>
{`
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94, 0.6); }
  70% { box-shadow: 0 0 0 15px rgba(34,197,94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94, 0); }
}
`}
</style>
<div
  style={{
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "20px"
  }}
/>
 {/* NAVBAR */}
<div
  style={{
    padding: "16px 40px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)"
  }}
>
  <a href="https://vdfokus.co.id/" style={{ cursor: "pointer" }}>
  <a
  href="https://vdfokus.co.id/"
  style={{ display: "inline-block" }}
>
  <Image
    src="/logo.png"
    alt="VD Fokus"
    width={120}
    height={40}
    style={{
      transition: "all 0.3s ease",
      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))"
    }}

    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
      e.currentTarget.style.filter = "drop-shadow(0 0 16px rgba(255,255,255,0.5))";
    }}

    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,0.2))";
    }}
  />
</a>
</a>
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
        <h1 style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-1px" }}>
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
        
{/* WHY VD FOKUS */}
<div
  style={{
    marginBottom: "60px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(60px)",
    transition: "all 1s ease 0.3s"
  }}
>
  <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>
    Why VD Fokus?
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    We know what hiring managers actually look for — because we’ve been on the other side.
  </p>

  <ul style={{ lineHeight: "2", color: "#e2e8f0" }}>
    <li>✅ 20+ years of Executive Search experience</li>
    <li>✅ Direct insight into hiring decisions</li>
    <li>✅ Proven strategies to get shortlisted</li>
    <li>✅ Focused on real outcomes: interviews & offers</li>
  </ul>
</div>
{/* TESTIMONIALS */}
<div style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>
    What Professionals Say
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px"
    }}
  >
    {[
      {
        text: "After applying the changes, I finally started getting interview calls within 2 weeks.",
        name: "Senior Candidate",
        role: "Operations Manager"
      },
      {
        text: "The interview preparation completely changed how I present myself. I felt much more confident.",
        name: "Mid-Level Professional",
        role: "Finance Executive"
      },
      {
        text: "This helped me understand what hiring managers actually look for. Huge difference.",
        name: "Job Seeker",
        role: "Business Analyst"
      }
    ].map((t, i) => (
      <div
        key={i}
        style={{
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }}
      >
        <p style={{ color: "#e2e8f0", marginBottom: "12px", lineHeight: "1.6" }}>
          “{t.text}”
        </p>

        <div style={{ fontSize: "13px", color: "#94a3b8" }}>
          <strong style={{ color: "#fff" }}>{t.name}</strong> — {t.role}
        </div>
      </div>
    ))}
  </div>
</div>
       {/* PACKAGE */}
<div
  tabIndex={0}
  style={{
    padding: "32px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    outline: "none",
    marginTop: "40px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)"
  }}

  // 🖱 HOVER
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}

  // ⌨ FOCUS (TAB)
  onFocus={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.6)";
  }}

  onBlur={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  }}

>
  <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
    Career Acceleration Services Package
  </h2>

  <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
    Everything you need to get shortlisted, perform confidently, and secure job offers.
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
    🚀 Launch Offer — Only 5 slots available
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
    "Mock Interview Session + Feedback",
    "🎁 Get a free follow-up interview preparation session when you land your first interview",
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
  fontWeight: 500,
  animation: "pulse 1.5s"
}}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(34,197,94,0.8)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(34,197,94,0.3)";
  }}
>
  Book via WhatsApp
</a>
</div>
      </div>
    </main>
  );
}