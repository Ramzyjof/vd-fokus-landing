"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    "20+ years of Executive Search experience",
    "Direct insight into how hiring managers evaluate candidates",
    "We understand what gets candidates shortlisted — and what gets rejected",
    "Personalized guidance tailored to your target role and industry",
    "Focused on real outcomes: interviews, offers, and career growth"
        
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
      <div style={{ padding: "24px 40px", display: "flex", alignItems: "center" }}>
  <Image 
    src="/logo.png" 
    alt="VD Fokus" 
    width={120} 
    height={40}
  />
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
  <div
    style={{
      marginBottom: "50px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)",
      transition: "all 1s ease 0.2s"
    }}
  >
    <h2 style={{ fontSize: "22px", marginBottom: "12px", fontWeight: 500 }}>
      Why You Keep Failing Interviews
    </h2>

    <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
      Most candidates don’t fail because they lack experience — they fail because they present it poorly.
    </p>

    <ul style={{ color: "#e2e8f0", lineHeight: "2" }}>
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
      transition: "all 1s ease 0.4s"
    }}
  >
    <h2 style={{ fontSize: "22px", marginBottom: "12px", fontWeight: 500 }}>
      Why VD Fokus?
    </h2>

    <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
      We don’t guess what works — we know what hiring managers actually look for.
    </p>

    <ul style={{ color: "#e2e8f0", lineHeight: "2" }}>
      <li>✅ 20+ years of Executive Search experience</li>
      <li>✅ Direct insight into hiring decisions</li>
      <li>✅ Proven strategies to get shortlisted</li>
      <li>✅ Focused on real outcomes: interviews & offers</li>
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

      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(100px)",
      transition: "all 1s ease 0.6s"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <h2 style={{ fontSize: "22px", marginBottom: "16px" }}>
      Our Package
    </h2>

    <ul style={{ color: "#e2e8f0", lineHeight: "2" }}>
      <li>CV Optimization</li>
      <li>Interview Preparation</li>
      <li>Mock Interview</li>
    </ul>
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
            fontSize: "16px",
            letterSpacing: "0.3px",
            boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
            transition: "all 0.3s ease"
          }}
        >
          Get Started
        </a>
      </div>
    </main>
  );
}