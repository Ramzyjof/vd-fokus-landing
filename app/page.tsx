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
      title: "Why You’re Not Getting Interviews",
      icon: <FileText size={18} />,
      items: [
        "CV not optimized for HR screening",
        "Weak positioning of experience",
        "Unstructured interview answers"
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
      ]
    }
  ];

  return (
    <main
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#0f172a",
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
          Land Interviews Faster
        </h1>

        <p style={{ marginTop: "16px", color: "#94a3b8", fontSize: "18px" }}>
          CV & interview coaching from real executive recruiters
        </p>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
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
          href="https://wa.me/62XXXXXXXXXX"
          style={{
            padding: "14px 32px",
            borderRadius: "999px",
            background: "#fff",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
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