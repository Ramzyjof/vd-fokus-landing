"use client";

import { useEffect, useState } from "react";
import { FileText, Briefcase, UserCheck } from "lucide-react";

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const sections = [
    {
      title: "Why You're keep failing on Interview",
      icon: <FileText size={18} />,
      items: [
        "You may have had no interview preparation, or bad interview advice.",
        "You did not do some in-person interview practicee",
        "You did not maintain appropriate body language throughout the interview."
      ]
    },
    {
      title: "Why VD Fokus?",
      icon: <UserCheck size={18} />,
      items: [
        "20+ years of Executive Search background",
        "Direct hiring manager insights",
        
      ]
    },
    {
      title: "Our Package",
      icon: <Briefcase size={18} />,
      items: [
        "CV Optimization",
        "Interview Preparation",
        "Mock Interview"
        
      ]
    }
  ];

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
        <img src="/logo.png" alt="VD Fokus" style={{ height: "36px" }} />
      </div>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease"
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: 500, letterSpacing: "-0.5px" }}>
          Get Hired Faster 
        </h1>

        <p style={{ marginTop: "16px", color: "#94a3b8", fontSize: "18px" }}>
          "We help professionals pass HR screening and interviews using real hiring insights."
        </p>
      </section>
<div
  style={{
    width: "60%",
    margin: "0 auto 40px",
    borderTop: "1px solid rgba(255,255,255,0.1)"
  }}
/>
      {/* CONTENT */}
      <div style={{ maxWidth: "800px", margin: "auto", padding: "40px 20px" }}>
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              padding: "28px",
              marginBottom: "20px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.03)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              {section.icon}
              <h2 style={{ fontSize: "18px", fontWeight: 500 }}>
                {section.title}
              </h2>
            </div>

            <ul style={{ lineHeight: "1.9", color: "#cbd5f5", paddingLeft: "18px" }}>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
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
  fontSize: "16px",
  letterSpacing: "0.3px",
  boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
  transition: "all 0.3s ease"
}}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          Get Started
        </a>
      </div>
    </main>
  );
}