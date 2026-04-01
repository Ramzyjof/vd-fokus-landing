"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        alignItems: "center"
      }}>
        <img src="/logo.png" alt="VD Fokus" style={{ height: "40px" }} />
        <a href="https://wa.me/62XXXXXXXXXX" style={{ color: "#fff" }}>
          Contact
        </a>
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
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Land Interviews Faster with CV & Coaching
        </h1>

        <p style={{ marginTop: "20px", color: "#cbd5f5" }}>
          Get real recruiter insights to pass HR screening & interviews.
        </p>

        <a
          href="https://wa.me/62XXXXXXXXXX"
          style={{
            marginTop: "30px",
            display: "inline-block",
            padding: "14px 28px",
            background: "#22c55e",
            color: "#fff",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Chat via WhatsApp
        </a>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>

        {/* CARD STYLE SECTION */}
        {[
          {
            title: "Why You’re Not Getting Interviews",
            items: [
              "CV not optimized for HR screening",
              "Weak positioning of experience",
              "Unstructured interview answers"
            ]
          },
          {
            title: "Why VD Fokus?",
            items: [
              "Executive Search background",
              "Direct hiring manager insights",
              "Proven candidate improvements"
            ]
          },
          {
            title: "Our Services",
            items: [
              "CV Optimization",
              "Interview Coaching",
              "LinkedIn Upgrade"
            ]
          }
        ].map((section, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s",
            }}
          >
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* PRICING */}
        <div style={{ marginTop: "40px" }}>
          <h2>Pricing</h2>

          <div style={{
            display: "grid",
            gap: "20px",
            marginTop: "20px"
          }}>
            {[
              { name: "CV Review", price: "IDR 299K" },
              { name: "Interview Coaching", price: "IDR 499K" },
              { name: "Bundle Package", price: "IDR 699K" }
            ].map((p, i) => (
              <div key={i} style={{
                padding: "20px",
                background: "#111827",
                borderRadius: "12px"
              }}>
                <h3>{p.name}</h3>
                <p>{p.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <a
            href="https://wa.me/62XXXXXXXXXX"
            style={{
              padding: "14px 28px",
              background: "#22c55e",
              borderRadius: "999px",
              color: "#fff",
              textDecoration: "none"
            }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/62XXXXXXXXXX"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#22c55e",
          padding: "12px 18px",
          borderRadius: "999px",
          color: "#fff",
          textDecoration: "none"
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}